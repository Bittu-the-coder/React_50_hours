import React from "react";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Color from "./Color/Color";

export const Sidebar = ({ handleChange }) => {
  return (
    <section className="w-64 bg-white shadow-lg p-6 min-h-screen">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-blue-600">🛒 Filter</h1>
      </div>
      <div className="space-y-8">
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Color handleChange={handleChange} />
      </div>
    </section>
  );
};
