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
import AddVolunteers from "./AddVolunteers";
import ManagePost from "./ManagePost";
import UpdateMyPost from "./UpdateMyPost";
import MyReqestedPost from "./MyReqestedPost";

const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage></ErrorPage>,
      element: <Root></Root>,
      children: [
        {
            path:"/",
            element: <Home></Home>,
            // loader: () => fetch('https://helps-hand-network-server.vercel.app

        },
        {
            path:"/needVolunteers",
            element: <NeedVolunteers></NeedVolunteers>,
            // loader: ({params}) => fetch(`https://helps-hand-network-server.vercel.app

        },
        {
            path:"/postDetails/:id",
            element:<PrivetRoute><PostDetails></PostDetails></PrivetRoute> ,
            loader: ({params}) => fetch(`https://helps-hand-network-server.vercel.app
/postDetails/${params.id}`)
        },
        {
            path:"/beAVolunteer/:id",
            element:<PrivetRoute><BeAVolunteer></BeAVolunteer></PrivetRoute> ,
            loader: ({params}) => fetch(`https://helps-hand-network-server.vercel.app
/postDetails/${params.id}`)
        },
        {
            path:"/addVolunteers",
            element:<PrivetRoute><AddVolunteers></AddVolunteers></PrivetRoute>,
        },
        {
            path:"/managePost",
            element:<PrivetRoute><ManagePost></ManagePost></PrivetRoute>, 
        },
        {
            path:"/updateMyPost/:id",
            element:<PrivetRoute><UpdateMyPost></UpdateMyPost></PrivetRoute>,
            loader: ({params}) => fetch(`https://helps-hand-network-server.vercel.app
/singlePost/${params.id}`) 
        },
        {
            path:"/myRequestedPost",
            element:<PrivetRoute><MyReqestedPost></MyReqestedPost></PrivetRoute>,
            
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