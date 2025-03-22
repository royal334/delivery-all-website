import Image from 'next/image'
import React from 'react'

const HowItWorks = () => {
  return (
    <div className='container mx-auto py-16 px-6 lg:pl-20  w-full '>
      <div className="flex  items-center relative w-full">
        <div className="bg-bluish-green rounded-3xl p-12 lg:w-[950px] z-0">
            <div className="lg:max-w-md">
                <p className='text-sm font-bold text-bright-green font-poppins uppercase '>how it works</p>
                <p className='text-white font-bold font-inter text-xl pt-6'>Simplifying Your Delivery Journey</p>
                <p className='text-sm text-[#F6F6F6] font-poppins pt-6'>Simple steps to get your packages delivered...</p>
                <ul className="list-decimal list-inside pl-1 text-[#F6F6F6] font-poppins text-sm ">
                    <li className="font-medium pt-6">
                    Schedule Your Delivery: <span className='font-light'>Use our web or mobile app to input pickup and drop-off details. You can send to multiple locations in one go!</span>
                    </li>
                    <li className="font-medium pt-6">
                    Choose Your Service: <span className='font-light'> Select from our range of delivery options based on speed and budget.</span>
                    </li>
                    <li className="font-medium pt-6">
                    Track in Real Time: <span className='font-light'> Stay updated with live tracking from pickup to drop-off.</span>
                    </li>
                    <li className="font-medium pt-6">
                    Hassle-Free Drop-off: <span className='font-light'> No need to meet in person—our waybill service ensures seamless handover to receivers.</span>
                    </li>
                </ul>
               <div className="flex pt-6">
               <button className='text-bluish-green capitalize font-inter text-sm font-bold  bg-[#FFFFFF] rounded-md py-4 px-7 mr-3 '>
                Learn More</button>
                <button className='text-white capitalize border border-[#FFFFFF] font-inter text-sm font-bold  bg-transparent  rounded-md py-2 px-7 '>
                Make A Delivery</button>
               </div>
            </div>


        </div>
        <div className="absolute right-32 ">
            <Image
                src="/howItWorks.png"
                alt="how it works"
                className="object-contain"
                height={429} width={529}
            />
            </div>

      </div>
    </div>
  )
}

export default HowItWorks
