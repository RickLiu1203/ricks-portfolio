import React, { useState, useEffect } from 'react'
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn, FaAngleDown } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaPerson } from "react-icons/fa6";
import Spacer from '../Spacer';

function Landing() {
  const [initialBtn, setInitialBtn] = useState([true, true, true]);

  useEffect(() => {
    const buttonStates = [
      [false, true, true],
      [false, false, true],
      [false, false, false]
    ];
  
    let index = 0;
    const intervalId = setInterval(() => {
      setInitialBtn(buttonStates[index]);
      index += 1;
      if (index >= buttonStates.length) {
        clearInterval(intervalId);
      }
    }, 400);
  
    return () => clearInterval(intervalId);
  }, []);
  

  return (
    <div className='w-5/6'>
      <div className='flex flex-col justify-center items-center w-full h-screen pt-24 relative'>
        <div className='flex flex-col justify-center items-center bg-white gap-2 p-8 mb-32'>
          <h1 className='text-6xl font-bold'>Rick Liu</h1>
            <h2 className='text-2xl'>Computer Engineering @UWaterloo</h2>
            <div className='flex gap-8 mt-2'>
                <button className={`flex justify-center items-center w-11 h-11 border-2 border-black rounded-xl shadow-links active:translate-x-resume active:translate-y-resume active:shadow-none ${initialBtn[0] ? 'translate-y-resume translate-x-resume shadow-none bg-white' : 'bg-teal-100'} ${initialBtn[2] && 'pointer-events-none'}`}>
                  <FaLinkedinIn size={20}/>
                </button>
                <button className={`flex justify-center items-center w-11 h-11 border-2 border-black rounded-xl shadow-links active:translate-x-resume active:translate-y-resume active:shadow-none ${initialBtn[1] ? 'translate-y-resume translate-x-resume shadow-none bg-white' : 'bg-teal-100'} ${initialBtn[2] && 'pointer-events-none'}`}>
                  <FiGithub size={20}/>
                </button>
                <button className={`flex justify-center items-center w-11 h-11 border-2 border-black rounded-xl shadow-links active:translate-x-resume active:translate-y-resume active:shadow-none ${initialBtn[2] ? 'translate-y-resume translate-x-resume shadow-none bg-white pointer-events-none' : 'bg-teal-100'}`}>
                  <MdOutlineEmail size={20}/>
                </button>
            </div>
        </div>
        <button className='absolute flex flex-col items-center justify-center bottom-0 mb-16'>
          <h3 className='select-none text-lg'>Explore</h3>
          <FaAngleDown size={20}/>
        </button>
      </div>
      <Spacer icon={<FaPerson size={20}/>}/>
    </div>
  )
}

export default Landing