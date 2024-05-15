import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import axios from "axios";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setRegisterError("");

    if (password.length < 6) {
      toast("password must be at least 6 characters long");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast("password Must have an Uppercase letter ");
      return;
    } else if (!/[a-z]/.test(password)) {
      toast("password Must have an Lowercase letter ");
      return;
    }

    try{
      // createUser
    const result = await createUser(email, password);  
    const { data } = await axios.post(
      `https://helps-hand-network-server.vercel.app
/jwt`,
      { email: result?.user?.email },
      { withCredentials: true }
    );
    console.log(data)
        toast("User has created successfully");
        navigate(location?.state ? location.state : "/");
       } catch (error)  {
        console.error(error);
        setRegisterError(error.message);
      }
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <Helmet>
        <title>Home/ Register</title>
      </Helmet>
      <div className="hero-content w-4/5">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-purple-600 to-orange-600 font-bold px-4 mt-6">Register</h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="URL of your Photo "
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
                className="input input-bordered "
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
            {registerError && <p className="text-red-500">{registerError}</p>}

            <div className="form-control mt-6">
              <button className="btn bg-gradient-to-r from-orange-500 via-purple-600 to-orange-700 hover:bg-gradient-to-br focus:ring-purple-300">Register</button>
            </div>
          </form>

          <p className="p-8">
            Already have an account?{" "}
            <Link to="/login" className="text-orange-600">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
