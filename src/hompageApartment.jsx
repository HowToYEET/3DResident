import React, { useCallback, useEffect } from "react";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import Model from './HouseModel.jsx'
import Apartment from './ApartmetnModel.jsx'
import * as THREE from "three";



export default function Houses() { 


  return (
    <>
      <Canvas camera={{fov: 50, near: 0.01, far: 100, position:new THREE.Vector3(0,1,10)}}>
        <Perf position="bottom-right"></Perf>
        <OrbitControls enableRotate={false} screenSpacePanning={true} enableZoom={false}/>
        <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />
        <ambientLight intensity={1.5} />
        <Apartment/>
      </Canvas>
    </>
  );
}

