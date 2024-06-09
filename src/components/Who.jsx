import React from 'react'
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";

const Who = () => {
  const scrollToComponent = (componentId) => {
    const component = document.getElementById(componentId);
    if (component) {
      component.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='who' id="who">
      <div className='containerWho'>
        <div className='left'> 
        <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
              <OrbitControls enableZoom={false} autoRotate />
          </Canvas>
        </div>
        <div className='right'>
        <p className='topic'>Introduction</p>
        <h1 className='h1'>Overview.</h1>
        <div className='do'>
          <p className='lineText'>Your friendly neighbourhood front-end developer.</p>
          <p className='lineTexts'>I am a skilled web developer with experience in javascript, typescript and expertise in frameworks like React, Node.js, Three.js etc. I am a quick learner who can create efficient, scalable and user-friendly solutions that solves real-world problems. Let's Work together.</p>
          <button className='more' onClick={() => scrollToComponent('works')}>See my works.</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Who