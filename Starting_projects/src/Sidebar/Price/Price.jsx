import React from "react";

const Price = ({ handleChange }) => {
  const priceRanges = [
    { id: "0-50", label: "$0 - $50" },
    { id: "50-100", label: "$50 - $100" },
    { id: "100-150", label: "$100 - $150" },
    { id: "over150", label: "Over $150" },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-800">Price</h2>
      <div className="space-y-2">
        {priceRanges.map(({ id, label }) => (
          <label
            key={id}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <input
              type="radio"
              name="price"
              value={id}
              onChange={handleChange}
              className="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
            />
            <span className="text-gray-700 hover:text-blue-600 transition duration-150">
              {label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Price;
