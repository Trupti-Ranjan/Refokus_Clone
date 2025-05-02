import React from 'react';
import './marquee.css'; // We'll add CSS here

const Marquee = ({ images, direction = "left" }) => {
  return (
    <>
      <div className={`marquee-container ${direction}`}>

        <div className="marquee-track">
          {images.map((item, index) => (
            <img key={index} src={item} className="marquee-image" />
          ))}

          {images.map((item, index) => (
            <img key={index + images.length} src={item} className="marquee-image" />
          ))}
        </div>
      </div>
    </>
  );
};

export default Marquee;
