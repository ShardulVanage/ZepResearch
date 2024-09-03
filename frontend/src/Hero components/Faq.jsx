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
    question: "How do I order?",
    answer: "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don't appreciate the moment until it's passed.",
  },
  {
    question: "How can i make the payment?",
    answer: "It really matters and then like it really doesn't matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn't matter. Because it's about motivating the doers. Because I'm here to follow my dreams and inspire other people to follow their dreams, too. We're not always in the position that we want to be at.",
  },
  {
    question: "How do I order?",
    answer: "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don't appreciate the moment until it's passed.",
  },
  {
    question: "How much time does it take to receive the order?",
    answer: "The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now to be okay to be the greatest you. Would you believe in what you believe in, if you were the only one who believed it?",
  },
  {
    question: "Can I resell the products?",
    answer: "I always felt like I could do anything. That's the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves. If you're taught you can't do anything, you won't do anything. I was taught I could do everything.",
  },
  {
    question: "Where do I find the shipping details?",
    answer: "There's nothing I really wanted to do in life that I wasn't able to get good at. That's my skill. I'm not really specifically talented at anything except for the ability to learn. That's what I do. That's what I'm here for. Don't be afraid to be wrong because you can't learn anything from a compliment.",
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
            A lot of people don't appreciate the moment until it's passed. I'm not trying my hardest,
            and I'm not trying to do
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