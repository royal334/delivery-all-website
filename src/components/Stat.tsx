import React from 'react'
import { Icons } from './Icons'

interface StatProps {
     number: string
     text:string
}

function Stat(props:StatProps) {
  return (
    <div className='flex rounded-[100px] bg-white border-2 border-border-gray py-[20px] px-6 items-center'>
      <Icons.tickCircle/>
      <div className='flex flex-col  ml-6'>
          <span className='font-bold text-bluish-green text-xl font-inter'>{props.number}</span>
          <span className='text-[#777777] text-sm font-poppins'>{props.text}</span>
      </div>
    </div>
  )
}

export default Stat