import locationIcon from "../../../public/images/location.png"
import phoneIcon from "../../../public/images/phone.png"
import mailIcon from "../../../public/images/email.png"
import linkedinIcon from "../../../public/images/linkedin.png"
import facebookIcon from "../../../public/images/facebook.png"
import instagramIcon from "../../../public/images/instagram.png"
import twitterIcon from "../../../public/images/X.png"

const TopNavbar = () => {
  return (
    <div className=" text-white">
      <nav className="container mx-5 px-4 py-3 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mb-4 sm:mb-0">
          <div className="flex items-center gap-2">
            <img src={locationIcon || "/placeholder.svg"} alt="Location" className="w-4 h-4" />
            <span className="text-xs font-bold">42 Carry Islands, Maldives</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={phoneIcon || "/placeholder.svg"} alt="Phone" className="w-3.5 h-3.5" />
            <span className="text-xs font-bold">+123 456 789</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={mailIcon || "/placeholder.svg"} alt="Mail" className="w-4 h-4" />
            <span className="text-xs font-bold">info@example.com</span>
          </div>
        </div>
        <div className="flex items-center gap-4 sm:ml-auto sm:mr-[-103px] lg:mr-0 lg:absolute lg:right-25">
          <img src={linkedinIcon || "/placeholder.svg"} alt="LinkedIn" className="w-6 h-6 sm:w-7 sm:h-7" />
          <img src={facebookIcon || "/placeholder.svg"} alt="Facebook" className="w-6 h-6 sm:w-7 sm:h-7" />
          <img src={instagramIcon || "/placeholder.svg"} alt="Instagram" className="w-6 h-6 sm:w-7 sm:h-7" />
          <img src={twitterIcon || "/placeholder.svg"} alt="Twitter" className="w-6 h-6 sm:w-7 sm:h-7" />
        </div>
      </nav>
      <hr className="border-t border-white" />
    </div>
  )
}

export default TopNavbar

