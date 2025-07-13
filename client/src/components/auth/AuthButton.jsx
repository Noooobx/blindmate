import React from "react";

const AuthButton = ({buttonText}) => {
  return (
    <div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-3xl font-medium hover:bg-blue-700 transition"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default AuthButton;
