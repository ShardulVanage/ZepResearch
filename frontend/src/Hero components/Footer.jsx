import React from "react"
import { Typography } from "@material-tailwind/react"
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa"
import whitelogo from "../images/whitelogo.svg"
const footerLinks = [
  {
    title: "Solustion",
    items: [
      { name: "Conferences", href: "/saas-development" },
      { name: "Publication", href: "/products" },
      { name: "ScientificAssistance", href: "/user-flow" },
      { name: "Awards&Recognitions", href: "/user-strategy" },

    ],
  },
  
  {
    title: "Support",
    items: [
      { name: "Membership", href: "/about" },
      { name: "Gallery", href: "/contact" },
      
    ],
  },
  {
    title: "Company",
    items: [
      { name: "ZepResarch", href: "/premium-support" },
      { name: "Mission&Vission", href: "/services" },
      { name: "Excellence", href: "/team" },
      { name: "Careers", href: "/download" },
      { name: "Patners", href: "/download" },

    ],
  },
]

const socialLinks = [
  { icon: <FaFacebookF />, href: "https://facebook.com" },
  { icon: <FaTwitter />, href: "https://twitter.com" },
  { icon: <FaYoutube />, href: "https://youtube.com" },
  { icon: <FaLinkedinIn />, href: "https://linkedin.com" },
]

export default function Footer() {
  return (
    <footer className="relative bg-blue-600 text-white py-12 overflow-hidden">
      {/* Larger decorative circles with gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-blue-700 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-400 to-blue-700 rounded-full translate-y-1/2 -translate-x-1/2 "></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <Typography variant="h5" className="flex items-center mb-4">
              <img src={whitelogo} alt="" className="h-8 w-8 mr-2" />
              Zep Research
            </Typography>
            <Typography className="mb-4 text-sm">
              We are committed to supporting academic organizations by expanding opportunities for professional development and advancing research on a global scale
            </Typography>
            <Typography className="flex items-center">
              <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
              </svg>
              +91 7358737843
            </Typography>
             <Typography className="flex items-start mt-4">
              <svg  xmlns="http://www.w3.org/2000/svg"  width="30"  height="30" className="h-5 w-5 mr-6 " viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" /></svg>
               <span className="ml-4">DCB-330,
              3rd Floor, DLF Cyber City, Patia, Bhubaneswar, ODISHA - 751024
              India</span>
            </Typography>
          </div>

          {/* Footer links */}
          {footerLinks.map((column, index) => (
            <div key={index}>
              <Typography variant="h6" className="mb-4">
                {column.title}
              </Typography>
              <ul>
                {column.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="mb-2">
                    <a href={item.href} className="hover:text-gray-200 transition-colors">
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
          <Typography>&copy; 2025 ZepResearch</Typography>
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
  )
}