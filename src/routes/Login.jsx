import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const { user, login, googleLogin } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    //login

    try {
      const result = await login(email, password);
      console.log(result.user);
      const { data } = await axios.post(
        `http://localhost:5000/jwt`,
        { email: result?.user?.email },
        { withCredentials: true }
      );
      console.log(data);
      // .then((result) => {
      //   console.log(result);
      toast("You have successfully logged in");

      // navigate after log in
      navigate(location?.state ? location.state : "/");
      // })
    } catch (err) {
      console.log(err);
      toast("User email or password not matched");
    }
  };

  const handleGoogleLogin = async () => {
    const result = await googleLogin();
    console.log(result.user);
    const { data } = await axios.post(
      `http://localhost:5000/jwt`,
      { email: result?.user?.email },
      { withCredentials: true }
    );
    console.log(data);
    // navigate after log in
    navigate(location?.state ? location.state : "/");
  };

  return (
    <div className="hero  min-h-screen bg-base-200">
      <Helmet>
        <title>Home/ Login</title>
      </Helmet>
      <div className="hero-content w-4/5">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl text-center text-orange-600 font-bold px-4 mt-6">
            Login now!
          </h1>
          <div className="mt-6">
            <button
              onClick={handleGoogleLogin}
              aria-label="Login with Google"
              type="button"
              className="flex btn items-center justify-center w-4/5 mx-auto p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current text-blue-600"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
              <p>Login with Google</p>
            </button>
          </div>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
              <span
                className="text-2xl absolute top-12 right-8"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <IoEyeOutline></IoEyeOutline>
                ) : (
                  <IoEyeOffOutline />
                )}
              </span>
            </div>

            <div className="form-control mt-6">
              <button className="btn bg-orange-600">Login</button>
            </div>
          </form>

          <p className="p-8">
            Do not have an account?{" "}
            <Link to="/register" className="text-orange-600">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
