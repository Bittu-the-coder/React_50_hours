import React from "react";
import { useFetch } from "./useFetch";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
}

const FetchComponent = () => {
  const url = "https://dummyjson.com/products";
  const { data, isLoading, error } = useFetch<Product[]>(url);
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FetchComponent;
