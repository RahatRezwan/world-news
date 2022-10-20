import React, { createContext, useEffect, useState } from "react";
import {
   createUserWithEmailAndPassword,
   getAuth,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
export const AuthContext = createContext();

/* Declare auth */
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);

   /* Create User */
   const createAUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   };

   /* Login with email and password */
   const loginAUser = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
   };
   /* Sign In With Google */
   const googleLogin = (provider) => {
      return signInWithPopup(auth, provider);
   };

   /* sign out a user */
   const logOut = () => {
      return signOut(auth);
   };

   /* Get Current User */
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         console.log("inside state change", currentUser);
         setUser(currentUser);
      });
      return () => unsubscribe();
   }, []);

   /* auth info */
   const authInfo = { user, createAUser, loginAUser, googleLogin, logOut };
   return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
