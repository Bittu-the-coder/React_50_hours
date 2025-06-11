import React from "react";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[] | null;
}

const Todos = ({ todos }: TodoListProps) => {
  return todos ? (
    todos.map((todo: Todo) => (
      <div key={Math.random()}>
        <p>
          <strong>Todo ID:</strong> {todo.id}
        </p>
        <h1>
          <strong>Todo Title:</strong> {todo.title}
        </h1>
      </div>
    ))
  ) : (
    <p>Loading...</p>
  );
};

export default Todos;
