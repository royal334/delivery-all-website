import React from 'react'
import Image from 'next/image'

function AboutUs() {
  return (
    <section>
          <div className='container mx-auto py-16 px-4 '>
               <div className='w-full flex items-center justify-center flex-col gap-3 mb-16'>
                    <span className='uppercase font-semibold text-bright-green text-center'>About us</span>
                    <h3 className='text-bluish-green font-bold text-xl'>Why Choose DeliverAll?</h3>
                    <p className='text-center text-light-grey-3 w-1/2 '>For Everyone – Individuals, sellers, buyers, businesses—if you need to move packages, we’ve got you covered.</p>
               </div>


               <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                         <div className='flex flex-col items-center justify-center gap-6 p-6'>

                              <Image src='/icon-clock.png' alt='clock' width={60} height={60} />
                              <h4 className='text-black-1 text-bold'>Real-Time Tracking</h4>
                              <p className='text-light-grey-3 text-center'>Track your deliveries in real-time with our advanced GPS tracking system.</p>
                         </div>

                         <div className='flex flex-col items-center justify-center gap-6 p-6'>
                              <Image src='/icon-shield.png' alt='clock' width={60} height={60} />
                              <h4 className='text-black-1 text-bold'>Secured Delivery</h4>
                              <p className='text-light-grey-3 text-center'>Your packages are insured and handled with utmost care.</p>
                         </div>

                         <div className='flex flex-col items-center justify-center gap-6 p-6 bg-light-grey-2 border-[0.5px] border-bright-green rounded-3xl'>
                              <Image src='/icon-headset.png' alt='clock' width={60} height={60} />
                              <h4 className='text-black-1 text-bold'>24/7 Customer Support</h4>
                              <p className='text-light-grey-3 text-center'>Our customer support team is always ready to help you.</p>
                         </div>

                         
                         <div className='flex flex-col items-center justify-center gap-6 p-6'>
                              <Image src='/icon-multiple-click.png' alt='clock' width={60} height={60} />
                              <h4 className='text-black-1 text-bold'>Multiple Destinations</h4>
                              <p className='text-light-grey-3 text-center'>Send one package to several locations in a single request.</p>
                         </div>

                         <div className='flex flex-col items-center justify-center gap-6 p-6'>
                              <Image src='/icon-noperson.png' alt='clock' width={60} height={60} />
                              <h4 className='text-black-1 text-bold'>No In-Person Needed</h4>
                              <p className='text-light-grey-3 text-center'>You don’t need to step out to meet anyone, we handle everything.</p>
                         </div>

                         <div className='flex flex-col items-center justify-center gap-6 p-6'>
                              <Image src='/icon-payment-card.png' alt='clock' width={60} height={60} />
                              <h4 className='text-black-1 text-bold'>Flexible Payment Options</h4>
                              <p className='text-light-grey-3 text-center'>Pay using your card or choose bank transfer if its more convenient.</p>
                         </div>
               </div>
               
          </div>
    </section>
  )
}

export default AboutUs