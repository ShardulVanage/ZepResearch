"use client"

import { motion } from "framer-motion"
import certificate from "../../../images/courselogo/certifiacte.png"

export default function CareerCertificate() {
  return (
    <div className=" p-6 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl w-full mx-auto"
      >
        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
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
                  Add this credential to your LinkedIn profile, resume, or CV
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Share it on social media and in your performance review
                </p>

                <div className="pt-6 flex flex-wrap gap-4">
                  <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold transform transition hover:scale-105 hover:shadow-lg">
                    Get Started
                  </button>
                  <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold transform transition hover:scale-105 hover:shadow-lg hover:bg-blue-50">
                    Learn More
                  </button>
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
                  src={certificate}
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
    </div>
  )
}

