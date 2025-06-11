import React from "react";
import { printProps } from "./utils/printProps";
import { withLoading } from "./utils/withLoading";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoListProps {
  data: Todo[];
}

const TodoList = ({ data }: TodoListProps) => {
  return (
    <div>
      {Array.isArray(data) &&
        data.map((todo) => (
          <div key={todo.id}>
            <h3>{todo.title}</h3>
            <p>Completed: {todo.completed ? "Yes" : "No"}</p>
          </div>
        ))}
    </div>
  );
};

export default TodoList;

export const TodoListWrapper = printProps(TodoList);
export const TodoWithLoading = withLoading<TodoListProps>(TodoList);
