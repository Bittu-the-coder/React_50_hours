import useCounterStore from "../store/counterStore";

const Counter = () => {
  // const count = use(useCounterStore, (state) => state.count);
  const { count, increment, decrement } = useCounterStore();
  return (
    <div className="counter bg-gray-200 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Counter</h2>
      <div className="mb-2">Count : {count}</div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        onClick={increment}
      >
        Increment
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={decrement}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
