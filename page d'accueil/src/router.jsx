import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import Homepage from "./pages/homepage/Homepage";
import ErrorPage from "./pages/ErrorPage";
import Login from "./components/auth/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
