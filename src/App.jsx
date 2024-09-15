import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Layout from "./common/Layout";
import { ProductProvider } from "./context/Alldata";
import ProductDetails from "./pages/ProductDetails";
import CatagoryData from "./pages/CatagoryData";
import ErrorPage from "./pages/ErrorPage";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/product",
          element: <Products />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path:"/product/:id",
          element:<ProductDetails />
        },
        {
          path:"/catagory/:cg",
          element:<CatagoryData />
        },
        {
          path:"*",
          element:<ErrorPage />
        },
      ],
    },
  ]);
  return (
    <ProductProvider>
      <RouterProvider router={router} />
    </ProductProvider>
  );
};

export default App;
