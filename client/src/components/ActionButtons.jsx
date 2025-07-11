import React from "react";
import { Link } from "react-router-dom";
import actionButtons from "../constants/actionButtons";

const ActionButtons = () => {
  return (
    <div className="flex flex-col w-full max-w-sm mx-auto space-y-3">
      {actionButtons.map(({ to, label, variant }) => (
        <Link to={to} key={label} className="w-full">
            {/* Style buttons dynamically */}
          <button
            className={`w-full px-6 py-3 rounded-full text-sm sm:text-base transition shadow ${
              variant === "primary"
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : variant === "outline"
                ? "bg-white border border-blue-600 text-blue-700 hover:bg-blue-50"
                : variant === "purple"
                ? "bg-purple-600 text-white hover:bg-purple-700"
                : "bg-blue-100 text-blue-800 border border-blue-300 hover:bg-blue-200"
            }`}
          >
            {label}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default ActionButtons;
