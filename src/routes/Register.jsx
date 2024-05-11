import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";


const Register = () => {
    const [registerError, setRegisterError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const { createUser } = useContext(AuthContext);
  
    const handleRegister = (e) => {
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
      
      // createUser
      createUser(email, password)
        .then((result) => {
          console.log(result.user);
          
          toast("User has created successfully");
        })
        .catch((error) => {
          console.error(error);
          setRegisterError(error.message);
        });
     };
    return (
        <div className="hero min-h-screen bg-base-200">
      <Helmet>
        <title>Home/ Register</title>
      </Helmet>
      <div className="hero-content w-4/5">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl text-center font-bold px-4 mt-6">Register</h1>
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
              <button className="btn btn-primary">Register</button>
            </div>
          </form>

          <p className="p-8">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-300">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
    );
};

export default Register;