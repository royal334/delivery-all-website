import { Icons } from '@/components/Icons'
import Image from 'next/image'
import React from 'react'

const Mission = () => {
  return (
    <div className='container mx-auto lg:px-20'>
      <div className="flex justify-between flex-col md:flex-row w-full items-center py-[40px]">
        <div className="md:max-w-[470px] px-6 lg:px-0">
            <p className='text-sm font-bold text-bright-green font-inter'>MISSION STATEMENT</p>
            <p className='text-black-1 font-inter font-bold text-xl pt-3'>Our Mission</p>
            <p className='text-sm font-poppins text-[#777777] pt-6 '>To provide a seamless, secure, and stress-free delivery experience that connects people, businesses, and locations effortlessly.</p>
            <ul className='text-[#777777] font-poppins text-sm pt-6'>
               <li className='flex items-center'> <Icons.check /> 
               <p className='pl-2'>Speed & Reliability – We ensure fast and timely deliveries.</p></li>
               <li className='flex items-center pt-6'> <Icons.check /> 
               <p className='pl-2'>Multi-Destination Deliveries – Send one package to multiple addresses in a single request.</p></li>
               <li className='flex items-center pt-6'> <Icons.check /> 
               <p className='pl-2'>Real-Time Tracking – Always know where your package is.</p></li>
               <li className='flex items-center pt-6'> <Icons.check /> 
               <p className='pl-2'>Secure Waybill Service – No need to meet the recipient; we handle everything.</p></li>
               
            </ul>
        </div>
        <div className="">
            <Image src='/mission-image.png' alt='mission-image' width={464} height={464}/>
        </div>
      </div>
    </div>
  )
}

export default Mission
