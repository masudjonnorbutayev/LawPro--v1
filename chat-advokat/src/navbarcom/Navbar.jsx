import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./About";
import Chat from "./Chat";
import Conatct from "./Conatct";
import Home from "./Home";
import NvabarChild from "./NvabarChild";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NvabarChild></NvabarChild>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Conatct></Conatct>,
      },
      {
        path: "/chat",
        element: <Chat></Chat>,
      },
    ],
  },
]);
const Navbar = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default Navbar;
