export default function ContactUs() {
    return (
        <div className="flex flex-col items-center px-4 md:px-0">
            <h1 className="text-[24px] md:text-[36px] font-[700] text-center mt-[50px] md:mt-[179px] text-[#141D31]">Contact Us</h1>
            <div className="flex flex-col md:flex-row mt-[50px] md:mt-[162px]">
                <form className="space-y-6 md:space-y-17 w-full md:w-[954px] flex flex-col items-center">
                    <input 
                        type="text" 
                        placeholder="Name" 
                        className="border-b-[1px] border-[#000000] w-full text-[20px] md:text-[32px] font-[700] text-[#000000] p-2 outline-none focus:border-[#000000] focus:ring-0"
                    />
                    <input 
                        type="email" 
                        placeholder="E-mail" 
                        className="border-b-[1px] border-[#000000] w-full text-[20px] md:text-[32px] font-[700] text-[#000000] p-2 outline-none focus:border-[#000000] focus:ring-0"
                    />
                    <input 
                        type="tel" 
                        placeholder="Phone" 
                        className="border-b-[1px] border-[#000000] w-full text-[20px] md:text-[32px] font-[700] text-[#000000] p-2 outline-none focus:border-[#000000] focus:ring-0"
                    />
                    <input 
                        type="text" 
                        placeholder="Message" 
                        className="border-b-[1px] border-[#000000] w-full text-[20px] md:text-[32px] font-[700] text-[#000000] p-2 outline-none focus:border-[#000000] focus:ring-0"
                    />
                </form>
                <img src="/public/images/key.png" alt="Key" className="hidden md:block h-[200px] md:h-[331px] w-[200px] md:w-[308px] mt-10 md:mt-25" />
            </div>
            <button className="mt-[50px] md:mt-[94px] font-[700] text-[12px] md:text-[16px] py-[15px] md:py-[30.5px] px-[50px] md:px-[183.5px] bg-[#434A78] text-white">SEND MESSAGE</button>
        </div>
    )
}
