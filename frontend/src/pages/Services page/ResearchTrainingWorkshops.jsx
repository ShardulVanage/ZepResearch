import { IconBriefcase2, IconCheck, IconTools,  IconWritingSign,   } from '@tabler/icons-react';

import React from 'react'

  const benefits = [
    {
      title: 'Skill Building',
      description: 'Acquire the skills necessary to improve the quality and efficiency of your research.',
      icon:<IconTools/>
    },
    {
      title: 'Practical Application',
      description: 'Gain real-world insights that you can immediately apply to your research projects.',
      icon:<IconWritingSign/>
    },
    {
      title: 'Career Advancement',
      description: 'Enhance your research capabilities, making you a more competitive and capable academic or researcher.',
      icon:<IconBriefcase2/>
    },
  ];
  const features = [
    {
      title: 'Specialized Sessions',
      description: 'We offer a wide range of training topics, including research methodology, data analysis, academic writing, and publication strategies.',
    },
    {
      title: 'Expert Instructors',
      description: 'Learn from experienced academics and industry professionals who are leaders in their respective fields.',
    },
    {
      title: 'Interactive Learning',
      description: 'Our workshops provide hands-on learning experiences, ensuring practical understanding of complex research concepts.',
    },
    {
      title: 'Flexible Formats',
      description: 'Choose from online and in-person workshops to fit your schedule and learning preferences.',
    },
  ];
function ResearchTrainingWorkshops() {
  return (
    <section>

    <div class="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2"/>
  <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
    <div class="mt-5 max-w-xl text-center mx-auto">
      <h1 class="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl font-JosefinSans">
       Research Training & Workshops
      </h1>
    </div>
    <div class="mt-5 max-w-3xl text-center mx-auto">
      <p class="text-lg text-gray-600  text-justify font-PTSerif ">
Our Research Training & Workshops at Zep Research are tailored to help academics and researchers build essential skills for effective research. Whether you're a seasoned researcher or just starting, our workshops are designed to enhance your research methods and academic writing.
   </p>
    </div>




    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-screen-2xl">
        <h1  className='sm:text-3xl text-2xl py-4 text-center font-JosefinSans'>Why Choose Zep Research for Research Training & Workshops?</h1>
      <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
        {features.map((f) => (
        <div class="relative pl-16">
          
          <dt class="text-base font-semibold leading-7 text-gray-900 inline-flex font-JosefinSans">
            <IconCheck className='w-6 h-6 text-blue-600 shrink-0  bg-white border-2 border-blue-600 rounded-full mr-2' />
            {f.title}
          </dt>
          <dd class="mt-2 text-base leading-7 text-gray-600 font-PTSerif">{f.description}</dd>
        </div>
        ))}
      </dl>
    </div>

   
   
    
</div>



<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  
  <div class="grid md:grid-cols-2 gap-12">
    <div class="lg:w-3/4">
        <h2  className='sm:text-3xl text-2xl py-4 text-center font-JosefinSans leading-tight'>
Benefits of Our Research Training & Workshops      </h2>
     <img src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1726480853/hy0bfaazugwcujdqvmss.png" alt="" className="sm:ml-12 p-12 sm:p-0"/>
     
    </div>
  

    <div class="space-y-6 lg:space-y-10 md:pt-24">
    
       {benefits.map((b) => (
      <div class="flex gap-x-5 sm:gap-x-8">
      
        <span class="shrink-0 text-blue-500 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white  shadow-sm mx-auto dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
          {b.icon}
        </span>
        <div class="grow">
          <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
            {b.title}
          </h3>
          <p class="mt-1 text-gray-600 dark:text-neutral-400">
            {b.description}
          </p>
        </div>
      </div>
      ))}
      
    </div>
  
  </div>
  
</div>
    </section>
  )
}



export default ResearchTrainingWorkshops