import React from 'react'
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";


const Button = ({ value = "Get started" }) => {
  return (
    <div className='bg-white text-black rounded-full px-2 md:px-3 py-1 md:py-1.5 gap-2 md:gap-3 flex justify-between items-center 
hover:scale-105 hover:bg-gray-200 transition-all duration-300 group'>
      <span className='text-[10px] md:text-xs'>{value}</span>
      <span className='text-[10px] md:text-xs inline-flex items-center relative top-[1px] transition-all duration-300 group-hover:translate-x-1'>
        <MdOutlineSubdirectoryArrowRight />
      </span>
    </div>

  )
}

export default Button