import { IconCheck, IconDeviceIpadCheck, IconHeartHandshake, IconHourglassHigh, IconScript,  } from '@tabler/icons-react';
import React from 'react'

 const benefits = [
    {
      title: 'Quality Assurance',
      description: 'Enhance the credibility of your research by receiving objective and expert reviews.',
      icone:<IconDeviceIpadCheck/>
    },
    {
      title: 'Improved Manuscript Readiness',
      description: 'Ensure your work is ready for submission to top-tier journals with feedback that addresses both major and minor improvements.',
      icone:<IconScript/>
    },
    {
      title: 'Time and Resource Efficiency',
      description: 'Save time by outsourcing the administrative and logistical aspects of peer review to our dedicated team.',
      icone:<IconHourglassHigh/>
    },
    {
      title: 'Fostering Academic Relationships',
      description: 'Our platform promotes interaction between authors, reviewers, and editors, creating opportunities for academic networking and collaboration.',
      icone:<IconHeartHandshake/>
    },
  ];
 const features = [
    {
      title: 'Streamlined Process',
      description: 'Our platform simplifies the often complex and time-consuming task of managing peer reviews, enabling seamless interactions between authors and reviewers.',
    },
    {
      title: 'Expert Reviewers',
      description: 'We work with a diverse network of experienced academics and subject matter experts, ensuring that your research is evaluated by professionals who understand the nuances of your field.',
    },
    {
      title: 'Transparent Feedback',
      description: 'We ensure an open and transparent peer review process, where constructive feedback is shared with authors in a clear and actionable format, helping improve the quality of manuscripts before publication.',
    },
    {
      title: 'Efficient Turnaround',
      description: 'We recognize that timely feedback is essential for the publication process. Our platform optimizes the workflow to provide prompt reviews without compromising quality.',
    },
    {
      title: 'Confidentiality and Ethics',
      description: 'At Zep Research, we maintain strict confidentiality protocols and adhere to ethical guidelines throughout the peer review process to protect the integrity of your work.',
    },
    {
      title: 'Customizable Solutions',
      description: 'Whether you’re a journal editor seeking to streamline the review process or a researcher looking for quality feedback, we offer tailored solutions to meet your specific needs.',
    },
  ];

function PeerReviewManagement() {
  return (
    <section>

    <div class="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2"/>
  <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
    <div class="mt-5 max-w-xl text-center mx-auto">
      <h1 class="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl font-JosefinSans">
        Peer  <br />Review Management
      </h1>
    </div>
    <div class="mt-5 max-w-3xl text-center mx-auto">
      <p class="text-lg text-gray-600  text-justify font-PTSerif ">
        At Zep Research, we recognize the critical importance of a thorough and efficient peer review process in maintaining the integrity and quality of academic research. Our Peer Review Management service offers a comprehensive solution that connects researchers with qualified reviewers to provide valuable and constructive feedback, ensuring that research outputs meet the highest standards of excellence.
      </p>
    </div>




    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-screen-2xl">
        <h1  className='sm:text-3xl text-2xl py-4 text-center font-JosefinSans'>Why Choose Zep Research for Peer Review Management?</h1>
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
        <h2  className='sm:text-3xl text-2xl py-4 text-left font-JosefinSans leading-tight'>
        Benefits of Our Peer Review Management Service
      </h2>
     <img src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1726470072/pdxfe0atpybsbjvuzirx.png" alt="" className="sm:pl-16 p-12 sm:p-0"/>
     
    </div>
  

    <div class="space-y-6 lg:space-y-10 md:pt-24">
    
       {benefits.map((b) => (
      <div class="flex gap-x-5 sm:gap-x-8">
      
        <span class="shrink-0 text-blue-500 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white  shadow-sm mx-auto dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
          {b.icone}
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

export default PeerReviewManagement