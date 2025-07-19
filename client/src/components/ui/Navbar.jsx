import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, UserCircle, LogOut } from "lucide-react";
import { NAV_LINKS } from "../../constants/navigation";
import axios from "axios";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const result = await axios.get("http://localhost:3000/auth/logout", { withCredentials: true });
      console.log(result)
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-700">
          BlindMate
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 text-blue-600 font-medium relative">
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

          {/* Profile Icon + Logout Popup */}
          <div className="relative">
            <button
              className="hover:text-blue-800"
              onClick={() => setShowLogout(!showLogout)}
            >
              <UserCircle size={28} />
            </button>

            {showLogout && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg border rounded-md z-50">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2 px-4 py-2 hover:bg-red-50 text-red-600 font-semibold"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </div>
            )}
          </div>
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
            <button
              onClick={handleLogout}
              className="block w-full text-left py-2 hover:text-blue-800 flex items-center gap-2"
            >
              <LogOut size={20} />
              Logout
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
