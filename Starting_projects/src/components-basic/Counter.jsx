import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState("");

  const handleIncrement = (e) => {
    e.preventDefault();
    setCount(count + Number(number));
    setNumber("");
  };

  const handleDecrement = (e) => {
    e.preventDefault();
    setCount(count - Number(number));
    setNumber("");
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Counter: {count}</h1>
      <div className="flex space-x-2 mb-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
      </div>
      <form
        className="flex flex-col items-center space-y-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="border border-gray-300 rounded p-2"
          type="number"
          placeholder="Enter a number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <div className="flex space-x-2">
          <button
            type="button"
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={handleIncrement}
          >
            Increment by this
          </button>
          <button
            type="button"
            className="bg-yellow-500 text-white px-4 py-2 rounded"
            onClick={handleDecrement}
          >
            Decrement by this
          </button>
        </div>
      </form>
    </div>
  );
};

export default Counter;
