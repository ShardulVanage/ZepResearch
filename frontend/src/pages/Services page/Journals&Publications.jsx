import { IconComponents, IconHeartHandshake, IconInfoSquareRounded, IconNotebook, IconPinEnd, IconSeeding, IconWorld } from '@tabler/icons-react';
import React from 'react'

 const questions = [
    { id: 1, icon:<IconNotebook/> ,question: 'Comprehensive Journal Access', answer: 'Explore a diverse range of high-quality academic journals spanning various disciplines. Our platform provides access to leading journals, ensuring you stay updated with the latest research and developments in your field.' },
    { id: 2, icon:<IconHeartHandshake/> ,question: 'Publication Support', answer: 'Receive expert assistance with manuscript preparation, submission, and peer review. Our team offers guidance to streamline the publishing process, enhancing the quality and impact of your research.' },
    { id: 3, icon: <IconComponents/>,question: 'Collaborative Publishing Opportunities', answer: 'Partner with us to co-publish research papers and special issues. We facilitate collaborations between researchers, institutions, and publishers, providing a platform for joint publications that advance knowledge and foster academic partnerships.' },
    { id: 4, icon: <IconWorld/>  , question: 'Global Reach and Visibility', answer: 'Increase the visibility of your research with our global distribution network. We ensure your work is accessible to a broad audience, enhancing its reach and influence within the academic community.' },
    { id: 5, icon:<IconInfoSquareRounded/> ,question: 'Editorial Services', answer: 'Benefit from professional editorial services, including proofreading, editing, and formatting. Our team ensures your research is presented clearly and professionally, meeting the highest standards of academic publishing.' },
    { id: 6, icon:<IconPinEnd/> ,question: 'Impactful Research Dissemination', answer: 'Utilize our platform to effectively disseminate your research findings. We focus on promoting your work through various channels, including online databases and academic networks, to maximize its impact and reach.' },
    { id: 7, icon:<IconSeeding/> ,question: 'Access to Emerging Research', answer: 'Stay at the forefront of your field by accessing and contributing to cutting-edge research. Our journals feature the latest studies, trends, and innovations, providing valuable insights and opportunities for advancement.' },
  ];
function JournalsPublications() {

  return (
  
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-10">
  <div className="aspect-w-16 aspect-h-7">
    <img className="w-full object-cover rounded-xl"
     src="https://images.unsplash.com/photo-1597955942443-5a61862792aa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
     alt="Features Image"/>
  </div>

 
  <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
    <div className="lg:col-span-1">
      <h2 className="font-bold text-2xl md:text-3xl text-gray-800 font-JosefinSans">
      Journals & Publications
      </h2>
      <p className="mt-2 md:mt-4 text-gray-500 font-PTSerif">
      At Zep Research, we offer a robust platform for academic and professional publication. Our Journals & Publications services are designed to support researchers and scholars throughout the publication process, ensuring their work reaches a global audience with maximum impact.

      </p>
      <div>
        <img src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1726307149/q2ta3jgx7ksg2dhiblwf.gif" alt="imggif" />
      </div>
    </div>
  

    <div className="lg:col-span-2">
      <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
         {questions.map((q) => (
        <div key={q.id} className="flex gap-x-5">
          <div className="shrink-0 mt-1 size-6 text-blue-600" >
            {q.icon}
          </div>
          <div className="grow">
            <h3 className="text-lg font-semibold text-gray-800 font-JosefinSans ">
             {q.question}
            </h3>
            <p className="mt-1 text-gray-600 font-PTSerif">
              {q.answer}
            </p>
          </div>
        </div>
         ))};

       
       
       
      </div>
    </div>
    
  </div>
 
</div>

  )
}

export default JournalsPublications