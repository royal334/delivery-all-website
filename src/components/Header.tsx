'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'



function Header() {

  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('home')


  function handleLinkClick(link:string){
    setActiveLink(link)
  }

  function toggleMenu(){
    setIsOpen(!isOpen)
  }


  return (
    <header className={`${isOpen ? 'static top-auto' :'sticky top-0'} bg-white z-50`}>
      <div className=' lg:container lg:px-20  mx-auto px-6  py-4 my-2 flex flex-col md:flex-row items-center justify-between flex-wrap md:flex-nowrap '>
        <div className='w-full flex justify-between items-center md:w-auto'>
        <Link href='/'>  <Image src='/zipu-delivery-logo.png' alt='Zipu delivery' width={94} height={20} /></Link>
          <Image src='/icon-menu.png' alt="Menu button" className='md:hidden' width={36} height={36} onClick={toggleMenu} />
        </div>
        <nav className='w-full hidden md:flex md:justify-between '>
          <ul className=' flex font-inter justify-center items-center space-x-4 ml-auto'>
            <li className={`${activeLink ==='home' ? 'border-b-2 border-bright-green' : null}`}><Link href='/' className={`${activeLink ==='home' ? 'text-bluish-green' :'text-[#8D8D8D]'} font-inter`} onClick={() => handleLinkClick('home')}>Home</Link></li>
            <li className={`${activeLink ==='about' ? 'border-b-2 border-bright-green' : null}`}><Link href='/about'  className={`${activeLink ==='about' ? 'text-bluish-green' : 'text-[#8D8D8D]'} font-inter`} onClick={() => handleLinkClick('about')}>About</Link></li>
            <li className={`${activeLink ==='tracking' ? 'border-b-2 border-bright-green' : null}`}><Link href='/tracking'  className={`${activeLink ==='tracking' ? 'text-bluish-green' : 'text-[#8D8D8D]'} font-inter`} onClick={() => handleLinkClick('tracking')}>Tracking</Link></li>
            <li className={`${activeLink ==='contact' ? 'border-b-2 border-bright-green' : null}`}><Link href='/contact'  className={`${activeLink ==='contact' ? 'text-bluish-green' : 'text-[#8D8D8D]'} font-inter`} onClick={() => handleLinkClick('contact')}>Contact</Link></li>
          </ul>
          <div className='ml-auto'>
            <Link href=''>
              <button className='text-white font-semibold bg-bluish-green py-3 px-6 rounded-md cursor-pointer'>Download App</button>
            </Link>
          </div>
        </nav>
        {/* {isOpen ? <div onClick={toggleMenu} className='absolute bg-[#80808080] top-0 left-0 w-full h-full z-40 '></div> : null} */}
            {isOpen &&  
        <nav className='md:hidden '>
          <ul className=' flex flex-col justify-center items-center h-1/2 top-0 w-full fixed bg-white rounded-md right-0 z-60 gap-10 px-4 shadow-2xl '>
            <Image src='/icon-menu.png' alt="Menu button" className='md:hidden z-70 mt-6 self-end ' width={36} height={36} onClick={toggleMenu} />
              <div className='mb-auto flex flex-col gap-10'>
                <li className='text-center  uppercase'><Link href='/' className=' font-semibold ' onClick={toggleMenu}>Home</Link></li>
                <li className='text-center uppercase'><Link href='/about' className='font-semibold ' onClick={toggleMenu}>About</Link></li>
                <li className='text-center uppercase'><Link href='/tracking' className=' font-semibold ' onClick={toggleMenu}>Tracking</Link></li>
                <li className='text-center uppercase'><Link href='/contact' className='font-semibold ' onClick={toggleMenu}>Contact</Link></li>
              </div>
            </ul>
            
        </nav>}
      </div>

    </header>
  )
}

export default Header