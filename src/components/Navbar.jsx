import { Link, NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { TfiHandStop } from "react-icons/tfi";
import Swal from "sweetalert2";
import axios from "axios";



const Navbar = () => {
  const localTheme = localStorage.getItem('theme');
  const { user, logout } = useContext(AuthContext);

  const handleLogout = async () => {
    const { data } = await axios.post(`https://helps-hand-network-server.vercel.app
/logout`, user, {
      withCredentials: true,
    });
    console.log(data);
    logout();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "You have successfully logged out",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const [theme, setTheme] = useState(localTheme);
  const [type, setType] = useState(false);
  
  useEffect(() => {
    localStorage.setItem('theme', theme);
    const localTheme = localStorage.getItem('theme');
    if (localTheme == 'synthwave') {
      setType(true);
    } else {
      setType(false);
    }
    document.querySelector('html').setAttribute('data-theme', localTheme);},[theme]);
const handleToggle = e => {
  setType(!type);

  if (e.target.checked) {
    setTheme('synthwave');
  } else {
    setTheme('light');}};


  const navlinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-2 px-2 lg:px-4  py-2 rounded-lg bg-orange-600 font-bold dark:text-black"
              : ""
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-2 px-2 lg:px-4 py-2 rounded-lg bg-orange-600 font-bold dark:text-black"
              : ""
          }
          to="/needVolunteers"
        >
          Need Volunteer
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-2 px-2 lg:px-4 py-2 rounded-lg bg-orange-600 font-bold dark:text-black"
              : ""
          }
          to="/myRequestedPost"
        >
          My Requested Post
        </NavLink>
      </li>

      <li>
 
         <div id="right-menu" className="relative">
          <NavLink className="menu-button">My Profile</NavLink>
          <div className="absolute w-48 h-20  bg-purple-200 z-[1000] flex gap-6 flex-col border p-2 rounded-lg space-y-3 dropdown-menu">
            <Link
              to="/addVolunteers"
              className="hover:bg-orange-600 rounded-lg py-1 px-3"
            >
              Add Volunteer Post
            </Link>
            <br />
            <Link
              to="/managePost"
              className="hover:bg-purple-600 rounded-lg py-1 px-3"
            >
              Manage My Post
            </Link>
          </div>
        </div>
      </li>
    </>
  );
  return (
    <div className="container mx-auto navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown  z-50">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className=" dropdown-content mt-3 z-[1] pl-4 pb-4 shadow bg-base-100 rounded-box w-52 space-y-3 "
          >
            {navlinks}
          </ul>
        </div>
    
          <h1 className="flex items-center text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-purple-600 to-orange-700 font-mono">Helps Hand <span className="inline px-2 text-purple-600"><TfiHandStop /></span> Network</h1>
         
       
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-4  px-1">{navlinks}</ul>
      </div>

      <div className="navbar-end gap-4">
        {user ? (
          <div id="profileImg">
            <img
              className="w-12 md:w-12 lg:w-14  rounded-full "
              alt="profile picture"
              src={
                user?.photoURL ||
                "https://i.ibb.co/RPpmvwb/images-blank-profile.png"
              }
            />

            <div id="dropdown" className=" w-28 lg:w-40 rounded-lg z-30">
              <h1 className="p-2 bg-purple-400 dark:bg-gradient-to-r from-orange-500 via-purple-600 to-purple-700 rounded-lg text-center font-semibold  w-full">
                {user.displayName || "user name not found"}
              </h1>
              <button onClick={handleLogout} className="btn w-full bg-orange-600 dark:bg-gradient-to-r from-purple-500 via-purple-600 to-orange-700 hover:bg-gradient-to-br focus:ring-purple-300">
                Log Out
              </button>
            </div>
          </div>
        ) : (
          <Link className="btn px-6 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-purple-300" to="/login">
            Login
          </Link>
        )}
        <label className="cursor-pointer grid place-items-center">
          <input
          onChange={handleToggle}
          type="checkbox"
          value="synthwave"
          className="toggle theme-controller h-7 md:h-8 w-16 bg-orange-600 row-start-1 col-start-1 col-span-2"
          checked={type}
        />
          <svg
            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
