import React from 'react'
import  { Earth, Focus, LifeBuoy, Users } from 'lucide-react'
function WorldwidePlatform() {
  return (
   <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-24">
 
  <div className="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
    <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold ">
      Worldwide Platform
    </h2>
    <p className="mt-3 text-gray-800 ">
    At Zep Research, we provide a global stage for knowledge sharing, collaboration, and innovation. 
    Our worldwide platform connects industry professionals, researchers, and academics across continents, fostering a community that transcends borders.
    </p>
  </div>
 

  
  <div className="mx-auto max-w-3xl grid grid-cols-12 gap-6 lg:gap-8">
    
    <div className="col-span-6 sm:col-span-4 text-center">
      <Earth className='mx-auto h-auto w-7 md:w-9 text-gray-800'/>
      <div className="mt-2 sm:mt-6">
        <h3 className="text-lg font-semibold text-gray-800 ">
         Global Reach

        </h3>
      </div>
    </div>
   
    <div className="col-span-6 sm:col-span-4 text-center">
      <Focus className="mx-auto h-auto w-7 md:w-9 text-gray-800 " />
      <div className="mt-2 sm:mt-6">
        <h3 className="text-lg font-semibold text-gray-800 ">
          Regional Focus
        </h3>
      </div>
    </div>
  

   
    <div className="col-span-6 col-start-4 sm:col-span-4 text-center">
      <Users  className="mx-auto h-auto w-7 md:w-9 text-gray-800"/>
      <div className="mt-2 sm:mt-6">
        <h3 className="text-lg font-semibold text-gray-800">
         Community Engagement
        </h3>
      </div>
    </div>
   <div className="col-span-6 col-start-4 sm:col-span-6 text-center">
      <LifeBuoy className="mx-auto h-auto w-7 md:w-9 text-gray-800"/>
      <div className="mt-2 sm:mt-6">
        <h3 className="text-lg font-semibold text-gray-800">
        Accessibility and Inclusion
        </h3>
      </div>
    </div>
     <div className="col-span-6 col-start-4 sm:col-span-6 text-center">
      <svg className="mx-auto h-auto w-7 md:w-9 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/></svg>
      <div className="mt-2 sm:mt-6">
        <h3 className="text-lg font-semibold text-gray-800">
        Join Our Global Community

        </h3>
      </div>
    </div>

   
  </div>
  
  <div className="mt-20 grid grid-cols-12 items-center gap-x-2 sm:gap-x-6 lg:gap-x-8">
    <div className="hidden md:block col-span-4 md:col-span-3">
      <img className="rounded-xl" src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80" alt="Features Image"/>
    </div>
    

    <div className="col-span-4 md:col-span-3">
      <img className="rounded-xl" src="https://images.unsplash.com/photo-1587613991119-fbbe8e90531d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80" alt="Features Image"/>
    </div>
    

    <div className="col-span-4 md:col-span-3">
      <img className="rounded-xl" src="https://images.unsplash.com/photo-1554295405-abb8fd54f153?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80" alt="Features Image"/>
    </div>
   

    <div className="col-span-4 md:col-span-3">
      <img className="rounded-xl" src="https://images.unsplash.com/photo-1640622300473-977435c38c04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80" alt="Features Image"/>
    </div>
    
  </div>
  
</div>
  )
}

export default WorldwidePlatform