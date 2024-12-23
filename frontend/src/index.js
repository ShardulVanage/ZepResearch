// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import { Nav } from './Hero components/Nav';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './context/AuthContext';


import ZepResarch from './pages/Solution Menu/ZepResarch';
import Patners from './pages/Solution Menu/Partners';
import MissionVission from './pages/Solution Menu/MissionVision';
import Membership from './pages/Solution Menu/Membership';
import Gallery from './pages/Solution Menu/Gallery';
import Excellence from './pages/Solution Menu/Excellence';
import Courses from './pages/CourseDetail/Courses';
import Careers from './pages/Solution Menu/Careers';


import Footers from './Hero components/Footer';
import ContactUs from './pages/Solution Menu/ContactUs';
import CourseDetail from './pages/CourseDetail/CourseDetail';
import Speakers from './pages/Solution Menu/Speakers';
import SponserShip from './pages/Solution Menu/SponserShip';

import SignIn from './pages/AuthPage/SignIn';
import SignUp from './pages/AuthPage/SignUp';

import BecomeMember from './pages/BecomeMemberPage/BecomeMember';

import Blogdetail from './pages/BlogDetail/Blogdetail';
import CancellationPolicy from './pages/Solution Menu/Cancellation Policy';

import PaymentPage from './pages/Payment ccavanue/Payment';

import PeerReviewManagement from './pages/Services page/PeerReviewManagement';
import JournalsPublications from './pages/Services page/Journals&Publications';
import EventPromotionMarketing from './pages/Services page/EventPromotionMarketing';
import ManuscriptPreparation from './pages/Services page/ManuscriptPreparation';
import ResearchTrainingWorkshops from './pages/Services page/ResearchTrainingWorkshops';
import NetworkingCollaboration from './pages/Services page/NetworkingCollaboration';
import OnlineCourses from './pages/Services page/OnlineCourses';
import AllConference from './pages/Services page/AllConference';
import ConferencesWebinars from './pages/Services page/ConferencesWebinars';
import Blogs from './pages/BlogDetail/Blogs';
import Success from './pages/Payment ccavanue/Success';
import Failed from './pages/Payment ccavanue/Failed';
import Registration from './pages/Registration/Registration';
import Journals from './pages/Journals/Journals';
import Journalform from './pages/Journals/components/Journalform';
import TermsAndCondition from './pages/Legal links/TermsAndCondition';
import Refund from './pages/Legal links/Refund';
import CancilationPolicy from './pages/Legal links/CancilationPolicy';
import PrivacyPolicy from './pages/Legal links/PrivacyPolicy';


const ConditionalNav = () => {
  const location = useLocation();
  return location.pathname !== "/" ? <Nav /> : null;
};
const Layout = () => (
  <>
  <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
   <ConditionalNav />
    <Outlet />
    <Footers />
  
    
  </>
);

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/Patners", element: <Patners /> },
      { path: "/Mission&Vission", element: <MissionVission /> },
      { path: "/Membership", element: <Membership /> },
      { path: "/Gallery", element: <Gallery /> },
      { path: "/Excellence", element: <Excellence /> },
      { path: "/Courses", element: <Courses /> },
      { path: "/Careers", element: <Careers /> },
      { path: "/ContactUs", element: <ContactUs /> },
      { path: "/Courses/:id", element: <CourseDetail /> },
      { path: "/Speakers", element: <Speakers /> },
      { path: "/SponserShip", element: <SponserShip /> },
      { path: "/Blogs/:id", element: <Blogdetail /> },
      { path: "/CancellationPolicy", element: <CancellationPolicy /> },
      //JOurnal
      { path: "/Journals&Publication", element: <Journals /> },
      { path: "/JournalSubmittion", element: <Journalform /> },

      //Legal links
      {path: "/TermsAndCondition", element: <TermsAndCondition />},
      {path: "/Refund", element: <Refund />},
        {path: "/CancilationPolicy", element: <CancilationPolicy />},
        {path: "/PrivacyPolicy", element: <PrivacyPolicy />},
      
      //Services
      { path: "/ConferencesWebinars", element: <ConferencesWebinars /> },
      { path: "/OnlineCourses", element: <OnlineCourses /> },
      { path: "/NetworkingCollaboration", element: <NetworkingCollaboration/> },
      { path: "/ResearchTrainingWorkshops", element: <ResearchTrainingWorkshops /> },
      { path: "/ManuscriptPreparation", element: <ManuscriptPreparation /> },
      { path: "/EventPromotionMarketing", element: <EventPromotionMarketing /> },
      { path: "/PeerReviewManagement", element: <PeerReviewManagement/> },
      { path: "/Conferences&Webinars", element: <AllConference /> },
      // { path: "/Journals&Publications", element: <JournalsPublications /> },
      
      //Navbar
      { path: "/ZepResarch", element: <ZepResarch /> },
      { path: "/Blogs", element: <Blogs /> },
      { path: "/BecomeMember", element: <BecomeMember/> },
      { path: "/SignUp", element: <SignUp/> },
      { path: "/SignIn", element: <SignIn /> },

      //CCAvenue payment
      { path: "/Registration", element: <Registration/> },
      { path: "/success", element: <Success/> },
      { path: "/failed", element: <Failed /> },
    ],
  },
]);
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
   </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();