import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='w-full overflow-x-hidden'>
      <div className='max-w-screen-xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-10 md:gap-24 md:w-screen'>
        
        <div className='md:basis-1/2'>
          <h1 className='text-[3rem] sm:text-[5rem] md:text-[8rem] lg:text-[11rem] pb-6 font-semibold leading-none tracking-tight whitespace-nowrap max-w-full'>
            refokus.
          </h1>
          <div className='flex flex-wrap gap-6 text-zinc-500 text-xs'>
            {["Privacy Policy", "Cookie Policy", "Impressum", "Terms"].map((item, index) => (
              <Link to="#" key={index} className="hover:underline">
                {item}
              </Link>
            ))}
          </div>
        </div>

        
        <div className='md:basis-1/2 flex flex-col sm:flex-row gap-10 md:gap-16'>
          {/* Socials Column */}
          <div className='flex-1 flex flex-col gap-2 text-xs text-zinc-500'>
            <p className='mb-4 font-medium uppercase'>Socials</p>
            {["Instagram", "Twitter(x?)", "Linkedin"].map((item, index) => (
              <Link to="#" key={index} className="hover:underline">
                {item}
              </Link>
            ))}
          </div>

          
          <div className='flex-1 flex flex-col gap-2 text-xs text-zinc-500'>
            <p className='mb-4 font-medium uppercase'>Navigation</p>
            {["Home", "Work", "Career", "Contact"].map((item, index) => (
              <Link to="#" key={index} className="hover:underline">
                {item}
              </Link>
            ))}
          </div>

          
          <div className='flex-1 text-right sm:text-left flex flex-col items-end sm:items-start'>
            <p className='text-sm mb-4 w-full sm:w-48 text-zinc-700'>
              Refokus is a pioneering digital agency driven by design and empowered by technology
            </p>
            <img
              src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg"
              alt="Webflow Badge"
              className='w-24 sm:w-32'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
