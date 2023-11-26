import { useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as THREE from "three";
import React from "react";
import { Text3D } from "@react-three/drei";
export default function HouseModel() {
  const model = useLoader(GLTFLoader, "./ApartmentModel.glb");
  console.log(model);
  const [hovered, set] = useState();
  const houseRef = useRef();
  const clock = new THREE.Clock();
  useFrame(() => {
    houseRef.current.rotation.y += 0.005;
    if (hovered) {
      const time = clock.getElapsedTime();
      const math = (1 / 5) * Math.sin(time) + 1;
      houseRef.current.scale.set(math*0.2, math*0.2, math*0.2);
    } else {
      houseRef.current.scale.set(0.2, 0.2, 0.2);
    }
  });
  let placement = new THREE.Vector3(1,1,0)
  return (
    <>
        <Text3D font="./Yellow Style_Regular.json" position={placement} scale={0.5}>
        Apartments
        <meshBasicMaterial></meshBasicMaterial>
    </Text3D>
      <primitive
        onClick={(e) => {
          console.log("click");
        }}
        onPointerEnter={(e) => {
          set(true);
        }}
        onPointerOut={(e) => set(false)}
        ref={houseRef}
        object={model.scene}
        position-x={2.4}
        position-y={-0.1}
      ></primitive>
    </>
  );
}
