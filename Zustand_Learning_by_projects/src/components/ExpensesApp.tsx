import React, { useState } from "react";
import useExpensesStore from "../store/expensesStore";

interface Expense {
  id: number;
  title: string;
  amount: number;
  date: Date;
}

const ExpensesApp = () => {
  const { expenses, addExpense, removeExpense } = useExpensesStore();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(new Date());

  const handleAddExpense = () => {
    if (!title || !amount || !date) return;
    addExpense({
      title,
      amount,
      date,
      id: Date.now(),
    });
    setTitle("");
    setAmount(0);
    setDate(new Date());
  };

  return (
    <div className="bg-slate-100 min-h-screen flex flex-col items-center justify-center py-8">
      <h2 className="text-2xl font-bold mb-6">Expenses Tracker</h2>

      <div className="space-y-4 w-80 mb-8">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="border border-gray-300 p-2 rounded w-full"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          placeholder="Amount"
          className="border border-gray-300 p-2 rounded w-full"
        />
        <input
          type="date"
          value={date.toISOString().split("T")[0]}
          onChange={(e) => setDate(new Date(e.target.value))}
          className="border border-gray-300 p-2 rounded w-full"
        />
        <button
          onClick={handleAddExpense}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600"
        >
          Add Expense
        </button>
      </div>

      <div className="w-80">
        <h3 className="text-xl font-semibold mb-4">Expenses</h3>
        <ul className="space-y-2">
          {expenses.length === 0 && (
            <li className="text-gray-500">No expenses yet.</li>
          )}
          {expenses.map((expense: Expense, idx: number) => (
            <li
              key={idx}
              className="flex justify-between items-center bg-white p-3 rounded shadow"
            >
              <div>
                <div className="font-medium">{expense.title}</div>
                <div className="text-sm text-gray-500">
                  {expense.date instanceof Date
                    ? expense.date.toLocaleDateString()
                    : new Date(expense.date).toLocaleDateString()}
                </div>
                <div className="text-blue-600 font-bold">${expense.amount}</div>
              </div>
              <button
                onClick={() => removeExpense?.(expense.id)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpensesApp;
