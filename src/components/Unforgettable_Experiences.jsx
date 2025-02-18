export default function UnforgettableExperiences() {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen py-16">
        <h1 className="text-[36px] font-bold text-[#141D31]" style={{ fontFamily: "'Merriweather', serif" }}>Unforgettable Experience</h1>
        <p className="mt-[45px] text-base font-normal text-[#141D31] text-center max-w-[700px] leading-4" style={{ fontFamily: "'Merriweather', serif" }}>
          Lorem ipsum is typically a corrupted version of De finibus bonorum et Lorem ipsum is typically a corrupted
          version of De finibus bonorum et Lorem ipsum is typically a corrupted version of De finibus bonorum et
        </p>
  
        <div className="mt-[90px] max-w-[1200px] flex flex-wrap gap-[14px] justify-center">
          {/* First column */}
          <div className="flex flex-col gap-[14px]">
            <img src="/public/images/UE_1.png" alt="Luxury hotel room" className="w-[225px] h-[256px] object-cover" />
            <img src="/public/images/UE_6.png" alt="Resort exterior" className="w-[225px] h-[256px] object-cover" />
            <img src="/public/images/UE_9.png" alt="Modern hotel room" className="w-[225px] h-[256px] object-cover" />
          </div>
  
          {/* Second column */}
          <div className="flex flex-col gap-[14px]">
            <img src="/public/images/UE_2.png" alt="Elegant interior" className="w-[225px] h-[526px] object-cover" />
            <img src="/public/images/UE_10.png" alt="Elegant interior" className="w-[225px] h-[256px] object-cover" />
          </div>
  
          {/* Third column */}
          <div className="flex flex-col gap-[14px]">
            <img src="/public/images/UE_3.png" alt="Indoor pool" className="w-[225px] h-[256px] object-cover" />
            <img src="/public/images/UE_7.png" alt="Spa amenities" className="w-[225px] h-[527px] object-cover" />
          </div>
  
          {/* Fourth column */}
          <div className="flex flex-col gap-[14px]">
            <div className="flex gap-[18px]">
              <img src="/public/images/UE_4.png" alt="Outdoor pool area" className="w-[225px] h-[256px] object-cover" />
              <img src="/public/images/UE_5.png" alt="Formal dining room" className="w-[225px] h-[256px] object-cover" />
            </div>
            <img src="/public/images/UE_8.png" alt="Towels and spa oils" className="w-[466px] h-[526px] object-cover" />
          </div>
        </div>
      </div>
    );
}
