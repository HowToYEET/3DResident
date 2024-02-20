import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Environment, FirstPersonControls, OrbitControls, OrthographicCamera, PerspectiveCamera, useGLTF } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Canvas, events, useFrame, useThree } from '@react-three/fiber'
import { useLocation } from 'react-router-dom'
import * as THREE from 'three'
import * as TWEEN from '@tweenjs/tween.js'
import { Physics, RapierRigidBody, RigidBody } from '@react-three/rapier'


const _euler = new THREE.Euler(0, 0, 0, 'YXZ');


const Control = (ARef) => {
    let moveForward = false;
    let moveBackward = false;
    let moveLeft = false;
    let moveRight = false;
    let moveUp = false;
    let moveDown = false;
    let exploring = false;
    const { camera } = useThree()
    console.log(ARef.ARef.current)
    console.log(camera)

    const handleMouseMove = (e) => {
        const movementX = e.movementX || e.mozMovementX || e.webkitMovementX || 0;
        const movementY = e.movementY || e.mozMovementY || e.webkitMovementY || 0;
        _euler.setFromQuaternion(camera.quaternion)
        _euler.y -= movementX * 0.001 * 3;
        _euler.x -= movementY * 0.001 * 3;
        camera.quaternion.setFromEuler(_euler)
    }
    const handleMouseDown = (e) => {
        exploring = true
        window.addEventListener("mousemove", handleMouseMove);
    }
    const handleMouseUp = (e) => {
        exploring = false
        window.removeEventListener("mousemove", handleMouseMove)
    }
    const handleKeyDown = (e) => {
        switch (e.code) {
            case 'ArrowUp':
            case 'KeyW': moveForward = true; break;

            case 'ArrowLeft':
            case 'KeyA': moveLeft = true; break;

            case 'ArrowDown':
            case 'KeyS': moveBackward = true; break;

            case 'ArrowRight':
            case 'KeyD': moveRight = true; break;

            case "Space": moveUp = true; break;

            case "ShiftLeft": moveDown = true; break;
        }
    }
    const handleKeyUp = (e) => {
        switch (e.code) {
            case 'ArrowUp':
            case 'KeyW': moveForward = false; break;

            case 'ArrowLeft':
            case 'KeyA': moveLeft = false; break;

            case 'ArrowDown':
            case 'KeyS': moveBackward = false; break;

            case 'ArrowRight':
            case 'KeyD': moveRight = false; break;

            case "Space": moveUp = false; break;

            case "ShiftLeft": moveDown = false; break;
        }
    }
    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp)
        return () => {
            window.removeEventListener("mousedown", handleMouseDown)
            window.removeEventListener("mouseup", handleMouseUp)
        }
    },)

    function update(delta) {

        const actualMoveSpeed = delta * 2.0;
        camera.position.y = 1.6
        if (moveForward == true) {
            camera.translateZ(- (actualMoveSpeed));
            camera.position.y = 1.6
        }

        if (moveBackward == true) {
            camera.translateZ(actualMoveSpeed);
            camera.position.y = 1.6
        }

        if (moveLeft == true) {
            camera.translateX(- actualMoveSpeed);
            camera.position.y = 1.6
        }
        if (moveRight == true) {
            camera.translateX(actualMoveSpeed);
            camera.position.y = 1.6
        }
        if (moveDown == true) {
            camera.position.y = 1
        }
        if (moveUp == true) {
            camera.position.y = 2
        }
    };

    useFrame((_, delta) => {
        update(delta)
        TWEEN.update()
    })

}

export default function Model3D() {
    const apartmentInfo = useLocation();
    const cameraRef = useRef();
    const model2Load = useGLTF(apartmentInfo.state.Apartment)
    const rCamera = useRef();
    const apartmentRef = useRef();
    console.log(model2Load)
    console.log(apartmentInfo)
    return <>
        <Canvas  >
            <Environment background files={"../limehouse_4k.hdr"} />
            <directionalLight castShadow position={[1, 2, 3]} intensity={1} />
            <PerspectiveCamera name='camera' ref={cameraRef} fov={80} position={[-2.9, 1.6, 5.94]} rotation={[0, 0, 0]} makeDefault />
            <primitive object={model2Load.scene} layers={1} />
            <Control /*RigidCamera={rCamera}*/ ARef={apartmentRef} />
        </Canvas>
        <div className='absolute top-60 left-10 w-20 m-4 hover:opacity-100 opacity-75'>
            <button className='bg-emerald-400 w-40 text-center whitespace-nowrap rounded-md' type="button" onClick={() => {
                const TweenP = new TWEEN.Tween(cameraRef.current.position).to({ x: -3.4, y: 1.6, z: 4.54 }, 400).start()
                TweenP.onComplete(() => {
                    const Start = cameraRef.current.quaternion.clone();
                    cameraRef.current.lookAt(new THREE.Vector3(-0.1, 1.6, 2.5))
                    const End = cameraRef.current.quaternion.clone();
                    cameraRef.current.quaternion.copy(Start)
                    new TWEEN.Tween(cameraRef.current.quaternion).to(End, 400).start()
                })
            }
            }>CLICK ME</button>
        </div>

    </>
}

