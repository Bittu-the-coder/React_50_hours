import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";

const Card = ({ img, title, reviews, prevPrice, newPrice }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
      <div className="relative group">
        <img src={img} alt={title} className="w-full h-48 " />
      </div>

      <div className="p-4 space-y-3">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>

        <div className="flex items-center space-x-1">
          {[...Array(4)].map((_, index) => (
            <AiFillStar key={index} className="text-yellow-400 text-lg" />
          ))}
          <span className="text-sm text-gray-600 ml-2">{reviews}</span>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="space-x-2">
            <del className="text-gray-500 text-sm">${prevPrice}</del>
            <span className="text-lg font-bold text-blue-600">${newPrice}</span>
          </div>
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300">
            <BsFillBagHeartFill className="text-xl text-blue-600 hover:scale-110 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
