import React from "react";

const GoogleButton = ({handleGoogleLogin}) => {
  return (
    <div>
      <button
        type="button"
        onClick={handleGoogleLogin}
        className="w-full flex items-center justify-center gap-3 bg-white text-gray-700 border border-gray-300 rounded-3xl py-3 hover:bg-gray-50 transition"
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          className="w-5 h-5"
        />
        <span>Continue with Google</span>
      </button>
    </div>
  );
};

export default GoogleButton;
