import React, { useEffect } from "react";
import { FaSearch, FaFilter, FaShoppingCart } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { AiOutlineTag } from "react-icons/ai";
import { BiReset } from "react-icons/bi";
import { useFilterContext } from "./FilterContext";

interface Product {
  category: string;
}

interface FetchResponse {
  products: Product[];
}

const Sidebar = () => {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedKeyword,
    setSelectedKeyword,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
  } = useFilterContext();
  const [categories, setCategories] = React.useState<string[]>([]);
  const [keywords] = React.useState<string[]>([
    "apple",
    "watch",
    "fashion",
    "trend",
    "shoes",
    "shirt",
  ]);

  const handleRadioChangeCat = (category: string) => {
    setSelectedCategory(category);
    setSelectedKeyword("");
  };

  const handleKeywordClick = (keyword: string) => {
    setSelectedKeyword(keyword);
    setSelectedCategory("");
  };

  const handleResetFilter = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setSelectedKeyword("");
    setMinPrice(0);
    setMaxPrice(0);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data: FetchResponse = await response.json();
        console.log(data);
        const uniqueCategories = Array.from(
          new Set(data.products.map((product) => product.category))
        );
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);
  return (
    <div className="w-64 p-6 bg-white shadow-lg h-full">
      <h1 className="text-2xl font-bold flex items-center gap-2 mb-6 text-blue-600">
        <FaShoppingCart /> React Mart
      </h1>
      <section className="space-y-6">
        <div className="relative">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search Product"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-gray-700 font-medium">
            <FaFilter /> Price Range
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Min"
              value={minPrice}
              onChange={(e) =>
                setMinPrice(
                  e.target.value ? parseFloat(e.target.value) : undefined
                )
              }
            />
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Max"
              value={maxPrice}
              onChange={(e) =>
                setMaxPrice(
                  e.target.value ? parseFloat(e.target.value) : undefined
                )
              }
            />
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="flex items-center gap-2 text-gray-700 font-medium">
            <MdCategory /> Categories
          </h2>
          <div className="space-y-2">
            {categories.map((category, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="radio"
                  id={`category-${index}`}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  value={category}
                  name="category"
                  checked={selectedCategory === category}
                  onChange={() => handleRadioChangeCat(category)}
                />
                <label htmlFor={`category-${index}`} className="text-gray-600">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="flex items-center gap-2 text-gray-700 font-medium">
            <AiOutlineTag /> Keywords
          </h2>
          <div className="flex flex-wrap gap-2">
            {keywords.map((keyword, index) => (
              <button
                key={index}
                onClick={() => handleKeywordClick(keyword)}
                disabled={selectedKeyword === keyword}
                className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600 transition-colors"
              >
                {keyword.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>
      <button
        onClick={handleResetFilter}
        className="mt-6 w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
      >
        <BiReset /> Reset Filter
      </button>
    </div>
  );
};

export default Sidebar;
