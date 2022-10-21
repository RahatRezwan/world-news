import React, { createContext, useEffect, useState } from "react";
import {
   createUserWithEmailAndPassword,
   getAuth,
   onAuthStateChanged,
   sendEmailVerification,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
   updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
export const AuthContext = createContext();

/* Declare auth */
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   /* Create User */
   const createAUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };

   /* Login with email and password */
   const loginAUser = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   };
   /* Sign In With Google */
   const googleLogin = (provider) => {
      setLoading(true);
      return signInWithPopup(auth, provider);
   };

   /* Update user profile */
   const updateUserProfile = (profile) => {
      return updateProfile(auth.currentUser, profile);
   };

   /* Verify User Email */
   const verifyEmail = () => {
      return sendEmailVerification(auth.currentUser);
   };

   /* sign out a user */
   const logOut = () => {
      setLoading(true);
      return signOut(auth);
   };

   /* Get Current User */
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         console.log("inside state change", currentUser);
         if (currentUser === null || currentUser.emailVerified) {
            setUser(currentUser);
         }
         setLoading(false);
      });
      return () => unsubscribe();
   }, []);

   /* auth info */
   const authInfo = {
      user,
      loading,
      setLoading,
      createAUser,
      loginAUser,
      googleLogin,
      updateUserProfile,
      verifyEmail,
      logOut,
   };
   return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
