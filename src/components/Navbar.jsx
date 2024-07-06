import React from 'react'
import { IoDocumentTextOutline } from "react-icons/io5";

function Navbar() {
  return (
    <div className='fixed flex flex-row justify-between items-center w-full h-24 py-6 px-20 border-b-2 border-b-black bg-white z-50'>
        <h1 className='font-bold text-4xl'>
            RLIU
        </h1>
        <nav className='flex flex-row gap-5 text-lg'>
            <button>About</button>
            <button>Projects</button>
            <button>Experience</button>
            <button>Cool</button>
            <button className='flex items-center gap-2 border-2 border-black px-2 py-1 shadow-resume rounded-md active:translate-x-resume active:translate-y-resume active:shadow-none'>
            Resume
            <IoDocumentTextOutline size={20}/>
            </button>
        </nav>
    </div>
  )
}

export default Navbar