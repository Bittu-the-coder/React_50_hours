import { useQueries, useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";

const fetchFunctionById = async (id: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

const fetchFunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

const FetchById = () => {
  const { data } = useQuery({
    queryKey: ["todos", 1],
    queryFn: () => fetchFunctionById(1),
  });
  return <div>FetchById: {data?.title}</div>;
};

export default FetchById;

export const StaleTime = () => {
  const { data } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchFunction,
    staleTime: 1000,
  });

  return <div>StaleTime: {JSON.stringify(data[0])}</div>;
};

export const ReFetchById = () => {
  const [currentId, setCurrentId] = React.useState(1);
  const { data } = useQuery({
    queryKey: ["todos", 1],
    queryFn: () => fetchFunctionById(currentId),
    refetchInterval: 5000,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentId((prevId) => (prevId < 200 ? prevId + 1 : 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return <div>ReFetchById: {data?.title}</div>;
};
