import React, { Suspense, useEffect, useRef, useState } from "react";
import {
  Environment,
  FirstPersonControls,
  Lightformer,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
  useFBX,
  useGLTF,
  useHelper,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Canvas, events, useFrame, useThree } from "@react-three/fiber";
import { useLocation } from "react-router-dom";
import * as THREE from "three";
import * as TWEEN from "@tweenjs/tween.js";
import { CuboidCollider, Physics, RigidBody } from "@react-three/rapier";
import { element } from "three/examples/jsm/nodes/shadernode/ShaderNode";

const _euler = new THREE.Euler(0, 0, 0, "YXZ");

const Control = (apartment) => {
  let moveForward = false;
  let moveBackward = false;
  let moveLeft = false;
  let moveRight = false;
  let moveUp = false;
  let moveDown = false;
  const { camera } = useThree();
  const pointer = new THREE.Vector2();
  const rayCaster = new THREE.Raycaster();

  console.log(camera);
  console.log(apartment);
  const handleMouseMove = (e) => {
    const movementX = e.movementX || e.mozMovementX || e.webkitMovementX || 0;
    const movementY = e.movementY || e.mozMovementY || e.webkitMovementY || 0;
    _euler.setFromQuaternion(camera.quaternion);
    _euler.y -= movementX * 0.001 * 3;
    _euler.x -= movementY * 0.001 * 3;
    camera.quaternion.setFromEuler(_euler);
  };
  const handleMouseDown = (e) => {
    window.addEventListener("mousemove", handleMouseMove);
  };
  const handleMouseUp = (e) => {
    window.removeEventListener("mousemove", handleMouseMove);
  };
  const handleKeyDown = (e) => {
    switch (e.code) {
      case "ArrowUp":
      case "KeyW":
        moveForward = true;
        break;

      case "ArrowLeft":
      case "KeyA":
        moveLeft = true;
        break;

      case "ArrowDown":
      case "KeyS":
        moveBackward = true;
        break;

      case "ArrowRight":
      case "KeyD":
        moveRight = true;
        break;

      case "Space":
        moveUp = true;
        break;

      case "ShiftLeft":
        moveDown = true;
        break;
    }
  };
  const handleKeyUp = (e) => {
    switch (e.code) {
      case "ArrowUp":
      case "KeyW":
        moveForward = false;
        break;

      case "ArrowLeft":
      case "KeyA":
        moveLeft = false;
        break;

      case "ArrowDown":
      case "KeyS":
        moveBackward = false;
        break;

      case "ArrowRight":
      case "KeyD":
        moveRight = false;
        break;

      case "Space":
        moveUp = false;
        break;

      case "ShiftLeft":
        moveDown = false;
        break;
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  });
  var position = {
    x: camera.position.x,
    y: camera.position.y,
    z: camera.position.z,
  };
  function update(delta) {
    pointer.x = camera.position.x;
    pointer.y = camera.position.z;
    rayCaster.setFromCamera(pointer, camera);
    const intersects = rayCaster.intersectObjects(
      apartment.apartment.current.children,
      true
    );
    const actualMoveSpeed = delta * 1.2;
    camera.position.y = 1.6;
    frameLimits(camera.position);
    if (moveForward == true) {
      console.log(position);
      intersects.forEach((element) => {
        if (element.distance < 0.7) {
          camera.position.set(position.x, position.y, position.z);
          console.log(element);
        }
      });
      position = {
        x: camera.position.x,
        y: camera.position.y,
        z: camera.position.z,
      };
      camera.translateZ(-actualMoveSpeed);
      camera.position.y = 1.6;
    }

    if (moveBackward == true) {
      intersects.forEach((element) => {
        if (element.distance < 0.7) {
          camera.position.set(position.x, position.y, position.z);
        }
      });
      position = {
        x: camera.position.x,
        y: camera.position.y,
        z: camera.position.z,
      };
      camera.translateZ(actualMoveSpeed);
      camera.position.y = 1.6;
    }

    if (moveLeft == true) {
      intersects.forEach((element) => {
        if (element.distance < 1.2) {
          camera.position.set(position.x, position.y, position.z);
        }
      });
      position = {
        x: camera.position.x,
        y: camera.position.y,
        z: camera.position.z,
      };
      camera.translateX(-actualMoveSpeed);
      camera.position.y = 1.6;
    }

    if (moveRight == true) {
      intersects.forEach((element) => {
        if (element.distance < 1.2) {
          camera.position.set(position.x, position.y, position.z);
        }
      });
      position = {
        x: camera.position.x,
        y: camera.position.y,
        z: camera.position.z,
      };
      camera.translateX(actualMoveSpeed);
      camera.position.y = 1.6;
    }
    if (moveDown == true) {
      camera.position.y = 1;
      intersects.forEach((element) => {
        if (element.distance < 1) {
          camera.position.y = prevY;
        }
      });
    }
    if (moveUp == true) {
      camera.position.y = 2;

      intersects.forEach((element) => {
        if (element.distance < 1) {
          camera.position.y = prevY;
        }
      });
    }
  }
  function frameLimits(position) {
    if (position.z >= 5.99) {
      position.z = 5.99;
    }

    if (position.z <= -6.5) {
      position.z = -6.5;
    }

    if (position.x <= -7) {
      position.x = -7;
    }

    if (position.x >= 1.9) {
      position.x = 1.9;
    }
  }
  useFrame((_, delta) => {
    update(delta);
    TWEEN.update();
  });
};
const CameraHelperFunc = () => {};
export default function Model3D() {
  const apartmentInfo = useLocation();
  const cameraRef = useRef();
  const model2Load = useGLTF(apartmentInfo.state.Apartment, true, true);
  const apartment = useRef();
  const apartmentRef = useRef();
  const boxRef = useRef();
  console.log(model2Load);
  console.log(apartmentInfo);

  return (
    <>
      <Canvas>
        <Environment background resolution={4096} files={"../dock_2.hdr"}>
          <Lightformer
            form="rect" // circle | ring | rect (optional, default = rect)
            intensity={1} // power level (optional = 1)
            color="white" // (optional = white)
            scale={[10, 5]} // Scale it any way you prefer (optional = [1, 1])
            target={[0, 0, 0]} // Target position (optional = undefined)
          ></Lightformer>
        </Environment>

        <directionalLight castShadow position={[1, 2, 3]} intensity={1} />
        <PerspectiveCamera
          name="camera"
          ref={cameraRef}
          fov={80}
          position={[-2.9, 1.6, 5.94]}
          rotation={[0, 0, 0]}
          makeDefault
        />
        <primitive
          ref={apartment}
          position={[0, 0, 0]}
          object={model2Load.scene}
          scale={1}
          rotation={[0, 0, 0]}
        />

        <Control apartment={apartment} />
      </Canvas>
      <div className="absolute top-60 left-10 w-20 m-4 hover:opacity-100 opacity-75">
        <button
          className="bg-emerald-400 w-40 text-center whitespace-nowrap rounded-md"
          type="button"
          onClick={() => {
            const TweenP = new TWEEN.Tween(cameraRef.current.position)
              .to({ x: -3.4, y: 1.6, z: 4.54 }, 400)
              .start();
            TweenP.onComplete(() => {
              const Start = cameraRef.current.quaternion.clone();
              cameraRef.current.lookAt(new THREE.Vector3(-0.1, 1.6, 2.5));
              const End = cameraRef.current.quaternion.clone();
              cameraRef.current.quaternion.copy(Start);
              new TWEEN.Tween(cameraRef.current.quaternion)
                .to(End, 400)
                .start();
            });
          }}
        >
          CLICK ME
        </button>
      </div>
    </>
  );
}
