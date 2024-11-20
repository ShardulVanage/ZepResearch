"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { FileText, RefreshCcw, X, Lock } from 'lucide-react'

const PolicyButton = ({ title, icon: Icon, href }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.a
      href={href}
      className="group flex items-center justify-between w-full px-6 py-4 text-left text-gray-700 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.03, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2)" }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="flex items-center space-x-3">
        <motion.div
          className="p-2 bg-blue-100 rounded-lg text-blue-600"
          whileHover={{ rotate: 360 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <Icon className="w-6 h-6" />
        </motion.div>
        <span className="text-lg font-semibold group-hover:text-blue-600 transition-colors duration-300">{title}</span>
      </span>
      <motion.div
        className="text-blue-500"
        animate={{ x: isHovered ? 5 : 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </motion.div>
    </motion.a>
  )
}

export default function PolicyCTA() {
  const policies = [
    {
      title: "Terms and Conditions",
      icon: FileText,
      href: "/TermsAndCondition",
    },
    {
      title: "Refund Policy",
      icon: RefreshCcw,
      href: "/Refund",
    },
    {
      title: "Cancellation Policy",
      icon: X,
      href: "/CancellationPolicy",
    },
    {
      title: "Privacy Policy",
      icon: Lock,
      href: "/PrivacyPolicy",
    },
  ]

  return (
    <div className="min-h-full  flex items-center justify-center p-24">
      <motion.div
        className="w-full max-w-2xl bg-blue-gray-100/50 rounded-2xl shadow-xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="px-6 py-8">
          <motion.h2
            className="text-4xl font-bold text-center text-gray-800 mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Important Policies
          </motion.h2>
          <motion.p
            className="text-center text-gray-600 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Please review our policies to understand your rights and responsibilities
          </motion.p>
          <div className="space-y-4">
            {policies.map((policy, index) => (
              <motion.div
                key={policy.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
              >
                <PolicyButton {...policy} />
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          className="px-6 py-4 bg-gray-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p className="text-sm text-gray-500 text-center">
            By using our services, you agree to abide by these policies. If you have any questions, please contact our support team.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}