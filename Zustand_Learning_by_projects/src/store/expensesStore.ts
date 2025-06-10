import { create } from "zustand";

interface Expense {
  id: number;
  title: string;
  amount: number;
  date: Date;
}

interface ExpensesStore {
  expenses: Expense[];
  addExpense: (expense: Expense) => void;
  removeExpense?: (id: number) => void;
}

const useExpensesStore = create<ExpensesStore>((set) => ({
  expenses: [],
  addExpense: (expense) =>
    set((state) => ({
      expenses: [...state.expenses, expense],
    })),
  removeExpense: (id) =>
    set((state) => ({
      expenses: state.expenses.filter((expense) => expense.id !== id),
    })),
}));

export default useExpensesStore;
