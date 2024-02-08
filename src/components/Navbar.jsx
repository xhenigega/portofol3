import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-yellow-300 items-center justify-center flex font-bold shadow-md "
      >
        <p className="blue-gradient_text ">XHG</p>
      </NavLink>

      <nav className="flex text-lg gap-7 font-medium   rounded-lg bg-yellow-300 p-2">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-green-800"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-green-800"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-green-800"
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
