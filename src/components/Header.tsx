'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'


function Header() {

  const [isOpen, setIsOpen] = useState(false)

  function toggleMenu(){
    setIsOpen(!isOpen)
  }

  return (
    <header className='sticky top-0 container mx-auto p-4 my-2 flex items-center justify-between flex-wrap md:flex-nowrap'>
      <div className='w-full flex justify-between items-center md:w-auto'>
        <Image src='/DeliverAll@2x.png' alt='Delivery All' width={94} height={20} />
        <Image src='/icon-menu.png' alt="Menu button" className='md:hidden' width={36} height={36} onClick={toggleMenu} />
      </div>
      <nav className='w-full hidden md:flex md:justify-between '>
        <ul className=' flex justify-center items-center space-x-4 ml-auto'>
          <li><Link href=''>Home</Link></li>
          <li><Link href='/about'>About</Link></li>
          <li><Link href='/tracking'>Tracking</Link></li>
          <li><Link href='/contact'>Contact</Link></li>
        </ul>
        <div className='ml-auto'>
          <Link href=''>
            <button className='text-white font-semibold bg-bluish-green p-4 rounded-md cursor-pointer'>Download App</button>
          </Link>
        </div>
      </nav>

      {isOpen ? <div onClick={toggleMenu} className='absolute bg-[#80808080] top-0 left-0 w-full h-full z-40 '></div> : null}
    {isOpen &&  <nav className='md:hidden '>
      
      <ul className=' flex flex-col items-center justify-center absolute right-0 top-0 w-full h-3/4 bg-white z-60 gap-6 px-4'>
        <Image src='/icon-menu.png' alt="Menu button" className='md:hidden z-70 mb-auto self-end mr-4 mt-6b' width={36} height={36} onClick={toggleMenu} />
          <div className='mb-auto flex flex-col gap-10'>
            <li className='text-center  uppercase'><Link href='' className=' font-semibold '>Home</Link></li>
            <li className='text-center uppercase'><Link href='/about' className='font-semibold '>About</Link></li>
            <li className='text-center uppercase'><Link href='/tracking' className=' font-semibold '>Tracking</Link></li>
            <li className='text-center uppercase'><Link href='/contact' className='font-semibold '>Contact</Link></li>
          </div>
        </ul>
    
    </nav>}

    </header>
  )
}

export default Header