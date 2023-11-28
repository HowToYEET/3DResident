import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Landingpage from "./Landingpage.jsx";
import ErrorPage from './Error-page.jsx'
import { createBrowserRouter, RouterProvider, Route, NavLink, createRoutesFromElements } from "react-router-dom";
import Houses from "./Houses";
import SelectHouses from './SelectHouses'
import SelectApartments from "./SelectApartments.jsx"

const root = ReactDOM.createRoot(document.querySelector("#root"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Landingpage/>}>
      <Route index element={<Houses />}/>
      <Route path="/Home" element={<Houses />}/>
      <Route path="/SelectHouses" element={<SelectHouses />}/>
      <Route path="/SelectApartments" element={<SelectApartments />} />
    </Route>
  )
)

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
