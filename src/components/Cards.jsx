import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className='w-full px-4 '>
      <div className='max-w-screen-xl mx-auto py-10 md:py-20 flex flex-col md:flex-row gap-4 md:gap-0.5'>
        <Card width={"w-full md:basis-1/3"} project={false} para={true} hover="transition-all duration-600 hover:ml-0 md:hover:ml-5 hover:px-2" />
        <Card width={"w-full md:basis-2/3"} project={true} para={false} hover="hover:bg-violet-600 transition-all duration-600 hover:mr-0 md:hover:mr-5 hover:px-2" />
      </div>
    </div>
  )
}

export default Cards

