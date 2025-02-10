"use client"

import { useState, useEffect } from "react"
import Confetti from "react-confetti"
import usePopupVisibility from "../../../../hooks/usePopupVisibility"
import { motion } from "framer-motion"

const ExclusiveOfferPopup = () => {
  const { isVisible, hide } = usePopupVisibility()
  const [showForm, setShowForm] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  const handleClick = (e) => {
   
    e.preventDefault();
    const element = document.querySelector('#form');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}
hide()
  };
  useEffect(() => {
    if (isVisible) {
      setShowConfetti(true)
      const timer = setTimeout(() => setShowConfetti(false), 5000)
      return () => clearTimeout(timer)
    }
  }, [isVisible])

  const handleClaimOffer = () => {
    setShowForm(true)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-md bg-white rounded-lg shadow-2xl border-2 border-gray-700 overflow-hidden">
      {showConfetti && <Confetti width={520} height={400} recycle={false} numberOfPieces={200} />}
      <div className="p-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <button onClick={hide} className="absolute top-2 right-2 text-white hover:text-gray-200">
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
        <h2 className="text-xl font-bold mb-2 text-center leading-10">🎉Exclusive Bonus Unlocked!🎉</h2>
        <p className="text-sm mb-2 text-center">Limited-Time Offer: Grab Your Special Discount & Bonus Materials Now!</p>
      </div>
      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold mb-2 text-center">🚀 Enroll in Data Science & AI Masters 2025</h3>
        <ul className="list-disc list-inside mb-4 text-sm text-center">
          <li>Exclusive Course Fee Discount</li>
          <li>Free Interview Prep Guide</li>
          <li>Instant Access to Demo Videos & Study Materials</li>
        </ul>
        {!showForm ? (
         <>
        <div className="flex justify-center items-center">
            <motion.a
            href='#form'
            onClick={handleClick}
            // className="inline-block cursor-pointer"
            whileTap={{ scale: 0.95 }}
            
            className="max-w-xs  py-2 px-4 bg-green-500 text-white rounded-md font-bold hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105"
            >
            💡 Secure My Offer Now!
          </motion.a>
        </div>
              </>   
        ) : (
          <h1>ds</h1>        )}
      </div>
    </div>
  )
}

export default ExclusiveOfferPopup

