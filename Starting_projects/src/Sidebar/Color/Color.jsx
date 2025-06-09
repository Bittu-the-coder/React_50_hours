import React from "react";

const Color = ({ handleChange }) => {
  const colors = [
    { id: "all", label: "All", class: "bg-gray-200" },
    { id: "black", label: "Black", class: "bg-black" },
    { id: "blue", label: "Blue", class: "bg-blue-600" },
    { id: "red", label: "Red", class: "bg-red-600" },
    { id: "white", label: "White", class: "bg-white border border-gray-300" },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-800">Color</h2>
      <div className="space-y-2">
        {colors.map(({ id, label, class: bgClass }) => (
          <label
            key={id}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <input
              type="radio"
              name="color"
              value={id}
              onChange={handleChange}
              className="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
            />
            <span className={`w-4 h-4 rounded-full ${bgClass}`}></span>
            <span className="text-gray-700 hover:text-blue-600 transition duration-150">
              {label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Color;
