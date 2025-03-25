
import { Icons } from '@/components/Icons'
import React from 'react'
import ShippingDetails from './ShippingDetails'
import DeliveryDetails from './DeliveryDetails'

const trackingStages =[
    {
        stage:'Picked',
        date:' 2:15 PM',
        date_received:'12/03/25'
    },
    {
        stage:'Shipped',
        date:' 01/03/24',
        date_received:'12/03/25'
    },
    {
        stage:'In Transit',
        date:' 02/03/24',
        date_received:'13/03/25'
    },
    {
        stage:'Arrived',
        date:' 04/03/24',
        date_received:'13/03/25'
    },
    {
        stage:'Delivered',
        date:' 07/03/24',
        date_received:'13/03/25'
    }
]
const Package = () => {
  return (
    <div className=" bg-[#F1F5F7]">
        <div className=' lg:container mx-auto px-6 lg:px-20 py-[60px]'>
            <div className="bg-[#FFFFFF] border-[#D9D9D9] border-[0.5px] shadow-[0px_10px_40px_0px_#00000026] rounded-3xl p-6">
                <div className="flex flex-col sm:flex-row  sm:items-center sm:justify-between">
                   <div className="">
                     <p className='text-black-1 font-inter text-xl font-semibold'>Package #147258369OSHA12</p>
                     <p className='text-sm text-[#777777] font-inter pt-[6px]'>Estimated Delivery: March 15, 2025</p>
                   </div>
                   <button className='bg-[#00800033] w-fit mt-6 sm:mt-0 text-[#008000] font-poppins text-sm font-medium rounded-3xl py-1 px-[10px]'>In Transit</button>
                </div>
                <hr className='my-6 bg-[#8A8A8A] h-[1px]'/>
                <div className="sm:w-full flex sm:flex-col gap-10">
                    {/* Icon Section */}
                    <div className="bg-[#D9D9D9] flex flex-col sm:flex-row  sm:items-center w-12 h-[447px] sm:w-full sm:h-12 mt-4 rounded-full ">
                        {/* First half (3 icons) */}
                        <div className="bg-[#0E5F76] sm:w-1/2 sm:h-12 w-12 h-1/2 rounded-full flex flex-col sm:flex-row  sm:items-center justify-between px-2 py-2">
                        <Icons.checkbox />
                        <Icons.checkbox />
                        <Icons.checkbox />
                        </div>

                        {/* Second half (2 icons) */}
                        <div className="flex flex-col px-2 sm:flex-row gap-20 mb-2  sm:items-center mt-auto sm:justify-end lg:gap-[290px] sm:w-1/2 sm:px-4">
                        <Icons.whitebox />
                        <Icons.whitebox />
                        </div>
                    </div>

                    {/* Text Section (Directly below icons) */}
                    <div className="flex flex-col gap-5 sm:flex-row  sm:justify-between w-full mt-5 sm:mt-6">
                        {trackingStages.map((track,idx)=>(
                        <div key={idx} className="">
                            <p className="text-base text-black-1 font-poppins">{track.stage}</p>
                            <p className='text-sm font-poppins text-[#B5C020] py-1'>{track.date}</p>
                            <p className='text-sm font-poppins text-[#8D8D8D] '>{track.date_received}</p>
                        </div>
                        ))}
                        
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-12 flex-wrap mt-20 w-full">
              <div className="flex-1">
              <ShippingDetails/>
              </div>
               <div className="flex-1">
               <DeliveryDetails/>
               </div>
            </div>
        </div>

    </div>
  )
}

export default Package