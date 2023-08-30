import React, { useState } from 'react';
import { motion } from 'framer-motion';

import arrowL from '../assets/arrow-left.png';
import arrowR from '../assets/arrow-right.png';
import code from '../assets/code.png';
import { projectData } from '../data';

const ProjectSlide = () => {
    const transition = {
        type: "spring",
        duration: 6,
        mass: 5,
        stiffness: 500,
        damping: 50,
        restDelta: 0.0001,
    };

    const [selected, setSelected] = useState(0);
    const slideLength = projectData.length;


    const handleClick = (index) => {
        setSelected(index);
    };

    return (
        <div className="flex flex-col w-screen items-center mt-8 md:mt-24">
            <h1 className="head_text uppercase text-3xl text-center mb-10 md:mb-0">Project</h1>

            {/* SLIDER CONTAINER */}
            <div className="flex w-full h-[400px] px-12 md:px-24 mt-2 md:mt-12 items-center ">
                <button
                    className="gradient_color hidden md:w-8 md:h-8 rounded-full p-2 md:flex items-center justify-center mx-4 hover:scale-105 hover:shadow-sm"
                    onClick={() => {
                        setSelected((prev) => (prev === 0 ? slideLength - 1 : prev - 1));
                    }}
                >
                    <img src={arrowL} alt="arrow-left" className="object-cover" />
                </button>
                <button
                    className="bg-[#232323] md:hidden w-8 h-8 rounded-full p-2 flex items-center justify-center mx-2 hover:scale-105 hover:shadow-sm z-50"
                    onClick={() => {
                        setSelected((prev) => (prev === 0 ? slideLength - 1 : prev - 1));
                    }}
                >
                    <img src={arrowL} alt="arrow-left" className="object-cover" />
                </button>
                <div key={selected} className="flex flex-col md:flex-row shadow-md shadow-gray-200 bg-[#ffffff4d] backdrop-blur-md rounded-3xl">
                    {/* LEFT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={transition}
                        className="flex flex-col flex-1 w-full md:w-1/2 p-8 gap-2 md:gap-8"
                    >
                        <h3 className="head_text text-lg md:text-2xl uppercase">{projectData[selected].name}</h3>
                        <span className="w-full md:w-3/4 text-justify text-xs md:text-base tracking-wider">{projectData[selected].desc}</span>
                        <div>
                            <h5 className="font-semibold text-sm mt-2 md:text-base">Tools I used:</h5>
                            <ul className="flex gap-4 text-xs md:text-base">
                                {projectData[selected].skills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex mt-2 gap-4 md:gap-8 items-center">
                            <a href={`http://${projectData[selected].code}`} target="_blank" rel="noopener noreferrer">
                            <button className="rounded-full p-2 md:p-4 bg-[#666] border border-[#fff] w-max hover:scale-105 hover:shadow-sm transition-all ease-in-out">
                                <img src={code} alt="icon" className="w-4 h-4  md:w-6 md:h-6 object-contain" />
                            </button>
                            </a>
                            <a href={`http://${projectData[selected].url}`} target="_blank" rel="noopener noreferrer">
                            <button className="gradient_color rounded-full py-2 px-8 w-max shadow-gray-300 shadow-md hover:scale-105 hover:shadow-sm transition-all ease-in-out">
                                <p className="body text-sm md:text-base uppercase text-white font-semibold">VIEW LIVE</p>
                            </button>
                            </a>
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE */}
                    <motion.div 
                        initial={{opacity:0, x: 100}}
                        whileInView={{opacity:1, x: 0}}
                        whileHover={{scale:1.1}}
                        transition={transition}
                        key={projectData[selected].id} 
                        className="flex flex-1 justify-center w-full h-full"
                    >
                        <img src={projectData[selected].image} alt="project" className='w-[250px] h-[200px] md:w-[450px] md:h-[400px] cursor-pointer'/>                  
                    </motion.div>
                </div>

                <button
                    className="gradient_color hidden md:w-8 md:h-8 rounded-full p-2 md:flex items-center justify-center mx-4 hover:scale-105 hover:shadow-sm"
                    onClick={() => {
                        setSelected((prev) => (prev === slideLength - 1 ? 0 : prev + 1));
                    }}
                >
                    <img src={arrowR} alt="arrow-left" className="object-cover" />
                </button>
                <button
                    className="bg-[#232323] md:hidden w-8 h-8 rounded-full p-2 flex items-center justify-center mx-2 hover:scale-105 hover:shadow-sm z-50"
                    onClick={() => {
                        setSelected((prev) => (prev === slideLength - 1 ? 0 : prev + 1));
                    }}
                >
                    <img src={arrowR} alt="arrow-left" className="object-cover" />
                </button>
                
            </div>
            <div className="hidden md:flex gap-6 my-4">
                {projectData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleClick(index)}
                        className={`${
                            selected === index ? "gradient_color" : "bg-transparent border-[#fff] border-2"
                        } w-4 h-4 rounded-full hover:scale-105`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectSlide;
