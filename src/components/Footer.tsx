import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <footer id='footer' className='bg-bluish-green text-white py-10 px-4 md:px-0'>
      <div className='container mx-auto flex flex-col md:flex-row  justify-between gap-6  border-b border-bright-green'>
          <div className='mb-8 md:w-1/4'>
               <Image src='/zipu-delivery-logo-white-footer.png' alt='logo' width={120} height={39} className='mb-8'/>
               <p className='text-light-grey text-sm '>We believe that sending a package should be as simple as clicking a button. Whether you’re an individual, seller, buyer, or business, our platform makes it effortless to schedule, track, and complete deliveries without the need for in-person handovers.</p>
          </div>
          <div className='mb-8 md:w-1/4'>
               <p className='font-bold text-2xl mb-4'>Navigation</p>
               <ul className='flex flex-col gap-4 '>
                    <li><Link href='/' className='text-light-grey text-sm font-normal'>Home</Link></li>
                    <li><Link href='/about' className='text-light-grey text-sm font-normal'>About Us</Link></li>
                    <li><Link href='/tracking' className='text-light-grey text-sm font-normal'>Track Package</Link></li>
                    <li><Link href='/contact' className='text-light-grey text-sm font-normal'>Contact Us</Link></li>
               </ul>
          </div>
          <div className='mb-8 md:w-1/4'>
          <p className='font-bold text-2xl mb-4'>Quick Links</p>
                    <ul className='flex flex-col gap-4 '>
                         <li><Link href='' className='text-light-grey text-sm font-normal'>Privacy Policy</Link></li>
                         <li><Link href='' className='text-light-grey text-sm font-normal'>Our Team</Link></li>
                         <li><Link href='' className='text-light-grey text-sm font-normal'>Jobs & Offer</Link></li>
                         <li><Link href='' className='text-light-grey text-sm font-normal'>FAQs</Link></li>
                    </ul>
          </div>
          <div className='mb-8 md:w-1/4'>
          <p className='font-bold text-2xl mb-4'>Contact Us</p>
                    <ul className='flex flex-col gap-4 '>
                         <li className='text-light-grey text-sm font-normal w-1/2'>123 Main Street, Fegge, Onitsha, Anambra</li>
                         <li className='text-light-grey text-sm font-normal'>contact@deliverall.com</li>
                         <li className='text-light-grey text-sm font-normal'>+234 (803) 147-2583</li>
                         <li>
                              <div className='flex gap-4'>
                                   <Link href=''>
                                        <Image src='/facebook.png' alt='facebook' width={32} height={32}  className='rounded-full'/>
                                   </Link>
                                   <Link href=''>
                                        <Image src='/twitter.png' alt='twitter' width={32} height={32}  className='rounded-full'/>
                                   </Link>
                                   <Link href=''>
                                        <Image src='/instagram.png' alt='instagram' width={32} height={32}  className='rounded-full'/>
                                   </Link>
                                   <Link href=''>
                                        <Image src='/youtube.png' alt='linkedin' width={32} height={32} className='rounded-full'/>
                                   </Link>
                              
                              </div>
                         </li>
                    </ul>
          </div>
     </div>
      <p className='text-white text-center my-16 text-sm w-[342px] md:w-auto'>Copyright © 2025 Chibuzo Anthony • All Rights Reserved</p>
    </footer>
  )
}

export default Footer