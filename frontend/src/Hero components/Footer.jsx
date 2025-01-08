import React from "react";
import { Typography } from "@material-tailwind/react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import whitelogo from "../images/whitelogo.svg";
import { InstagramIcon, Mail, PhoneCall } from "lucide-react";
const footerLinks = [
  {
    title: "Services",
    items: [
      { name: "Manuscript Preparation", href: "/ManuscriptPreparation" },
      {
        name: "Research Training & Workshops",
        href: "/ResearchTrainingWorkshops",
      },
      { name: "Event Promotion & Marketing", href: "/EventPromotionMarketing" },
      { name: "Journals & Publications", href: "/Journals&Publications" },
      { name: "Conferences & Webinars", href: "/ConferencesWebinars" },
      { name: "Peer Review Management", href: "/PeerReviewManagement" },
      { name: "Networking & Collaboration", href: "/NetworkingCollaboration" },
      { name: "Online Courses", href: "/OnlineCourses" },
    ],
  },

  {
    title: "Resources & Event",
    items: [
      { name: "Courses", href: "/Courses" },
      { name: "Conference", href: "/AllConference" },
    ],
  },
  {
    title: "Quick Links",
    items: [
      { name: "AboutUs", href: "/ZepResarch" },
      { name: "Blogs", href: "/Blogs" },
      { name: "Gallery", href: "/Gallery" },
      { name: "ContactUs", href: "/ContactUs" },
    ],
  },
  {
    title: "Legal Links",
    items: [
      { name: "Terms and Condition", href: "/TermsAndCondition" },
      { name: "Refund Policy", href: "/Refund" },
      { name: "Cancilation Policy", href: "/CancilationPolicy" },
      { name: "Privacy Policy", href: "/PrivacyPolicy" },
    ],
  },
];

const socialLinks = [
  {
    icon: <FaFacebookF />,
    href: "https://www.facebook.com/profile.php?id=61561809783777",
  },
  {
    icon: <FaInstagram />,
    href: "https://www.instagram.com/zepresearch/",
  },
  { icon: <FaTwitter />, href: "https://x.com/Zepresearch" },
  {
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/company/zep-research/",
  },
  { icon: <FaYoutube />, href: "https://youtube.com" },
];

export default function Footer() {
  return (
    <footer className="relative bg-blue-600 text-white py-12 overflow-hidden">
      {/* Larger decorative circles with gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-blue-700 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-400 to-blue-700 rounded-full translate-y-1/2 -translate-x-1/2 "></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <Typography
              variant="h5"
              className="flex items-center  mb-4 font-JosefinSans"
            >
              <img src={whitelogo} alt="" className="h-10 w-10 mr-2" />
              Zep Research (OPC) PVT LTD.
            </Typography>
            <Typography className="mb-4 text-base font-PTSerif text-gray-100">
              We are committed to supporting academic organizations by expanding
              opportunities for professional development and advancing research
              on a global scale
            </Typography>
            <Typography className="flex items-center font-JosefinSans">
              <PhoneCall className="h-6 w-6 mr-4 mb-2" />
              +91 7358737843
            </Typography>
            <Typography className="flex items-center font-JosefinSans">
              <Mail className="h-6 w-6  mr-4" />
              info@zepresearch.com
            </Typography>
            <Typography className="flex items-start mt-4 font-JosefinSans">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                className="h-5 w-5 mr-6 "
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
              </svg>
              <span className="ml-4">
                DCB-330, 3rd Floor, DLF Cyber City, Patia, Bhubaneswar, ODISHA -
                751024 India
              </span>
            </Typography>
          </div>

          {/* Footer links */}
          {footerLinks.map((column, index) => (
            <div key={index}>
              <Typography variant="h6" className="mb-4 font-JosefinSans">
                {column.title}
              </Typography>
              <ul>
                {column.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="mb-2  ">
                    <a
                      href={item.href}
                      className="hover:drop-shadow-lg  transition-colors font-PTSerif  text-gray-50"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-blue-500 flex flex-col md:flex-row justify-between items-center">
          <Typography>&copy; Zep Research (OPC) PVT LTD.</Typography>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="bg-blue-700 p-2 rounded-full hover:bg-blue-800 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
