import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AccountsPage from "./accounts/AccountsPage";
import TransactionsPage from "./transactions/TransactionsPage";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "accounts/:id",
    element: <AccountsPage />,
    children: [
      {
        path: "transactions",
        element: <TransactionsPage />,
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
