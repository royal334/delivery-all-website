import React from 'react'
import Image from 'next/image'

function WhyUs() {
  return (
    <section>
          <div className='lg:container mx-auto py-[60px] px-6 lg:px-20'>
               <div className='w-full lg:max-w-lg mx-auto flex items-center justify-center flex-col gap-3 mb-16'>
                    <span className='uppercase font-bold font-inter text-bright-green text-center'>WHY CHOOSE US?</span>
                    <h3 className='text-black-1 font-bold font-inter text-xl'>Our Core Values</h3>
                    <p className='text-center text-[#8A8A8A] font-poppins '>Connect with trusted delivery partners and get your packages delivered anywhere, anytime.
                    </p>
               </div>


               <div className='grid grid-cols-1 md:grid-cols-3 text-center   gap-6 items-center justify-center w-full '>
                         <div className='flex flex-col  lg:max-w-sm items-center hover:transition-all hover:duration-300 hover:ease-in-out hover:bg-light-grey-2 hover:border-[0.5px] hover:border-bright-green hover:rounded-3xl justify-center gap-6 cursor-pointer p-6'>

                              <Image src='/icon-clock.png' alt='clock' width={60} height={60} />
                              <h4 className='text-black-1 font-bold font-inter text-lg'>Real-Time Tracking</h4>
                              <p className='text-light-grey-3 text-sm font-poppins text-center'>Track your deliveries in real-time with our advanced GPS tracking system.</p>
                         </div>

                         <div className='flex flex-col lg:max-w-sm  items-center justify-center gap-6 cursor-pointer p-6 hover:transition-all hover:duration-300 hover:ease-in-out hover:bg-light-grey-2 hover:border-[0.5px] hover:border-bright-green hover:rounded-3xl'>
                              <Image src='/icon-shield.png' alt='clock' width={60} height={60} />
                              <h4 className='text-black-1 font-bold font-inter text-lg'>Secured Delivery</h4>
                              <p className='text-light-grey-3 text-center font-poppins'>Your packages are insured and handled with utmost care.</p>
                         </div>

                         <div className="flex lg:max-w-sm flex-col items-center justify-center gap-6 cursor-pointer p-6 bg-light-grey-2 border-[0.5px] border-bright-green rounded-3xl hover:transition-all hover:duration-300 hover:ease-in-out hover:scale-105 hover:shadow-lg">
                        <Image src="/icon-headset.png" alt="clock" width={60} height={60} />
                        <h4 className="text-black-1 font-inter font-bold">24/7 Customer Support</h4>
                        <p className="text-light-grey-3 font-poppins text-center">
                            Our customer support team is always ready to help you.
                        </p>
                        </div>

                         
                         <div className='flex flex-col lg:max-w-sm  items-center justify-center gap-6 cursor-pointer p-6 hover:transition-all hover:duration-300 hover:ease-in-out hover:bg-light-grey-2 hover:border-[0.5px] hover:border-bright-green hover:rounded-3xl'>
                              <Image src='/icon-multiple-click.png' alt='clock' width={60} height={60} />
                              <h4 className='text-black-1 font-bold text-lg font-inter'>Multiple Destinations</h4>
                              <p className='text-light-grey-3 font-poppins text-center'>Send one package to several locations in a single request.</p>
                         </div>

                         <div className='flex flex-col lg:max-w-sm  items-center justify-center gap-6 cursor-pointer p-6 hover:transition-all hover:duration-300 hover:ease-in-out hover:bg-light-grey-2 hover:border-[0.5px] hover:border-bright-green hover:rounded-3xl'>
                              <Image src='/icon-noperson.png' alt='clock' width={60} height={60} />
                              <h4 className='text-black-1 text-lg  font-bold'>No In-Person Needed</h4>
                              <p className='text-light-grey-3 font-poppins text-center'>You don’t need to step out to meet anyone, we handle everything.</p>
                         </div>

                         <div className='flex flex-col lg:max-w-sm  items-center justify-center gap-6 cursor-pointer p-6 hover:transition-all hover:duration-300 hover:ease-in-out hover:bg-light-grey-2 hover:border-[0.5px] hover:border-bright-green hover:rounded-3xl'>
                              <Image src='/icon-payment-card.png' alt='clock' width={60} height={60} />
                              <h4 className='text-black-1 font-bold font-inter text-lg '>Flexible Payment Options</h4>
                              <p className='text-light-grey-3 text-center font-poppins'>Pay using your card or choose bank transfer if its more convenient.</p>
                         </div>
               </div>
               
          </div>
    </section>
  )
}

export default WhyUs