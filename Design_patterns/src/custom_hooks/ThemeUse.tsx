import React from "react";
import useTheme from "./useTheme";

const ThemeUse = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      className={`p-4 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <p>Current Theme: {theme}</p>
      <button
        onClick={toggleTheme}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeUse;
