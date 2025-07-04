import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';

const Navbar = () => {
  const { user, credit, setShowLogin, logout } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white rounded-b-xl">
      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="w-32 sm:w-40" />
      </Link>

      {/* User Controls */}
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <button
              onClick={() => navigate('/buy')}
              className="flex items-center gap-2 bg-blue-100 text-sm px-4 py-2 rounded-full hover:bg-blue-200 transition"
            >
              <img src={assets.credit_star} alt="Credits" className="w-5" />
              <span>Credits: {credit}</span>
            </button>

            <span className="hidden sm:inline text-gray-700">Hi, {user.name}</span>

            <div className="relative group">
              <img src={assets.profile_icon} alt="Profile" className="w-10 cursor-pointer" />
              <ul className="absolute right-0 mt-2 hidden group-hover:block bg-white border rounded shadow-md text-sm">
                <li
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  onClick={logout}
                >
                  Logout
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <span
              onClick={() => navigate('/buy')}
              className="cursor-pointer text-gray-700 hover:underline"
            >
              Pricing
            </span>
            <button
              onClick={() => setShowLogin(true)}
              className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
            >
              Login
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;