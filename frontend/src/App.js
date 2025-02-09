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
import { Nav } from './Hero components/Nav';
import { Reviews } from './Hero components/Review';
import { Features } from './Hero components/Feature';
import HeroBlog from './Hero components/HeroBlog';
import { ConfVenue } from './pages/Conference Components/ConfVenue';
import PolicyCTA from './Hero components/PolicyCTA';
import { Helmet } from 'react-helmet-async';




function App() {
  return (
    <>
    <Helmet>
        {/* Basic meta tags */}
        <title>Zep Research | International Journal Publication and Conference</title>
        <meta 
          name="description" 
          content="Leading platform for international journal publications, academic conferences, and advanced courses in Data Science and AI." 
        />
        <meta 
          name="keywords" 
          content="research journal, international publication, academic conference, data science courses" 
        />

        {/* Open Graph meta tags */}
        <meta property="og:title" content="Zep Research | International Journal Publication" />
        <meta 
          property="og:description" 
          content="Leading platform for international journal publications and conferences" 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zepresearch.com" />
        <meta property="og:image" content="/og-image.jpg" />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zep Research | International Journal Publication" />
        <meta 
          name="twitter:description" 
          content="Leading platform for international journal publications and conferences" 
        />
        <meta name="twitter:image" content="/og-image.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://zepresearch.com" />
      </Helmet>
    <div className="App">
   
      
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
      <PolicyCTA/>
      <Faq/>
     
    </div>
    </>
  );
}

export default App;
