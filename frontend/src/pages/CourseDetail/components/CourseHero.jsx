import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import React, { useState, useEffect ,useRef} from 'react'
import { client } from '../../../lib/pocketbase';
import { useParams } from 'react-router-dom'
import RegistrationDialog from './DialogBox';
import EnrollmentCounter from './ui/endrollcounter';

function CourseHero({course}) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handlePayment = (method) => {
    console.log(`Processing payment via ${method}`);
    setIsDialogOpen(false);
  };

    const containerRef = useRef(null);
      const { scrollY } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
      });
      const y = useTransform(scrollY, [0, 300], [0, -50]);
        
        // Add prop type checking
  if (!course) {
    return null
  }

  return (
    <div id='Hero'>
      <div className="min-h-full relative py-24" ref={containerRef}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1501526029524-a8ea952b15be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          }}
        /> */}
        <img className='absolute inset-0 bg-cover bg-center h-full w-full' 
        src={`https://zep-research.pockethost.io/api/files/`+course.collectionId+`/`+course.id+`/`+course.back_Img}
         alt="bg-img" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/80 to-black/70" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-screen-2xl mx-auto p-6 pt-12"
      >
        {/* Header */}
        {/* <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="mb-12"
        >
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CXzOhnyMaKiljYt7lM8djm2IrnywBu.png"
            alt="Meta Logo"
            className="w-[120px] h-[40px] brightness-0 invert"
          />
        </motion.div> */}

        {/* Title Section */}
        <div className="space-y-6 mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl font-bold text-white max-w-3xl"
          >
{
    course.title
}          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-200 max-w-2xl"
          >
            {course.description}
          </motion.p>
        </div>

        {/* Instructors */}
    

        {/* Enrollment Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex items-center gap-6 mb-16"
        >
          <motion.button
           onClick={() => setIsDialogOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-600 sm:text-lg px-8 py-6 text-white rounded-lg shadow-lg text-sm shadow-blue-500/30 flex items-center sm:w-auto w-full"
          >
            Enroll for <span className='sm:text-2xl text-base ml-1 '> ${course.price}</span>
            
            <ArrowRight className="ml-2 w-5 h-5" />
          </motion.button>
          <div className="text-gray-200 sm:flex items-center justify-center gap-2">
            <span className="font-semibold text-white text-xl"><EnrollmentCounter/></span> already enrolled
          </div>
        </motion.div>

        {/* Course Details Cards */}
        <motion.div style={{ y }} className="grid grid-cols-1 md:grid-cols-5 gap-6">
      {course.hero_card.items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 + index * 0.1 }}
          whileHover={{
            scale: 1.05,
            rotateX: 5,
            rotateY: 5,
            transition: { type: "spring", stiffness: 400, damping: 17 },
          }}
        >
          <div
            className={`p-6 h-full backdrop-blur-md rounded-lg border ${
              item.highlight 
                ? "bg-blue-500/20 border-blue-400/50" 
                : "bg-white/10 border-white/20"
            }`}
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                {item.icon && <span className="text-2xl">{item.icon}</span>}
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              </div>
              <p className="text-sm text-gray-300">{item.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
        {/* Coursera Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex sm:flex-row flex-col items-center gap-2 text-sm text-gray-300 mt-8"
        >
          <span className=' text-xl sm:text-base'>Included with</span>
          <span className="bg-blue-500/50 text-blue-50 px-2 py-1 rounded-md backdrop-blur-sm">
          Interview Prep Videos
          </span>
          <span className="bg-blue-500/50 text-blue-50 px-2 py-1 rounded-md backdrop-blur-sm">
          Industry level Projects
          </span>
          <span className="bg-blue-500/50 text-blue-50 px-2 py-1 rounded-md backdrop-blur-sm">
          24/7 Chat support
          </span>
          <span className="bg-blue-500/50 text-blue-50 px-2 py-1 rounded-md backdrop-blur-sm">
          Job Assistance
          </span><span className="bg-blue-500/50 text-blue-50 px-2 py-1 rounded-md backdrop-blur-sm">
          Mock Interviews
          </span>
        </motion.div>
      </motion.div>
    </div>
    <RegistrationDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title={course.title}
        price={course.price}
       
        onPayment={handlePayment}
      />
    </div>
  )
}

export default CourseHero
