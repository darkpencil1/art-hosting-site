import Home from "./components/Pages/Home";
import Shop from "./components/Pages/Shop";
import About from "./components/Pages/About";
import Catalog from "./components/Pages/Catalog";
import ProductPage from "./components/Pages/ProductPage";
import Cart from "./components/Pages/Cart";
import Miscellaneous from "./components/Pages/Miscellaneous";

const routes = [
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/catalog",
    element: <Catalog />,
  },
  {
    path: "/about",
    element: <About />,
  },

  {
    path: "/product",
    element: <ProductPage />,
  },

  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/misc",
    element: <Miscellaneous />,
  },
];

export default routes;
