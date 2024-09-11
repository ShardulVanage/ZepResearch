import React from 'react';
import { motion, useInView } from 'framer-motion';
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

export default function Example() {
  return ( 
    <div className=" py-12  ">
      <div className="mx-auto  sm:px-6 lg:px-8 drop-shadow-2xl ">
  <div 
  className="
    drop-shadow-2xl shadow-2xl overflow-hidden h-screen sm:rounded-t-full rounded-t-3xl 
    relative px-6 py-20 sm:px-10 sm:py-24 lg:py-24 xl:px-24
  "
  style={{
   
    backgroundImage: "url('https://images.unsplash.com/photo-1477281765962-ef34e8bb0967?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", backgroundSize: 'cover', backgroundPosition: 'center'
    }}
>
  <div className="absolute inset-0  "
   style={{
   background: 'radial-gradient(circle, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.9) 100%)'}}
  ></div>
  <div className="relative z-10">
    {/* Your content goes here */}
  <div className='flex flex-col justify-center items-center text-white py-24'>
    <AnimatedSection>
    <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold font-JosefinSans py-8'>Why Choose Zep Research</h1>
    
      <p className="text-base md:text-xl  text-gray-200 mb-12 max-w-3xl mx-auto text-justify font-PTSerif ">
        At Zep Research, we provide unparalleled support for academics and researchers through our comprehensive suite of services. 
        Our expertise in organizing Conferences & Webinars ensures impactful events that foster collaboration and innovation. 
        We offer diverse Journals & Publications to showcase your research and enhance academic visibility.
         Our Peer Review Management streamlines the feedback process, while Event Promotion & Marketing maximizes your event’s reach. 
         Benefit from professional Manuscript Preparation and enriching Online Courses to advance your skills.
          Our Networking & Collaboration opportunities connect you with a global academic community, 
          and our Research Training & Workshops offer targeted expertise in research methodologies. Trusted by researchers and administrators alike,
           Zep Research is dedicated to driving growth, facilitating meaningful interactions, and advancing academic excellence
      </p>
      </AnimatedSection>
  </div>

          <div
            className="pointer-events-none absolute left-12 top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-3xl lg:bottom-[-12rem] lg:top-auto lg:translate-y-0 lg:transform-gpu"
            aria-hidden="true"
          >
            <div
              className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#75c1ff] to-[#9089fc] opacity-15"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />

</div>
          </div>
        </div>
      </div>
    </div>
  )
}
