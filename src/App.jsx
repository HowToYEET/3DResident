import React, { useState } from "react";
import Nav from "./navbar.jsx";
import { Outlet } from "react-router-dom";
import { useGLTF } from "@react-three/drei";
import { BsCameraReelsFill } from "react-icons/bs";
import { CgController } from "react-icons/cg";
export default function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <div className="overflow-auto" id="ContentCenter"> <Outlet /> </div>
    </>
  );
}
