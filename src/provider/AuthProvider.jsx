import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { getAuth } from 'firebase/auth';
import app from '../firebase/Firebase.config';
// import axios from "axios";
import useAxiosSecure from '../hooks/useAxiosSecure';

const auth = getAuth(app);

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  // register or create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //  observer
  // useEffect(() => {
  //   const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //     setLoading(false);
  //   });
  //   return () => {
  //     unSubscribe();
  //   };
  // }, []);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      // console.log(currentUser);
      setLoading(true);
      const userEmail = { email: currentUser?.email } || user?.email;
      setUser(currentUser);
      if (currentUser) {
        axiosSecure
          .post('/jwt', userEmail, {
            withCredentials: true,
          })
          .then(res => console.log(res.data));
      } else {
        axiosSecure
          .post('/logout', userEmail, {
            withCredentials: true,
          })
          .then(res => console.log(res.data));
      }
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, [user, axiosSecure]);

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
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.object,
};

export default AuthProvider;
