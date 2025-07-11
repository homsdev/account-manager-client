import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AccountsSection from "./accounts/AccountsSection.tsx";
import TransactionsSection from "./transactions/TransactionsSection.tsx";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "accounts/:id",
    element: <AccountsSection />,
    children: [
      {
        path: "transactions",
        element: <TransactionsSection />,
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
