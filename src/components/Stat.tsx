import React from 'react'
import Image from 'next/image'

interface StatProps {
     number: string
     text:string
}

function Stat(props:StatProps) {
  return (
    <div className='flex rounded-[100px] border-2 border-border-gray width-[131px] px-6 items-center'>
      <Image src='/tick-circle.png' alt='tick'width={40} height={40} />
      <div className='flex flex-col  p-4'>
          <span className='font-bold text-bluish-green text-2xl'>{props.number}</span>
          <span className='text-[#777777] text-sm'>{props.text}</span>
      </div>
    </div>
  )
}

export default Stat