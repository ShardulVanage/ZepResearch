import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@material-tailwind/react';

const sections = [
  {
    title: 'Professional Conference Organizer',
    description: 'We specialize in organizing high-quality research conferences that foster collaboration and innovation.',
    delay: 0.4,
  },
  {
    title: 'Publishing Opportunities',
    description: 'Present your research and get published in renowned journals and conference proceedings.',
    delay: 0.6,
  },
  {
    title: 'Global Network',
    description: 'Connect with researchers and professionals from around the world, expanding your academic and professional network.',
    delay: 0.8,
  },
];

const AnimatedSection = ({ children, delay = 0 }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export default function Welcome() {
  return (
    <div className=''>
    <section className=" bg-white py-16 md:py-24 sm:rounded-b-full drop-shadow-2xl">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-8 font-JosefinSans">
            Welcome to Zep Research
          </h1>
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <p className="text-base md:text-xl  text-gray-700 mb-12 max-w-3xl mx-auto text-justify font-PTSerif">
            At Zep Research, we foster collaborative forums for knowledge sharing and idea exchange,
             enhancing professional development in academic and educational settings. Born from academia, for academia,
              our platform specializes in expert event organization, facilitating meaningful connections among faculty deans,
               professors, researchers, scholars, and students. Trusted by researchers and administrators, 
               we craft exceptional academic interactions that drive growth and innovation.
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {sections.map((section, index) => (
        <AnimatedSection key={index} delay={section.delay}>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-JosefinSans">{section.title}</h2>
            <p className="text-gray-600 font-PTSerif">{section.description}</p>
          </div>
        </AnimatedSection>
      ))}
    </div>
        
        <AnimatedSection delay={1}>
          <div className="mt-12 text-center">
            <Button variant='gradient' color="blue" size="lg">
            
              Explore Upcoming Conferences
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
    </div>
  );
}