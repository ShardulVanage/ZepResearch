import React from "react";
import {
  Card,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { motion } from "framer-motion";

const faqItems = [
  {
    question: "What services does Zep Research offer?",
    answer: "Zep Research provides a wide range of academic support services, including organizing conferences and webinars, managing peer reviews, facilitating journal and publication submissions, promoting events, assisting with manuscript preparation, securing research grants, and offering training workshops and networking opportunities to foster academic collaboration.",
  },
  {
    question: "How does Zep Research support academic publishing?",
    answer: "We offer comprehensive support for academic publishing, from manuscript preparation to peer review management. Our platform connects researchers with reputable journals and provides opportunities to publish across various disciplines, ensuring high visibility and contributing to the global exchange of scholarly knowledge",
  },
  {
    question: "Can Zep Research help with securing research grants?",
    answer: "Yes, Zep Research offers assistance in navigating the research grants process. Our team provides guidance on identifying funding opportunities, preparing proposals, and ensuring compliance with grant requirements, giving researchers the best chance of securing financial support for their projects.",
  },
  {
    question: "What networking opportunities are available through Zep Research?",
    answer: "Zep Research fosters global collaboration by organizing events that connect academics, researchers, and professionals. Our conferences, webinars, and networking sessions provide a platform for exchanging ideas, forming partnerships, and advancing research, creating opportunities for meaningful, long-term collaborations.",
  },
  {
    question: "What types of training does Zep Research provide?",
    answer: "We offer specialized research training and workshops designed to enhance skills in academic writing, research methodologies, and publication processes. Our training programs are tailored to meet the needs of researchers at all levels, ensuring participants can improve their work and professional development.",
  },
  {
    question: "How does Zep Research promote academic events?",
    answer: "Zep Research uses strategic promotion and marketing techniques to enhance the visibility of academic conferences and webinars. From social media campaigns to targeted outreach, we ensure your event reaches a broad audience, maximizing participation and impact within the academic community.",
  },
];

export default function ScrollAnimatedFAQSection() {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h2" className="text-center mb-2 text-4xl md:text-5xl lg:text-6xl font-bold font-JosefinSans">
            Frequently Asked Questions
          </Typography>
          <Typography className="text-center text-gray-600 mb-12">
           Find answers to the most common questions about our services
          </Typography>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="mt-6 bg-blue-gray-50/30 hover:shadow-lg transition-shadow duration-300">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 font-JosefinSans">
                    {item.question}
                  </Typography>
                  <hr />
                  <Typography className="text-gray-600 pt-1 text-justify font-PTSerif">
                    {item.answer}
                  </Typography>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Typography variant="h4" className="mb-2 font-JosefinSans">
            Need more help?
          </Typography>
          <Typography className="text-gray-600 mb-6  font-PTSerif">
            Contact us  with more details about your specific needs.
          </Typography>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="/ContactUs">
            <Button  color="blue" className=" text-white">
              SUBMIT A REQUEST
            </Button></a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}