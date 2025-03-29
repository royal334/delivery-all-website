import React from 'react'
import PriceSummary from './PriceSummary'

function CheckOutPage() {
  return (
    <>
     <section>
          <div className='container mx-auto py-16 px-6 md:px-0'>
                    <div className='flex flex-col items-center justify-center mb-12 '>
                         <p className='text-bluish-green font-bold text-center text-2xl font-inter mb-3'>Checkout</p>
                         <p className='text-light-grey-3 text-sm text-center font-poppins md:w-1/3'>Connect with trusted delivery partners and get your packages delivered anywhere, anytime</p>
                    </div>

                    <div className='flex flex-col md:flex-row items-center md:items-start gap-12 justify-center '>
                         <div className='border-[0.5px] border-bright-green w-full md:w-1/2 p-6 rounded-3xl'>
                              <form action="">
                                   <div className="flex flex-col mb-6">
                                        <p className='font-semibold font-inter text-2xl text-black-1 mb-1'>Payment Method</p>
                                        <p className='text-light-grey-3 font-poppins '>Select your preferred options and proceed to payment</p>
                                   </div>

                                   <div className="flex flex-col pb-6 border-b-[0.5px] border-light-grey-3 mb-6">
                                        <label htmlFor="location" className='font-poppins text-black-1'>Select Payment Method</label>
                                        <select name="location" id="location" className='px-10 py-6 outline-bright-green border-[0.5px] border-light-grey-4 rounded-md mb-6 credit-card'>
                                             <option value="card-number" className='font-poppins text-black-1'>Credit Card</option>
                                             <option value="" className='font-poppins text-black-1'>Paypal</option>
                                             <option value="" className='font-poppins text-black-1'>CashApp</option>
                                             <option value="" className='font-poppins text-black-1'>Bank Transfer</option>
                                        </select>
                                   </div>

                                   <div className="flex flex-col mb-6">
                                        <label htmlFor="email" className='font-poppins text-black-1 mb-1'>Email address</label>
                                        <input type="email"  className='px-5 py-6 outline-bright-green border-[0.5px] border-light-grey-4 rounded-md mb-6 font-poppins' placeholder='youremail@gmail.com'/>
                                   </div>

                                   <div className="flex flex-col mb-6">
                                        <label htmlFor="card-number" className='font-poppins text-black-1 mb-1'>Card Number</label>
                                        <input type="number" name='card-number' id='card-number'  className='px-5 py-6 outline-bright-green border-[0.5px] border-light-grey-4 rounded-md mb-6 font-poppins' placeholder='123456789'/>
                                   </div>

                                   <div className="flex flex-col md:flex-row mb-6 justify-between gap-6">
                                        <div className="flex flex-col md:w-1/2">
                                             <label htmlFor="expiry-date" className='font-poppins text-black-1 mb-1'>Expiry Date</label>
                                             <input type="text" name='expiry-date' id='expiry-date'  className='px-5 py-6 outline-bright-green border-[0.5px] border-light-grey-4 rounded-md mb-6 font-poppins eye' placeholder='MM/YY'/>
                                        </div>

                                        <div className="flex flex-col md:w-1/2 ">
                                             <label htmlFor="cvv" className='font-poppins text-black-1 mb-1'>CVV</label>
                                             <input type="number" name='cvv' id='cvv'  className='px-5 py-6 outline-bright-green border-[0.5px] border-light-grey-4 rounded-md mb-6 font-poppins eye' placeholder='***'/>
                                        </div>

                                   </div>
                              </form>
                         </div>

                         <div className='border-[0.5px] border-bright-green w-full md:w-1/2 p-6 rounded-3xl'>

                              <div className="flex flex-col mb-6 pb-6 border-b-[0.5px] border-light-grey-3 ">
                                   <p className='font-semibold font-inter text-2xl text-black-1 mb-1'>Payment Method</p>
                                   <p className='text-light-grey-3 font-poppins '>Select your preferred options and proceed to payment</p>
                              </div>

                              <div>
                                   <PriceSummary
                                        text='Base Fare:'
                                        price={3000}
                                   />

                                   <PriceSummary
                                        text='Additional Stop(s):'
                                        price={2000}
                                   />

                                   <PriceSummary
                                        text='Distance Fee:'
                                        price={1000}
                                   />

                                   <PriceSummary
                                        text='Discount:'
                                        price={500}
                                   />

                                   <PriceSummary
                                        text='Subtotal:'
                                        price={4500}
                                   />

                                   <PriceSummary
                                        text='Total:'
                                        price={4500}
                                   />
                              </div>

                              <div>
                                   <button className='py-5 px-6 bg-bluish-green text-white text-center font-semibold w-full rounded-md'>Make Payment</button>
                              </div>

                         </div>
                    </div>
          </div>
     </section>

    </>
  )
}

export default CheckOutPage