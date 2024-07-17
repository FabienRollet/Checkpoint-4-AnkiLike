import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import LogIn from "./pages/Auth";
import CardSubmit from "./pages/CardSubmit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/cardsubmit",
        element: <CardSubmit />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        index: true, 
        element: <Navigate to="/home" replace />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
