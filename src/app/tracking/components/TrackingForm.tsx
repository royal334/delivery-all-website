'use client'
import { Icons } from '@/components/Icons'
import React from 'react'
import { TrackPackageType } from './TrackingHeroSection'

const TrackingForm = ({handleTrackChange,trackingNumber,onTrackPackage}:TrackPackageType) => {
  
  return (
    <div className='bg-[#FFFFFF] rounded-3xl p-6 mt-6 shadow-[0px_10px_40px_0px_#00000026]'>
        <p className='text-base text-[#1E1E1E] font-poppins'>Tracking Number </p>
        <form onSubmit={onTrackPackage} className="w-full flex items-center flex-wrap gap-6 mt-[6px]">
            <div className="relative flex-grow">
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <Icons.trackingbox />
                </div>
                <input onChange={handleTrackChange} value={trackingNumber}
                placeholder="Enter tracking number" required
                className="border-[0.5px] py-4 pl-12  pr-3 focus:outline-none outline-none w-full rounded-md font-poppins text-sm placeholder:font-poppins placeholder:text-[#B9B9B9] placeholder:text-base border-[#B9B9B9]"
                type="text"
                />
            </div>
            <div className="flex flex-col w-full sm:block sm:w-fit">
              <button type='submit' className="bg-[#0E5F76] self-end px-8 py-4 rounded-md text-[#FFFFFF] font-inter text-base font-semibold whitespace-nowrap">
                  Track Package
              </button>

            </div>
        </form>

    </div>
  )
}

export default TrackingForm