"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import TopNavbar from "./TopNavbar"
import backgroundImage from "../../../public/images/landing page bacground.png"

function LandingPage() {
  const [adultCount, setAdultCount] = useState(2)
  const [childCount, setChildCount] = useState(1)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleCount = (type, operation) => {
    if (type === "adult") {
      setAdultCount((prev) => (operation === "increment" ? prev + 1 : Math.max(1, prev - 1)))
    } else {
      setChildCount((prev) => (operation === "increment" ? prev + 1 : Math.max(0, prev - 1)))
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div
      className="h-full w-full bg-white rounded shadow-md"
      style={{ 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: "cover", 
        backgroundPosition: "center top 0%" ,
        overflow: "hidden", // Ensure no overflow
        fontFamily: "'Merriweather', serif" // Apply Merriweather font
      }}
    >
      <TopNavbar />
      <div className="relative flex justify-between items-center px-4 md:mt-20 mt-5">
        <button onClick={toggleMenu} className="text-white md:hidden">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
          <span className="text-lg md:text-2xl font-bold text-white ">Ritz Carlton</span>
          <div className="mt-0.5">
            <span className="text-[10px] md:text-sm font-bold text-white opacity-70">London</span>
          </div>
        </div>
        <button
          className="absolute right-0 md:right-25 px-2 py-0.5 md:px-7 md:py-2 border border-white bg-transparent text-white font-bold text-[10px] md:text-xs rounded-none focus:outline-none hover:bg-white hover:text-black transition-colors duration-300"
        >
          RESERVATION
        </button>
      </div>

      {/* Navigation Menu */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col items-start justify-start md:flex md:flex-row md:justify-start md:items-center md:ml-16 gap-3 text-white px-4  md:px-0 md:py-0 md:mt-[-20px]`}
      >
        <span className="text-sm font-bold py-0 md:py-0">Home</span>
        <span className="text-sm font-bold py-0 md:py-0">Accommodation</span>
        <span className="text-sm font-bold py-0 md:py-0">Facilities</span>
      </div>

      <div className="text-center mt-16 sm:mt-24 md:mt-32 lg:mt-48 xl:mt-64 w-full text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">Love The Stay</h1>
        <p className="mt-2 sm:mt-3 md:mt-4 text-[8px] sm:text-[10px] md:text-[11px] lg:text-[16px] opacity-80 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
          Lorem ipsum is typically a corrupted version of De finibus bonorum et
        </p>
      </div>

      <div
        style={{
          marginTop: "122px",
          width: "90%",
          maxWidth: "1196px",
          height: "auto", // Allow height to adjust based on content
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          transform: "translateX(-50%)",
          display: "flex",
          marginLeft: "50%",
          alignItems: "center",
          padding: "40px 45px", // Adjust padding for larger screens
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "space-between",
          color: "white",
          marginBottom: "41px",
          fontFamily: "'Merriweather', serif",
          flexDirection: "row", // Default to horizontal layout
        }}
        className="responsive-container" // Add a class for media queries
      >
        <span style={{ fontSize: "20px", fontWeight: 700, color: "#FFFFFF", marginLeft: "0px" }}>RESERVATION</span>
        <div style={{ textAlign: "center" }}>
          <span style={{ fontSize: "16px", fontWeight: 700, color: "#FFFFFF" }}>Choose Date</span>
          <div style={{ marginTop: "40px" }}>
            <span style={{ fontSize: "16px", fontWeight: 700, color: "#FFFFFF" }}>Dec 15 - Dec 25</span>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <span style={{ fontSize: "16px", fontWeight: 700, color: "#FFFFFF" }}>Adult</span>
          <div style={{ marginTop: "40px", display: "flex", alignItems: "center", justifyContent: "center", gap: "20px" }}>
            <button
              onClick={() => handleCount("adult", "decrement")}
              style={{
                width: "22px",
                height: "22px",
                backgroundColor: "transparent",
                border: "1px solid white",
                borderRadius: "50%",
                color: "white",
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                padding: "0",
                outline: "none",
                fontFamily: "'Merriweather', serif"
              }}
            >
              -
            </button>
            <span className="mt-4 md:mt-0" style={{ fontSize: "16px", fontWeight: 700, color: "#FFFFFF" }}>{adultCount}</span>
            <button
              onClick={() => handleCount("adult", "increment")}
              style={{
                width: "22px",
                height: "22px",
                backgroundColor: "transparent",
                border: "1px solid white",
                borderRadius: "50%",
                color: "white",
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                padding: "0",
                outline: "none",
                fontFamily: "'Merriweather', serif"
              }}
            >
              +
            </button>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <span style={{ fontSize: "16px", fontWeight: 700, color: "#FFFFFF" }}>Children</span>
          <div style={{ marginTop: "40px", display: "flex", alignItems: "center", justifyContent: "center", gap: "20px" }}>
            <button
              onClick={() => handleCount("child", "decrement")}
              style={{
                width: "22px",
                height: "22px",
                backgroundColor: "transparent",
                border: "1px solid white",
                borderRadius: "50%",
                color: "white",
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                padding: "0",
                outline: "none",
                fontFamily: "'Merriweather', serif"
              }}
            >
              -
            </button>
            <span className="mt-4 md:mt-0" style={{ fontSize: "16px", fontWeight: 700, color: "#FFFFFF" }}>{childCount}</span>
            <button
              onClick={() => handleCount("child", "increment")}
              style={{
                width: "22px",
                height: "22px",
                backgroundColor: "transparent",
                border: "1px solid white",
                borderRadius: "50%",
                color: "white",
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                padding: "0",
                outline: "none",
                fontFamily: "'Merriweather', serif"
              }}
            >
              +
            </button>
          </div>
        </div>
        <button
          style={{
            border: "1px solid #434A78",
            backgroundColor: "#434A78",
            color: "white",
            padding: "10px 50px",
            fontWeight: 700,
            fontSize: "16px",
            cursor: "pointer",
            borderRadius: "0",
            outline: "none",
            fontFamily: "'Merriweather', serif"
          }}
        >
          Check Availability
        </button>
      </div>
      <style>
        {`
          @media (max-width: 768px) {
            .responsive-container {
              flex-direction: column; /* Change to vertical layout */
              height: auto; /* Allow height to adjust */
              padding: 20px; /* Adjust padding for smaller screens */
              gap: 30px; /* Increase gap between items for better spacing */
              align-items: stretch; /* Stretch items to full width */
            }
            .responsive-container > * {
              margin-left: 0; /* Remove left margin */
              text-align: center; /* Center text */
              width: 100%; /* Make each item full width */
            }
            .responsive-container button {
              width: 100%; /* Make button full width */
              margin-top: 20px; /* Add margin to the top of the button */
            }
            .responsive-container div {
              margin-top: 20px; /* Add margin between sections */
            }
          }
        `}
      </style>
    </div>
  )
}

export default LandingPage

