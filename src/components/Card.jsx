import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";


const Card = ({ width, project, para, hover }) => {
  return (
    <div className={`bg-zinc-800 p-4 md:p-5 rounded-xl ${width} ${hover} min-h-[18rem] md:min-h-[23rem] flex flex-col justify-between`}>
      <div className='flex justify-between flex-col'>
        <div className='flex justify-between'>
          <h3 className='text-[10px] md:text-xs font-medium'>Up Next: Culture</h3>
          <span className='text-[10px] md:text-xs inline-block'>
            <FaLongArrowAltRight />
          </span>
        </div>
        <h1 className='text-2xl md:text-3xl font-medium mt-3 md:mt-4'>Who we are</h1>
      </div>
      <div>
        {project && (
          <>
            <h1 className='text-4xl md:text-7xl tracking-tight font-semibold mb-4 md:mb-5'>Start a project</h1>
            <button className='px-4 md:px-5 py-1 rounded-full border-[1px] border-zinc-600 bg-white text-zinc-900 text-sm md:text-base'>
              Contact us
            </button>
          </>
        )}

        {para && (
          <p className='text-[10px] md:text-xs text-zinc-400 font-medium mt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        )}
      </div>
    </div>
  )
}

export default Card