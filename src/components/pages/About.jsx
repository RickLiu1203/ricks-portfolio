import React from 'react'
import SkillBox from '../SkillBox'
import Spacer from '../Spacer'

function About() {
  return (
    <div className='flex flex-col justify-between w-5/6 h-screen pt-8'>
        <div className='flex flex-col w-full gap-4'>
            <h1 className='text-4xl font-bold bg-white w-fit'>Hi I'm Rick!</h1>
            <p className='text-lg bg-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores velit quasi minus voluptas sunt inventore nemo cupiditate vero in dolor, doloribus perspiciatis qui adipisci dolore similique. Aut architecto rerum suscipit?</p>
            <p className='text-lg bg-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores velit quasi minus voluptas sunt inventore nemo cupiditate vero in dolor, doloribus perspiciatis qui adipisci dolore similique. Aut architecto rerum suscipit?</p>
        </div>
        <div className='flex flex-col w-full h-1/3 gap-4'>
          <h1 className='text-3xl font-bold bg-white w-fit'>I Know</h1>
          <div className='flex justify-center items-center flex-wrap w-full h-full'>
            <SkillBox deg={0} skill={"TypeScript"} color={"#2F74C0"}/>
            <SkillBox deg={4} skill={"React"} color={"#5FD3F3"}/>
            <SkillBox deg={354} skill={"Node.js"} color={"#63995E"}/>
            <SkillBox deg={4} skill={"Next.js"} color={"#000"}/>
            <SkillBox deg={8} skill={"Swift"} color={"#F05237"}/>
            <SkillBox deg={2} skill={"Kotlin"} color={"#8052FF"}/>
            <SkillBox deg={4} skill={"Python"} color={"#F5D048"}/>
            <SkillBox deg={4} skill={"Tailwind"} color={"#38BDF8"}/>
          </div>
        </div>
        <Spacer />
    </div>
    
  )
}

export default About