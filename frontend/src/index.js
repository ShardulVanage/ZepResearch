// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


import ZepResarch from './pages/Solution Menu/ZepResarch';
import ScientificAssistance from './pages/Solution Menu/ScientificAssistance';
import Publication from './pages/Solution Menu/Publications';
import Patners from './pages/Solution Menu/Partners';
import MissionVission from './pages/Solution Menu/MissionVision';
import Membership from './pages/Solution Menu/Membership';
import Gallery from './pages/Solution Menu/Gallery';
import Excellence from './pages/Solution Menu/Excellence';
import Courses from './pages/Solution Menu/Courses';
import Careers from './pages/Solution Menu/Careers';
import Conferences from './pages/Solution Menu/Conferences';

import Nav from './Hero components/MobileNav';
import Footers from './Hero components/Footer';
import ContactUs from './pages/Solution Menu/ContactUs';
import CourseDetail from './pages/CourseDetail/CourseDetail';
import Collaboration from './pages/Solution Menu/Collaboration';  
import Speakers from './pages/Solution Menu/Speakers';
import SponserShip from './pages/Solution Menu/SponserShip';

import Login from './pages/AuthPage/Login';
import { AuthProvider } from './context/AuthContext';
import Registration from './pages/AuthPage/Registration';
import BecomeMember from './pages/BecomeMemberPage/BecomeMember';
import AwardsRecognitions from './pages/Solution Menu/AwardsRecognitions';
import Blogdetail from './pages/BlogDetail/Blogdetail';
import CancellationPolicy from './pages/Solution Menu/Cancellation Policy';
import ExperienceknowledgeExchange from './pages/Solution Menu/ExperienceknowledgeExchange';
import WorldwidePlatform from './pages/Solution Menu/WorldwidePlatform';
import ProfessionalConferenceOrganizer from './pages/Solution Menu/ProfessionalConferenceOrganizer';
import PublishingOpportunities from './pages/Solution Menu/PublishingOpportunities';

const Layout = () => (
  <>
    <Nav />
    <Outlet />
    <Footers />
  </>
);

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/ZepResarch", element: <ZepResarch /> },
      { path: "/ScientificAssistance", element: <ScientificAssistance /> },
      { path: "/Publication", element: <Publication /> },
      { path: "/Patners", element: <Patners /> },
      { path: "/Mission&Vission", element: <MissionVission /> },
      { path: "/Membership", element: <Membership /> },
      { path: "/Gallery", element: <Gallery /> },
      { path: "/Excellence", element: <Excellence /> },
      { path: "/Courses", element: <Courses /> },
      { path: "/Awards&Recognitions", element: <AwardsRecognitions/> },
      { path: "/Careers", element: <Careers /> },
      { path: "/Conferences", element: <Conferences /> },
      { path: "/ContactUs", element: <ContactUs /> },
      { path: "/Courses/:id", element: <CourseDetail /> },
      { path: "/Collaboration", element: <Collaboration /> },
      { path: "/Speakers", element: <Speakers /> },
      { path: "/SponserShip", element: <SponserShip /> },
      { path: "/Login", element: <Login /> },
      { path: "/Registration", element: <Registration/> },
      { path: "/BecomeMember", element: <BecomeMember/> },
      { path: "/Blogs", element: <Blogdetail /> },

      { path: "/CancellationPolicy", element: <CancellationPolicy /> },
      { path: "/ExperienceknowledgeExchange", element: <ExperienceknowledgeExchange /> },
      { path: "/WorldwidePlatform", element: <WorldwidePlatform /> },
      { path: "/ProfessionalConferenceOrganizer", element: <ProfessionalConferenceOrganizer/> },
      { path: "/PublishingOpportunities", element: <PublishingOpportunities /> },



    ],
  },
]);
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
   
  </React.StrictMode>
);

reportWebVitals();