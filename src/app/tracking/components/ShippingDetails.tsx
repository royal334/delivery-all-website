import React from 'react'

const ShippingDetails = () => {
  return (
    <div className='border-[0.5px] border-[#B5C020] p-6 rounded-2xl bg-[#fff] flex flex-col  justify-center'>
        <p className='text-black-1 font-inter font-semibold text-xl'>Shipping Details</p>
        <p className='text-[#777777] text-sm font-poppins pt-2'>Select your preferred options and proceed to payment</p>
        <hr className='my-6 bg-[#8A8A8A] h-[1px]'/>
        <div className="">
            <div className="flex justify-between pt-6 flex-col sm:flex-row">
                <p className='text-[#8A8A8A] font-poppins text-base '>Tracking Number:</p>
                <p className='text-black-1 font-poppins text-base'>#147258369OSHA12</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between pt-6">
                <p className='text-[#8A8A8A] font-poppins text-base '>Package:</p>
                <p className='text-black-1 font-poppins text-base'>Documents</p>
            </div>
            <div className="flex justify-between flex-col sm:flex-row pt-6">
                <p className='text-[#8A8A8A] font-poppins text-base '>Pickup:</p>
                <p className='text-black-1 font-poppins text-base'>Shop 7, Hero Line, Nkwo Nnewi, Anambra</p>
            </div>
            <div className="flex justify-between flex-col sm:flex-row pt-6">
                <p className='text-[#8A8A8A] font-poppins text-base '>Package:</p>
                <p className='text-black-1 font-poppins text-base'>Documents</p>
            </div>
        </div>
    </div>
  )
}

export default ShippingDetails