"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const sections = [
  {
    title: "Professional Conference Organizer",
    description:
      "Expertly planned events that foster academic collaboration, drive innovation and enhance professional development.",
    icon: "🎓",
  },
  {
    title: "Publishing Opportunities",
    description:
      "Access diverse academic journals and platforms, enabling scholars to showcase their research and advance knowledge.",
    icon: "📚",
  },
  {
    title: "Global Network",
    description:
      "Connect with a worldwide community of researchers, academics, and professionals to collaborate and share insights.",
    icon: "🌐",
  },
];

const AnimatedSection = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

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

export default function Welcome() {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    // Ensure the component is mounted and we're in a browser environment
    if (
      typeof window !== "undefined" &&
      titleRef.current &&
      descriptionRef.current
    ) {
      gsap.from(titleRef.current, {
        duration: 1.5,
        y: 100,
        opacity: 0,
        ease: "power4.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      });

      gsap.from(descriptionRef.current, {
        duration: 1.5,
        y: 50,
        opacity: 0,
        ease: "power4.out",
        delay: 0.5,
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: "top 80%",
        },
      });
    }
  }, []);

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center text-gray-900 mb-8 font-sans">
            Welcome to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 font-JosefinSans">
              Zep Research
            </span>
          </h1>

          <p
            ref={descriptionRef}
            className="text-xl md:text-2xl text-gray-700 mb-16 max-w-4xl mx-auto text-center font-PTSerif leading-relaxed "
          >
            We take pride in being a leading conference planner, organizing
            impactful events and webinars that connect faculty, researchers, and
            students. Our mission is to drive academic growth and innovation
            through exceptional academic interactions.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {sections.map((section, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <motion.div
                  className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-5xl mb-6">{section.icon}</div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-JosefinSans">
                    {section.title}
                  </h2>
                  <p className="text-gray-600 font-PTSerif">
                    {section.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={1}>
            <div className="mt-16 text-center">
              <motion.a
                href="/Conferences&Webinars"
                className="inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-400 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Upcoming Conferences
              </motion.a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
