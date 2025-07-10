import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-700">
          BlindMate
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-blue-600 font-medium">
          {links.map(({ to, label }) => (
            <li key={label}>
              <Link
                to={to}
                className="hover:text-blue-800 transition-colors duration-200"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden text-blue-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-white border-t border-blue-100 px-4 pb-4 space-y-2 text-blue-700 font-medium">
          {links.map(({ to, label }) => (
            <li key={label}>
              <Link
                to={to}
                onClick={() => setOpen(false)}
                className="block py-2 hover:text-blue-800"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
