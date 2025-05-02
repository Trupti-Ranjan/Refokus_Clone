import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'motion/react';
import arqitel from '../assets/arqitel.mp4'
import ttr from '../assets/ttr.mp4'
import yir from '../assets/yir.mp4'
import yahoo from '../assets/yahoo.mp4'
import rainfall from '../assets/rainfall.mp4'

const Products = () => {
  const products = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      caseb: false,
      color: "#5355ee",
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      caseb: false,
      color: "#46289a",
    },
    {
      title: "YIR 2022",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      caseb: false,
      color: "#5d4eff",
    },
    {
      title: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models.",
      live: true,
      caseb: true,
      color: "#7e1fff",
    },
    {
      title: "Rainfall",
      description:
        "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
      live: true,
      caseb: true,
      color: "#1430d4",
    },
  ];

  const [position, setPosition] = useState(0)

  const mover = (val) => (
    setPosition(val * 20)
  )

  return (
    <div className='mt-20 relative'>
      {products.map((ele, index) => <Product key={index} value={ele} mover={mover} index={index} />)}
      <div className='absolute top-0 h-full w-full pointer-events-none hidden md:block'>
        <motion.div
          initial={{ y: position }}
          animate={{ y: position + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }}
          className={`absolute w-72 md:w-96 h-[15rem] md:h-[20rem] left-[20%] md:left-[30%] overflow-hidden`}
        >
          <motion.div animate={{ y: -position + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }} className='w-full h-full'>
            <video
              className="absolute object-cover rounded-3xl"
              autoPlay
              muted
              loop
              src={arqitel}
            ></video>
          </motion.div>
          <motion.div animate={{ y: -position + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }} className='w-full h-full '>
            <video
              className="absolute object-cover rounded-3xl"
              autoPlay
              muted
              loop
              src={ttr}
            ></video>
          </motion.div>
          <motion.div animate={{ y: -position + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }} className='w-full h-full '>
            <video
              className="absolute object-cover rounded-3xl"
              autoPlay
              muted
              loop
              src={yir}
            ></video>
          </motion.div>
          <motion.div animate={{ y: -position + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }} className='w-full h-full '>
            <video
              className="absolute object-cover rounded-3xl"
              autoPlay
              muted
              loop
              src={yahoo}
            ></video>
          </motion.div>
          <motion.div animate={{ y: -position + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .5 }} className='w-full h-full '>
            <video
              className="absolute object-cover rounded-3xl"
              autoPlay
              muted
              loop
              src={rainfall}
            ></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Products