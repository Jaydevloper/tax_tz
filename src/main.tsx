import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import ReactDOM from "react-dom/client";
import React from "react";
import Loader from "components/loader";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      retry: false,
    },
  },
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <React.Suspense fallback={<Loader />}>
      <App />
    </React.Suspense>
  </QueryClientProvider>
);
