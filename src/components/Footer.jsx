// App.jsx
import React from 'react'

function Footer() {
  return (
    <div className="h-full bg-[#2B315E] text-white" style={{ fontFamily: "'Merriweather', serif" }}>
      {/* Main content container */}
      <div className="container mx-auto px-6 pt-20 pb-7 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Hotel Information */}
        <div className="space-y-4 md:space-y-8">
          <h1 className="text-[16px] md:text-[20px] font-[700]">Hotel Name</h1>
          <p className="text-[10px] md:text-[12px] font-[700]">42 Gerry Islands, Maldives</p>
          <p className="text-[10px] md:text-[12px] font-[700]">+1238754324</p>
          <p className="text-[10px] md:text-[12px] font-[700]">ritzcalton@gmail.com</p>
        </div>

        {/* Check-in/Check-out Information */}
        <div className="space-y-4 md:space-y-8">
          <h2 className="text-[16px] md:text-[20px] font-[700]">Check-in / Check-out</h2>
          <p className="text-[10px] md:text-[12px] font-[700]">
            We hope you've enjoyed your stay from start to finish.
            <br />
            Please note the check-in / out times below:
          </p>
          <div className="space-y-2">
            <p className="text-[10px] md:text-[12px] font-[700]">Check-in: 2pm</p>
            <p className="text-[10px] md:text-[12px] font-[700]">Check-out: 12 noon</p>
          </div>
        </div>

        {/* Booking Section */}
        <div className="space-y-4 text-center" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          <h2 className="text-[24px] md:text-[36px] font-[400]">Book Now</h2>
          <button className="text-[10px] md:text-[12px] font-[700] bg-[#D5C3A7] text-[#141D31] py-[20px] md:py-[29px] px-[20px] md:px-30 my-5">
            MY RESERVATION
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#F2E8DD] mt-12 pt-10 md:pt-17 pb-8 md:pb-10 mx-auto px-6 text-center">
        <p className="text-[10px] md:text-[12px] font-[700] text-[#141D31]">Logo Image</p>
      </div>

      <div className="bg-white pt-5 pb-8 mx-auto px-6 text-center">
        <div className="text-black text-[12px] md:text-[14px] font-[400] space-y-4 md:space-y-10">
          <p>© Copyright Knight Owl All Rights Reserved</p>
          <p>Designed by Knight Owl</p>
        </div>
      </div>
    </div>
  )
}

export default Footer