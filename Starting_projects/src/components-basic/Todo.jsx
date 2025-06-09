import React, { useEffect } from "react";
import { TiDeleteOutline, TiEdit } from "react-icons/ti";
import { FaRegCheckCircle } from "react-icons/fa";

const Todo = () => {
  const [todos, setTodos] = React.useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos
      ? JSON.parse(savedTodos)
      : [
          {
            id: Math.random(),
            text: "Buy milk",
            completed: false,
          },
        ];
  });
  const [newTodo, setNewTodo] = React.useState("");
  const [editingId, setEditingId] = React.useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== "") {
      if (editingId !== null) {
        setTodos(
          todos.map((todo) =>
            todo.id === editingId ? { ...todo, text: newTodo } : todo
          )
        );
        setEditingId(null);
      } else {
        setTodos([
          ...todos,
          { text: newTodo, completed: false, id: Math.random() },
        ]);
      }
      setNewTodo("");
    }
  };

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, text) => {
    setNewTodo(text);
    setEditingId(id);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Todo List
        </h1>

        <form onSubmit={addTodo} className="mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Add a Todo"
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setNewTodo(e.target.value)}
              value={newTodo}
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              {editingId !== null ? "Update" : "Add"}
            </button>
          </div>
        </form>

        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`flex items-center justify-between bg-gray-50 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors`}
            >
              <span
                className={`text-gray-700 ${
                  todo.completed ? "line-through text-red-600" : ""
                }`}
              >
                {todo.text}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => editTodo(todo.id, todo.text)}
                  className="p-2 text-blue-500 hover:text-blue-600 transition-colors"
                >
                  <TiEdit className="w-5 h-5" />
                </button>
                <button
                  onClick={() => removeTodo(todo.id)}
                  className="p-2 text-red-500 hover:text-red-600 transition-colors"
                >
                  <TiDeleteOutline className="w-5 h-5" />
                </button>
                <button
                  className={`p-2 ${
                    todo.completed ? "text-green-600" : "text-green-400"
                  } hover:text-green-600 transition-colors`}
                  onClick={() => toggleComplete(todo.id)}
                >
                  <FaRegCheckCircle className="w-5 h-5" />
                </button>
              </div>
            </li>
          ))}
        </ul>

        {todos.length === 0 && (
          <p className="text-center text-gray-500 mt-4">
            No todos yet. Add one above!
          </p>
        )}
      </div>
    </div>
  );
};

export default Todo;
