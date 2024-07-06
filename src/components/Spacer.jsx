import React from 'react'

function Spacer({icon}) {
  return (
    <div className='flex items-center justify-center w-screen gap-4'>
      <div className='w-1/3 h-[2px] bg-black rounded-full'>
      </div>
      <div className='flex justify-center items-center border-2 border-black w-9 h-9 rounded-full'>
        {icon}
      </div>
      <div className='w-1/3 h-[2px] bg-black rounded-full'>
      </div>
    </div>
  )
}

export default Spacer