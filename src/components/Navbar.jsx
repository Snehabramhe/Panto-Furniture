import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import CustomSelect from "./CustomSelect";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="py-5">
      {/* Overlay */}
      {(isOpen || profileOpen) && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => {
            setIsOpen(false);
            setProfileOpen(false);
          }}
        />
      )}

      <div className="max-w-310  mx-auto flex justify-between items-center text-white max-[1240px]:px-15 max-md:px-5">
        <div className="text-logo hover:text-primary cursor-pointer">
          <Link to="/">Panto</Link>
        </div>

        <nav
          className={`fixed md:static top-15 ${
            isOpen ? "left-0" : "-left-full"
          } duration-300 z-50 text-white md:w-auto w-[80%] md:h-auto h-screen p-3 md:p-0 md:bg-transparent bg-[#272829]`}
        >
          <ul className="flex flex-col md:flex-row gap-10 max-lg:gap-5 text-nav">
            <li className="p-2">
              <CustomSelect />
            </li>

            <Link to="/shop">
              <li className="p-2 hover:text-primary cursor-pointer">Shop</li>
            </Link>
            <Link to="/about">
              <li className="p-2 hover:text-primary cursor-pointer">
                About Us
              </li>
            </Link>
            <Link to="/contact">
              <li className="p-2 hover:text-primary cursor-pointer">Contact</li>
            </Link>
          </ul>
        </nav>

        <div className="flex gap-3">
          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden cursor-pointer"
          >
            {isOpen ? <IoClose size={30} /> : <GiHamburgerMenu size={30} />}
          </button>

          {/* cart */}
          <button className="relative cursor-pointer">
            <img src="src/assets/images/bag-icon.png" alt="bag" />
            <p className="bg-primary text-white w-5 h-6 text-center absolute top-0 -right-1 rounded-full ">
              {count}
            </p>
          </button>

          {/* profile icon */}
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="cursor-pointer h-full w-full"
            >
              <FaUserCircle size={30} />
            </button>

            {/* Dropdown & mobile */}
            {profileOpen && (
              <ul className="absolute right-0 z-50 mt-2 w-32 bg-[#272829] rounded-md shadow-lg text-sm">
                <li className="px-4 py-2 cursor-pointer hover:bg-primary">
                  My Profile
                </li>
                <li className="px-4 py-2 cursor-pointer hover:bg-primary">
                  Settings
                </li>
                <li className="cursor-pointer hover:bg-primary">
                  <button
                    className="w-full h-full px-4 py-2 text-left cursor-pointer"
                    onClick={() => {
                      setIsLoggedIn(!isLoggedIn);
                      setProfileOpen(false);
                    }}
                  >
                    {!isLoggedIn ? "Login" : "Logout"}
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
