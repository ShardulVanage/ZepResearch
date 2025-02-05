import React, { useState, useEffect, useCallback } from "react";
import { Typography, Button, Card } from "@material-tailwind/react";
import { motion, AnimatePresence } from "framer-motion";
import { Nav } from "./Nav";
import { CardStack } from "./ui/card-stack";
import { cn } from "../lib/utils";

import p1 from "../images/patners/1.png";
import p2 from "../images/patners/2.png";
import p3 from "../images/patners/3.png";
import p4 from "../images/patners/4.png";
import p5 from "../images/patners/5.png";
import p6 from "../images/patners/6.png";
import p7 from "../images/patners/7.png";
import p8 from "../images/patners/8.png";
import p9 from "../images/patners/9.png";
import p10 from "../images/patners/10.png";
import p11 from "../images/patners/11.png";
import p12 from "../images/patners/12.png";
import p13 from "../images/patners/13.png";



const logos = [
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9,
  p10,
  p11,
  p12,
  p13,
];
const images = [
  "https://plus.unsplash.com/premium_photo-1664302656889-e0ff44331843?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1477281765962-ef34e8bb0967?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [conference, setConference] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 1000); // Half of the transition duration
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className=" h-screen w-full overflow-hidden">
      {/* Image Slider */}
      <AnimatePresence mode="wait">
        {!isTransitioning && (
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt={`Beautiful landscape ${currentImageIndex + 1}`}
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>

      {/* Black transition overlay */}
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: isTransitioning ? 1 : 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />

      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 z-10 bg-black bg-opacity-50" />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col h-full items-center justify-start text-center text-white">
        <Nav />
        <div className="max-w-4xl px-4 h-screen flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-4xl md:text-5xl lg:text-6xl font-JosefinSans"
            >
              Bridging Minds & Empowering Research
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typography
              variant="lead"
              color="white"
              className="mb-8 text-xl md:text-2xl font-PTSerif"
            >
              Elevate research and publication through expertly managed,
              innovative conferences.
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button
              color="blue"
              variant="filled"
              size="lg"
              className="text-black"
            >
              Start Your Journey
            </Button>
            <Button color="white" variant="outlined" size="lg">
              Learn More
            </Button>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-4 bg-black bg-opacity-50">
          <motion.div
            className="flex"
            animate={{ x: [0, -1920] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Logo ${index + 1}`}
                className="mx-8 h-10 sm:h-16 w-full "
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export const Highlight = ({ children, className }) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Manu Arora",
    designation: "Senior Software Engineer",
    content: (
      <p>
        These cards are amazing, <Highlight>I want to use them</Highlight> in my
        project. Framer motion is a godsend ngl tbh fam 🙏
      </p>
    ),
  },
  {
    id: 1,
    name: "Elon Musk",
    designation: "Senior Shitposter",
    content: (
      <p>
        I dont like this Twitter thing,{" "}
        <Highlight>deleting it right away</Highlight> because yolo. Instead, I
        would like to call it <Highlight>X.com</Highlight> so that it can easily
        be confused with adult sites.
      </p>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <p>
        The first rule of
        <Highlight>Fight Club</Highlight> is that you do not talk about fight
        club. The second rule of
        <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
        club.
      </p>
    ),
  },
];
