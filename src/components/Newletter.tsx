import React from 'react'

const Newletter = () => {
  return (
    <div
    className="xs:h-[340px] bg-no-repeat bg-cover bg-center  pt-[60px] pb-[60px]   px-6 lg:px-0 "
    style={{backgroundImage: "linear-gradient(0deg, #000000CC, #000000CC), url('/bg-newsletter.jpg')",}}>
        <div className="flex flex-col items-center justify-center lg:max-w-md sm:max-w-sm mx-auto">
            <p className='text-bright-green font-bold text-sm font-inter '>Discover More</p>
            <p className='text-xl font-inter font-bold text-white pt-4 text-center'>Subscribe To Our Newsletter</p>
            <p className='text-sm text-center font-poppins font-light pt-4 text-[#D9D9D9] '>Sign up for the Newsletter and don’t miss out—join thousands of satisfied users who get the latest from DeliverAll straight to their inbox!</p>
            <div className="mt-4 relative w-full ">
                <input placeholder='Enter email address' className='w-full text-[#8A8A8A] focus:border-none font-poppins border-[0.5px] placeholder:text-sm placeholder:text-[#8A8A8A] placeholder:font-inter py-4 rounded-md bg-transparent px-3  border-[#FFFFFF] ' type='email'/>
               <div className="xs:absolute right-1 top-[5px] relative">
               <button className='text-white capitalize mt-3 xs:mt-0 font-inter text-sm font-semibold  bg-bluish-green rounded-md py-[14px] px-8 w-full mr-3 '>
               Subscribe</button>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Newletter