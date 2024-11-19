"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const PolicyButton = ({ title, icon: Icon, href }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a href={href} passHref>
      <motion.a
        className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="flex items-center">
          <Icon className="w-5 h-5 mr-2 text-blue-500" />
          {title}
        </span>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-blue-500"
          viewBox="0 0 20 20"
          fill="currentColor"
          animate={{ x: isHovered ? 5 : 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <path
            fillRule="evenodd"
            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </motion.svg>
      </motion.a>
    </a>
  );
};

export default function PolicyCTA() {
  const policies = [
    {
      title: "Terms and Conditions",
      icon: ({ className }) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      href: "/TermsAndCondition",
    },
    {
      title: "Refund Policy",
      icon: ({ className }) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z"
          />
        </svg>
      ),
      href: "/Refund",
    },
    {
      title: "Cancellation Policy",
      icon: ({ className }) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ),
      href: "/CancilationPolicy",
    },
    {
      title: "Privacy Policy",
      icon: ({ className }) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          fill="none"
          viewBox="0 0 50 50"
          stroke="currentColor"
        >
          <path d="M 25 3 C 18.363281 3 13 8.363281 13 15 L 13 20 L 9 20 C 7.355469 20 6 21.355469 6 23 L 6 47 C 6 48.644531 7.355469 50 9 50 L 41 50 C 42.644531 50 44 48.644531 44 47 L 44 23 C 44 21.355469 42.644531 20 41 20 L 37 20 L 37 15 C 37 8.363281 31.636719 3 25 3 Z M 25 5 C 30.566406 5 35 9.433594 35 15 L 35 20 L 15 20 L 15 15 C 15 9.433594 19.433594 5 25 5 Z M 9 22 L 41 22 C 41.554688 22 42 22.445313 42 23 L 42 47 C 42 47.554688 41.554688 48 41 48 L 9 48 C 8.445313 48 8 47.554688 8 47 L 8 23 C 8 22.445313 8.445313 22 9 22 Z M 25 30 C 23.300781 30 22 31.300781 22 33 C 22 33.898438 22.398438 34.6875 23 35.1875 L 23 38 C 23 39.101563 23.898438 40 25 40 C 26.101563 40 27 39.101563 27 38 L 27 35.1875 C 27.601563 34.6875 28 33.898438 28 33 C 28 31.300781 26.699219 30 25 30 Z"></path>
        </svg>
      ),
      href: "/PrivacyPolicy",
    },
  ];

  return (
    <motion.div
      className="w-full max-w-2xl mx-auto bg-white  overflow-hidden py-24"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="px-6 py-4">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Important Policies
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Please review our policies to understand your rights and
          responsibilities
        </p>
        <div className="space-y-4">
          {policies.map((policy, index) => (
            <motion.div
              key={policy.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <PolicyButton {...policy} />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="px-6 py-4 bg-gray-50">
        <p className="text-sm text-gray-500 text-center">
          By using our services, you agree to abide by these policies. If you
          have any questions, please contact our support team.
        </p>
      </div>
    </motion.div>
  );
}
