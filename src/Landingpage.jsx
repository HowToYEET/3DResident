import React from "react";
import Nav from "./navbar.jsx";
import House from "./Houses.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function LandingPage() {
  const Setup = {
    width: "10%",
    height: "100%"
  }
  return (
    <>
      <Nav />
      <House />
    </>
  );
}
