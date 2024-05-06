import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import "./index.css";
import Authentication from "./routes/Authentication";
import Homepage from "./routes/Homepage";
import LobbyPage from "./routes/LobbyPage";
import NotFound from "./routes/NotFound";
import Root from "./routes/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "lobby",
        element: <LobbyPage />,
      },
    ],
  },
  {
    path: "/",
    element: <Authentication />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
