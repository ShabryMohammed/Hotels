"use client"

import { useState } from "react"

const restaurants = [
  {
    name: "Spice & Savor",
    image: "/images/dining and res.png", // Image in public folder
  },
  {
    name: "The Grand Fork",
    image: "/images/dining and res.png", // Image in public folder
  },
  {
    name: "Love Bar",
    image: "/images/dining and res.png", // Image in public folder
  },
  {
    name: "Azure Bites",
    image: "/images/dining and res.png", // Image in public folder
  },
]

export default function DiningAndResturent() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === restaurants.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? restaurants.length - 1 : prevIndex - 1))
  }

  return (
    <div className="relative w-full h-full overflow-hidden mb-[100px]">
      {/* Background Images */}
      <div className="relative inset-0 flex justify-center items-center" style={{ marginLeft:'471px', marginTop: '146px' }}>
        <img src={restaurants[currentIndex].image} alt={restaurants[currentIndex].name} className="object-cover" style={{ width: '814px', height: '834px' }} />
        {/* Name Overlay */}
        <div className="absolute bottom-0 text-[16px] font-[700] w-[814px] text-center bg-[#141D3180] text-white py-9">
          {restaurants[currentIndex].name}
        </div>
      </div>

      {/* Overlay Content - This stays static */}
      <div className="relative inset-0 items-center justify-center flex mr-[471px] mt-[-700px]">
        <div className="bg-[#2B3147] text-white p-8 mb-50 flex flex-col items-center" style={{ width: '644px', height: '573px' }}>
          <h2 className="text-[36px] font-[700] mb-[66px] text-center mt-[47px]">Dining & Restaurant</h2>
          <p className="mb-[19px] text-[20px] text-white text-center" style={{ width: '460px', height: '180px', lineHeight: '20px' }}>
            “Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words themselves are a truncation of dolorem ipsum ("pain itself) "
          </p>
          <button className="px-[29px] py-2 border border-white hover:bg-white/10 transition-colors">View More</button>
        
          {/* Navigation Circles */}
          <div className="flex gap-[12px] mt-[57px]">
            <button
              onClick={prevSlide}
              className="w-[19px] h-[19px] rounded-full border border-white flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-[19px] h-[19px] rounded-full border border-white flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

