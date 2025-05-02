import React, { useState } from 'react'
import { useScroll } from "motion/react"

const Work = () => {

  const [images, setImages] = useState([
    { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png", top: "50%", left: "50%", isActive: false },
    { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png", top: "56%", left: "43%", isActive: false },
    { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png", top: "45%", left: "56%", isActive: false },
    { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png", top: "60%", left: "53%", isActive: false },
    { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png", top: "43%", left: "49%", isActive: false },
    { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png", top: "65%", left: "43%", isActive: false },
  ])

  const { scrollYProgress } = useScroll()

  scrollYProgress.on("change", (data) => {
    const showImages = (array) => {
      setImages((prev) => (
        prev.map((ele, index) => (
          array.indexOf(index) === -1 ?
            { ...ele, isActive: false } : { ...ele, isActive: true }
        ))
      ))
    }

    let val = parseInt(data * 100)
    switch (val) {
      case 0:
        showImages([])
        break;
      case 1:
        showImages([0])
        break;
      case 2:
        showImages([0, 1, 2])
        break;
      case 3:
        showImages([0, 1, 2, 3])
        break;
      case 4:
        showImages([0, 1, 2, 3, 4])
        break;
      case 5:
        showImages([0, 1, 2, 3, 4, 5])
        break;
      case 6:
        showImages([0, 1, 2, 3, 4, 5, 6])
        break;
    }
  })

  return (
    <div className='w-full mb-10 px-4 md:px-0'>
      <div className='relative max-w-screen-xl mx-auto text-center'>
        <h1 className='select-none text-[20vw] md:text-[33vw] font-medium leading-none tracking-tight'>work</h1>
        <div className='absolute top-0 h-full w-full'>
          {images.map((ele, index) => (
            ele.isActive && (
              <img
                key={index}
                className='absolute w-40 md:w-60 rounded-2xl -translate-x-[50%] -translate-y-[20%]'
                src={ele.url}
                alt=""
                style={{
                  top: ele.top,
                  left: ele.left,
                  maxWidth: '90%'
                }}
              />
            )
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work