import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function HowItWorks() {
  return (
    <section id='how-it-works' className=' '>
          <div className='container mx-auto px-4 md:px-0 py-16'>
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
                              <button><Link href='/about' className='text-bluish-green bg-white px-6 py-4 rounded-md'>Learn More</Link></button>
                              <button className='text-center'><Link href='/' className='font-bold text-white rounded-md border border-white px-6 py-4 '>Make A Delivery</Link></button>

                         </div>
                    </div>


                    <div className='md:w-1/2 md:self-center '><Image src='/how-it-works.png' alt='people interacting' width={429.0322570800781} height={429.0322570800781} className='rounded-3xl' /></div>


               </div>

          </div>
    </section>
  )
}

export default HowItWorks