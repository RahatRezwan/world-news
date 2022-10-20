import React, { createContext, useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";
export const AuthContext = createContext();

/* Declare auth */
const auth = getAuth(app);

/* Google sign in provider */
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState("some one");

   /* Sign In With Google */
   const googleLogin = () => {
      return signInWithPopup(auth, googleProvider);
   };

   /* auth info */
   const authInfo = { user, googleLogin };
   return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
