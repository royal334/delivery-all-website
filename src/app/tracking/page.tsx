import React from 'react'
import TrackingHeroSection from './components/TrackingHeroSection'
import Package from './components/Package'
import ContactSection from '@/components/ContactSection'
import Newletter from '@/components/Newletter'

function page() {
  return (
    <div>
      <TrackingHeroSection/>
      <Package/>
      <ContactSection/>
      <Newletter/>
    </div>
  )
}

export default page