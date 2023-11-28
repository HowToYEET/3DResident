import React from "react";
import Nav from "./navbar.jsx";
import { Outlet} from "react-router-dom";
import { Canvas } from "@react-three/fiber";
export default function LandingPage() {
  return (
    <>
    <header>
      <Nav />
    </header>
    <div className="overflow-auto" id="ContentCenter"> <Outlet/> </div>
    </>
  );
}
