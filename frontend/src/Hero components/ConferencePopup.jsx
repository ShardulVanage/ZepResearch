'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'

export default function Component() {
  const [isVisible, setIsVisible] = useState(false)
  const titleRef = useRef(null)
  const dateRef = useRef(null)

  useEffect(() => {
    // Show the popup after a short delay
    const timer = setTimeout(() => setIsVisible(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Animate the title and date with GSAP when the popup becomes visible
    if (isVisible) {
      gsap.from(titleRef.current, {
        duration: 1,
        y: 20,
        opacity: 0,
        ease: 'elastic.out(1, 0.5)',
        delay: 0.5,
      })
      gsap.from(dateRef.current, {
        duration: 1,
        scale: 0.5,
        opacity: 0,
        ease: 'back.out(1.7)',
        delay: 0.8,
      })
    }
  }, [isVisible])

  const handleClose = () => {
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
          className="fixed sm:left-4 bottom-4 z-50 w-96 bg-gradient-to-br from-blue-600 to-blue-900 rounded-lg shadow-lg overflow-hidden mr-4"
        >
          <div className="p-6 text-white text-lef sm:text-center">
            <h2 ref={titleRef} className="sm:text-2xl text-xl font-bold mb-2  ">
              International Conference on Sustainability, Innovation, and Future Technologies
            </h2>
            
            <p  className="text-base font-semibold mb-4 text-blue-200 ">
              February 27th-28th
            </p>
            <p  className="text-base font-semibold mb-4 text-blue-200">
              Manila, Philippines
            </p>
            
            <p className="mb-4 text-blue-100 text-sm sm:text-base">This premier event is designed for academic researchers, industry professionals, and innovators dedicated to advancing sustainable practices and technologies.</p>
            <button className="bg-blue-300 hover:bg-blue-200 text-blue-900 font-bold py-2 px-4 rounded-full transition-colors duration-300 transform hover:scale-105">
              Register Now
            </button>
          </div>
          <div className="absolute top-2 right-2">
            <button
              onClick={handleClose}
              className="text-blue-200 hover:text-white transition-colors duration-300"
              aria-label="Close popup"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="absolute -top-12 -left-12 w-24 h-24 bg-blue-300 rounded-full opacity-20"></div>
          <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-blue-400 rounded-full opacity-20"></div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}