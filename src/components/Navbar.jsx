import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-gray-300">
          VolunteerHub
        </Link>
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-gray-300 px-3 py-2 rounded-md bg-gray-700 hover:bg-gray-600">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-300 px-3 py-2 rounded-md bg-gray-700 hover:bg-gray-600">
            About
          </Link>
          <Link to="/contact" className="hover:text-gray-300 px-3 py-2 rounded-md bg-gray-700 hover:bg-gray-600">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
