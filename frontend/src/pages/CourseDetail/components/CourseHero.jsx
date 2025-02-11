"use client"

import { motion } from "framer-motion"
import { ArrowRight, Clock, Users } from "lucide-react"
import { useState, useRef } from "react"
import RegistrationDialog from "./DialogBox"
import EnrollmentCounter from "./ui/endrollcounter"

function CourseHero({ course }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const containerRef = useRef(null)

  const handlePayment = (method) => {
    console.log(`Processing payment via ${method}`)
    setIsDialogOpen(false)
  }

  if (!course) return null

  return (
    <div id="Hero">
      <div className="min-h-full relative py-24" ref={containerRef}>
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            className="absolute inset-0 bg-cover bg-center h-full w-full"
            src={`https://zep-research.pockethost.io/api/files/${course.collectionId}/${course.id}/${course.back_Img}`}
            alt="bg-img"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-900/80 to-black/70" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4 text-white">{course.title}</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">{course.description}</p>
          </motion.div>

          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/30 backdrop-blur-lg rounded-2xl p-8 w-full max-w-md"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2 text-white">Course Fee</h2>
                  <p className="text-blue-100 font-semibold">Early Bird Offer</p>
                </div>
                <div className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                  Limited Time
                </div>
              </div>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-extrabold text-white">₹{course.price}</span>
                <span className="text-xl text-blue-100 line-through ml-2">₹9999</span>
              </div>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center text-white">
                  <Clock className="w-5 h-5 mr-2 text-blue-100" />
                  <span>Limited slots available</span>
                </li>
                <li className="inline-flex items-center text-white">
                  <Users className="w-5 h-5 mr-2 text-blue-100" />
                  <span className="inline-flex gap-2">
                    <EnrollmentCounter /> already enrolled
                  </span>
                </li>
              </ul>
              <motion.button
                onClick={() => setIsDialogOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out flex items-center justify-center"
              >
                Enroll Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full max-w-md text-white"
            >
              <h3 className="text-2xl font-bold mb-4">What's Included:</h3>
              <ul className="space-y-3">
                {[
                  "Interview Prep Videos",
                  "Industry level Projects",
                  "24/7 Chat support",
                  "Job Assistance",
                  "Mock Interviews",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    className="flex items-center bg-white/20 backdrop-blur-sm rounded-lg p-3"
                  >
                    <div className="bg-blue-500 rounded-full p-1 mr-3">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Course Details Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 text-white"
          >
            {course.hero_card.items.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className={`p-6 rounded-lg border ${
                  item.highlight ? "bg-blue-500/20 border-blue-400/50" : "bg-white/30 border-white/20"
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    {item.icon && <span className="text-2xl">{item.icon}</span>}
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-sm text-blue-200">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
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

export default CourseHero

