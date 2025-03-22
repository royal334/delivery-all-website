import React from 'react'
import AboutHerosection from './components/AboutHeroSection'
import Mission from './components/Mission'
import Vission from './components/Vission'
import Stats from '@/components/Stats'
import WhyUs from './components/WhyUs'
import HowItWorks from './components/HowItWorks'

const AboutPage = () => {
  return (
    <div>
        <AboutHerosection/>
        <Mission/>
        <Vission/>
        <Stats/>
       <WhyUs/>
       <HowItWorks/>
    </div>
  )
}

export default AboutPage

