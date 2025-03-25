import { Icons } from '@/components/Icons'
import React from 'react'
import TrackingForm from './TrackingForm'

const TrackingHeroSection = () => {
  return (
    <section className="tracking">
        <div className="py-[120px] px-6 lg:px-0  bg-no-repeat bg-cover bg-center" 
        style={{ backgroundImage: "linear-gradient(to bottom, #00000066, transparent), url('/tracking-bg.jpg')",}}>
            <div className="lg:max-w-3xl sm:max-w-xl w-full mx-auto">
                <div className="flex flex-col px-6 w-full lg:px-0  items-center justify-center ">
                <ul className='text-[#B5C020] font-semibold text-base font-inter flex items-center'>
                    <li className='flex items-center'>FAST <span  className='px-4'> <Icons.dot/></span> </li>
                    <li className='flex items-center '>SECURED <span  className='px-4'> <Icons.dot/></span></li>
                    <li>RELIABLE</li>
                </ul>
                    <div className="lg:max-w-2xl sm:max-w-xl ">
                        <p className="text-5xl  text-center py-6 font-inter  font-bold text-white">Track Your Package</p>
                        <p className="lg:text-base font-light text-center  text-[#F6F6F6] font-poppins ">Now you can track your package easily</p>
                        
                    </div>
                </div>
                <TrackingForm/>
               
            </div>
        </div>
      </section>
  )
}

export default TrackingHeroSection
