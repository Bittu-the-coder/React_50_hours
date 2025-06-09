import React from "react";

export const Recommended = ({ handleClick }) => {
  const brands = ["All", "Nike", "Adidas", "Puma", "Vans"];
  const [isActive, setIsActive] = React.useState("All");

  return (
    <div className="py-8 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended</h2>
      <div className="flex flex-wrap gap-4">
        {brands.map((brand) => (
          <button
            key={brand}
            onClick={() => {
              handleClick(brand === "All" ? null : brand);
              setIsActive(brand);
            }}
            className={`px-6 py-2 rounded-full transition-colors duration-300 font-medium ${
              isActive === brand
                ? "bg-blue-300 text-gray-800"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gray-300"
            }`}
          >
            {brand}
          </button>
        ))}
      </div>
    </div>
  );
};
