import React from 'react'

const DeliveryDetails = () => {
    return (
      <div className='border-[0.5px] border-[#B5C020] p-6 rounded-2xl bg-[#fff] flex flex-col  justify-center'>
          <p className='text-black-1 font-inter font-semibold text-xl '>Delivery Details</p>
          <p className='text-[#777777] text-sm font-poppins pt-2'>Select your preferred options and proceed to payment</p>
          <hr className='my-6 bg-[#8A8A8A] h-[1px]'/>
          <div className="">
              <div className="flex flex-col sm:flex-row justify-between pt-6">
                  <p className='text-[#8A8A8A] font-poppins text-base '>Name:</p>
                  <p className='text-black-1 font-poppins text-base'>Adaeze Onuoha</p>
              </div>
              <div className="flex flex-col sm:flex-row justify-between pt-6 ">
                  <p className='text-[#8A8A8A] font-poppins text-base '>Address:</p>
                  <p className='text-black-1 font-poppins text-base'>123 Main Street, Apt. 28, Onitsha, Anambra</p>
              </div>
              <div className="flex flex-col sm:flex-row justify-between pt-6">
                  <p className='text-[#8A8A8A] font-poppins text-base '>Email:</p>
                  <p className='text-black-1 font-poppins text-base'>adaezehonuoha@gmail.com</p>
              </div>
              <div className="flex flex-col sm:flex-row justify-between pt-6">
                  <p className='text-[#8A8A8A] font-poppins text-base '>Phone Number:</p>
                  <p className='text-black-1 font-poppins text-base'>0801 234 5678</p>
              </div>
          </div>
      </div>
    )
  }
  
  export default DeliveryDetails