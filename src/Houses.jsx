import React, { useEffect } from "react";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import Model from './HouseModel.jsx'
import Apartment from './ApartmetnModel.jsx'



export default function Houses() { 

  const Setup = {
    width: "50%",
    height: "100%"
  }
  return (
    <>
      <Canvas camera={{fov: 45, near: 0.01, far: 100, position:[0,2,8]}}>
        <Perf position="top-right"></Perf>
        <OrbitControls />
        <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />
        <ambientLight intensity={1.5} />
        <Model/>
        <Apartment/>
      </Canvas>
    </>
  );
}

