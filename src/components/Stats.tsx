import React from 'react'
import Stat from './Stat'

function Stats() {
  return (
    <section id='Stats' className='bg-[#F1F5F7]'>
          <div className='lg:container mx-auto py-10 lg:px-20 px-10 grid xl:grid-cols-4 sm:grid-cols-2  gap-8 lg:gap-20'>

               <Stat number='23k+' text='Deliveries' />
               <Stat number='3k+' text='Active Users'/>
               <Stat number='120+' text='Partner Vendors'/>
               <Stat number='100%' text='Client Satisfaction'/>
          </div>
    </section>
  )
}

export default Stats