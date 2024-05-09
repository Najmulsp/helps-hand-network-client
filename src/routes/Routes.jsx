import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../components/Home";
import Login from "./Login";
import Register from "./Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path:"/",
            element: <Home></Home>
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