import { useQuery } from "@tanstack/react-query";
import React from "react";

const fetchFunction = async (page = 1, limit = 10) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
  );
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

const Pagination = () => {
  const [page, setPage] = React.useState(1);
  const pageSize = 10;
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts", page],
    queryFn: () => fetchFunction(page, pageSize),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Pagination</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={() => setPage((old) => Math.max(old - 1, 1))}>
        Previous
      </button>
      <button onClick={() => setPage((old) => old + 1)}>Next</button>
    </div>
  );
};

export default Pagination;
