import React from 'react'

function HeroForm() {
  return (
    <form action="" className='bg-white p-6 rounded-2xl'>
          <div className='mb-4 '>
              <h2 className='font-semibold text-[#1E1E1E] text-center'>Make Quick Delivery</h2>
              <p className='font-[12px] text-[#777777] text-center'>Select your preferred options and proceed to booking</p>
          </div>
          <div>
                <label htmlFor="pickup" className='block text-[#1E1E1E]'>Pickup Location</label>
                <input type="text" id='pickup' placeholder='Enter pickup address' className='w-full p-2 mb-6 border border-[#E9E9E9] rounded'/>

                <label htmlFor="delivery" className='block text-[#1E1E1E]'>Delivery Location</label>
                <input type="text" name="delivery" id="delivery" className='w-full p-2 mb-6 border border-[#E9E9E9] rounded' placeholder='Enter delivery address'  />

                <label htmlFor="delivery" className='block text-[#1E1E1E]'>Page Type</label>
                <input type="text" name="document" id="document" className='w-full p-2 mb-6 border border-bluish-green rounded' placeholder='Document'  />

                <button className='bg-bluish-green text-white p-4 w-full rounded-md'>Continue</button>
          </div>

    </form>
  )
}

export default HeroForm