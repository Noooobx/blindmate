import React from "react";

const PasswordInput = ({value,onChange}) => {
  return (
    <div>
      <input
        type="password"
        placeholder="Password"
        className="w-full rounded-xl border border-blue-100 bg-blue-50 focus:ring-2 focus:ring-blue-200 focus:outline-none px-4 py-3 text-gray-700 placeholder-gray-400 transition"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default PasswordInput;
