import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-[10vh] px-10 gap-5 bg-blue-950 py-5 flex">
      <div>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? "text-pink-300 " : "text-white"} px-3`
          }
        >
          Home
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/pagination"
          className={({ isActive }) =>
            `${isActive ? "text-pink-300   " : "text-white"} px-3`
          }
        >
          Pagination
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/page2"
          className={({ isActive }) =>
            `${isActive ? "text-pink-300   " : "text-white"} px-3`
          }
        >
          Page2
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
