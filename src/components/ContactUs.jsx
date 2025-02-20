import { useState } from "react";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        

        try {
            const response = await fetch("https://i93yh867n6.execute-api.us-east-1.amazonaws.com/prod/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                
                setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
            } else {
                setStatus(data.error || "Failed to send message.");
            }
        } catch (error) {
            setStatus("An error occurred. Please try again later.");
        }
    };

    return (
        <div className="flex flex-col items-center px-4 md:px-0" style={{ fontFamily: "'Merriweather', serif" }}>
            <h1 className="text-[24px] md:text-[36px] font-[700] text-center mt-[50px] md:mt-[179px] text-[#141D31]">
                Contact Us
            </h1>
            <div className="flex flex-col md:flex-row mt-[50px] md:mt-[162px]">
                <form className="space-y-6 md:space-y-17 w-full md:w-[954px] flex flex-col items-center" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        required
                        className="border-b-[1px] border-[#000000] w-full text-[20px] md:text-[32px] font-[700] text-[#000000] p-2 outline-none focus:border-[#000000] focus:ring-0"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="E-mail"
                        required
                        className="border-b-[1px] border-[#000000] w-full text-[20px] md:text-[32px] font-[700] text-[#000000] p-2 outline-none focus:border-[#000000] focus:ring-0"
                    />
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                        required
                        className="border-b-[1px] border-[#000000] w-full text-[20px] md:text-[32px] font-[700] text-[#000000] p-2 outline-none focus:border-[#000000] focus:ring-0"
                    />
                    <input
                        type="text"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                        required
                        className="border-b-[1px] border-[#000000] w-full text-[20px] md:text-[32px] font-[700] text-[#000000] p-2 outline-none focus:border-[#000000] focus:ring-0"
                    />
                </form>
                <img src="/public/images/key.png" alt="Key" className="hidden md:block h-[200px] md:h-[331px] w-[200px] md:w-[308px] mt-10 md:mt-25" />
            </div>
            <button
                type="submit"
                onClick={handleSubmit}
                className="mt-[50px] md:mt-[94px] font-[700] text-[12px] md:text-[16px] py-[15px] md:py-[30.5px] px-[50px] md:px-[183.5px] bg-[#434A78] text-white hover:bg-[#333A68]"
            >
                SEND MESSAGE
            </button>
            {status && <p className="mt-4 text-[16px] text-center">{status}</p>}
        </div>
    );
}
