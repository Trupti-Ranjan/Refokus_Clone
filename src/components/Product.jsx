import React from 'react';
import Button from './Button';

const Product = ({ value: { title, description, live, caseb, color }, mover, index }) => {
  return (
    <div className="w-full h-[20rem] py-10 text-white relative">
      <div
        onMouseEnter={() => { mover(index) }}
        className="group py-10 flex items-center justify-center relative overflow-hidden cursor-pointer w-full"
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
          style={{ backgroundColor: color }}
        ></div>

        
        <div className="max-w-screen-xl w-full mx-auto px-4 md:px-0 flex flex-col md:flex-row justify-between items-center relative z-10">
          <h1 className="text-4xl md:text-6xl capitalize font-medium group-hover:text-white transition-all duration-500 text-center md:text-left mb-4 md:mb-0">{title}</h1>
          <div className="w-full md:w-1/3">
            <p className="mb-6 md:mb-10 group-hover:text-white transition-all duration-500 text-center md:text-left">{description}</p>
            <div className="flex items-center justify-center md:justify-start gap-4 md:gap-6">
              {live && <Button value="Live Website" />}
              {caseb && <Button value="Case Study" />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
