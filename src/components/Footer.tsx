import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <footer id='footer' className='bg-bluish-green text-white w-full py-10'>
     <div className="lg:container mx-auto px-6 lg:px-20 w-full">
          <div className=' w-full grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-4 items-center justify-center '>
          
               <div className=''>
               <Link href='/'>
               <Image className='mb-[48px]' src='/zipu-logo-footer.png' alt='Zipu delivery' width={94} height={20} />
               </Link>
               <p className='text-[#D9D9D9] font-poppins font-light text-sm'>
               We believe that sending a package should be as simple as clicking a button. Whether you’re an individual, seller, buyer, or business, our platform makes it effortless to schedule, track, and complete deliveries without the need for in-person handovers.
               </p>
               </div>
          
               <div className=''>
               <p className='font-bold text-2xl mb-4'>Navigation</p>
               <ul className='flex flex-col gap-4'>
               <li>
                    <Link href='/' className='text-light-grey text-sm font-poppins font-light'>Home</Link>
               </li>
               <li>
                    <Link href='/about' className='text-light-grey text-sm font-poppins font-light'>About Us</Link>
               </li>
               <li>
                    <Link href='/tracking' className='text-light-grey text-sm font-poppins font-light'>Track Package</Link>
               </li>
               <li>
                    <Link href='/contact' className='text-light-grey text-sm font-poppins font-light'>Contact Us</Link>
               </li>
               </ul>
               </div>
          
               <div className=''>
               <p className='font-bold text-2xl mb-4'>Quick Links</p>
               <ul className='flex flex-col gap-4'>
               <li>
                    <Link href='' className='text-light-grey text-sm font-poppins'>Privacy Policy</Link>
               </li>
               <li>
                    <Link href='' className='text-light-grey text-sm font-poppins'>Our Team</Link>
               </li>
               <li>
                    <Link href='' className='text-light-grey text-sm font-poppins'>Jobs & Offer</Link>
               </li>
               <li>
                    <Link href='' className='text-light-grey text-sm font-poppins'>FAQs</Link>
               </li>
               </ul>
               </div>
          
               <div className=' lg:max-w-[180px]   lg:justify-self-end'>
               <p className='font-bold text-2xl mb-4'>Contact Us</p>
               <ul className='flex flex-col gap-4 '>
               <li className='text-light-grey font-light text-sm font-poppins'>
                    123 Main Street, Fegge, Onitsha, Anambra
               </li>
               <li className='text-light-grey font-light text-sm font-poppins'>
                    contact@deliverall.com
               </li>
               <li className='text-light-grey  font-lighttext-sm font-poppins'>
                    +234 (803) 147-2583
               </li>
               <li>
                    <div className='flex gap-4 '>
                    <Link href=''>
                         <Image src='/facebook.png' alt='facebook' width={32} height={32} className='rounded-full'/>
                    </Link>
                    <Link href=''>
                         <Image src='/twitter.png' alt='twitter' width={32} height={32} className='rounded-full'/>
                    </Link>
                    <Link href=''>
                         <Image src='/instagram.png' alt='instagram' width={32} height={32} className='rounded-full'/>
                    </Link>
                    <Link href=''>
                         <Image src='/youtube.png' alt='linkedin' width={32} height={32} className='rounded-full'/>
                    </Link>
                    </div>
               </li>
               </ul>
               </div>
          </div>

      <hr  className='border-b-[0.5x] mt-[60px] border-bright-green'/>
     </div>
      <p className='text-white font-poppins text-center my-16 text-sm  font-light'>
        Copyright © 2025 Chibuzo Anthony • All Rights Reserved
      </p>
    </footer>
  )
}

export default Footer
