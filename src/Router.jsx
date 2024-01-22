import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/Homepage.jsx";
import Men from "./components/Men.jsx";
import Women from "./components/Women.jsx";
import App from "./App.jsx";
import { clothes } from "./components/utils/clothes.js";
import Item from "./components/Itempage.jsx";

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
          path: "shop/:gender/:title",
          element: <Item items={clothes} />
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
