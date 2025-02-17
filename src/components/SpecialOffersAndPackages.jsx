import React from "react"

const offers = [
  {
    id: 1,
    title: "Special Offer 1",
    description:
      "“Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and“ ",
    image: "/images/offers.png",
  },
  {
    id: 2,
    title: "Special Offer 1",
    description:
      "“Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and“",
    image: "/images/offers.png",
  },
  {
    id: 3,
    title: "Special Offer 1",
    description:
      "“Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and“",
    image: "/images/offers.png",
  },
  {
    id: 4,
    title: "Special Offer 1",
    description:
      "“Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and“",
    image: "/images/offers.png",
  },
]

export default function SpecialOffersAndPackages() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 flex justify-center items-center">
      <div className="container px-4 md:px-6 ">
        <h2 className="text-[36px] font-[700] text-center mb-21">Special Offers & Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-12 ">
          {offers.map((offer) => (
            <div key={offer.id} className="flex flex-col sm:flex-row items-center mx-auto">
              <div className="relative w-[311px] h-[493px]">
                <img
                  src={offer.image || "/placeholder.svg"}
                  alt={`Special offer ${offer.id}`}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col items-center justify-center mt-4 sm:mt-0 sm:ml-4" style={{width: '308px', margin: 0, padding: 0}}>
                <h4 className="text-[20px] font-[700] mb-[23px] text-center sm:text-left">{offer.title}</h4>
                <p className="text-[20px] font-[400] text-center sm:text-left" style={{lineHeight:'20px', width:'232px'}}>{offer.description}</p>
                <button
                  className="px-8 py-1 border-2 border-[#141D31] text-[#141D31] text-[12px] font-[700] 
                  hover:bg-[#141D31] hover:text-white transition-colors duration-300 mt-[46px]"
                >
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

