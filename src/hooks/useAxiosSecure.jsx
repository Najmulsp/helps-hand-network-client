import axios from 'axios';
import { useEffect } from 'react';
import { getAuth, signOut } from 'firebase/auth';

import app from '../firebase/Firebase.config';
import { Navigate } from 'react-router-dom';

const axiosSecure = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true,
});
const useAxiosSecure = () => {
  const auth = getAuth(app);

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      res => {
        return res;
      },
      error => {
        console.log('error track in the interceptor', error.response);

        if (error.response?.status === 401 || error.response?.status === 403) {
          signOut(auth);
          return <Navigate to={'/login'}></Navigate>;
        }
      }
    );
  }, []);
  return axiosSecure;
};

export default useAxiosSecure;
