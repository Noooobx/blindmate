import React from "react";

const Divider = () => {
  return (
    <div className="flex items-center gap-2 my-4">
      <hr className="flex-grow border-blue-100" />
      <span className="text-gray-400 text-sm">or</span>
      <hr className="flex-grow border-blue-100" />
    </div>
  );
};

export default Divider;
