import React from 'react'
import video from '../assets/herovideo.mp4'
function Hero() {
  return (
    <div className="relative isolate h-screen overflow-hidden pt-2 bg-black ">
    <video  className="absolute inset-0 -z-10 h-full w-full object-cover opacity-70" loop autoPlay muted>
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
        
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
        </div>
       
        <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-56 ">
          {/* extra Content */}
         
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
         
        </div>
      </div>
  )
}

export default Hero