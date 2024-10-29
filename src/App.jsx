import { useState } from 'react'
import Landing from './components/pages/Landing'
import Navbar from './components/Navbar'
import Projects from './components/pages/Projects'
import Spacer from './components/Spacer'
import { FaRegFolderOpen } from "react-icons/fa6";
import About from './components/pages/About'

function App() {

  return (
    <div className='flex flex-col items-center w-screen'>
      <Navbar />
      <Landing />
      <About />
      <Projects />
    </div>
  )
}

export default App
