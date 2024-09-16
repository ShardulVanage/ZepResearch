import React from 'react'

 const services = [
    {
      title: 'Expanded Opportunities',
      description: 'Connect with leading researchers in your field and explore new research collaborations.',
    },
    {
      title: 'Cross-Disciplinary Innovation',
      description: 'Collaborate with researchers from diverse disciplines to broaden the scope and impact of your research.',
    },
    {
      title: 'Academic Growth',
      description: 'Networking with global scholars provides valuable insights and learning opportunities that contribute to your academic growth.',
    },
  ];

function NetworkingCollaboration() {
  return (
   <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-24">
 
  <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-start">
    <div className="lg:col-span-7">
    
      <div className=" flex  justify-center items-center sm:pt-24 ">
       <img src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1726482086/uli2ntgqkw22vfigdtkt.png" alt=""  className='sm:h-3/5 sm:w-3/5'/>
      </div>

    </div>


    <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
      <div className="space-y-6 sm:space-y-8">
      
        <div className="space-y-2 md:space-y-4">
          <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 font-JosefinSans">
          Networking & Collaboration          
          </h2>
          <p className="text-gray-800 font-PTSerif ">
          At Zep Research, we know that research thrives on collaboration. Our Networking & Collaboration service offers opportunities to connect with like-minded academics and researchers worldwide, fostering meaningful collaborations that drive innovation and growth.
          </p>
        </div>
    



        <ul className="space-y-2 sm:space-y-4">
          <li className="flex gap-x-3">
            <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600  ">
              <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </span>
            <div className="grow">
              <span className="text-sm sm:text-base text-gray-700 dark:text-neutral-500 font-PTSerif">
                <span className="font-bold font-JosefinSans">Global Connections</span> – We provide access to a diverse network of academics, professionals, and researchers, opening doors for potential collaborations.

              </span>
            </div>
          </li>

          <li className="flex gap-x-3">
            <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600  ">
              <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </span>
            <div className="grow">
              <span className="text-sm sm:text-base text-gray-700 dark:text-neutral-500 font-PTSerif">
                <span className="font-bold font-JosefinSans">Collaborative Projects</span> Our platform facilitates the formation of research groups and partnerships, helping you find collaborators for joint research projects and publications.

              </span>
            </div>
          </li>

          <li className="flex gap-x-3">
            <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600  ">
              <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </span>
            <div className="grow">
              <span className="text-sm sm:text-base text-gray-700 dark:text-neutral-500 font-PTSerif">
                <span className="font-bold font-JosefinSans">Virtual Networking Events</span> –  Participate in our virtual networking events, which are designed to create meaningful academic relationships and long-term professional connections.


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
   Benefits of Our Networking & Collaboration Service

      </h2>
      
      <div>
        <img src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1726481931/kugkezmqx54t4zqtp8ae.png" alt="imggif" />
      </div>
    </div>
    <div className="lg:col-span-2">
      <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
         {services.map((q) => (
        <div key={q.id} className="flex gap-x-5">
          <div className="shrink-0 mt-1 size-6 text-blue-600" >
            {q.icon}
          </div>
          <div className="grow">
            <h3 className="text-lg font-semibold text-gray-800 font-JosefinSans ">
             {q.title}
            </h3>
            <p className="mt-1 text-gray-600 font-PTSerif text-sm sm:text-base ">
              {q.description}
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

export default NetworkingCollaboration