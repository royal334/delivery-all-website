'use client'
import React, { useState } from 'react'
import TrackingHeroSection from './components/TrackingHeroSection'
import Package from './components/Package'
import ContactSection from '@/components/ContactSection'
import Newletter from '@/components/Newletter'

function Trackingpage() {
  const [packageDetails,setPackageDetails] = useState<boolean>(false)
  const [trackingNumber,setTrackingNumber] = useState("")

  const trackPackage =(e:React.FormEvent)=>{
    e.preventDefault()
    setPackageDetails(true)
  }
  const handleTrackingChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setTrackingNumber(e.target.value)
  }
  return (
    <div>
      <TrackingHeroSection trackingNumber={trackingNumber} handleTrackChange={handleTrackingChange} onTrackPackage ={trackPackage}/>
     {
      packageDetails &&  <Package/>
     }
      <ContactSection/>
      <Newletter/>
    </div>
  )
}

export default Trackingpage