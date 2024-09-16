import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@material-tailwind/react';





const sections = [
  {
    title: 'Professional Conference Organizer',
    description: 'Expertly planned events that foster academic collaboration, drive innovation and enhance professional development.',
    delay: 0.4,
  },
  {
    title: 'Publishing Opportunities',
    description: 'Access diverse academic journals and platforms, enabling scholars to showcase their research and advance knowledge.',
    delay: 0.6,
  },
  {
    title: 'Global Network',
    description: 'Connect with a worldwide community of researchers, academics, and professionals to collaborate and share insights.',
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
           We take pride in being a leading conference Planner, organizing impactful events and webinars that connect faculty, researchers, and students. We support high-quality journals and publications, expert peer review management, and meticulous manuscript preparation. Our services include strategic event promotion, research grant assistance, and specialized training workshops. Trusted by researchers and administrators, we drive academic growth and innovation through exceptional academic interactions.

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
            <a href="/Conferences&Webinars">
            <Button  variant='gradient' color="blue" size="lg">
            
              Explore Upcoming Conferences
            </Button>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
    </div>
  );
}