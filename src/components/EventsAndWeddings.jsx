"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/images/EW_1.png",
    title: "Weddings & Celebrations",
    description:
      "“Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, “Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero“",
  },
  {
    id: 2,
    image: "/images/EW_2.png",
    title: "Meetings and Events",
    description:
      "“Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, “Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero“",
  },
];

export default function EventsAndWeddings() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-16">
      <h1 className="text-2xl sm:text-[36px] font-bold text-[#141D31] text-center">Events & Weddings</h1>
      <p className="mt-6 sm:mt-[45px] text-sm sm:text-base text-[#141D31] text-center max-w-[90%] sm:max-w-[700px] leading-6 mb-20" style={{lineHeight: "16px"}}>
      Lorem ipsum is typically a corrupted version of De finibus bonorum et Lorem ipsum is typically a corrupted version of De finibus bonorum et Lorem ipsum is typically a corrupted version of De finibus bonorum et 
      </p>

      {/* Gradient Background (Includes Everything) */}
      <div className="w-full bg-gradient-to-b from-[#434A78] to-[#141D31] flex flex-col justify-center items-center py-10 sm:py-10 ">
        <div className="relative w-full max-w-[1200px]">
          <div className="relative w-full">
            <img
              src={slides[currentSlide].image || "/placeholder.svg"}
              alt={slides[currentSlide].title}
              className="w-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[90%] sm:translate-y-[65%] w-[90%] sm:w-[85%] lg:w-[80%]">
              <div className="bg-white shadow-lg text-black p-6 sm:p-8">
                <h3 className="text-lg sm:text-[20px] font-bold mb-2 sm:mb-4">{slides[currentSlide].title}</h3>
                <p className="text-sm sm:text-[16px] mb-2 sm:mb-4 max-w-[90%] sm:max-w-[827px]" style={{lineHeight: "16px"}}>
                  {slides[currentSlide].description}
                </p>
                <button className="border border-black px-6 sm:px-10 py-1 text-xs sm:text-[12px] font-bold">View More</button>
              </div>
            </div>
          </div>

          {/* 🔹 Navigation Moved Inside Gradient */}
          <div className="flex justify-center items-center gap-4 sm:gap-7 text-white text-sm sm:text-[17px] font-medium mt-50 sm:mt-50">
            <button onClick={prevSlide} className="hover:opacity-70">
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <span>{`${currentSlide + 1}/${slides.length}`}</span>
            <button onClick={nextSlide} className="hover:opacity-70">
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
