import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

const LaptopCanvas = ({ children }) => {
  return (
    <div className='w-full h-full'>      
      <Canvas shadows camera={{ position: [0, 0.5, 4], fov: 30 }}>
        <mesh scale={[0.035, 0.035, 0.035]} position={[0, -0.5, 0]} rotation={[-0.25, -(Math.PI / 4), 0]}>
          <ambientLight intensity={5}/>
          <directionalLight position={[1, 1, 5]} intensity={3.2}/>
          
          {children}

        </mesh>
        </Canvas>
    </div>
    
  )
}

export default LaptopCanvas