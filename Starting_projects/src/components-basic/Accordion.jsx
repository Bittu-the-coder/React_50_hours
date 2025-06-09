import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const accordionData = [
  {
    title: "What Is HTML?",
    content: `The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.`,
  },
  {
    title: "What Is React?",
    content: `React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.`,
  },
  {
    title: "What Is Node.js?",
    content: `Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.`,
  },
  {
    title: "What Is Golang?",
    content: `Go is a statically typed, compiled programming language designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson. It is syntactically similar to C, but with memory safety, garbage collection, structural typing, and CSP-style concurrency`,
  },
];

export const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div className="max-w-xl mx-auto mt-10 space-y-4">
      {accordionData.map((ac, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg shadow-sm bg-white"
        >
          <button
            className="w-full flex items-center justify-between px-6 py-4 focus:outline-none hover:bg-gray-50 transition"
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            <span className="text-lg font-medium text-gray-800">
              {ac.title}
            </span>
            <span className="ml-4 text-gray-500">
              {activeIndex === index ? (
                <FaMinus className="w-4 h-4" />
              ) : (
                <FaPlus className="w-4 h-4" />
              )}
            </span>
          </button>
          <div
            className={`px-6 pb-4 text-gray-700 text-base transition-all duration-300 ${
              activeIndex === index ? "block" : "hidden"
            }`}
          >
            {ac.content}
          </div>
        </div>
      ))}
    </div>
  );
};
