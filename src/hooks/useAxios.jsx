import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
});

const useAxios = () => {
    const {logout} = useContext(AuthContext);
    const navigate = useNavigate();
    // response interceptors
    axiosSecure.interceptors.response.use(
        res =>{
            // console.log('hmm agei dekhte partechi', res)
            return res
        },
        async error =>{
            console.log('error from axios interceptors', error.message)
            if(error.response.status=== 401 || error.response.status=== 403){
                await logout()
                navigate('/login')
            }
            return Promise.reject(error)
        }




    )

        // request interceptors
    // axiosSecure.interceptors.request

  return axiosSecure;
};

export default useAxios;
