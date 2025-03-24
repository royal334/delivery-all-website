import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const HowItWorks = () => {
  return (
    <>
    <div className='container mx-auto py-16 px-6 lg:pl-20  w-full hidden md:block '>
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
               <div className="flex flex-col sm:flex-row  pt-6">
               <button className='text-bluish-green capitalize font-inter text-sm font-bold  bg-[#FFFFFF] rounded-md py-4 px-7 mr-3 '>
                Learn More</button>
                <button className='text-white capitalize border mt-3 sm:mt-0 border-[#FFFFFF] font-inter text-sm font-bold  bg-transparent  rounded-md py-2 px-7 '>
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


    

        <div className='container mx-auto px-6 md:px-0 py-16 md:hidden'>
        <div className='flex flex-col md:flex-row  justify-center gap-6'>

            <div className='bg-bluish-green px-6 py-12 md:pt-12 md:pl-12 md:pb-12 md:pr-[240px] rounded-3xl md:w-1/2'>
                  <p className='text-bright-green uppercase mb-6 font-bold'>how it works</p>
                  <h4 className='font-bold text-2xl text-white mb-6'>Simplifying Your Delivery Journey</h4>
                  <p className='text-light-grey-2 mb-6'>Simple steps to get your packages delivered...</p>

                  <ul className='flex flex-col gap-6 text-white'>
                      <li>1.<span className="font-semibold"> Schedule Your Delivery:</span> Use our web or mobile app to input pickup and drop-off details. You can send to multiple locations in one go!</li>
                      <li>2. <span className="font-semibold">Choose Your Service:</span> Select from our range of delivery options based on speed and budget.</li>
                      <li>3. <span className="font-semibold">Track in Real Time:</span> Stay updated with live tracking from pickup to drop-off.</li>
                      <li>4. <span className="font-semibold">Hassle-Free Drop-off: </span>No need to meet in person—our waybill service ensures seamless handover to receivers.</li>
                  </ul>

                  <div className='flex mt-6 gap-3'>
                      <button className='text-bluish-green bg-white px-2 py-2 rounded-md w-1/2'><Link href='/about' >Learn More</Link></button>
                      <button className='font-bold text-white rounded-md border border-white px-2 py-2 w-1/2'><Link href='/' >Make A Delivery</Link></button>
                  </div>
            </div>


            <div className=' '><Image src='/how-it-works.png' alt='people interacting' width={429.0322570800781} height={429.0322570800781} className='rounded-3xl' /></div>


        </div>

        </div>
</>
  )
}

export default HowItWorks
