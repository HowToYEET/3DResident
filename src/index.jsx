import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import Model from "./ModelLoading.jsx"
import ModelNext from "./ModelLoadingnext.jsx"
import Ultimate from "./ulitmate.jsx"
const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas
    >

        {/*<Experience/>*/}
        <ModelNext />
        {/*<Model />*/}
        {/*<Ultimate/>*/}
    </Canvas>
)