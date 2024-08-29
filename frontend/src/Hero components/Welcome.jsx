import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

import { motion } from 'framer-motion';
import { Book, Percent, Wallet, CheckCircle } from 'lucide-react';
import { InView } from './ui/inView';

const cards = [
  {
    title: "Experience a True Exchange of Knowledge",
    description: "In addition to our professional event planning, we also planning host city tours in every city we serve.",
    icon: CheckCircle
  },
  {
    title: "Professional Conference Organizer",
    description: "We organize professional academic conferences, educational workshops and events.",
    icon: Wallet
  },
  {
    title: "Publishing opportunities",
    description: "We foster a close relationship with publishers to help planning scholars publish  ublish their work.",
    icon: Book
  },
  {
    title: "Worldwide Platform",
    description: "We build a platform where all the players in the academic  world can bring forward their latest research.",
    icon: Percent
  }
];

const Card = ({ title, description, icon: Icon }) => (
  <motion.div 
    className="bg-white p-6 rounded-lg shadow-md max-w-7xl"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon className="text-blue-500 mb-4" size={24} />
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-gray-600 text-justify  ">{description}</p>
  </motion.div>
);
export default function Welcome() {
  return (
    <div className="overflow-hidden bg-white py-8 sm:py-12">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20   lg:grid-cols-2 items-center ">
          <div className="lg:pt-4">
            <div className="lg:max-w-2xl">
              <InView
          variants={{
            hidden: {
              opacity: 0,
              x: -100,
            },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          viewOptions={{ margin: '0px 0px -150px 0px' }}
        >
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-left">Welcome to Zep Research</p></InView>
              <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
            visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
          }}
          viewOptions={{ margin: '0px 0px -100px 0px' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
              <p className="mt-6 text-lg text-justify leading-8 text-gray-600">
                At Zep Research, we foster collaborative forums for knowledge sharing and idea exchange, enhancing professional development in academic and educational settings. Born from academia, for academia, our platform specializes in expert event organization, facilitating meaningful connections among faculty deans, professors, researchers, scholars, and students. Trusted by researchers and administrators, we craft exceptional academic interactions that drive growth and innovation.
              </p>
            </InView>
            </div>
          </div>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-7xl ">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card {...card} />
        </motion.div>
      ))}
    </div>
        </div>
      </div>
    </div>
  )
}
