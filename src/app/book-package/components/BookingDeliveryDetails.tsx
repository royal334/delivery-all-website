import { Icons } from '@/components/Icons'
import React from 'react'
import CustomSelect from './customselects/PackageTypeSelect'
import PackageSizeSelect from './customselects/PackageSize'

const BookingDeliveryDetails = () => {
  return (
    <div className='border-[0.5px] border-[#B5C020] p-6 rounded-2xl bg-[#fff] flex flex-col  justify-center w-full'>
    <p className='text-black-1 font-inter font-semibold text-xl '>Delivery Details</p>
    <p className='text-[#777777] text-sm font-poppins pt-2'>Select your preferred options and proceed to payment</p>
    <div className="">
        <label className='text-[#1E1E1E] font-poppins text-base pt-6 block'>
        Pickup Location
            <div className="relative  pt-[6px]">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    <Icons.address />
                    </div>
                    <input 
                    placeholder="Enter pickup address" required
                    className="border py-4 pl-12  pr-3 focus:outline-none outline-none w-full rounded-md font-poppins text-sm placeholder:font-poppins placeholder:text-[#B9B9B9] placeholder:text-base  border-[#B9B9B9]"
                    type="text"
                    />
            </div>

        </label>
        <label className='text-[#1E1E1E] font-poppins text-base pt-6 block'>
           <p className='flex items-center justify-between'>Delivery Destination 1 <span className='cursor-pointer'><Icons.delete/></span></p> 
            <div className="relative  pt-[6px]">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <Icons.location />
                  </div>
                  <input 
                  placeholder="Enter pickup address" required
                  className="border py-4 pl-12  pr-3 focus:outline-none outline-none w-full rounded-md font-poppins text-sm placeholder:font-poppins placeholder:text-[#B9B9B9] placeholder:text-base  border-[#B9B9B9]"
                  type="text"
                  />
            </div>

        </label>
        <label className='text-[#1E1E1E] font-poppins text-base pt-6 block'>
           <p className='flex items-center justify-between'>Delivery Destination 2 <span className='cursor-pointer'><Icons.delete/></span></p> 
            <div className="relative  pt-[6px]">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <Icons.location />
                  </div>
                  <input 
                  placeholder="Enter another delivery address" required
                  className="border py-4 pl-12  pr-3 focus:outline-none outline-none w-full rounded-md font-poppins text-sm placeholder:font-poppins placeholder:text-[#B9B9B9] placeholder:text-base  border-[#B9B9B9]"
                  type="text"
                  />
            </div>

        </label>
        <button className='mt-6 flex items-center justify-center border-[0.5px] border-[#0E5F76] border-dashed w-full rounded-md py-4 text-[#0E5F76] font-inter font-semibold text-base'> <span className='pr-2'><Icons.add/></span>Add Another Destination </button>
        <p className='text-[#777777] text-sm font-poppins pt-6'>Package Details</p>
        <p className='text-[#777777] text-sm font-poppins pt-2'>Select your preferred options and proceed to payment</p>

        <label className='text-[#1E1E1E] font-poppins text-base pt-6 block pb-2'>
        Package Type

        </label>
        <CustomSelect/>
        <div className="flex gap-6 w-full flex-wrap justify-between">
              <div className="w-full">
                    <label className='text-[#1E1E1E] font-poppins text-base pt-6 block pb-2'>
                      Package size

                  </label>
                  <PackageSizeSelect/>
              </div>
              <div className="w-full">
                    <label className='text-[#1E1E1E] font-poppins text-base pt-6 block pb-2'>
                    Number Of Packages

                  </label>
                  <PackageSizeSelect/>
              </div>
        </div>
    </div>
</div>
  )
}

export default BookingDeliveryDetails
