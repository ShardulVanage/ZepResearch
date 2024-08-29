import React from 'react'
import img from '../images/sustainable developments/susdev.png'
import { InView } from './ui/inView'
function SustainableDevelopment() {
  return (
       <div className="overflow-hidden bg-white py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
           <InView
          variants={{
            hidden: {
              opacity: 0,
              x: 100,
            },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          viewOptions={{ margin: '0px 0px -350px 0px' }}
        >
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-right">Sustainable Development Goals</p>
              <p className="mt-6 text-lg leading-8 text-gray-800 text-justify">
                The Zep Research supports the Sustainable Development Goals (SDGs) through various initiatives that align with global sustainability efforts. Here's how ZEP Research contributes to the SDGs:

              </p>
              <ul className='list-decimal text-left font-medium mt-2 pl-4 text-lg'>
                <li>Promoting Quality Education (SDG 4)</li>
                <li>Fostering Innovation and Infrastructure (SDG 9)</li>
                <li>Gender Equality (SDG 5)</li>
                <li>Climate Action and Environmental Sustainability (SDG 13)</li>
                <li>Partnerships for the Goals (SDG 17)</li>

              </ul>
            </div>
             <div className="mt-10 flex">
              <a href="/ZepResarch" className="text-base font-semibold leading-7 text-blue-600">
                Learn more about our Sustainable Goals<span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div></InView>
          <div className="flex items-start justify-center lg:order-first">
            
            <img
              src={img}
              alt="Product screenshot"
              className=" max-w-none w-full  sm:w-[32rem]"
        
            />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default SustainableDevelopment