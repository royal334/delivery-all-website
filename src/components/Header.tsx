'use client'
import React, {useState, useEffect} from 'react'
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

  useEffect(() => {
    if(isOpen){
         document.body.classList.add('overflow-hidden');
    }
    else{
         document.body.classList.remove('overflow-hidden');
    }

}, [isOpen])

  return (
    <header className={`${isOpen ? 'static top-auto' :'sticky top-0'} bg-white z-50`}>
      <div className=' container mx-auto  p-4 my-2 flex flex-col md:flex-row items-center justify-between flex-wrap md:flex-nowrap '>
        <div className='w-full flex justify-between items-center md:w-auto'>
          <Image src='/DeliverAll@2x.png' alt='Delivery All' width={94} height={20} />
          <Image src='/icon-menu.png' alt="Menu button" className='md:hidden' width={36} height={36} onClick={toggleMenu} />
        </div>
        <nav className='w-full hidden md:flex md:justify-between '>
          <ul className=' flex justify-center items-center space-x-4 ml-auto'>
            <li className={`${activeLink ==='home' ? 'border-b border-bright-green' : null}`}><Link href='/' className={`${activeLink ==='home' ? 'text-bluish-green' : null} font-inter`} onClick={() => handleLinkClick('home')}>Home</Link></li>
            <li className={`${activeLink ==='about' ? 'border-b border-bright-green' : null}`}><Link href='/about'  className={`${activeLink ==='about' ? 'text-bluish-green' : null} font-inter`} onClick={() => handleLinkClick('about')}>About</Link></li>
            <li className={`${activeLink ==='tracking' ? 'border-b border-bright-green' : null}`}><Link href='/tracking'  className={`${activeLink ==='tracking' ? 'text-bluish-green' : null} font-inter`} onClick={() => handleLinkClick('tracking')}>Tracking</Link></li>
            <li className={`${activeLink ==='contact' ? 'border-b border-bright-green' : null}`}><Link href='/contact'  className={`${activeLink ==='contact' ? 'text-bluish-green' : null} font-inter`} onClick={() => handleLinkClick('contact')}>Contact</Link></li>
          </ul>
          <div className='ml-auto'>
            <Link href=''>
              <button className='text-white font-semibold bg-bluish-green p-4 rounded-md cursor-pointer'>Download App</button>
            </Link>
          </div>
        </nav>
        {/* {isOpen ? <div onClick={toggleMenu} className='absolute bg-[#80808080] top-0 left-0 w-full h-full z-40 '></div> : null} */}
            {isOpen &&  
        <nav className='md:hidden h-full w-full'>
          <ul className=' flex flex-col justify-center items-center absolute top-0 bg-white right-0 w-full h-full z-60 gap-10 px-4'>
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