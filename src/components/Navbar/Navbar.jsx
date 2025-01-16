import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGripLines } from "react-icons/fa";



const Navbar = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.clear();
    navigate("/LogIn");
  };

  return (
    <>
      <nav className="z-50 relative flex bg-blue-600 text-white px-8 py-4 items-center justify-between">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-semibold">3W Business</h1>
        </Link>
        <div className="nav-links-bookheaven block md:flex gap-4 items-center">
          <div className="gap-4 flex">
            {token && (
              <Link
                to="/leaderboard"
                className="px-2 py-1 border border-white rounded hover:bg-white hover:text-zinc-800 transition-all duration-300"
              >
                Leaderboard
              </Link>
            )}

            {token && (
              <Link
                to="/"
                className="px-2 py-1 border border-white rounded hover:bg-white hover:text-zinc-800 transition-all duration-300"
                onClick={handleLogout}
              >
                Logout
              </Link>
            )}
          </div>

          
           

            {!token && (
              <>
              <div className="gap-4 flex">
                <Link
                  to="/LogIn"
                  className="px-2 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300"
                >
                  LogIn
                </Link>
                <Link
                  to="/SignUp"
                  className="px-2 py-1 bg-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300"
                >
                  SignUp
                </Link>
              </div>
            </>
            )}
        
        </div>
      </nav>
     
    </>
  );
};

export default Navbar;
