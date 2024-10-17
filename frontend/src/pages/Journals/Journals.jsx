import React from "react";
import { motion } from "framer-motion";
import { BookOpen, FileText, Send } from "lucide-react";

export default function Journals() {
  const publications = [
    {
      title: "The Future of AI in Healthcare",
      type: "Journal Article",
      date: "2023",
      code: "ISSN 1935-0090 (print) ISSN 2325-0399 (online)",
      image:
        "https://images.unsplash.com/photo-1653432085837-ee95989a818f?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Machine Learning Algorithms: A Comprehensive Review",
      type: "Conference Paper",
      date: "2022",
      code: "ISBN 978-1-4503-8888-8/22/06",
      image:
        "https://images.unsplash.com/photo-1653260449106-de99850d87e7?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Ethical Implications of Autonomous Systems",
      type: "Book Chapter",
      date: "2023",
      code: "ISBN 978-3-030-12345-6",
      image:
        "https://images.unsplash.com/photo-1653259768330-5d53b8affa25?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Data Privacy in the Age of Big Data",
      type: "Journal Article",
      date: "2021",
      code: "ISSN 2378-5992 (print) ISSN 2378-6000 (online)",
      image:
        "https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Quantum Computing: Challenges and Opportunities",
      type: "Conference Paper",
      date: "2022",
      code: "DOI: 10.1109/QC.2022.9876543",
      image:
        "https://plus.unsplash.com/premium_photo-1674067078920-5ca21b04244c?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "The Role of IoT in Smart Cities",
      type: "Journal Article",
      date: "2023",
      code: "ISSN 2624-6511 (print) ISSN 2624-6529 (online)",
      image:
        "https://images.unsplash.com/photo-1641202333866-1af03939064b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-100 text-gray-800">
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-24 px-4 sm:px-6 lg:px-8 text-center"
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 text-blue-600 font-JosefinSans">
          Journals & Publications
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto font-PTSerif">
          Exploring the frontiers of technology through research and writing
        </p>
      </motion.header>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="bg-white rounded-lg shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold mb-4 text-blue-600 font-JosefinSans">
            About Research
          </h2>
          <p className="text-gray-600 text-lg font-PTSerif">
            My work focuses on the intersection of artificial intelligence, data
            science, and ethics. Through rigorous research and thoughtful
            analysis, I strive to contribute meaningful insights to the
            ever-evolving field of technology. My publications span various
            topics, from cutting-edge AI applications to the societal
            implications of emerging technologies.
          </p>
        </div>

        <h2 className="text-3xl font-bold mb-8 text-blue-600 font-JosefinSans">
          Featured Publications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              <div className="p-4 bg-gray-50 flex items-center">
                {pub.type === "Journal Article" ? (
                  <FileText className="w-6 h-6 mr-2 text-blue-500" />
                ) : (
                  <BookOpen className="w-6 h-6 mr-2 text-green-500" />
                )}
                <span className="text-sm font-medium text-gray-500">
                  {pub.type}
                </span>
              </div>
              <img
                src={pub.image}
                alt={pub.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 font-JosefinSans">
                  {pub.title}
                </h3>
                <p className="text-gray-600 mb-2">{pub.date}</p>
                <p className="text-xs text-gray-500 mb-4">{pub.code}</p>
                <div className="mt-auto">
                  <motion.button
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Submit for Review <Send className="w-4 h-4 ml-2" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="text-center py-8 text-gray-600"
      >
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}
