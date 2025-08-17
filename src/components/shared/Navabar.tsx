import React from "react";
import { NavLink } from "react-router-dom";

const linkClass = "px-3 py-2 rounded hover:bg-gray-100";

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-semibold">MyApp</div>
        <div className="flex items-center gap-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${linkClass} ${isActive ? "text-blue-600 font-semibold" : "text-gray-700"}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/dragonball"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? "text-blue-600 font-semibold" : "text-gray-700"}`
            }
          >
            Page 2
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
