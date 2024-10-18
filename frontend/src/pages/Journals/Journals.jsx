import React from "react";
import { motion } from "framer-motion";
import { BookOpen, FileText, Send } from "lucide-react";
import InfoJournal from "./components/InfoJournal";

export default function Journals() {
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
        <InfoJournal />
      </motion.section>
    </div>
  );
}
