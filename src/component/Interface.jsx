import { motion } from "framer-motion"; 
import emailjs from '@emailjs/browser';

import ProjectSlide from "./ProjectSlide";
import telephone from '../assets/telephone-fill.svg';
import envelope from '../assets/envelope.svg';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import scroll from '../assets/scroll.png';
import resume from '../document/resume.pdf';
import { useRef } from "react";


const Section = (props) => {
    const { children } =props;    

    return (
    <motion.section 
    initial={{
        opacity: 0,
        y: 50,
    }}
    whileInView={{
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            delay: 0.6,
        }
    }}
    className={`w-screen h-screen p-8 max-w-screen-2xl mx-auto flex flex-col justify-center items-center`}>
        { children }
    </motion.section>
    )
}

export const Interface = () => {

    const form = useRef();

    return (
        <div className="flex flex-col items-center overflow-hidden">
        <HomeSection/>
        <AboutSection/>
        <ProjectSection/>
        <ContactSection form={form}/>
        </div>        
    );
};

const HomeSection = () => {


    return (
        <Section>
            <div className="flex flex-col items-start gap-8 py-8 px-12 bg-[#fffaf700] shadow-lg backdrop-blur-md rounded-2xl">
                <motion.h1 
                    initial={{
                        opacity: 0,
                        y: 50,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 1,
                            delay: 0.65,
                        }
                    }}
                    className="body text-fill-transparent text-stroke-black text-stroke font-semibold text-4xl md:text-6xl"
                >Hello,
                </motion.h1>
                <motion.span
                    initial={{
                    opacity: 0,
                    y: 50,
                    }}
                    whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                    duration: 1,
                    delay: 0.8,
                    }
                    }}
                    className="head_text text-2xl md:text-5xl font-bold"
                    >I'm Nuttida Nualnooch
                    </motion.span>
                    <motion.span
                        initial={{
                            opacity: 0,
                            y: 50,
                        }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 1.2,
                            delay: 0.9,
                        }
                    }}
                    className="head_text text-[#2323239f] tracking-wider text-sm md:text-lg text-center font-base"
                    >Frontend Developer
                    </motion.span>

                    <div className="hidden md:flex justify-end md:w-[96px] md:h-[96px] absolute bottom-[-50px] right-[-50px]"> 
                        <img src={scroll} alt="scroll-down" />                    
                    </div>              
            </div>
                      
        </Section>
    );
};

const AboutSection = () => {

    return (
        <Section className="relative">
            <div className="flex flex-col w-1/2 absolute mr-6 md:mr-24 right-0 items-start gap-6 p-6 rounded-lg bg-[#fffaf71e] backdrop-blur-md" >
                <h1 className="head_text uppercase text-2xl md:text-5xl font-semibold">About</h1>
                <span className="body text-xs md:text-base leading-4 md:leading-8 tracking-wider font-normal text-justify">
                    Hi, my name is Nuttida Nualnooch, a junior front-end developer who passionate about bringing concepts to life and improving user experience through website building. <br/>
                    <br/> Thank you for taking the time to get to know me and my passion for creating.
                </span>                
                
                <a href={resume} target="_blank" rel="noopener noreferrer">
                <button className="body py-2 px-8 rounded-full text-xs bg-gradient-to-r from-blue-300 to-lime-400 text-white md:text-base hover:border-0 hover:shadow-sm hover:shadow-gray-400 hover:scale-105">
                    Resume                                       
                </button>
                </a>

            </div>
            
        </Section>
    );
};

const ProjectSection = () => {
    return (
        <Section>
            <ProjectSlide/>
        </Section>
    );
};

const ContactSection = ({ form }) => {

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_7j6bn7b', 'template_iiswiam', form.current, 'ZXIJ86zQBg1RbHNUA')
          .then((result) => {
              console.log(result.text);
              alert("Email sent successfully!");
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <Section>
            <div className="flex flex-col flex-wrap md:flex-row px-6 md:px-24 justify-between gap-4 w-full md:mt-0 mt-4">
                {/* LEFT SIDE */}
                <div className="flex flex-col gap-4 md:gap-12 flex-1 justify-start items-start">
                    <div>
                        <h2 className="head_text tracking-wider text-fill-transparent text-stroke-black text-stroke font-semibold text-3xl md:text-6xl">Let's</h2>
                        <h2 className="head_text font-semibold tracking-wider text-3xl md:text-6xl">Connect</h2>
                    </div>

                    <div className="flex gap-8">
                        <img src={telephone} alt="telephone"/>
                        <p>093-031-8927</p>
                    </div>

                    <div className="flex gap-8">
                        <img src={envelope} alt="telephone"/>
                        <p>nuttina.nualnooch@gmail.com</p>
                    </div>

                    <div className="flex gap-8 cursor-pointer">
                        <a href="https://github.com/BK2540" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="github"/>
                        </a>
                        <a href="https://www.linkedin.com/in/nuttida-nualnooch-191932265" target="_blank" rel="noopener noreferrer">                
                            <img src={linkedin} alt="linkedin"/>  
                        </a>
                    </div>             
                
                </div>

                {/* RIGHT SIDE */}
                <div className="flex flex-1 w-full h-full justify-center bg-[#ffffff4b] backdrop-blur-sm rounded-lg mt-4">  
                                 
                    <form ref={form} className="w-full p-8" onSubmit={sendEmail}> 

                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400 peer" placeholder=" " />
                        <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#232323] peer-focus:dark:text-[#232323] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
                    </div>

                    <div className="relative z-0 w-full mb-6 group">
                        <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400 peer" placeholder=" " />
                        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#232323] peer-focus:dark:text-[#232323] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>

                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="messenge" id="messenge" className="block py-2.5 px-0 w-full h-[100px] text-sm text-gray-600 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400 peer" placeholder=" " />
                        <label htmlFor="messenge" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#232323] peer-focus:dark:text-[#232323] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
                    </div>                     
                    
                    {/* <input type="text" id="message" className="block h-[100px] p-2.5 w-full mb-6 text-sm text-[#232323] bg-transparent rounded-lg border border-gray-500" placeholder="Message..."></input>   */}
                    <button type="submit" className="body py-2 px-8 rounded-full bg-gradient-to-r from-blue-300 to-lime-400 text-white hover:border-0 hover:shadow-md hover:scale-105">Submit</button>
                    </form>

                </div>
            </div>
            
        </Section>
    );
};