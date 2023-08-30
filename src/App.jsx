import { Canvas } from "@react-three/fiber"
import { MotionConfig } from "framer-motion"
import { useState } from "react"
import { Scroll, ScrollControls } from "@react-three/drei"


import { Navbar } from "./component/Navbar"
import { Experience } from "./component/Experience"
import { Interface } from "./component/Interface"
import { ScrollManager } from "./component/ScrollManager"



function App() {
 
  const [section, setSection] = useState(0);

  return (
    <>
    <MotionConfig transition={{
      type: "spring",
      mass: 5,
      stiffness: 500,
      damping: 50,
      restDelta: 0.0001,

    }}>
      <Navbar onSectionChange={setSection}/>
      <Canvas shadows camera={{ position: [0, 10, 15], fov: 30 }}>
        <ScrollControls pages={4} damping={0.1}>
          <ScrollManager section={section} onSectionChange={setSection} />
          <Scroll html>
            <Interface/>
          </Scroll>
          <Scroll>
            <Experience section={section}/>
          </Scroll>  
        </ScrollControls>
        
      </Canvas>
      </MotionConfig>
    </>
  )
}

export default App
