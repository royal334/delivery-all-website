import React from 'react'
import Link from 'next/link'

const BookingDeliverySummary = () => {
  return (
    <div className='border-[0.5px] border-[#B5C020] w-full p-6 rounded-2xl flex flex-col  justify-center'>
        <p className='text-black-1 font-inter font-semibold text-xl'>Delivery Summary</p>
        <p className='text-[#777777] text-sm font-poppins pt-2'>Select your preferred options and proceed to payment</p>
        <hr className='my-6 bg-[#8A8A8A] h-[1px]'/>
        <div className="">
            <div className="flex justify-between pt-6 flex-wrap">
                <p className='text-[#8A8A8A] font-poppins text-base '>Base Fare:</p>
                <p className='text-black-1 font-poppins text-base'>N3,000.00</p>
            </div>
            <div className="flex flex-wrap justify-between pt-6">
                <p className='text-[#8A8A8A] font-poppins text-base '>Additional Stop(s):</p>
                <p className='text-black-1 font-poppins text-base'>N2,000.00</p>
            </div>
            <div className="flex justify-between flex-wrap pt-6">
                <p className='text-[#8A8A8A] font-poppins text-base '>Distance Fee:</p>
                <p className='text-black-1 font-poppins text-base'>N500.00</p>
            </div>
            <div className="flex justify-between flex-wrap pt-6">
                <p className='text-[#8A8A8A] font-poppins text-base '>Discount:</p>
                <p className='text-black-1 font-poppins text-base'>N1,000.00</p>
            </div>
            <div className="flex justify-between flex-wrap pt-6">
                <p className='text-[#8A8A8A] font-poppins text-base '>Subtotal:</p>
                <p className='text-black-1 font-poppins text-base'>N4,500.00</p>
            </div>
            <div className="flex justify-between flex-wrap pt-6">
                <p className='text-[#1E1E1E] font-bold font-poppins text-base '>Total:</p>
                <p className='text-[#0E5F76] font-bold font-poppins text-base'>N4,500.00</p>
            </div>
            <hr className='my-6 bg-[#8A8A8A] h-[1px]'/>
            <Link href='/payment'><button className='font-inter font-semibold text-[#fff] bg-[#0E5F76] rounded-md w-full text-base py-4'>Confirm Booking</button></Link>
        </div>
    </div>
  )
}

export default BookingDeliverySummary
