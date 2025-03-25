import React from 'react'

function ContactSection() {
  return (
    <section id='contact' className='bg-light-grey-2'>
          <div className='flex flex-col md:flex-row justify-between gap-14 container mx-auto py-10 md:py-16 px-6 lg:px-20'>
               <div className='flex flex-col md:self-center gap-12 md:w-1/2'>
                    <div className='flex flex-col gap-3'>
                         <p className='text-bright-green font-inter font-bold'>ADDRESS</p>
                         <p className='font-inter font-bold text-xl'>123 Main Street, Fegge, Onitsha, Anambra</p>
                         <p className='font-poppins text-light-grey-3 mb-3'>Visit us for partnership and business opportunities</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                         <p className='text-bright-green font-inter font-bold'>PHONE</p>
                         <p className='font-inter font-bold text-xl'>0803 147 2583</p>
                         <p className='font-poppins text-light-grey-3 mb-3'>Available 24/7 for all your delivery-related queries</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                         <p className='text-bright-green font-inter font-bold'>EMAIL</p>
                         <p className='font-inter font-bold text-xl'>contact@deliverall.com</p>
                         <p className='font-poppins text-light-grey-3 mb-3'>For media inquiries and press releases</p>
                    </div>
               </div>

               <div className='md:w-1/2'>
                    <form className='flex flex-col gap-6 bg-white rounded-3xl border-[0.5px] border-bright-green p-6'>
                         <div className='flex flex-col md:flex-row gap-6 '>
                              <div className='flex flex-col gap-1 md:w-1/2'>
                                   <label htmlFor='name' className='font-inter'>Name</label>
                                   <input type='text' id='name' className='rounded-md border-[0.5px] border-[#B9B9B9] h-14 ' />
                              </div>

                              <div className='flex flex-col gap-1 md:w-1/2'>
                                   <label htmlFor='email' className='font-inter'>Email Address</label>
                                   <input type='email' id='email' className='rounded-md border-[0.5px] border-[#B9B9B9] h-14 ' />
                              </div>
                         </div>

                         <div className='flex flex-col gap-1'> 
                              <label htmlFor="subject" className='font-inter'>Subject</label>
                              <input type="text" id='subject' className='rounded-md border-[0.5px] border-[#B9B9B9] h-14' />
                         </div>

                         <div className='flex flex-col gap-1'>
                              <label htmlFor='message' className='font-inter'>Message</label>
                              <textarea name='message' id='message'  className='rounded-md border-[0.5px] border-[#B9B9B9] h-[120px]'></textarea>
                         </div>
                         <button className='bg-bluish-green text-white font-inter font-bold py-3 rounded-md my-6'>Send Message</button>
                    </form>
               </div>
          </div>
    </section>
  )
}

export default ContactSection