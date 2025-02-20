"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const Accommodation = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const rooms = [
    {
      type: "Luxury Room",
      image: "/images/Luxury Room.png",
    },
    {
      type: "Standard Room",
      image: "/images/Standard Room.png",
    },
    {
      type: "Family Room",
      image: "/images/Family Room.png",
    },
    {
      type: "Luxury Room",
      image: "/images/Luxury Room.png",
    },
    {
      type: "Standard Room",
      image: "/images/Standard Room.png",
    },
    {
      type: "Family Room",
      image: "/images/Family Room.png",
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 mt-[85px]" style={{ fontFamily: "'Merriweather', serif" }}>
      <h1 className="text-4xl font-semibold text-center text-[#101010] mb-[30px]">Accommodation</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[12px] gap-y-[21px] mb-[46px] ml-[10px] mr-[10px] md:ml-[130px] md:mr-[130px]">
        {rooms.map((room, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden shadow-lg group cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            animate={{
              scale: hoveredIndex === index ? 1.05 : 1,
              y: hoveredIndex === index ? -10 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <img src={room.image || "/placeholder.svg"} alt={room.type} className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xl font-medium">
                {room.type}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <button className="px-[39px] py-[9px] border-2 border-[#101010] text-[#141D31] font-medium mb-[30px] hover:bg-[#101010] hover:text-white transition-colors duration-300">
          Book Now
        </button>
      </div>
    </section>
  )
}

export default Accommodation

