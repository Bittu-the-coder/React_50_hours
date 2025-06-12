import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";
const fetchFunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let queryClient = new QueryClient();

const WithTanStack = () => {
  queryClient = useQueryClient();
  const { data, error, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchFunction,
    refetchOnWindowFocus: false,
  });
  console.log("==============", data);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <ul>
          {data.map((todo: { id: number; title: string }) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WithTanStack;
