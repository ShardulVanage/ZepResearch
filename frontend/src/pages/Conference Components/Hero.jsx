import React from 'react'

import g9 from '../../images/gallery/9.jpg'
function Hero() {
  return (
     <section className='my-20'>
    <div class="relative overflow-hidden">
  <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div class="max-w-2xl text-center mx-auto">
      <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl">Redefining Opportunities for a 
  <span class="bg-clip-text text-transparent bg-gradient-to-tr from-cyan-500 via-blue-500 to-blue-600"> Digital Future.</span></h1>
      <p class="mt-3 text-lg text-gray-800 "> Where academic minds unite to advance research and collaboration. Experience transformative conferences and webinars that ignite ideas, foster connections, and drive innovation
</p>
    </div>

    <div class="mt-10 relative max-w-5xl mx-auto">
      <div class="relative w-full h-96 sm:h-[480px] rounded-xl overflow-hidden">
  <img src={g9} alt="" class="w-full h-full object-cover" />
  <div class="absolute inset-0 bg-black opacity-50"></div>
</div>

      <div class="absolute inset-0 size-full">
        <div class="flex flex-col justify-center items-center size-full">
          <a class="py-3 px-4  inline-flex items-center gap-x-2 text-sm font-medium drop-shadow-xl rounded-full border border-gray-200 bg-gradient-to-tr from-cyan-500 via-blue-500 to-blue-600 text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
           href="#">
            Join with us
          </a>
        </div>
      </div>

      <div class="absolute bottom-12 -start-20 -z-[1] size-48 bg-gradient-to-b from-orange-500 to-white p-px rounded-lg">
        <div class="bg-white size-48 rounded-lg "></div>
      </div>

      <div class="absolute -top-12 -end-20 -z-[1] size-48 bg-gradient-to-t from-blue-600 to-cyan-400 p-px rounded-full">
        <div class="bg-white size-48 rounded-full"></div>
      </div>
    </div>
  </div>
</div>

   </section>
  )
}

export default Hero