import Image from 'next/image'
import React from 'react'

const partners =[
    {
        logo:'gig-logo.png',
        name:'gig'
    },
    {
        logo:'fez-logo.png',
        name:'fez'

    },
    {
        logo:'okiki-logo.png',
        name:'okiki'
    },
    {
        logo:'courie-logo.png',
        name:'courie'
    },
    {
        logo:'fastRyders-logo.png',
        name:'fast-ryders'
    },
    {
        logo:'fedEx-logo.png',
        name:'fedEx'
    }
]

const repeatedPartners = [...partners, ...partners, ...partners];

const PartnersCard = () => {
  return (
    <div className='lg:container mx-auto py-[48px]  px-6 lg:pl-20  w-full '>
         <p className='uppercase font-bold font-inter text-bright-green text-center'>PARTNERSHIPS</p>
         <h3 className='text-black-1 text-center  font-bold font-inter text-xl pt-3'>Our Delivery Partners</h3>
         <div className="no-scrollbar slide-container mt-14">

         <div className='flex   slide-animation'>
          {repeatedPartners.map((partner, index) => (
           <div key={`original-${index}`} className=" mr-24 h-24 w-32 relative  rounded-md ">
           <Image
             src={`/${partner.logo}`}
             fill
             className="object-contain"
             alt={`${partner.name}-logo`}
           />
         </div>
          ))}
         
        </div>

         </div>
    </div>
  )
}

export default PartnersCard