"use client"

import { useState } from "react"
import TopNavbar from "./TopNavbar"
import backgroundImage from "../../../public/images/landing page bacground.png"

function LandingPage() {
  const [adultCount, setAdultCount] = useState(2)
  const [childCount, setChildCount] = useState(1) 

  const handleCount = (type, operation) => {
    if (type === "adult") {
      setAdultCount((prev) => (operation === "increment" ? prev + 1 : Math.max(1, prev - 1)))
    } else {
      setChildCount((prev) => (operation === "increment" ? prev + 1 : Math.max(0, prev - 1)))
    }
  }

  return (
    <div
      className="h-full w-full bg-white rounded shadow-md"
      style={{ 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: "cover", 
        backgroundPosition: "center top 0%" ,
        overflow: "hidden" // Ensure no overflow
      }}
    >
      <TopNavbar />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          marginTop: "54px",
          marginLeft: "63px",
          gap: "10px",
          color: "white", // Ensure text color is white
        }}
      >
        <span style={{ fontSize: "12px", fontWeight: 700 }}>Home</span>
        <span style={{ fontSize: "12px", fontWeight: 700 }}>Accommodation</span>
        <span style={{ fontSize: "12px", fontWeight: 700 }}>Facilities</span>
      </div>
      <div style={{ textAlign: "center",  marginTop: "-30px", width: "100%", color: "white" }}> {/* Ensure text color is white */}
        <span style={{ fontSize: "24px", fontWeight: 700 }}>Ritz Carlton</span>
        <div style={{ marginTop: "-10px" }}>
          <span style={{ fontSize: "12px", fontWeight: 700, color: "white", opacity: 0.5 }}>London</span>
        </div>
      </div>
      <div style={{  marginTop: "-50px", marginLeft: "86%" }}>
        <button
          style={{
            padding: "9px 29px",
            border: "1px solid white",
            backgroundColor: "transparent",
            color: "white",
            fontWeight: 700,
            fontSize: "12px",
            borderRadius: "0",
            outline: "none",
          }}
          onFocus={(e) => e.target.style.outline = "none"}
          onBlur={(e) => e.target.style.outline = "none"}
        >
          RESERVATION
        </button>
      </div>
      <div style={{ textAlign: "center",  marginTop: "249px", width: "100%", color: "white" }}> {/* Ensure text color is white */}
        <span style={{ fontSize: "96px", fontWeight: 700, color: "#FFFFFF" }}>Love The Stay</span>
        <div style={{ marginTop: "10px" }}>
          <span style={{ fontSize: "16px", fontWeight: 400, color: "#FFFFFF", opacity: 0.8 }}>
            Lorem ipsum is typically a corrupted version of De finibus bonorum et
          </span>
        </div>
      </div>
      <div
        style={{
          
          marginTop: "122px",
          width: "90%",
          maxWidth: "1196px",
          height: "166px",
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          transform: "translateX(-50%)",
          display: "flex",
          marginLeft: "50%",
          alignItems: "center",
          padding: "0 45px",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "space-between",
          color: "white", // Ensure text color is white
          marginBottom: "41px", // Add margin bottom
        }}
      >
        <span style={{ fontSize: "20px", fontWeight: 700, color: "#FFFFFF", marginLeft: "45px" }}>RESERVATION</span>
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
              }}
              onFocus={(e) => e.target.style.outline = "none"}
              onBlur={(e) => e.target.style.outline = "none"}
            >
              -
            </button>
            <span style={{ fontSize: "16px", fontWeight: 700, color: "#FFFFFF" }}>{adultCount}</span>
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
              }}
              onFocus={(e) => e.target.style.outline = "none"}
              onBlur={(e) => e.target.style.outline = "none"}
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
              }}
              onFocus={(e) => e.target.style.outline = "none"}
              onBlur={(e) => e.target.style.outline = "none"}
            >
              -
            </button>
            <span style={{ fontSize: "16px", fontWeight: 700, color: "#FFFFFF" }}>{childCount}</span>
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
              }}
              onFocus={(e) => e.target.style.outline = "none"}
              onBlur={(e) => e.target.style.outline = "none"}
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
          }}
          onFocus={(e) => e.target.style.outline = "none"}
          onBlur={(e) => e.target.style.outline = "none"}
        >
          Check Availability
        </button>
      </div>
    </div>
  )
}

export default LandingPage

