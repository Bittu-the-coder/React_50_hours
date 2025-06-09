import React, { useEffect, useState } from "react";
import { useFilterContext } from "./FilterContext";

import { MdMenuBook } from "react-icons/md";
import axios from "axios";
import BookCard from "./BookCard";
import { IoMdArrowDropdown } from "react-icons/io";

type Product = {
  id: number;
  title: string;
  price: number;
  rating: number;
  category: string;
  thumbnail: string;
  // add other fields as needed
};

const MainContent = () => {
  const { searchQuery, selectedCategory, selectedKeyword, minPrice, maxPrice } =
    useFilterContext();

  const [products, setProducts] = React.useState<Product[]>([]);
  const [filter, setFilter] = React.useState("all");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState("");

  const itemsPerPage = 10;

  useEffect(() => {
    setIsLoading(true);
    let url = `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${
      (currentPage - 1) * itemsPerPage
    }`;

    if (selectedKeyword) {
      url = `https://dummyjson.com/products/search?q=${selectedKeyword}`;
    }

    axios
      .get(url)
      .then((res) => {
        setProducts(res.data.products);
        setTotalPages(Math.ceil(res.data.total / itemsPerPage));
        setError("");
      })
      .catch((error) => {
        setError("Failed to fetch products. Please try again later.");
        console.error("Error fetching products:", error);
      })
      .finally(() => setIsLoading(false));
  }, [currentPage, selectedKeyword]);

  const getFilteredProducts = () => {
    let filteredProducts = products;

    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCategory
      );
      console.log("Filtered by category:", selectedCategory);
    }
    if (selectedKeyword) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(selectedKeyword.toLowerCase())
      );
      console.log("Filtered by keyword:", selectedKeyword);
    }

    if (minPrice !== undefined) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= minPrice
      );
      console.log("Filtered by min price:", minPrice);
    }
    if (maxPrice !== undefined) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price <= maxPrice
      );
      console.log("Filtered by max price:", maxPrice);
    }

    if (searchQuery) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      console.log("Filtered by search query:", searchQuery);
    }

    switch (filter) {
      case "cheap":
        filteredProducts.sort((a, b) => a.price - b.price);
        console.log("Sorted by cheap");
        break;
      case "expensive":
        filteredProducts.sort((a, b) => b.price - a.price);
        console.log("Sorted by expensive");
        break;
      case "popular":
        filteredProducts.sort((a, b) => b.rating - a.rating);
        console.log("Sorted by popular");
        break;
      default:
        return filteredProducts;
    }

    return filteredProducts;
  };

  const filteredProducts = getFilteredProducts();

  return (
    <section className="flex-1 p-6 bg-gray-100 overflow-y-auto">
      <div className="mb-5">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="relative mb-5 mt-5">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-2 border border-gray-300 rounded-md px-4 py-2 text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <MdMenuBook className="text-gray-400" />
              <span>
                {filter === "all"
                  ? "All Products"
                  : filter.charAt(0).toUpperCase() + filter.slice(1)}
              </span>
              <IoMdArrowDropdown />
            </button>
            {dropdownOpen && (
              <div className="absolute z-10 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                {["all", "cheap", "expensive", "popular"].map((option) => (
                  <button
                    key={option}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      setFilter(option);
                      setDropdownOpen(false);
                    }}
                  >
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {isLoading ? (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="animate-pulse bg-gray-200 h-64 rounded"
              ></div>
            ))}
          </div>
        ) : (
          <>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {filteredProducts.map((product) => (
                <BookCard
                  key={product.id}
                  id={product.id.toString()}
                  title={product.title}
                  image={product.thumbnail}
                  price={product.price}
                  rating={product.rating}
                />
              ))}
            </div>

            <div className="mt-6 flex justify-center space-x-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className="px-3 py-1 rounded bg-white text-gray-700 hover:bg-gray-100"
              >
                Previous
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 rounded ${
                    currentPage === i + 1
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                className="px-3 py-1 rounded bg-white text-gray-700 hover:bg-gray-100"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default MainContent;
