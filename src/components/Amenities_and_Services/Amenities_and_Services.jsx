"use client"

import { useEffect, useState } from "react"

const images = [
  {
    src: "/images/outdoor_pool.png",
    title: "Outdoor Pool",
    alt: "Outdoor pool area with comfortable lounge chairs",
  },
  {
    src: "/images/indoor_pool.png",
    title: "Indoor Pool",
    alt: "Indoor pool facility",
  },
  {
    src: "/images/love_bar.png",
    title: "Love Bar",
    alt: "Elegant bar and lounge area",
  },
  {
   src: "/images/love_bar.png",
    title: "Fun Bar",
    alt: "Entertainment bar area",
  },
]

function ImageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const getImageIndex = (position) => {
    return (activeIndex + position) % images.length
  }

  return (
    <div className="flex flex-col items-center" style={{ height: "85vh", width: '100%', overflow: "hidden", marginLeft: 'auto', marginRight: 'auto' }}>
      {[0, 1, 2].map((position) => (
        <div
          key={position}
          className={`relative mb-[3%] transition-all duration-1000 ${position === 1 ? 'lg:mr-[25%]' : ''}`}
        >
          <div className="relative w-full max-w-[90vw] lg:max-w-[50vw] h-[35vh]">
            <img
              src={images[getImageIndex(position)].src || "/placeholder.svg"}
              alt={images[getImageIndex(position)].alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2">
              <h3 className="text-white text-xl font-semibold text-center">{images[getImageIndex(position)].title}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function AmenitiesAndServices() {
  return (
    <section className="my-[30px] mx-[16px] lg:mx-[96px] relative bg-[#E1C9A180] min-h-screen py-12 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Left content */}
          <div className="lg:w-1/2 w-full flex flex-col items-center justify-center text-center mt-[-100px]">
            <h2 className="text-3xl lg:text-5xl font-bold mb-[66px] text-[#141D31]">Amenities & Services</h2>
            <p className="mb-[28px] text-lg lg:text-xl text-[#141D31] leading-relaxed max-w-2xl mx-auto">
            “Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words themselves are a truncation of dolorem ipsum ("pain itself)"
            </p>
            <button
              className="px-14 py-2 border-2 border-[#141D31] text-[#141D31] text-lg font-bold 
              hover:bg-[#141D31] hover:text-white transition-colors duration-300 "
            >
              View More
            </button>
          </div>

          {/* Right side carousel */}
          <div className="lg:w-1/2 w-full">
            <ImageCarousel />
          </div>
        </div>
      </div>
    </section>
  )
}