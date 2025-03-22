import React from 'react'
import Image from 'next/image'
import HeroForm from './HeroForm'

function Hero() {
  return (
    <section id='Hero' className=' py-20 md:py-32'>
     <div className='container mx-auto p-4 my-4 flex flex-col md:flex-row items-center justify-between gap-20'>
          
          <div>
               <div className='flex items-start gap-2 w-fit h-[22px] mb-6 '><span className='text-bright-green uppercase font-semibold mb-2'>fast</span> <Image src ='/circle.png' alt ='' width={6} height={6} className='self-center'  /> <span className='text-bright-green uppercase font-semibold mb-2'>secured</span> <Image src ='/circle.png' alt ='' width={6} height={6} className='self-center' /> <span className='text-bright-green uppercase font-semibold mb-2'>reliable</span></div>
               <h1 className='font-bold text-4xl md:text-5xl text-white mb-8 w-3/4'>Fast And Reliable Delivery Solutions</h1>
               

               <p className='text-light-grey my-4'>Whether you&apos;re an individual, seller, or buyer, our platform lets you schedule and track deliveries with ease.</p>


               <div className='flex gap-2 items-center'><Image src ='/icon-thumb-up-filled.png' alt='' width={20} height={20}/><span className='text-light-grey-2'>4.5/5 Rating</span> <Image src='/icon-truck-delivery.png' alt ='' width={20} height={20} /><span className='text-light-grey-2'>3k+ Deliveries</span> <Image src='/icon-users-group.png' alt='' width={20} height= {20} /> <span className='text-light-grey-2'>200+ Users</span> </div>
          </div>
          <div><HeroForm/></div>
     </div>
    </section>
  )
}

export default Hero