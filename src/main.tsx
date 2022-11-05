import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiConfig, createClient } from "wagmi";
import { getDefaultProvider } from "ethers";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";

const queryClient = new QueryClient();

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Users />,
  },
  {
    path: "/users/:userId",
    element: <UserDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <WagmiConfig client={client}>
        <RouterProvider router={router} />
      </WagmiConfig>
    </QueryClientProvider>
  </React.StrictMode>
);
