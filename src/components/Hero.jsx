import React, { Suspense } from 'react'
import Navbar from "./Navbar"
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Hero = () => {
  return (
    <div className='hero'>
      <Navbar />
      <div className='containerHero'>
        <div className='left'>
        <p className='Text'>Hi! I'm Shantanu.</p>
        <div className='do'>
          <img src='../../img/line.png' className='line'/>
          <p className='lineText'>What I do</p>
        </div>
          <p className='Text'>I enjoy designing and creating delightful websites.</p>
          <button className='more'>Learn more</button>
        </div>
        <div className='right'>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.5}>
                <MeshDistortMaterial
                  color="#400a0a"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <img src='../../img/moon.png' className='moon'/>
        </div>
      </div>
    </div>
  )
}

export default Hero