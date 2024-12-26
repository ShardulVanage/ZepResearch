"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export default function TermsAndConditions() {
  const [expandedSection, setExpandedSection] = useState(null);

  const sections = [
    {
      title: "Acceptance of Terms",
      content:
        "By using our website or services, you acknowledge that you have read, understood, and agreed to these Terms and Conditions. If you do not agree, please discontinue use immediately.",
    },
    {
      title: "Use of Our Services",
      content:
        "Eligibility: You must be at least 18 years old to use our services.\nPermitted Use: Our platform is intended for academic and research-related purposes. Any unauthorized, illegal, or harmful use is strictly prohibited.\nAccount Security: You are responsible for maintaining the confidentiality of your account credentials. Notify us immediately if you suspect unauthorized access.",
    },
    {
      title: "Intellectual Property",
      content:
        "All content on this website, including text, graphics, logos, and software, is owned by Zep Research or its licensors and is protected by intellectual property laws.\nYou may not copy, modify, distribute, or use any content without prior written permission.",
    },
    {
      title: "User Content",
      content:
        "By submitting content (e.g., manuscripts, comments), you grant us the right to use, modify, and publish it for our services.\nYou are solely responsible for the accuracy and legality of the content you provide.",
    },
    {
      title: "Payments and Refunds",
      content:
        "Payments must be made as per the agreed schedule for services like conferences, journal submissions, or workshops.\nRefunds, if applicable, will be processed as per our refund policy, which will be communicated at the time of transaction.",
    },
    {
      title: "Cancellation and Termination",
      content:
        "User Cancellation: You may cancel your services at any time. Please refer to the cancellation terms specific to your service.\nTermination by Zep Research: We reserve the right to terminate accounts or deny access for any breach of these terms.",
    },
    {
      title: "Limitation of Liability",
      content:
        "Zep Research is not liable for any indirect, incidental, or consequential damages arising from the use or inability to use our services.\nWhile we strive for accuracy, we do not guarantee the completeness or reliability of information on our platform.",
    },
    {
      title: "Privacy Policy",
      content:
        "Your personal information will be handled in accordance with our Privacy Policy. Please review it to understand how we collect, use, and protect your data.",
    },
    {
      title: "Third-Party Links",
      content:
        "Our website may contain links to third-party sites for additional resources. We are not responsible for their content or practices.",
    },
    {
      title: "Force Majeure",
      content:
        "We are not responsible for delays or failures caused by events beyond our control, such as natural disasters, strikes, or technical issues.",
    },
    {
      title: "Governing Law",
      content:
        "These Terms are governed by the laws of India. Any disputes will be resolved in the courts of Bhubaneswar, Odisha.",
    },
    {
      title: "Changes to Terms",
      content:
        "We may update these Terms occasionally. Continued use of our platform signifies acceptance of the updated terms.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
        <Helmet>
                                                   {/* Basic meta tags */}
                                                   <title>Terms & Conditions | International Journal Publication and Conference</title>
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
        Terms and Conditions
      </h1>
      <p className="mb-6 text-gray-600">
        Welcome to Zep Research! By accessing and using our platform, you agree
        to the following terms and conditions. Please read them carefully before
        engaging with our services.
      </p>
      {sections.map((section, index) => (
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
            className="w-full text-left p-4 bg-blue-50 rounded-lg "
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {section.title}
            </h2>
          </button>
          <motion.div
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
      <h1>
        If you have any questions or concerns about these Terms and Conditions,
        please contact us
      </h1>

      <p> Phone: +91 7358737843 </p>
      <p>Email: info@zepresearch.com</p>

      <p className="mt-6 text-sm text-gray-500 text-center">
        By using Zep Research services, you acknowledge that you have read,
        understood, and agree to be bound by these Terms and Conditions.
      </p>
    </div>
  );
}
