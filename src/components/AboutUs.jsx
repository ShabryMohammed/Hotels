"use client"

export default function AboutUs() {
  return (
    <div className="bg-[#141D31] pt-[138px] pb-[84px] pl-[122px] relative" style={{ fontFamily: "'Merriweather', serif" }}>
      <div className="relative w-full h-auto flex">
        <div className="absolute left-85 top-[-30px] w-[272px] h-[555px] bg-[#E1C9A1] blur-[50px]"></div>
        <img
          src="/images/aboutus.png"
          alt="About Us"
          className="w-[700px] h-[493px] relative z-10"
        />
        <div className="ml-[71px] flex flex-col items-center relative z-10">
          <h2 className="text-[36px] font-bold text-center text-white" style={{ fontFamily: "'Merriweather', serif" }}>About Us</h2>
          <p className="mt-[66px] text-center text-white ml-[77px] mr-[122px]" style={{ fontFamily: "'Tai Heritage Pro', serif" }}>
            “Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words themselves are a truncation of dolorem ipsum ("pain itself")”
          </p>
        </div>
      </div>
    </div>
  )
}
