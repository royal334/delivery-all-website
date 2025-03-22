import React from 'react'
import AboutHerosection from './components/AboutHeroSection'
import Mission from './components/Mission'
import Vission from './components/Vission'
import Stats from '@/components/Stats'
import WhyUs from './components/WhyUs'
import HowItWorks from './components/HowItWorks'
import Team from './components/Team'
import PartnersCard from './components/PartnersCard'
import Newletter from './components/Newletter'

const AboutPage = () => {
  return (
    <div>
        <AboutHerosection/>
        <Mission/>
        <Vission/>
        <Stats/>
       <WhyUs/>
       <HowItWorks/>
       <Team/>
       <PartnersCard/>
       <Newletter/>
    </div>
  )
}

export default AboutPage
