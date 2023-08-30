import { Float, OrbitControls } from "@react-three/drei"
import { motion } from "framer-motion-3d"

import { Avatar } from "./Raw"
import { Flower } from "./Flower"
import { Cloud } from "./Cloud"
import { Star } from "./Star"
import { useThree } from "@react-three/fiber"
import { Leva, useControls } from "leva"

export const Experience = (props) => {

    const { section } = props;
    const { viewport } = useThree();

    const isMobile = window.innerWidth < 768;
    const responsiveRatio = viewport.width / 18;

    const {animation} = useControls({
        animation: {
        value: "Floating",
        options: ["Floating", "Waving", "Hello"],
        }
      });

    // Define values for section and responsive mobile version
    let avatarPositionY = -2; // Default Y position
    let avatarPositionX = 4.2; // Default X position

    if (section === 1) {
        avatarPositionY = -viewport.height - 2;
        avatarPositionX = -4.2;
    }

    if (isMobile && section === 0) {
        avatarPositionY = -4.2;
        avatarPositionX = responsiveRatio + 1.2;
    }

    if (isMobile && section === 1) {
        // Adjust values for mobile
        avatarPositionY = -viewport.height - 2; 
        avatarPositionX = (responsiveRatio * 0.125) - 0.8; 
    }

    return (
        <>
        <mesh>                           
            <ambientLight color={0xFFE9D0} intensity={1.5}/>  
            <directionalLight position={[2, 5, 3]} intensity={2} color={0xFFE9D0}/>
            <group> 
            <motion.group 
                initial={{scale:0, opacity: 0}}
                animate={{
                    scaleX: isMobile && section === 1  ? 0.8 : 1.05,
                    scaleY: isMobile && section === 1  ? 0.8 : 1.05,
                    scaleZ: isMobile && section === 1  ? 0.8 : 1.05,
                    opacity:1, 
                    transitionDelay: 0.6,
                    y: avatarPositionY,
                    x: avatarPositionX,
                    // y: section === 1 ? (-viewport.height) -2 : -2,
                    // x: section === 1 ? -4.2 : 4.2,
                    rotateY: section === 1 ? (Math.PI / 4) : 0,
                    rotateX: section === 1 ? 0.8 : 0,
                }}
            >
                <Avatar animation={section === 0 ? "Floating" : "Hello"}/>
            </motion.group> 
            <motion.group 
                initial={{scale: 0.2, opacity:0}}
                animate={{scale:1, opacity:1, transitionDelay: 0.6}}
            >      
            <Float>
                <mesh 
                    scale={isMobile ? [3, 3, 3] : [3.5, 3.5, 3.5]} 
                    position={isMobile ? [3, 1, 1] : [6, 1, -2]}
                >
                    <Flower/>            
                </mesh>
            </Float>
            <Float>
                <mesh 
                    scale={isMobile ? [3, 3, 3] : [2.8, 2.8, 2.8]} 
                    position={isMobile ? [-2, -5, 0] : [-1, -6, -2]}>
                    <Flower/>            
                </mesh>
            </Float>
            <Float>
                <mesh 
                    scale={isMobile ? [3.2, 3.2, 3.2] : [5, 5, 5]} 
                    position={isMobile ? [-0.6, 2, 2] : [-5, 0, 2]}
                >
                <Cloud/>            
                </mesh>
            </Float>
            <Float>
                <mesh 
                    scale={isMobile ? [1.2, 1.2, 1.2] : [1.6, 1.6, 1.6]} 
                    position={isMobile ? [-3, 1, 2] : [-1, 2, 2]}
                >
                <Star/>           
                </mesh>
            </Float>
            <Float>
                <mesh scale={[1.6, 1.6, 1.6]} position={[6, -3, 2]}>
                <Star/>           
                </mesh>
            </Float>
            </motion.group> 
            </group> 

            <Leva hidden/>
            
        </mesh>            
        </>
    )
}