import React from "react";
import Card from "../components/Card";
import data from "../db/data.js";

export const Products = ({
  selectedCategory,
  selectedPrice,
  selectedColor,
  selectedBrand,
  searchQuery,
}) => {
  let matchesCategory = false,
    matchesColor = false;
  const filteredProducts = data.filter((item) => {
    if (selectedCategory === "all") {
      return true;
    } else {
      matchesCategory = !selectedCategory || item.category === selectedCategory;
    }

    if (selectedColor === "all") {
      matchesColor = true;
    } else {
      matchesColor = !selectedColor || item.color === selectedColor;
    }
    const matchesBrand =
      !selectedBrand ||
      item.company.toLowerCase() === selectedBrand.toLowerCase();
    const matchesSearch =
      !searchQuery ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase());

    let matchesPrice = true;
    if (selectedPrice) {
      const [min, max] = selectedPrice.split("-").map(Number);
      const price = Number(item.newPrice);
      if (max) {
        matchesPrice = price >= min && price <= max;
      } else {
        matchesPrice = price >= min;
      }
    }

    return (
      matchesCategory &&
      matchesColor &&
      matchesPrice &&
      matchesBrand &&
      matchesSearch
    );
  });

  return (
    <section className="p-4 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((item, index) => (
          <Card
            key={index}
            img={item.img}
            title={item.title}
            reviews={item.reviews}
            prevPrice={item.prevPrice}
            newPrice={item.newPrice}
          />
        ))}
      </div>
      {filteredProducts.length === 0 && (
        <div className="text-center text-gray-500 mt-8">
          No products found matching your criteria
        </div>
      )}
    </section>
  );
};
