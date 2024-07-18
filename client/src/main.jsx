import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import myAxios from "./services/myAxios";
import App from "./App";
import Home from "./pages/Home";
import LogIn from "./pages/Auth";
import CardSubmit from "./pages/CardSubmit";
import DeckStudy from "./pages/DeckStudy";
import Browse from "./pages/CardBrowse";
import { getData } from "./services/api.service";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
        loader: () => getData("/api/deck"),
        action: async ({ request }) => {
          const formData = await request.formData();
          const name = formData.get("name");
          const response = await myAxios.post("/api/deck", { name });
          return response
        },
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
        path: "/study",
        element: <DeckStudy />,
      },
      {
        path: "/browse",
        element: <Browse />,
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
