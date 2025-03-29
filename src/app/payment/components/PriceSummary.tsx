import React from 'react'


interface priceSummaryProps{
     text:string
     price:number
}
function PriceSummary(props:priceSummaryProps) {

  return (
    <div className='flex justify-between items-center mb-6'>
          <p className={`font-poppins text-light-grey-3 ${props.text === 'Total:' ?'font-bold text-black' : null} ` }>{props.text}</p>
          <p className={`font-poppins text-black-1  ${props.text === 'Total:' ?'font-bold text-bluish-green' : null}`}>N {props.price.toLocaleString()}</p>
    </div>
  )
}

export default PriceSummary