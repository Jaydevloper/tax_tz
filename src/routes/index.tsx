/* eslint-disable react-refresh/only-export-components */
import LayoutMenu from "components/layout";
import Loader from "components/loader";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
const Home = lazy(() => import("pages/Home"));

const router = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <LayoutMenu />,
      loader: Loader,
      errorElement: <div>404 error...</div>,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);
};

export default router;
