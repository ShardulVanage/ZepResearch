"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function PrivacyPolicy() {
  const [expandedSections, setExpandedSections] = useState([]);

  const toggleSection = (index) => {
    setExpandedSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const sections = [
    {
      title: "1. Information We Collect",
      content: `We collect various types of information to provide and improve our services to you:
      Personal Information: When you register for our services, attend a conference, submit a manuscript, or contact us, we may collect personal details such as your name, email address, phone number, academic affiliation, and payment information.
      Usage Data: We collect information on how you use our website and services, such as IP address, browser type, pages visited, and session duration, through cookies and other tracking technologies.`,
    },
    {
      title: "2. How We Use Your Information",
      content: `We use the information we collect for the following purposes:
      Provide Services: To process your registrations, deliver the services you've requested (such as journal submissions, conference participation, etc.), and communicate with you.
      Improve Our Services: To monitor usage patterns, analyze trends, and improve the functionality and content of our platform.
      Customer Support: To respond to inquiries, provide assistance, and ensure your experience with us is smooth and efficient.
      Marketing and Updates: With your consent, we may use your information to send you updates, newsletters, and promotional materials related to our services and events.`,
    },
    {
      title: "3. Sharing Your Information",
      content: `We do not sell or rent your personal information to third parties. However, we may share your information in the following situations:
      Service Providers: We may share your data with trusted service providers who help us deliver services (e.g., payment processors, event management services).
      Legal Requirements: We may disclose your information to comply with legal obligations, regulations, or legal processes.
      Business Transfers: In the event of a merger, acquisition, or sale of assets, your data may be transferred as part of that transaction.`,
    },
    {
      title: "4. Data Security",
      content: `We take the security of your personal data seriously and use appropriate technical and organizational measures to protect it from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is completely secure, and we cannot guarantee the absolute security of your data.`,
    },
    {
      title: "5. Data Retention",
      content: `We will retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.`,
    },
    {
      title: "6. Your Rights",
      content: `You have the right to:
      Access: Request access to your personal data that we hold.
      Rectify: Request corrections to inaccurate or incomplete personal data.
      Erase: Request the deletion of your personal data (subject to certain conditions).
      Withdraw Consent: If we are processing your data based on consent, you may withdraw it at any time.
      Opt-Out: You may choose not to receive marketing communications from us by clicking the "unsubscribe" link in our emails.
      To exercise these rights, please contact us at info@zepresearch.com.`,
    },
    {
      title: "7. Cookies and Tracking Technologies",
      content: `We use cookies and similar technologies to improve your experience on our website. Cookies help us remember your preferences, analyze site traffic, and customize content. You can manage or disable cookies through your browser settings.`,
    },
    {
      title: "8. Third-Party Links",
      content: `Our website may contain links to third-party websites that are not operated by us. We are not responsible for the content, privacy policies, or practices of these third-party sites. We encourage you to review the privacy policy of any external site you visit.`,
    },
    {
      title: "9. Children's Privacy",
      content: `Our services are not intended for children under 13. We do not knowingly collect or process personal information from children under 13. If you believe we have collected data from a child, please contact us so that we can take appropriate action.`,
    },
    {
      title: "10. International Data Transfers",
      content: `Your data may be transferred to and stored in countries outside your country of residence, where data protection laws may be different. By using our services, you consent to the transfer of your data to countries outside your jurisdiction, where applicable.`,
    },
    {
      title: "11. Changes to This Privacy Policy",
      content: `We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. When we make changes, we will post the updated policy on this page with a revised "Last Updated" date.`,
    },
    {
      title: "12. Contact Us",
      content: `If you have any questions or concerns about this Privacy Policy or how we handle your personal data, please contact us:
      Phone: +91 7358737843
      Email: info@zepresearch.com`,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
       <Helmet>
                                                               {/* Basic meta tags */}
                                                               <title>PrivacyPolicy | Zepresearch | International Journal Publication and Conference</title>
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
      <div className="max-w-3xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-center mb-8 text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Privacy Policy
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          At Zep Research, your privacy is important to us. This Privacy Policy
          explains how we collect, use, and protect your personal information
          when you use our website and services. Please read this policy
          carefully to understand our views and practices regarding your
          personal data and how we will treat it.
        </motion.p>
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="mb-4 bg-white rounded-lg shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
          >
            <button
              className="w-full px-6 py-4 text-left font-semibold text-gray-800 hover:bg-gray-50 focus:outline-none flex justify-between items-center"
              onClick={() => toggleSection(index)}
            >
              {section.title}
              {expandedSections.includes(index) ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            <motion.div
              initial={{ height: 0 }}
              animate={{
                height: expandedSections.includes(index) ? "auto" : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-6 py-4 text-gray-700 whitespace-pre-wrap">
                {section.content}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
