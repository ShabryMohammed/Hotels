"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"

const carouselData = [
  {
    id: 1,
    title: "Stay",
    image: "/images/Stay.png",
  },
  {
    id: 2,
    title: "Dining & Restaurant",
    image: "/images/dining and ressturent.png",
  },
  {
    id: 3,
    title: "Amenities & Services",
    image: "/images/animaties and services.png",
  },
  {
    id: 4,
    title: "Offers & Packages",
    image: "/images/offers and packages.png",
  },
]

export default function AutoSlidingGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef(null)
  const controls = useAnimation()

  const itemWidth = 368 // 263px (width) + 105px (gap)
  const totalWidth = itemWidth * carouselData.length

  useEffect(() => {
    const animateCarousel = async () => {
      await controls.start({
        x: [-totalWidth, 0],
        transition: {
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        },
      })
    }

    animateCarousel()
  }, [controls, totalWidth])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <div className="relative w-full h-[528px] overflow-hidden flex items-center justify-center md:h-[528px]" style={{ fontFamily: "'Merriweather', serif" }}>
        {/* Background with blur effect */}
        <div className="absolute inset-0 bg-[#434A78]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#E1C9A1] to-[#FFFFFF] opacity-50 blur-[280px]"></div>
        </div>
       
        <div ref={containerRef} className="relative w-full h-[324px] overflow-hidden z-10 md:w-[1290px]">
          <motion.div className="flex absolute left-0 top-0" animate={controls}>
            {[...carouselData, ...carouselData].map((item, index) => (
              <motion.div
                key={`${item.id}-${index}`}
                className="relative w-[263px] h-[324px] rounded-lg overflow-hidden cursor-pointer flex-shrink-0 mx-[10px] md:mx-[52.5px]"
                initial={{ scale: 1, opacity: 1 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute bottom-[13px] left-1/2 transform -translate-x-1/2 w-[224px] h-[36px] flex items-center justify-center">
                  <div className="absolute bottom-0 w-full h-[30px] bg-[#101010b3]"></div>
                  <h3 className="relative text-white text-[16px] font-semibold items-center pt-1">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Remove Navigation Dots */}
        {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {carouselData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${currentIndex === index ? "bg-white w-4" : "bg-white/50"}`}
            />
          ))}
        </div> */}
        {/* Gradient transition */}
        <div className="absolute bottom-0 left-0 w-full h-[84px] bg-gradient-to-b from-transparent to-[#141D31] z-10 "></div>
      </div>
      {/* Gradient transition */}
      <div className="bg-[#141D31] pt-[138px] pb-[84px] px-[20px] md:px-[122px] relative" style={{ fontFamily: "'Merriweather', serif" }}>
        {/* Add other elements below this section */}
        <div className="relative w-full h-auto flex flex-col md:flex-row items-center md:items-start md:gap-60">
          {/* Rectangle behind the image */}
          <div
            className="hidden md:block absolute left-85 top-[-30px] w-[272px] h-[555px] bg-[#E1C9A1] blur-[50px]"
          ></div>
          <img
            src="/images/aboutus.png"
            alt="About Us"
            className="w-full md:w-[700px] h-auto md:h-[493px] relative z-10"
          />
          <div className="mt-8 md:mt-0  flex flex-col items-center md:items-center relative z-10" style={{ maxWidth: "460px" }}>
            <h2 className="text-[36px] font-bold text-center md:text-left text-white">About Us</h2>
            <p className="mt-[66px] text-center md:text-center text-white px-[20px] md:px-0">
              “Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words themselves are a truncation of dolorem ipsum ("pain itself")”
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

