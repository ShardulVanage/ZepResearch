"use client"

import { motion } from "framer-motion"
import certificate from "../../../images/courselogo/certifiacte.png"
import RegistrationDialog from "./DialogBox";
import { useState } from "react";
import { ArrowRight } from "lucide-react";


export default function CareerCertificate({course}) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
    const handlePayment = (method) => {
      console.log(`Processing payment via ${method}`);
      setIsDialogOpen(false);
    };
  const handleClick = (e) => {
    e.preventDefault();
    const element = document.querySelector('#Hero');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  if (!course) {
    return null
  }
  return (
    <div id="certificate" className=" p-6 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl w-full mx-auto"
      >
        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden px-8">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-indigo-100/50 opacity-50" />

          <div className="relative flex flex-col lg:flex-row items-center gap-12 p-4">
            {/* Content Section */}
            <div className="flex-1 space-y-6">
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
              >
                Earn a career certificate
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="space-y-4"
              >
                <p className="text-lg text-gray-700 leading-relaxed">
                  Add this credential to your LinkedIn profile, resume, or CV and  Share it on social media and in your performance review
                </p>
                

                <div className="pt-2 flex flex-wrap gap-4">
                <motion.a
                  href='#Hero'
                  onClick={handleClick}
                  className="inline-block cursor-pointer"
                  whileTap={{ scale: 0.95 }}
                >
                  <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold transform transition hover:scale-105 hover:shadow-lg">
                    Get Started
                  </button>
                  </motion.a>
                  <motion.button
           onClick={() => setIsDialogOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold transform transition hover:scale-105 hover:shadow-lg inline-flex justify-center items-center"
          >
            BUY NOW   <span className='text-2xl ml-1 '> ₹{course.price}</span>
            
            <ArrowRight className="ml-2 w-5 h-5" />
          </motion.button>
                </div>
              </motion.div>
            </div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="flex-1 relative w-full max-w-md"
            >
              <div className="relative aspect-[4/3]">
                <img
                  src={`https://zep-research.pockethost.io/api/files/`+course.collectionId+`/`+course.id+`/`+course.certificate}
                  alt="Career Certificate Illustration"
                  fill
                  className="object-contain transform rounded-2xl"
                  priority
                />
              </div>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full blur-3xl opacity-20 -z-10" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-indigo-200 to-blue-200 rounded-full blur-3xl opacity-20 -z-10" />
        </div>
      </motion.div>
      <RegistrationDialog
              isOpen={isDialogOpen}
              onClose={() => setIsDialogOpen(false)}
              title={course.title}
              price={course.price}
             
              onPayment={handlePayment}
            />
    </div>
  )
}

