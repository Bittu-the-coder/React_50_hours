import React from "react";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUserAdd,
} from "react-icons/ai";

const Nav = ({ handleSearch, searchQuery }) => {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search shoes..."
            className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <svg
            className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <ul className="flex items-center space-x-8">
          <li>
            <a
              href="/"
              className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/products"
              className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="/recommended"
              className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
            >
              Recommended
            </a>
          </li>
        </ul>

        <div className="flex items-center space-x-6">
          <button className="relative hover:scale-110 transition duration-300">
            <AiOutlineHeart className="text-2xl text-gray-700 hover:text-blue-600" />
          </button>
          <button className="relative hover:scale-110 transition duration-300">
            <AiOutlineShoppingCart className="text-2xl text-gray-700 hover:text-blue-600" />
          </button>
          <button className="relative hover:scale-110 transition duration-300">
            <AiOutlineUserAdd className="text-2xl text-gray-700 hover:text-blue-600" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
