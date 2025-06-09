import { useState } from "react";
import "./App.css";
import Nav from "./Navigation/Nav";
import { Recommended } from "./Recommended/Recommended";
import { Products } from "./Products/Products";
import { Sidebar } from "./Sidebar/Sidebar";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState(null);

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Reset other filters when searching
    // setSelectedCategory(null);
    // setSelectedPrice(null);
    // setSelectedColor(null);
    // setSelectedBrand(null);
  };

  const handleClick = (brand) => {
    setSelectedBrand(brand);
    // Reset other filters when selecting a brand
    // setSelectedCategory(null);
    // setSelectedPrice(null);
    // setSelectedColor(null);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "category":
        setSelectedCategory(value);
        break;
      case "price":
        setSelectedPrice(value);
        break;
      case "color":
        setSelectedColor(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Nav searchQuery={searchQuery} handleSearch={handleSearch} />
      <div className="flex pt-16">
        <Sidebar handleChange={handleChange} />
        <main className="flex-1">
          <Recommended handleClick={handleClick} />
          <Products
            selectedCategory={selectedCategory}
            selectedPrice={selectedPrice}
            selectedColor={selectedColor}
            selectedBrand={selectedBrand}
            searchQuery={searchQuery}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
