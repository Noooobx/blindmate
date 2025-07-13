import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, UserCircle } from "lucide-react";
import { NAV_LINKS } from "../../constants/navigation";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-700">
          BlindMate
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 text-blue-600 font-medium">
          <ul className="flex space-x-6">
            {NAV_LINKS.map(({ to, label }) => (
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

          {/* Profile Icon */}
          <Link to="/profile" className="hover:text-blue-800">
            <UserCircle size={28} />
          </Link>
        </div>

        {/* Hamburger Icon */}
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
          {NAV_LINKS.map(({ to, label }) => (
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
          <li>
            <Link
              to="/profile"
              onClick={() => setOpen(false)}
              className="block py-2 hover:text-blue-800 flex items-center gap-2"
            >
              <UserCircle size={20} />
              Profile
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
