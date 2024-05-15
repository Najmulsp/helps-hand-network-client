import {
    
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
   
  } from "firebase/auth";
  import { createContext, useEffect, useState } from "react";

  import PropTypes from "prop-types";
  import { getAuth } from "firebase/auth";
import app from "../firebase/Firebase.config";




  const auth = getAuth(app);
  
  export const AuthContext = createContext(null);
  
  const googleProvider = new GoogleAuthProvider();
  

const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
   
  
    // register or create user
    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
  
    //  observer
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });
      return () => {
        unSubscribe();
      };
    }, []);
  
    // log in
    const login = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    //  log out
    const logout = () => {
      setLoading(true);
      return signOut(auth);
    };
  
    // google login
    const googleLogin = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
    };

  
    // passing value
    const authInfo = {
      user,
      loading,
      createUser,
      login,
      logout,
      googleLogin,
      
    //   updateUserProfile,
    };
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.object,
  };

export default AuthProvider;