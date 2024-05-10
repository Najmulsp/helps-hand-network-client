import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../components/Home";
import Login from "./Login";
import Register from "./Register";
import ErrorPage from "../components/ErrorPage";
import NeedVolunteers from "./NeedVolunteers";
import PostDetails from "./PostDetails";
import PrivetRoute from "../provider/PrivetRoute";
import BeAVolunteer from "./BeAVolunteer";

const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage></ErrorPage>,
      element: <Root></Root>,
      children: [
        {
            path:"/",
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/volunteers')
        },
        {
            path:"/needVolunteers",
            element: <NeedVolunteers></NeedVolunteers>,
            loader: () => fetch('http://localhost:5000/volunteers')
        },
        {
            path:"/postDetails/:id",
            element:<PrivetRoute><PostDetails></PostDetails></PrivetRoute> ,
            loader: ({params}) => fetch(`http://localhost:5000/postDetails/${params.id}`)
        },
        {
            path:"/beAVolunteer/:id",
            element:<PrivetRoute><BeAVolunteer></BeAVolunteer></PrivetRoute> ,
            loader: ({params}) => fetch(`http://localhost:5000/postDetails/${params.id}`)
        },
        {
            path:"/login",
            element: <Login></Login>,
        },
        {
            path:"/register",
            element: <Register></Register>,
        },

      ]
    },
  ]);
  export default router