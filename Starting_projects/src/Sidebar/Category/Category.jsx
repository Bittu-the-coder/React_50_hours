import React from "react";

const Category = ({ handleChange }) => {
  const categories = ["All", "Sneakers", "Sandals", "Boots", "Loafers"];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-800">Category</h2>
      <div className="space-y-2">
        {categories.map((category) => (
          <label
            key={category}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <input
              type="radio"
              name="category"
              value={category.toLowerCase()}
              onChange={handleChange}
              className="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
            />
            <span className="text-gray-700 hover:text-blue-600 transition duration-150">
              {category}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Category;
