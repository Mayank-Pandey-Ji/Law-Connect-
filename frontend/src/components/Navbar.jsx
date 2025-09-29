import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-blue-600">
        LawConnect
      </Link>

      {/* Links */}
      <div className="flex space-x-6">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/lawyers" className="hover:text-blue-600">Lawyers</Link>
        <Link to="/about" className="hover:text-blue-600">About</Link>
        <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        <Link to="/login" className="hover:text-blue-600">Login</Link>
        <Link to="/register" className="hover:text-blue-600">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
