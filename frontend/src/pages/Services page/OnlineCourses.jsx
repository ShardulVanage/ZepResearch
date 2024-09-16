import { IconAccessible, IconBriefcase, IconToolsOff } from '@tabler/icons-react';
import React from 'react'

function OnlineCourses() {
    const benefits = [
    {
      title: 'Skill Enhancement',
      description: 'Gain the skills needed to advance your research and academic career.',
      icon:<IconToolsOff/>,
    },
    {
      title: 'Career Growth',
      description: 'Stay updated with the latest research trends and techniques, giving you a competitive edge in your field.',
      icon:<IconBriefcase/>,
    },
    {
      title: 'Accessible Anywhere',
      description: 'Learn from anywhere in the world, without the constraints of location or time.',
      icon: <IconAccessible/>,
    },
  ];
  return (
   <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-24">
 
  <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-start">
    <div className="lg:col-span-7">
    
      <div className="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10">
        <div className="col-span-4">
          <img className="rounded-xl" src="https://images.unsplash.com/photo-1582079768381-0e81b88db423?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Features Image"/>
        </div>
     

        <div className="col-span-3">
          <img className="rounded-xl" src="https://plus.unsplash.com/premium_photo-1661630824245-e84544864438?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Features Image"/>
        </div>
       
        <div className="col-span-5">
          <img className="rounded-xl" src="https://images.unsplash.com/photo-1628752230442-34126c035654?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DD" alt="Features Image"/>
        </div>
        
      </div>

    </div>


    <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
      <div className="space-y-6 sm:space-y-8">
      
        <div className="space-y-2 md:space-y-4">
          <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 font-JosefinSans ">          
            Online Courses
          </h2>
          <p className="text-gray-700 font-PTSerif">
            At Zep Research, we believe in empowering researchers and academics through continuous learning. Our Online Courses are designed to enhance your research skills, knowledge, and professional development from the comfort of your home.

          </p>
        </div>
    



        <ul className="space-y-2 sm:space-y-4">
          <li className="flex gap-x-3">
            <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600  ">
              <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </span>
            <div className="grow">
              <span className="text-sm sm:text-base text-gray-700 font-PTSerif">
                <span className="font-bold font-JosefinSans">High-Quality Content</span> –  Our courses are developed by industry experts and leading academics, ensuring you receive the most relevant and up-to-date knowledge.

              </span>
            </div>
          </li>

          <li className="flex gap-x-3">
            <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 ">
              <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </span>
            <div className="grow">
              <span className="text-sm sm:text-base text-gray-700 font-PTSerif ">
                <span className="font-bold font-JosefinSans">Flexible Learning</span> – With online access, you can learn at your own pace, fitting your studies around your schedule.

              </span>
            </div>
          </li>

          <li className="flex gap-x-3">
            <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600  ">
              <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </span>
            <div className="grow">
              <span className="text-sm sm:text-base text-gray-700 font-PTSerif ">
                <span className="font-bold font-JosefinSans">Comprehensive Curriculum
</span> –  We cover a wide range of topics, from research methods and data analysis to academic writing and publication strategies.


              </span>
            </div>
          </li>

           <li className="flex gap-x-3">
            <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600  ">
              <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </span>
            <div className="grow">
              <span className="text-sm sm:text-base text-gray-700 font-PTSerif">
                <span className="font-bold font-JosefinSans">Interactive Sessions</span> – Our courses offer interactive features, including quizzes, assignments, and discussion forums, providing an engaging learning experience
              </span>
            </div>
          </li>

           
        </ul>
       
      </div>
    </div>
    
  </div>
 <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
    <div className="lg:col-span-1">
      <h2 className="font-bold text-2xl md:text-3xl text-gray-800 font-JosefinSans">
        Benefits of Our Online Courses

      </h2>
      
      <div>
        <img src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1726493773/rgnc87hzg8iulmzuxhpn.png" alt="imggif" />
      </div>
    </div>
    <div className="lg:col-span-2">
      <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
         {benefits.map((b) => (
        <div key={b.title} className="flex gap-x-5">
          <div className="shrink-0 mt-1 size-6 text-blue-600" >
            {b.icon}
          </div>
          <div className="grow">
            <h3 className="text-lg font-semibold text-gray-800 font-JosefinSans ">
             {b.title}
            </h3>
            <p className="mt-1 text-gray-600 font-PTSerif text-sm sm:text-base ">
              {b.description}
            </p>
          </div>
        </div>
         ))}
      </div>
    </div>
  </div>
</div>
  )
}

export default OnlineCourses