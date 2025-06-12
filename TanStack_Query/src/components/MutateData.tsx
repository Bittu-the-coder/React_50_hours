import { useQueryClient } from "@tanstack/react-query";
import React from "react";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const postTodo = async (todo: Todo) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });

  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

const MutateData = () => {
  const queryClient = useQueryClient();

  const handleAddTodo = async () => {
    const newTodo: Todo = {
      id: Date.now(),
      title: "New Todo",
      completed: false,
    };

    await postTodo(newTodo);
    queryClient.invalidateQueries(["todos"]);
    console.log("Todo added:", newTodo);
  };

  return (
    <div>
      <h2>Mutate Data</h2>
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default MutateData;
