import React from 'react';
import { FaPython } from "react-icons/fa";

function SkillBox({deg, skill, color, icon}) {
    return (
        <div
            className='relative flex justify-center items-center w-36 h-16 rounded-md bg-white border-black border-2 m-4'
            style={{ transform: `rotate(${deg}deg)` , boxShadow: `3px 3px 0 ${color}`}}
        >   
            <div className='absolute w-1 h-1 bg-black rounded-full left-1.5 top-1.5'></div>
            <div className='absolute w-1 h-1 bg-black rounded-full right-1.5 top-1.5'></div>
            <div className='absolute w-1 h-1 bg-black rounded-full left-1.5 bottom-1.5'></div>
            <div className='absolute w-1 h-1 bg-black rounded-full right-1.5 bottom-1.5'></div>
            <h3 className='font-semibold text-lg'>{skill}</h3>
        </div>
    );
}

export default SkillBox;
