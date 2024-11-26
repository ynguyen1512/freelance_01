import React, { useState } from "react";
import logo from '../assets/images/logo-singapore.png'

const HeaderPage = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const toggleHeader = () => {
    setIsHeaderVisible((prev) => !prev);
  };

  return (
    <>
      {isHeaderVisible ? (
        // Full Header
        <header className="fixed w-full z-50 bg-white shadow-md flex items-center justify-between px-10 h-[80px] transition-all">
          {/* Left Section: Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Connest Logo"
              className="h-16 w-20" 
            />
          </div>

          {/* Center Section: Navigation Links */}
          <nav className="flex-1 flex justify-center space-x-10">
            
              <a
              href='/'
              className="text-gray-800 hover:text-primary-700 text-lg font-medium"
            >
              Home
            </a>
            <a
              href='/aboutUs'
              className="text-gray-800 hover:text-primary-700 text-lg font-medium"
            >
              Về Singapore
            </a>
          </nav>

          {/* Right Section: Close Button */}
          <div>
            <button
              className="text-gray-800 text-2xl focus:outline-none"
              onClick={toggleHeader}
            >
              ✕
            </button>
          </div>
        </header>
      ) : (
        // Collapsed Header
        <div
          className="fixed w-full z-50 bg-dark-700 flex items-center justify-between px-6 h-[80px] cursor-pointer bg-primary-700"
          onClick={toggleHeader}
        >
          {/* Left Section: Minimal Logo */}
          <div className="flex items-center">
          <span className="ml-3 font-bold text-lg text-white">GROUP 3</span>
          </div>

          {/* Right Section: Hamburger Icon */}
          <div>
            <button className="text-white text-2xl focus:outline-none">
              ☰
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderPage;