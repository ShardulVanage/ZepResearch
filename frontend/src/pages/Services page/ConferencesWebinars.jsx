import { IconAffiliate, IconArrowAutofitContent, IconArrowAutofitContentFilled, IconAutomation, IconCheck, IconDeviceIpadCheck, IconDevicesShare, IconGlobe, IconHeartHandshake, IconHourglassHigh, IconScript,  } from '@tabler/icons-react';
import React from 'react'

 const benefits = [
    {
      title: 'Academic Networking',
      description: 'Connect with peers, thought leaders, and experts in your field to foster collaborations, exchange ideas, and build relationships that last beyond the event.',
      icon:<IconAffiliate/>,
    },
    {
      title: 'Knowledge Sharing',
      description: 'Attend sessions led by leading academics and experts, offering cutting-edge insights and the latest research across various fields.',
      icon:<IconDevicesShare/>,

    },
    {
      title: 'Global Engagement',
      description: 'Whether hosting or participating, our conferences and webinars provide access to a global audience, broadening your reach and influence.',
      icon:<IconGlobe/>,

    },
    {
      title: 'Convenient and Accessible',
      description: 'With virtual and hybrid event options, attendees can join from anywhere in the world, ensuring maximum participation without geographical constraints.',
       icon:<IconArrowAutofitContent/>,

    },
    {
      title: 'Customizable Features',
      description: 'We offer a range of customizable options for event hosts, including branding, session structure, and audience engagement tools, to tailor the experience to your needs.',
      icon:<IconAutomation/>,

    },
  ];

 const services = [
    {
      title: 'Expert Planning & Execution',
      description: 'Our team takes care of every aspect of event planning, from logistics to speaker coordination, ensuring a seamless and professional experience for attendees and hosts alike.',
    },
    {
      title: 'Global Reach',
      description: 'With our extensive academic network, we connect your event to a diverse audience from various disciplines, promoting interdisciplinary learning and collaboration.',
    },
    {
      title: 'Interactive Platforms',
      description: 'Whether virtual or hybrid, our webinars and conferences are hosted on user-friendly, interactive platforms that allow for real-time engagement, Q&A sessions, and networking opportunities.',
    },
    {
      title: 'Tailored Event Experiences',
      description: 'We customize each conference or webinar to meet your specific goals, whether its presenting groundbreaking research, conducting specialized workshops, or facilitating academic discussions.',
    },
    {
      title: 'Renowned Speakers',
      description: 'We collaborate with leading academics, industry experts, and thought leaders to ensure your event features high-quality, relevant content that draws in participants and keeps them engaged.',
    },
    {
      title: 'Seamless Registration & Support',
      description: 'From initial registration to post-event follow-up, our team provides comprehensive support, ensuring a smooth process for attendees and presenters alike.',
    },
  ];

function ConferencesWebinars() {
  return (
    <section>

    <div class="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2"/>
  <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
    <div class="mt-5 max-w-xl text-center mx-auto">
      <h1 class="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl font-JosefinSans">
        Conferences & Webinars
      </h1>
    </div>
    <div class="mt-5 max-w-3xl text-center mx-auto">
      <p class="text-lg text-gray-600  text-justify font-PTSerif ">
        At Zep Research, we specialize in organizing and hosting academic Conferences and Webinars that bring together researchers, educators, and professionals from around the globe. Our expertly curated events foster meaningful exchanges of ideas, knowledge sharing, and collaborations, creating opportunities for both seasoned scholars and emerging researchers to connect and grow.      </p>
    </div>




    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-screen-2xl">
        <h1  className='sm:text-3xl text-2xl py-4 text-center font-JosefinSans'>Why Choose Zep Research for Conferences & Webinars?
</h1>
      <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
        {services.map((s) => (
        <div class="relative pl-16">
          
          <dt class="text-base font-semibold leading-7 text-gray-900 inline-flex font-JosefinSans">
            <IconCheck className='w-6 h-6 text-blue-600 shrink-0  bg-white border-2 border-blue-600 rounded-full mr-2' />
            {s.title}
          </dt>
          <dd class="mt-2 text-base leading-7 text-gray-600 font-PTSerif">{s.description}</dd>
        </div>
        ))}
      </dl>
    </div>

   
   
    
</div>



<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  
  <div class="grid md:grid-cols-2 gap-12">
    <div class="lg:w-3/4">
        <h2  className='sm:text-3xl text-2xl py-4 text-left font-JosefinSans leading-tight'>
        Benefits of Our Conferences & Webinars Service

      </h2>
     <img src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1726495440/lvogggwj5bofrbstts0g.png" alt="" className="sm:pl-16 p-12 sm:p-0"/>
     
    </div>
  

    <div class="space-y-6 lg:space-y-10 md:pt-24">
    
       {benefits.map((b) => (
      <div class="flex gap-x-5 sm:gap-x-8">
      
        <span class="shrink-0 text-blue-500 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white  shadow-sm mx-auto dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
          {b.icon}
        </span>
        <div class="grow">
          <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200 font-JosefinSans">
            {b.title}
          </h3>
          <p class="mt-1 text-gray-600 dark:text-neutral-400 font-PTSerif">
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

export default ConferencesWebinars