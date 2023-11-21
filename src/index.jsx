import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import ModelNext from "./ModelShow3D.jsx"
import Landingpage from "./Landingpage.jsx"
const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
        <Landingpage />
    </>

)