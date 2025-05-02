import React, { useState } from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='max-w-[1130px] py-6 mx-auto flex flex-col md:flex-row gap-4 md:gap-20 items-center border-b-[.5px] border-zinc-700 overflow-visible px-4 md:px-0'>
      <div className='w-full md:w-auto flex items-center justify-between'>
        <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" className='w-32 md:w-auto' />
        <button
          className='md:hidden text-white'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-4 md:gap-14 items-center w-full md:w-auto`}>
        <div className='flex justify-between gap-7 w-[97`0px]'>

          <div className='flex flex-col md:flex-row gap-4 md:gap-14 items-center justify-between'>
            {["Home", "Work", "Career", "", "News"].map((ele, index) => ele.length === 0 ?
              <span key={index} className='hidden md:block w-[.5px] h-5 bg-zinc-600'></span> :
              <Link key={index} className='flex text-sm items-center gap-1 hover:text-[#00FF19] transition-colors'>
                {ele === "Work" && <span style={{ boxShadow: "0 0 .25em #00FF19" }} className='inline-block w-1.5 h-1.5 bg-[#00FF19] rounded-full'></span>}
                {ele}
              </Link>
            )}
          </div>
          <div className='mt-4 md:mt-0'>
            <Button value={"Start a Project"} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar