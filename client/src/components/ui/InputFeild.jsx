import React from 'react'

const InputFeild = ({type,placeholder,value,onChange}) => {
  return (
    <div>
        <input
          type={type}
          placeholder={placeholder}
          className="w-full rounded-xl border border-blue-100 bg-blue-50 focus:ring-2 focus:ring-blue-200 focus:outline-none px-4 py-3 text-gray-700 placeholder-gray-400 transition"
          value={value}
          onChange={onChange}
          required
        />
      </div>
  )
}

export default InputFeild