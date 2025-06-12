import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ErrorBoundary from "./components/ErrorBoundary";
import Pagination from "./components/Pagination";
import InfiniteQueries from "./components/InfiniteQueries";

const queryClient = new QueryClient();

const App = () => {
  return (
    <div>
      {/* <WithoutTanstackQuery /> */}
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary>
          {/* <WithTanStack /> */}
          {/* <Deduplication /> */}
          {/* <FetchById />
          <StaleTime />
          <ReFetchById /> */}
          {/* <FetchMultiple /> */}
          {/* <MutateData /> */}
          {/* <Pagination /> */}
          <InfiniteQueries />
        </ErrorBoundary>
      </QueryClientProvider>
    </div>
  );
};

export default App;
