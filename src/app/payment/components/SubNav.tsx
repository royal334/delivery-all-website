import { Icons } from '@/components/Icons'
import Link from 'next/link'
import React from 'react'

const SubNav = () => {
  return (
    <div className='bg-[#F1F5F7]'>
      <div className="lg:container mx-auto px-6 lg:px-20 py-6">
        <div className="flex justify-between">
            <Link href='/book-package' className="flex items-center">
               <Icons.back/>
               <p className='text-[#B5C020] underline font-semibold font-inter text-base ml-2'>Back</p>
            </Link>
            <div className="flex items-center gap-2">
               <p className='text-[#1E1E1E]   font-semibold font-inter text-base '><Link href='/'>Home</Link></p>
               <Icons.pause/>
               <p className='text-[#1E1E1E]  font-semibold font-inter text-base '><Link href='/book-package'>Book Page</Link></p>
               <Icons.pause/>
               <p className='text-[#B1B0B0]  font-semibold font-inter text-base '>Payment</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SubNav
