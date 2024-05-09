import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import "./index.css";
import AboutUs from "./routes/AboutUs";
import Authentication from "./routes/Authentication";
import CharacterPicker from "./routes/CharacterPicker";
import Homepage from "./routes/Homepage";
import LobbyPage from "./routes/LobbyPage";
import MapPicker from "./routes/MapPicker";
import NotFound from "./routes/NotFound";
import RacingWager from "./routes/RacingWager";
import Root from "./routes/Root";
import Tutorial from "./routes/Tutorial";
import Shop from "./routes/Shop";

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
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "tutorial",
        element: <Tutorial />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "character-picker",
        element: <CharacterPicker />,
      },
      {
        path: "map-picker",
        element: <MapPicker />,
      },
      {
        path: "racing-wager",
        element: <RacingWager />,
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
