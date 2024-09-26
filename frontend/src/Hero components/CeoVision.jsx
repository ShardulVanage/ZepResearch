import React,{  useRef } from 'react'
import logo from '../assets/logo.svg'
import { InView } from './ui/inView'
import { motion, useInView  } from "framer-motion";
const stats = [
  { label: 'Founded', value: '2021' },
  { label: 'Conference', value: '37+' },
  { label: 'Article Published', value: '1200+' },
  { label: 'Journal tie-ups', value: '75' },
]


const AnimatedText = ({ text, className }) => {
  const words = text.split(" ");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div ref={ref} className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-1"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

function CeoVision() {
  return (
     <div className=" py-6 sm:py-8  bg-white sm:drop-shadow-2xl  sm:mx-12 px-2  sm:rounded-b-full h-full sm:h-screen ">
      <div className="mx-auto max-w-7xl  lg:px-8  drop-shadow-2xl  relative    ">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2 justify-between">
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
          viewOptions={{ margin: '0px 0px -350px 0px' }}
        >
          <div className='flex flex-col justify-start'>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg ">
             
              <h1 className='text-4xl md:text-5xl lg:text-5xl text-left font-bold font-JosefinSans py-8'>
                Our Vision to Empower Academic Excellence
              </h1>
              <div className="max-w-xl text-justify">
                <p className="text-base text-gray-700 mb-12 max-w-3xl mx-auto text-justify font-PTSerif">
                  Empowering academic excellence through comprehensive support, we offer impactful conferences, 
                  diverse publishing opportunities, and streamlined peer reviews. Our services include professional training, networking,
                   and online courses designed to foster innovation and collaboration, driving growth and success within the academic community.

                </p>
              
                
              </div>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4">
              {stats.map((stat, statIdx) => (
                <div key={statIdx}>
                  <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.label}</dt>
                  <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">{stat.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10 flex">
              <a href="/ZepResarch" className="text-base font-semibold leading-7 text-blue-600">
                Learn more about our company <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
</InView>
          <div className=" flex justify-end  ">
            <div className="relative overflow-hidden rounded-br-[15rem] rounded-bl-2xl rounded-tl-sm bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <img
                className="absolute inset-0 h-full w-full object-cover brightness-125 saturate-0 "
                src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1727342905/mykbitvfcnerpxsvh8qz.jpg"
                alt=""
              />
              <div className="absolute inset-0 bg-gray-500 mix-blend-multiply" />
              <div
                className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
                aria-hidden="true"
              >
                <div
                  className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#709eff] to-[#0d00ff] opacity-10"
                  style={{
                    clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                  }}
                />
              </div>
              <figure className="relative isolate">
                <svg
                  viewBox="0 0 162 128"
                  fill="none"
                  aria-hidden="true"
                  className="absolute -left-2 -top-4 -z-10 h-32 stroke-white/20"
                >
                  <path
                    id="0ef284b8-28c2-426e-9442-8655d393522e"
                    d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                  />
                  <use href="#0ef284b8-28c2-426e-9442-8655d393522e" x={86} />
                </svg>
                <span className="mt-6 text-xl font-semibold leading-8 text-white flex flex-row items-center justify-start">
                <img src={logo} alt="" className="h-12 w-auto" />
                Zep Research
                </span>
                <blockquote className="mt-6 text-xl font-semibold leading-8 text-white drop-shadow-2xl">
                  
                    <AnimatedText
                    text= "Our commitment is to drive academic excellence with cutting-edge events, top-tier publications, and transformative professional development."
                    />
                </blockquote>
                <figcaption className="mt-6 text-base leading-6 text-gray-300">
                  <strong className="font-semibold text-white">CEO,</strong>  Zep Research
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CeoVision