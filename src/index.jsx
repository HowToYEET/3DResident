import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Landingpage from "./Landingpage.jsx";
import ErrorPage from './Error-page.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.querySelector("#root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landingpage />,
    errorElement: <ErrorPage />
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
