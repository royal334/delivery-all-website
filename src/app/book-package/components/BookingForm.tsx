import React from 'react'
import BookingDeliveryDetails from './BookingDeliveryDetails'
import BookingDeliverySummary from './BookingDeliverySummary'

const BookingForm = () => {
  return (
    <div className='lg:container mx-auto px-6 lg:px-20 py-[60px]'>
      <p className='text-center text-[#0E5F76] text-xl font-inter font-bold'>Book A Delivery</p>
      <p className='text-center text-[#8A8A8A] text-sm font-poppins pt-3 lg:max-w-md mx-auto'>Connect with trusted delivery partners and get your packages delivered anywhere, anytime. </p>
      <div className="flex flex-col sm:flex-row mt-[48px] w-full justify-between items-start gap-[48px] ">
        <BookingDeliveryDetails/>
        <BookingDeliverySummary/>
      </div>
    </div>
  )
}

export default BookingForm
