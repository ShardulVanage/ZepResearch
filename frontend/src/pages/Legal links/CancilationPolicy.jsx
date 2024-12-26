"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function CancellationPolicy() {
  const [expandedSection, setExpandedSection] = useState(null);

  const cancellationSections = [
    {
      title: "Conference Registration Cancellations",
      content:
        "You may cancel your conference registration up to 30 days before the event date for a full refund, minus a 10% administrative fee. Cancellations made between 30 and 7 days before the event will receive a 50% refund. No refunds will be issued for cancellations made within 7 days of the event or after the event has started. However, you may transfer your registration to another person at no additional cost.",
    },
    {
      title: "Research Initiative Cancellations",
      content:
        "If you need to cancel your participation in a research initiative, please notify us in writing as soon as possible. Cancellations made before the project kick-off will receive a full refund, minus a 15% administrative fee. After the project has begun, refunds will be prorated based on the work completed and resources allocated. No refunds will be issued after 50% of the project timeline has elapsed.",
    },
    {
      title: "Collaboration Opportunity Cancellations",
      content:
        "Cancellations for collaboration opportunities must be made in writing. If you cancel before any work has begun, you will receive a full refund minus a 20% administrative fee. Once the collaboration has started, cancellations will be handled on a case-by-case basis, considering the resources committed and work completed. In some cases, you may be offered credit for future services instead of a refund.",
    },
    {
      title: "Publication Submission Cancellations",
      content:
        "You may withdraw your submission for publication at any time. If you withdraw before the review process begins, you will receive a full refund of any fees paid, minus a 10% processing fee. Once the review process has started, no refunds will be issued for withdrawn submissions.",
    },
    {
      title: "Membership Cancellations",
      content:
        "Annual memberships can be cancelled within 14 days of purchase for a full refund, provided no member benefits have been used. After 14 days, or if member benefits have been used, memberships are non-refundable but will remain active until the end of the current membership period.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
         <Helmet>
                                                         {/* Basic meta tags */}
                                                         <title>CancellationPolicy | Zepresearch | International Journal Publication and Conference</title>
                                                         <meta 
                                                           name="description" 
                                                           content="Leading platform for international journal publications, academic conferences, and advanced courses in Data Science and AI." 
                                                         />
                                                         <meta 
                                                           name="keywords" 
                                                           content="research journal, international publication, academic conference, data science courses" 
                                                         />
                                                 
                                                         {/* Open Graph meta tags */}
                                                         <meta property="og:title" content="Zep Research | International Journal Publication" />
                                                         <meta 
                                                           property="og:description" 
                                                           content="Leading platform for international journal publications and conferences" 
                                                         />
                                                         <meta property="og:type" content="website" />
                                                         <meta property="og:url" content="https://zepresearch.com" />
                                                         <meta property="og:image" content="/og-image.jpg" />
                                                 
                                                         {/* Twitter Card meta tags */}
                                                         <meta name="twitter:card" content="summary_large_image" />
                                                         <meta name="twitter:title" content="Zep Research | International Journal Publication" />
                                                         <meta 
                                                           name="twitter:description" 
                                                           content="Leading platform for international journal publications and conferences" 
                                                         />
                                                         <meta name="twitter:image" content="/og-image.jpg" />
                                                 
                                                         {/* Canonical URL */}
                                                         <link rel="canonical" href="https://zepresearch.com" />
                                         </Helmet>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Cancellation Policy
      </h1>
      <p className="mb-6 text-gray-600">
        At Zep Research, we understand that plans can change. This cancellation
        policy outlines the terms and conditions for cancelling various services
        we offer. Please review this policy carefully before making any
        commitments.
      </p>
      {cancellationSections.map((section, index) => (
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
          How to Cancel a Service
        </h2>
        <p className="text-blue-700">
          To cancel a service, please contact our support team at{" "}
          <a
            href="mailto:info@zepresearch.com"
            className="underline hover:text-blue-900"
          >
            info@zepresearch.com
          </a>{" "}
          or call us at +91 7358737843. Please provide your order number, the
          service you wish to cancel, and the reason for cancellation. We will
          process your request and respond within 2-3 business days.
        </p>
      </div>
      <div className="mt-6 p-4 bg-blue-900 rounded-lg">
        <h2 className="text-xl font-semibold text-blue-100 mb-2">
          Force Majeure
        </h2>
        <p className="text-blue-50">
          In the event of cancellation due to circumstances beyond our control
          (such as natural disasters, pandemics, or government actions), Zep
          Research reserves the right to offer alternatives to refunds, such as
          rescheduling events or providing credit for future services.
        </p>
      </div>
      <p className="mt-6 text-sm text-gray-500">
        This cancellation policy is subject to change. Any modifications will be
        effective immediately upon posting the updated policy on our website.
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
}
