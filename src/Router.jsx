import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/Homepage.tsx";
import Men from "./components/Men.tsx";
import Women from "./components/Women.jsx";
import App from "./App.jsx";
import { clothes } from "./components/utils/clothes.ts";
import Item from "./components/Itempage.tsx";
import Checkout from "./components/Checkout.tsx";
import Search from "./components/Search.tsx";
import About from "./components/About.tsx";

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
