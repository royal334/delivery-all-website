import React from 'react'


interface priceSummaryProps{
     text:string
     price:number
}
function PriceSummary(props:priceSummaryProps) {

  return (
    <div className='flex justify-between items-center mb-6'>
          <p className={`font-poppins  ${props.text === 'Total:' ?'font-bold text-black-1' : 'text-light-grey-3'} ` }>{props.text}</p>
          <p className={`font-poppins   ${props.text === 'Total:' ?'font-bold text-bluish-green' : 'text-black-1'}`}>N {props.price.toLocaleString()}</p>
    </div>
  )
}

export default PriceSummary