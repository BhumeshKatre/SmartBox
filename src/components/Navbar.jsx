// src/components/ui/Navbar.jsx

import React from "react";
import { Link } from "react-router-dom";
import { FaRegMoon } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-white  text-gray-700 px-4 py-3 shadow-md sticky top-0 ">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">🧰 SmartBox</h1>
        <ul className="hidden md:flex space-x-6 font-medium">
          <li>
            <Link to="/" className="hover:text-gray-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/tools" className="hover:text-gray-200">
              Tools
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-200">
              About
            </Link>
          </li>
          <li>
            
          </li>
        </ul>
      </div>
    </nav>
  );
}
