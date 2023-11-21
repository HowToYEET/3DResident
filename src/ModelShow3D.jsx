import React from 'react'
import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

export default function Model3D()
{
    const model = useLoader(GLTFLoader, "./9thproject.glb")
    console.log(model)
    return <>
    <Perf position="top-right"></Perf>
    <OrbitControls/>
    <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 4.5 } />
        <ambientLight intensity={ 1.5 } />
     <primitive object={model.scene}></primitive>
    </>
}