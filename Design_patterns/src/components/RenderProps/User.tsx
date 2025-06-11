import React from "react";
import DataFetcher from "./DataFetcher";

interface UserProps {
  id: number;
  name: string;
}

const User = () => {
  return (
    <div>
      <DataFetcher<UserProps[]>
        url={`https://jsonplaceholder.typicode.com/users`}
        render={(data, loading, error) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error: {error}</p>;
          if (!data || data.length === 0) return <p>No user found.</p>;
          return (
            <div>
              <h2 className="text-2xl font-bold">{data[0].name}</h2>
              <p>Email: {data[0].email}</p>
              <p>Phone: {data[0].phone}</p>
              <p>Website: {data[0].website}</p>
            </div>
          );
        }}
      />
    </div>
  );
};

export default User;
