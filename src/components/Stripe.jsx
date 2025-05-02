import React from 'react'

const Stripe = ({ value: { name, number } }) => {
  return (
    <div className='w-full md:w-[16.66%] py-4 md:py-5 px-4 md:px-7 border-r-[1px] border-zinc-600 border-t-[1px] border-b-[1px] flex justify-between items-center font-semibold'>
      <img src={name} alt="" className='w-24 md:w-auto' />
      <span className='text-sm md:text-base'>{number}</span>
    </div>
  )
}

export default Stripe
