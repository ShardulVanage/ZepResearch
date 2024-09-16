import React from 'react'

function Testimonial() {
  return (
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center opacity-50" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <img alt="" src="https://tailwindui.com/img/logos/workcation-logo-indigo-900.svg" className="mx-auto h-12" />
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              “I found Zep Research’s International Conference to be an exceptional event. The discussions were thought-provoking, and the speakers were true leaders in their fields. The event was well-executed, and the seamless organization made it easy to focus on learning and connecting with others. I left with fresh insights and valuable contacts from around the world. Zep Research is setting a new standard for academic conferences, and I’m looking forward to attending again”
            </p>
          </blockquote>
          <figcaption className="mt-10">
          <div className="mx-auto h-12 w-12 rounded-full object-cover">
            <img
              alt=""
              className=' rounded-full object-cover h-12 w-12'
              src="https://images.pexels.com/photos/11168809/pexels-photo-11168809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Dr. Priya S</div>
              <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-600">CEO of Workcation</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

export default Testimonial