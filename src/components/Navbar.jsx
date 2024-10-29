import React from 'react'
import { IoDocumentTextOutline } from "react-icons/io5";

function Navbar() {
  return (
    <div className='flex justify-center items-center w-[85%] h-24 border-2 border-black rounded-xl shadow-lg bg-white z-50 top-6 fixed'>
      <div className='flex flex-row justify-between items-center w-full h-full px-10'>
          <h1 className='font-bold text-4xl'>
              RLIU
          </h1>
          <nav className='flex flex-row gap-5 text-lg'>
              <button>About</button>
              <button>Projects</button>
              <button>Experience</button>
              <button>Cool</button>
              <button className='flex items-center gap-2 border-2 border-black bg-teal-100 px-2 py-1 shadow-resume rounded-md active:translate-x-resume active:translate-y-resume active:shadow-none'>
              Resume
              <IoDocumentTextOutline size={20}/>
              </button>
          </nav>
      </div>
    </div>
  )
}

export default Navbar