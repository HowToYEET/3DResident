import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Landingpage from "./Landingpage.jsx";
import ErrorPage from './Error-page.jsx'
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom";
import Houses from "./Houses";
import SelectHouses from './SelectHouses'
import SelectApartments from "./SelectApartments.jsx"
import Apartment from "./ModelShow3D.jsx"

const root = ReactDOM.createRoot(document.querySelector("#root"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Landingpage/>}>
      <Route index element={<Houses />}/>
      <Route path="/Home" errorElement={<ErrorPage></ErrorPage>} element={<Houses />}/>
      <Route path="/SelectHouses" element={<SelectHouses />}/>
      <Route path="/SelectApartments" errorElement={<ErrorPage></ErrorPage>} element={<SelectApartments />} />
      <Route path="/SelectApartments/:id" errorElement={<ErrorPage></ErrorPage>} element={<Apartment/>}/>
    </Route>
  )
)

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
