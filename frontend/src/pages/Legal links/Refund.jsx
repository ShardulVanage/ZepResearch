"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Refund() {
  const [expandedSection, setExpandedSection] = useState(null);
  const refundSections = [
    {
      title: "Conference Registration Refunds",
      content:
        "Refunds for conference registrations are available up to 30 days before the event date. A 15% administrative fee will be deducted from the refund amount. Within 30 days of the event, we offer a 50% refund. No refunds are available within 7 days of the event or after the event has started.",
    },
    {
      title: "Research Initiative Participation",
      content:
        "For research initiatives, refunds are processed on a case-by-case basis. If you need to withdraw from a research initiative, please contact our support team immediately. Refunds may be prorated based on the work completed and resources allocated.",
    },
    {
      title: "Collaboration Opportunity Fees",
      content:
        "Fees paid for collaboration opportunities are generally non-refundable once the collaboration has been initiated. In exceptional circumstances, we may offer partial refunds or credits for future services. Please reach out to our team to discuss your specific situation.",
    },
    {
      title: "Publication and Processing Fees",
      content:
        "Publication and processing fees are non-refundable once the review process has begun. If you withdraw your submission before the review process starts, we will refund the full amount minus a 10% administrative fee.",
    },
    {
      title: "Membership Fees",
      content:
        "Annual membership fees are non-refundable. However, if you cancel your membership within 14 days of purchase and have not used any member benefits, we will provide a full refund.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white ">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Refund Policy</h1>
      <p className="mb-6 text-gray-600">
        At Zep Research, we strive to provide high-quality services and ensure
        customer satisfaction. We understand that circumstances may arise where
        you need to request a refund. Please review our refund policy below for
        different types of services we offer.
      </p>
      {refundSections.map((section, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="mb-4"
        >
          <button
            onClick={() =>
              setExpandedSection(expandedSection === index ? null : index)
            }
            className="w-full text-left p-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-between items-center"
            aria-expanded={expandedSection === index}
            aria-controls={`section-${index}`}
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {section.title}
            </h2>
            {expandedSection === index ? (
              <ChevronUp className="w-5 h-5 text-gray-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-600" />
            )}
          </button>
          <motion.div
            id={`section-${index}`}
            initial={false}
            animate={{
              height: expandedSection === index ? "auto" : 0,
              opacity: expandedSection === index ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="p-4 text-gray-600">{section.content}</p>
          </motion.div>
        </motion.div>
      ))}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h2 className="text-xl font-semibold text-blue-800 mb-2">
          How to Request a Refund
        </h2>
        <p className="text-blue-700">
          To request a refund, please contact our support team at{" "}
          <a
            href="mailto:info@zepresearch.com"
            className="underline hover:text-blue-900"
          >
            info@zepresearch.com
          </a>{" "}
          or call us at +(91) 7358737843 Please provide your order number, the
          service you purchased, and the reason for your refund request. We will
          review your request and get back to you within 2-3 business days.
        </p>
      </div>
      <p className="mt-6 text-sm text-gray-500">
        This refund policy is subject to change. Any modifications will be
        effective immediately upon posting the updated policy on our website.
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
}
