import HotelMap from "./HotelMap";
export default function YourDestination() {
    return (
        <div className="flex flex-col items-center px-2 md:px-4 h-full">
             <h1 className="text-[20px] md:text-[36px] font-[700] text-center text-[#141D31] mt-4 md:mt-8 mb-4 md:mb-6 font-merriweather">Your Destination</h1>
             <HotelMap />
        </div>
    )
}