import React from 'react'
import Image from 'next/image'

function Testimonials() {
  return (
    <section>
          <div className='container mx-auto py-16 px-6 md:px-0'>
               <div className='flex flex-col items-center gap-3'>
                    <p className='font-bold text-bright-green font-inter'>TESTIMONIALS</p>
                    <p className='font-bold font-inter text-xl'>What Our Customers Say</p>
                    <p className='font-poppins text-light-grey-3 text-center'>Trusted by thousands of satisfied customers</p>
               </div>

               <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mt-14 '>

                    <div className=' flex flex-col border-[0.5px] p-6 rounded-3xl border-bright-green'>
                         <div className='flex gap-3 mb-6'>
                              <Image src='/sarah.jpeg' alt='sarah' width={60} height={60}  className='rounded-full object-cover'/>
                              <div className='flex flex-col'>
                                   <p className='text-bluish-green font-bold'>Sarah Nweke</p>
                                   <p className='text-[#777777] font-poppins'>Online Store Owner</p>
                                   <Image src='/ratingstars.png' alt='star ratings' width={76} height={12}/>
                              </div>
                         </div>
                         <p className='font-poppins text-light-grey-3 text-sm'>'I can send multiple orders to different locations without stress. The tracking feature is amazing!'</p>
                    </div>


                    <div className=' flex flex-col border-[0.5px] p-6 rounded-3xl border-bright-green'>
                         <div className='flex gap-3 mb-6'>
                              <Image src='/tunde.jpeg' alt='sarah' width={60} height={60}  className='rounded-full'/>
                              <div className='flex flex-col'>
                                   <p className='text-bluish-green font-bold'>Tunde Balogun</p>
                                   <p className='text-[#777777] font-poppins'>Entrepreneur</p>
                                   <Image src='/ratingstars.png' alt='star ratings' width={76} height={12}/>
                              </div>
                         </div>
                         <p className='font-poppins text-light-grey-3 text-sm'>'I don’t have to meet the recipient in person. I just schedule my package, and DeliverAll takes care of the rest.'</p>
                    </div>

                    <div className=' flex flex-col border-[0.5px] p-6 rounded-3xl border-bright-green'>
                         <div className='flex gap-3 mb-6'>
                              <Image src='/david.jpeg' alt='sarah' width={60} height={60}  className='rounded-full'/>
                              <div className='flex flex-col'>
                                   <p className='text-bluish-green font-bold'>David Anosike</p>
                                   <p className='text-[#777777] font-poppins'>Student</p>
                                   <Image src='/ratingstars.png' alt='star ratings' width={76} height={12}/>
                              </div>
                         </div>
                         <p className='font-poppins text-light-grey-3 text-sm'>'Great customer service! They helped me track a delayed package and resolved the issue quickly.</p>
                    </div>


               </div>
          </div>
    </section>
  )
}

export default Testimonials