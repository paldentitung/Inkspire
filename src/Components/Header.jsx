import React, { useContext, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { Link, NavLink } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

const Header = ({ setMode, mode }) => {
  const { colors } = useContext(ThemeContext);
  const { primary } = colors;

  // Navigation links array
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/blogs", label: "Blogs" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact " },
  ];

  const [showMenu, setShowMenu] = useState(false); // Mobile menu toggle

  return (
    <div
      className={`top-0  sticky z-50 p-6 ${mode ? "bg-white" : "bg-gray-800"}`}
    >
      <div className="w-full max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-1 text-2xl">
          <span
            className="italic w-8 h-8 rounded-full text-white flex items-center justify-center text-[18px]"
            style={{ background: primary }}
          >
            I
          </span>
          <span className="font-black" style={{ color: primary }}>
            Inkspire
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-5">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className="block px-1"
                style={({ isActive }) =>
                  isActive
                    ? { color: primary, borderBottom: `2px solid ${primary}` }
                    : {}
                }
              >
                {link.label}
              </NavLink>
            ))}
          </ul>
        </nav>

        {/* Desktop search + toggle */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link to="/blogs">
            {" "}
            <FaSearch />
          </Link>
          <div
            onClick={() => setMode(!mode)}
            className="relative w-[50px] shadow-md h-[10px] py-3 px-1 rounded-2xl border flex items-center cursor-pointer"
          >
            <span
              className={`h-4 w-4 rounded-full transition-all duration-300 ${
                mode ? "bg-black translate-x-0" : "bg-white translate-x-6"
              }`}
            ></span>
          </div>
        </div>

        {/* Mobile hamburger */}
        <div className="block md:hidden" onClick={() => setShowMenu(!showMenu)}>
          <FaBars size={20} />
        </div>

        {/* Mobile menu */}
        {showMenu && (
          <div
            className={`min-h-screen flex flex-col justify-center items-center z-50 space-y-5 absolute inset-0 w-full transition-all duration-300 ${
              showMenu ? "translate-x-0" : "translate-x-full"
            } ${mode ? "bg-white" : "bg-gray-800"}`}
          >
            {/* Mobile nav links */}
            <nav>
              <ul className="flex flex-col items-center w-full">
                {navLinks.map((link, index) => (
                  <NavLink
                    key={index}
                    to={link.path}
                    className="px-1 text-[20px]"
                    onClick={() => setShowMenu(false)} // Close menu on click
                    style={({ isActive }) =>
                      isActive
                        ? {
                            color: primary,
                            borderBottom: `2px solid ${primary}`,
                          }
                        : {}
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </ul>
            </nav>

            {/* Mobile search + toggle */}
            <div className="flex space-x-4 items-center">
              <FaSearch />
              <div
                onClick={() => setMode(!mode)}
                className="relative w-[50px] shadow-md h-[10px] py-3 px-1 rounded-2xl border flex items-center cursor-pointer"
              >
                <span
                  className={`h-4 w-4 rounded-full transition-all duration-300 ${
                    mode ? "bg-black translate-x-0" : "bg-white translate-x-6"
                  }`}
                ></span>
              </div>
            </div>

            {/* Mobile close icon */}
            <div
              className="absolute top-5 right-5"
              onClick={() => setShowMenu(false)}
            >
              <FaTimes />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
