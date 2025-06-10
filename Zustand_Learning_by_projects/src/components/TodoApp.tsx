import React, { useState } from "react";
import useTodoStore from "../store/todoStore";
import { FaCheckCircle, FaEdit, FaTrash, FaUndo } from "react-icons/fa";

const TodoApp = () => {
  const { todos, toggleTodo, addTodo, removeTodo, clearCompleted, editTodo } =
    useTodoStore();

  const [todoText, setTodoText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [selectedTodoId, setSelectedTodoId] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const filteredTodos =
    filter === "all"
      ? todos
      : todos.filter((todo) =>
          filter === "active" ? !todo.completed : todo.completed
        );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && todoText.trim()) {
      if (isEditing && selectedTodoId) {
        editTodo(selectedTodoId, todoText.trim());
        setIsEditing(false);
        setSelectedTodoId(null);
        setTodoText("");
      } else {
        addTodo(todoText.trim());
        setTodoText("");
      }
    }
  };

  const handleAddOrUpdateTodo = () => {
    if (todoText.trim()) {
      if (isEditing && selectedTodoId) {
        editTodo(selectedTodoId, todoText.trim());
        setIsEditing(false);
        setSelectedTodoId(null);
        setTodoText("");
      } else {
        addTodo(todoText.trim());
        setTodoText("");
      }
    }
  };

  const handleEditTodo = (id: string, text: string) => {
    setSelectedTodoId(id);
    setTodoText(text);
    setIsEditing(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-8">
      <h1 className="text-4xl font-bold mb-6">Todo App</h1>
      <div className="bg-white rounded shadow p-6 w-full max-w-md">
        <input
          type="text"
          placeholder="Add a new todo"
          className="border p-2 w-full rounded mb-2"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <div className="flex gap-2">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded flex-1"
            onClick={handleAddOrUpdateTodo}
            aria-label={isEditing ? "Update Todo" : "Add Todo"}
          >
            {isEditing ? "Update Todo" : "Add Todo"}
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white p-2 rounded flex-1"
            onClick={clearCompleted}
            aria-label="Clear Completed"
          >
            Clear Completed
          </button>
        </div>
        {/* tabs */}
        <div className="mt-4 flex justify-between">
          <button
            className={`px-4 py-2 rounded-l ${
              filter === "all" ? "border-b-2 border-black" : ""
            }`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`px-4 py-2 ${
              filter === "active" ? "border-b-2 border-black" : ""
            }`}
            onClick={() => setFilter("active")}
          >
            Active
          </button>
          <button
            className={`px-4 py-2 rounded-r ${
              filter === "completed" ? "border-b-2 border-black" : ""
            }`}
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>
        </div>

        <ul className="mt-4">
          {filteredTodos.map((todo) => (
            <li
              key={todo.id}
              className={`flex justify-between items-center p-2 border-b last:border-b-0`}
            >
              <span
                className={`cursor-pointer flex-1 ${
                  todo.completed ? "line-through text-red-400" : ""
                }`}
                onClick={() => toggleTodo(todo.id)}
                title="Toggle complete"
              >
                {todo.text}
              </span>
              <div className="flex gap-2 ml-2">
                <button
                  className={`px-2 py-1 rounded text-black`}
                  onClick={() => toggleTodo(todo.id)}
                  aria-label="Toggle Complete"
                >
                  {todo.completed ? <FaUndo /> : <FaCheckCircle />}
                </button>
                <button
                  className="text-blue-500 hover:underline px-2"
                  onClick={() => handleEditTodo(todo.id, todo.text)}
                  aria-label="Edit Todo"
                >
                  <FaEdit />
                </button>
                <button
                  className="text-red-500 hover:underline px-2"
                  onClick={() => removeTodo(todo.id)}
                  aria-label="Remove Todo"
                >
                  <FaTrash />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
