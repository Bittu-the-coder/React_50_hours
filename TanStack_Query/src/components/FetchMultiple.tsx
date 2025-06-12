import { useQueries } from "@tanstack/react-query";
import React from "react";
const fetchTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};
const FetchMultiple = () => {
  const result = useQueries({
    queries: [
      {
        queryKey: ["todos"],
        queryFn: fetchTodos,
      },
      {
        queryKey: ["posts"],
        queryFn: fetchPosts,
      },
    ],
    // onSuccess: (data) => {
    //   console.log("Todos:", data[0]);
    //   console.log("Posts:", data[1]);
    // },
    // onError: (error) => {
    //   console.error("Error fetching data:", error);
    // },
  });

  const [todosQuery, postsQuery] = result;

  if (todosQuery.isLoading || postsQuery.isLoading)
    return <div>Loading...</div>;

  if (todosQuery.error || postsQuery.error)
    return (
      <div>
        An error occurred:
        {todosQuery.error?.message || postsQuery.error?.message}
      </div>
    );

  const todosData = todosQuery.data;
  const postsData = postsQuery.data;

  console.log("Todos:", todosData);
  console.log("Posts:", postsData);

  return (
    <div>
      <h2>Fetch Multiple Data</h2>
      <p>Check the console for fetched data.</p>
    </div>
  );
};

export default FetchMultiple;
