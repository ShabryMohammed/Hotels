import LandingPage from "./components/LandingPage/LandingPage";
import AutoSlidingGallery from "./components/AutoSlidingGallery";
import Accommodation from "./components/Accomadation";
import DiningAndResturent from "./components/DiningAndResturent";
import AmenitiesAndServices from "./components/Amenities_and_Services";
import SpecialOffersAndPackages from "./components/SpecialOffersAndPackages";
import UnforgettableExperiences from "./components/Unforgettable_Experiences";
import EventsAndWeddings from "./components/EventsAndWeddings";
import ContactUs from "./components/ContactUs";
import YourDestination from "./components/YourDestination";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <div className="flex-grow overflow-hidden">
        <LandingPage />  {/* Display the new component here */}
        <AutoSlidingGallery />
        <Accommodation/>
        <DiningAndResturent/>
        <AmenitiesAndServices/>
        <SpecialOffersAndPackages/>
        <EventsAndWeddings/>
        <UnforgettableExperiences/>
        <ContactUs/>
        <YourDestination/>
        <Footer/>

      </div>
    </div>
  );
}

export default App;
