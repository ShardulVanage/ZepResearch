"use client";

import React from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const AnimatedSection = ({ children, delay = 0 }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export default function WhyChooseZepResearch() {
  return (
    <div className="py-12">
      <div className="mx-auto sm:px-6 lg:px-8 drop-shadow-2xl">
        <div
          className="
            drop-shadow-2xl shadow-2xl overflow-hidden min-h-screen sm:rounded-t-full rounded-t-3xl 
            relative px-6 py-20 sm:px-10 sm:py-24 lg:py-24 xl:px-24
          "
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1477281765962-ef34e8bb0967?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.9) 100%)",
            }}
          ></div>
          <div className="relative z-10">
            <div className="flex flex-col justify-center items-center text-white py-24">
              <AnimatedSection>
                <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-JosefinSans py-8 text-center">
                  Why Choose Zep Research
                </motion.h1>

                <motion.p
                  className="text-base md:text-xl text-gray-200 mb-12 max-w-3xl mx-auto text-justify font-PTSerif"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  At Zep Research, we provide unparalleled support for academics
                  and researchers through our comprehensive suite of services.
                  Our expertise in organizing Conferences & Webinars ensures
                  impactful events that foster collaboration and innovation. We
                  offer diverse Journals & Publications to showcase your
                  research and enhance academic visibility. Our Peer Review
                  Management streamlines the feedback process, while Event
                  Promotion & Marketing maximizes your event's reach. Benefit
                  from professional Manuscript Preparation and enriching Online
                  Courses to advance your skills. Our Networking & Collaboration
                  opportunities connect you with a global academic community,
                  and our Research Training & Workshops offer targeted expertise
                  in research methodologies. Trusted by researchers and
                  administrators alike, Zep Research is dedicated to driving
                  growth, facilitating meaningful interactions, and advancing
                  academic excellence.
                </motion.p>
              </AnimatedSection>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-8"
              >
                <motion.a
                  href="/ZepResarch"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Explore Our Services
                </motion.a>
              </motion.div>
            </div>

            <motion.div
              className="pointer-events-none absolute left-12 top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-3xl lg:bottom-[-12rem] lg:top-auto lg:translate-y-0 lg:transform-gpu"
              aria-hidden="true"
              animate={{
                opacity: [0.3, 0.5, 0.3],
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div
                className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#75c1ff] to-[#9089fc] opacity-15"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
