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
                <input type="text" id='pickup' placeholder='Enter pickup address' className='w-full p-2 mb-6 border border-[#E9E9E9] rounded outline-bluish-green' required/>

                <label htmlFor="delivery" className='block text-[#1E1E1E]'>Delivery Location</label>
                <input type="text" name="delivery" id="delivery" className='w-full p-2 mb-6 border border-[#E9E9E9] rounded outline-bluish-green' placeholder='Enter delivery address' required  />

                <label htmlFor="package" className='block text-[#1E1E1E]'>Item Type</label>
                <select className='w-full p-2 mb-6 border rounded outline-bluish-green' name='pakage-type' id='package' required>
                  <option value="" disabled selected>Choose item type</option>
                  <option value="document">Document</option>
                  <option value="appliacne">Appliance</option>
                  <option value="perishables">Perishables</option>
                  <option value="fragiles">Fragiles</option>
                  <option value="others">Others</option>
                </select>
                

                <button className='bg-bluish-green text-white p-4 w-full rounded-md'>Continue</button>
          </div>

    </form>
  )
}

export default HeroForm