import logo from './logo.svg';
import './App.css';
import Hero from './Hero components/Hero';
import Partners from './Hero components/Partners';




import Faq from './Hero components/Faq';
import MemberCta from './Hero components/BenefitMember';
import Welcome from './Hero components/Welcome';
import { VideFeedBck } from './Hero components/Videofeed';
import ChooseUs from './Hero components/ChosseUs';
import ConferencePopup from './Hero components/ConferencePopup';
import CeoVision from './Hero components/CeoVision';
import SustainableDevelopment from './Hero components/SustainableDevelopment';
import { PhoneIcon } from 'lucide-react'
import Blog from './Hero components/HeroBlog';
import BenefitMember from './Hero components/BenefitMember';
import whatsapplogo from './assets/whatsapp.png';
import { Nav } from './Hero components/Nav';
import { Reviews } from './Hero components/Review';
import { Features } from './Hero components/Feature';
import HeroBlog from './Hero components/HeroBlog';
import { ConfVenue } from './pages/Conference Components/ConfVenue';




function App() {
  return (
    <div className="App">
    <a
      href="https://wa.me/your_whatsapp_number"
      className="fixed w-[40px] h-[40px] sm:bottom-10 bottom-3 z-10 sm:right-10 right-3 rounded-full text-center text-4xl shadow-lg z-100 flex items-center justify-center md:w-[70px] md:h-[70px] md:bottom-5 md:right-5 md:text-2xl"
      aria-label="Chat on WhatsApp"
    >
     <img src={whatsapplogo} className="" />
    </a>
      
      {/* <ConferencePopup/> */}
      <Hero/>
      <Welcome/>
     <Features/>
     <ConfVenue/>
      {/* <VideFeedBck/> */}
      <ChooseUs/>
      <CeoVision/>
      {/* <SustainableDevelopment/> */}
      {/* <BenefitMember/> */}
      <HeroBlog/>
      
      {/* <Partners/> */}
      <Reviews/>
      <Faq/>
     
    </div>
  );
}

export default App;
