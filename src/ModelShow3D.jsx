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
import { Canvas, events, useFrame, useThree } from "@react-three/fiber";
import { useLocation } from "react-router-dom";
import * as THREE from "three";
import * as TWEEN from "@tweenjs/tween.js";

const _euler = new THREE.Euler(0, 0, 0, "YXZ");
const MINIMUM_DIST = 0.7;
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
  const apartmentInfo = useLocation();
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
      console.log(camera);
      intersects.forEach((element) => {
        if (element.distance < MINIMUM_DIST) {
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
        if (element.distance < MINIMUM_DIST) {
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
        if (element.distance < MINIMUM_DIST) {
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
        if (element.distance < MINIMUM_DIST) {
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
  }
  function frameLimits(position) {
    if (position.z >= apartmentInfo.state.framelimits.z1) {
      position.z = apartmentInfo.state.framelimits.z1;
    }

    if (position.z <= apartmentInfo.state.framelimits.z2) {
      position.z = apartmentInfo.state.framelimits.z2;
    }

    if (position.x <= apartmentInfo.state.framelimits.x1) {
      position.x = apartmentInfo.state.framelimits.x1;
    }

    if (position.x >= apartmentInfo.state.framelimits.x2) {
      position.x = apartmentInfo.state.framelimits.x2;
    }
  }
  useFrame((_, delta) => {
    update(delta);
    TWEEN.update();
  });
};

export default function Model3D() {
  const MAX_RETRIES = 3; // Maximum number of retries
  const RETRY_DELAY = 2000; // Delay in milliseconds between retries
  const [retryCount, setRetryCount] = useState(0);
  const apartmentInfo = useLocation();
  const cameraRef = useRef(null);
  const model2Load = useGLTF(apartmentInfo.state.ApartmentPath, true, true);
  const apartment = useRef();
  const btnInfo = apartmentInfo.state.Annotation;
  console.log(model2Load);
  console.log(apartmentInfo);
  const buttons = btnInfo.map(({ title, position, lookAt }) => (
    <button
      className="bg-emerald-400 w-40 text-center whitespace-nowrap rounded-md my-2 hover:bg-emerald-600"
      type="button"
      onClick={() => {
        if (cameraRef) {
          const TweenP = new TWEEN.Tween(cameraRef.current.position)
            .to({ x: position.x, y: position.y, z: position.z }, 600)
            .easing(TWEEN.Easing.Cubic.Out)
            .start();
          TweenP.onComplete(() => {
            const Start = cameraRef.current.quaternion.clone();
            cameraRef.current.lookAt(
              new THREE.Vector3(lookAt.x, lookAt.y, lookAt.z)
            );
            const End = cameraRef.current.quaternion.clone();
            cameraRef.current.quaternion.copy(Start);
            new TWEEN.Tween(cameraRef.current.quaternion)
              .to(End, 400)
              .easing(TWEEN.Easing.Cubic.Out)
              .start();
          });
        }
      }}
    >
      {title}
    </button>
  ));
  return (
    <>
      <Canvas id="canvas">
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
          position={apartmentInfo.state.startingCameraPosition}
          rotation={apartmentInfo.state.target}
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
      <div className="absolute top-60 left-10 w-20 m-4 opacity-75">
        {buttons}
      </div>
    </>
  );
}
