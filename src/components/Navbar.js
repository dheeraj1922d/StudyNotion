import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import toast from "react-hot-toast";

const Navbar = ({ isLoggin, setIsLoggin }) => {
  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
      <Link to="/">
        <img src={logo} width={160} height={32} loading="lazy"></img>
      </Link>

      <nav className="flex">
        <ul className="text-richblack-100 flex gap-x-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div>
        <ul className="flex items-center gap-x-4">
          {!isLoggin && (
            <li>
              <Link to="/login">
                <button
                  className="bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700"
                >
                  Login
                </button>
              </Link>
            </li>
          )}
          {!isLoggin && (
            <li>
              <Link to="/signup"><button
                  className=" bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700"
                >
                  Sign Up
                </button></Link>
            </li>
          )}
          {isLoggin && (
            <li>
              <Link to="/signup">
                <button
                  onClick={() => {
                    setIsLoggin(false);
                    toast.success("Logged Out");
                  }}
                >
                 <button
                  className="bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700"
                >
                  Log Out
                </button>
                </button>
              </Link>
            </li>
          )}
          {isLoggin && (
            <li>
              <Link to="/dashboard"><button
                  className="bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700"
                >
                  Dashboard
                </button></Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
