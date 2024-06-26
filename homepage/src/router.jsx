import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import Homepage from "./pages/homepage/Homepage";
import ErrorPage from "./pages/ErrorPage";
import Login from "./components/auth/Login";
import CookiePolicy from "./components/CookiePolicy";
import LegalNotice from "./components/LegalNotice"; 
import Register from "./components/auth/Register";

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
      {
        path:"/register",
        element:<Register/>,
      },
      {
        path: "/cookie-policy",  
        element: <CookiePolicy />,
      },
      {
        path:"/legalnotice",
        element:<LegalNotice />
      }
    ],
  },
]);
