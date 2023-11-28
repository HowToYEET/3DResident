import React from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

export default function Model3D()
{
    const model2Load = useGLTF("./9thproject.glb")
    return <Canvas>
    <Perf position="top-right"></Perf>
    <OrbitControls/>
    <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 4.5 } />
        <ambientLight intensity={ 1.5 } />
     <primitive object={model2Load.scene}></primitive>
    </Canvas>
}
useGLTF.preload("./9thproject.glb")