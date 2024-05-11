
import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";


const Login = () => {
    const { login, googleLogin} = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    

    //login
    login(email, password)
      .then((result) => {
        console.log(result.user);
        toast("You have successfully logged in");

        // navigate after log in
        navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        toast("User email or password not matched");
      });
  };

  const handleGoogleLogin = () =>{
    googleLogin()
     // navigate after log in
     navigate(location?.state ? location.state : "/");
  }

    return (
        <div className="hero  min-h-screen bg-base-200">
      <Helmet>
        <title>Home/ Login</title>
      </Helmet>
      <div className="hero-content w-4/5">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl text-center font-bold px-4 mt-6">
            Login now!
          </h1>
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
              <button className="btn btn-primary">Login</button>
            </div>
          </form>

          <p className="p-8">
            Do not have an account?{" "}
            <Link to="/register" className="text-sky-300">
              Register
            </Link>
          </p>
          <div className="flex justify-center items-center gap-6 pb-4">
            <p>Log in with</p>
            <button
              onClick={handleGoogleLogin}
              className="btn btn-outline btn-primary text-secondary"
            >
              Google
            </button>
            
          </div>
        </div>
      </div>
    </div>
    );
};

export default Login;