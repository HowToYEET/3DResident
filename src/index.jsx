import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Landingpage from "./Landingpage.jsx";
import ErrorPage from './Error-page.jsx'
import { createBrowserRouter, RouterProvider, Route, NavLink, createRoutesFromElements } from "react-router-dom";
import Houses from "./Houses";
import SelectHouses from './SelectHouses'

const root = ReactDOM.createRoot(document.querySelector("#root"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Landingpage></Landingpage>}>
      <Route index element={<Houses></Houses>}></Route>
      <Route path="/Home" element={<Houses></Houses>}/>
      <Route path="/SelectHouses" element={<SelectHouses></SelectHouses>}/>
    </Route>
  )
)

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
