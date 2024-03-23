import "./index.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/Homepage";
import Men from "./components/Men";
import Women from "./components/Women";
import App from "./App";
import { clothes } from "./components/utils/clothes";
import Item from "./components/Itempage";
import Checkout from "./components/Checkout";
import Search from "./components/Search";
import About from "./components/About";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Homepage />,
        },
        {
          path: "/men",
          element: <Men />,
        },
        {
          path: "/women",
          element: <Women />,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/search",
          element: <Search />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "shop/:gender/:title",
          element: <Item items={clothes} />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
