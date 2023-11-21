import React from 'react'
import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { AmbientLight } from 'three'
export default function Experience3()
{
    const model = useLoader(GLTFLoader, "./apartment.glb")
    console.log(model)
    return <>
    <Perf position="top-right"></Perf>
    <OrbitControls/>
    <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 4.5 } />
        <ambientLight intensity={ 1.5 } />
     <primitive object={model.scene}></primitive>
    </>
}