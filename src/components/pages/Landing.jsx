import React from 'react'
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn, FaAngleDown } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function Landing() {
  return (
    <div className='flex flex-col justify-center items-center w-screen h-screen pt-24'>
      <div className='flex flex-col justify-center items-center bg-white gap-2 p-8 mb-36'>
        <h1 className='text-5xl font-bold'>Rick Liu</h1>
          <h2 className='text-2xl'>Computer Engineering @UWaterloo</h2>
          <ul className='flex gap-8 mt-2'>
              <li className='flex justify-center items-center w-11 h-11 border-2 border-black rounded-xl shadow-links active:translate-x-resume active:translate-y-resume active:shadow-none'>
                <FaLinkedinIn size={20}/>
              </li>
              <li className='flex justify-center items-center w-11 h-11 border-2 border-black rounded-xl shadow-links active:translate-x-resume active:translate-y-resume active:shadow-none'>
                <FiGithub size={20}/>
              </li>
              <li className='flex justify-center items-center w-11 h-11 border-2 border-black rounded-xl shadow-links active:translate-x-resume active:translate-y-resume active:shadow-none'>
                <MdOutlineEmail size={20}/>
              </li>
          </ul>
      </div>
      <button className='absolute flex flex-col items-center justify-center bottom-0 mb-16'>
        <h3 className='select-none text-lg'>Explore</h3>
        <FaAngleDown size={20}/>
      </button>
    </div>
  )
}

export default Landing