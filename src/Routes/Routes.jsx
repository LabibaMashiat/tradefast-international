import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About/About";
import Products from "../pages/Products/Products/Products";
import Gallery from "../pages/Gallery/Gallery/Gallery";

import TrueFashionBd from "../pages/TrueFashionBd/TrueFashionBd/TrueFashionBd";
import ProductsTFB from "../pages/TrueFashionBd/ProductsTFB/ProductsTFB/ProductsTFB";
import GalleryTFB from "../pages/TrueFashionBd/GalleryTFB/GalleryTFB/GalleryTFB";
import AboutTFB from "../pages/TrueFashionBd/AboutTFB/AboutTFB";
import Contact from "../pages/Contact/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/truefashionbd",
        element: <TrueFashionBd />,
        children: [
          {
            index: true, 
            element: <AboutTFB />,
          },
          {
            path: "products",
            element: <ProductsTFB />,
          },
          {
            path: "gallery",
            element: <GalleryTFB />,
          },
         
        ],
      },
    ],
  },
]);
