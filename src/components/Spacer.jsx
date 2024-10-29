import React from 'react'

function Spacer({icon}) {
  return (
    <div className='flex items-center justify-center w-full gap-4 py-7 bg-white'>
      <div className='w-1/2 h-[2px] bg-black rounded-full'>
      </div>
      <div className='flex flex-shrink-0 justify-center items-center border-2 border-black w-10 h-10 rounded-full'>
        {icon}
      </div>
      <div className='w-1/2 h-[2px] bg-black rounded-full'>
      </div>
    </div>
  )
}

export default Spacer