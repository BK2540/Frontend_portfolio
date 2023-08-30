import { useState } from 'react';
import logo from '../assets/logo.png';
import tab from '../assets/tab.png';
import close from '../assets/close.png';

export const Navbar = (props) => {

    const {onSectionChange} = props;

    const [isOpened, setIsOpened] = useState(false);

    return (
        <div className="fixed left-auto top-6 w-full  flex items-center justify-center z-50 ">
            <div className="hidden md:flex gap-12 cursor-pointer w-max px-20 py-4 bg-[#fffaf700] hover:bg-[#fffaf780] backdrop-blur-sm rounded-full">
                
                  <img src={logo} alt="logo" className='w-14 h-14 object-contain' onClick={() => onSectionChange(0)}/>
                
                <MenuButton label="Home" onClick={() => onSectionChange(0)}>Home</MenuButton>
                <MenuButton label="About" onClick={() => onSectionChange(1)}>About</MenuButton>
                <MenuButton label="Projects" onClick={() => onSectionChange(2)}>Projects</MenuButton>
                <MenuButton label="Contact" onClick={() => onSectionChange(3)}>Contact</MenuButton>
                
            </div>

            {/* MOBILE TAB */}
              <div className='w-1/2 h-screen fixed right-8 top-8 flex justify-end px-4 md:hidden'>
                <div>
                  {!isOpened ? (
                      <img src={tab} alt='menu' className='w-[32px] h-[24px] cursor-pointer' onClick={()=>setIsOpened(true)}/>
                  ) : (
                      <img src={close} alt='menu' className='w-[32px] h-[24px] cursor-pointer' onClick={()=>setIsOpened(false)}/>
                  )}                 
                  
                </div>                 
              </div>

              {/* MENU */}
              {isOpened && (
                  <div className='absolute right-0 top-8 w-1/2 h-screen px-12 bg-[#ffffff70] backdrop-blur-md gap-8 flex flex-col items-center justify-center md:hidden'>
                  
                    <MenuButton label="Home" onClick={() => onSectionChange(0)} >Home</MenuButton>
                    <MenuButton label="About" onClick={() => onSectionChange(1)} >About</MenuButton>
                    <MenuButton label="Project" onClick={() => onSectionChange(2)}>Projects</MenuButton>
                    <MenuButton label="Contact" onClick={() => onSectionChange(3)}>Contact Me</MenuButton>
                  
              </div>
              )}
              
        </div>

        
    );
};

const MenuButton = (props) => {
    const { label, onClick } = props;
    return (
      <button
        onClick={onClick}
        className="body uppercase text-lg mt-4 md:text-base md:mt-0 hover:bg-gradient-to-r from-blue-300 to-lime-400 hover:bg-clip-text hover:text-transparent opacity-50 hover:opacity-100"
      >
        {label}
      </button>
    );
  };