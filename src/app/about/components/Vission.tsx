import { Icons } from '@/components/Icons'
import Image from 'next/image'
import React from 'react'

const Vission = () => {
  return (
    <div className='container mx-auto py-[50px] lg:px-20 '>
      <div className="flex justify-between   flex-col-reverse md:flex-row  w-full md:items-center ">
      <div className="pt-[40px] lg:pt-0">
                  <Image className='object-cover' src='/vission-image.png' alt='mission-image' width={464} height={464}/>
        </div>
        
        <div className="md:max-w-[470px] px-6 lg:px-0">
            <p className='text-sm font-bold text-bright-green font-inter'>VISION STATEMENT</p>
            <p className='text-black-1 font-inter font-bold text-xl pt-3'>Our Vision</p>
            <p className='text-sm font-poppins text-[#777777] pt-6 '>We are dedicated to making logistics smarter, faster, and more convenient. Our team is constantly innovating to enhance your delivery experience, ensuring every package is handled with care and reaches its destination without hassle.</p>
            <ul className='text-[#777777] font-poppins text-sm pt-6'>
               <li className='flex items-center'> <Icons.check /> 
               <p className='pl-2'>For Everyone – No matter who you are, if you need to send a package, DeliverAll is for you.</p></li>
               <li className='flex items-center pt-6'> <Icons.check /> 
               <p className='pl-2'>Affordable & Transparent Pricing – No hidden fees, just straightforward pricing.</p></li>
               <li className='flex items-center pt-6'> <Icons.check /> 
               <p className='pl-2'>Smart Logistics – Technology-driven tracking and routing for efficiency.</p></li>
              
               
            </ul>
        </div>
       
      </div>
    </div>
  )
}

export default Vission
