import React from 'react'
import Stat from './Stat'

function Stats() {
  return (
    <section id='Stats' className='bg-[#F1F5F7]'>
          <div className='container mx-auto py-10  flex flex-col md:flex-row items-center justify-between gap-6'>
               <Stat number='23k+' text='Deliveries' />
               <Stat number='3k+' text='Active Users'/>
               <Stat number='120+' text='Partner Vendors'/>
               <Stat number='100%' text='Client Satisfaction'/>
          </div>
    </section>
  )
}

export default Stats