
import bgimg from '../images/bgimg.png' 
import bgimgdown from '../images/bgimgdown.png'
import { useState } from 'react'
import heromain from '../images/heromain.svg'


export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
     <div className="bg-white">
{/* nav */}
  




      <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
        aria-hidden="true"
      >
          <div
            className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[50deg] bg-gradient-to-tr from-[#2B6BEE] to-[#3ea8e6] xl:ml-0 xl:mr-[calc(50%-12rem)]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          >

          </div>
      </div>
   
        <div
          className="absolute  flex-none origin-top-right inset-x-20 -top-30 -z-10 transform-gpu  overflow-hidden blur-sm sm:top-40 hidden sm:block"
          aria-hidden="true"
        >
        
           <div>
            <img src={bgimg} alt="" className='relative mx-auto right-[600px]' />
           </div>
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-transparent bg-clip-text bg-gradient-to-tr from-cyan-500 via-blue-500 to-blue-600 drop-shadow-lg ">
             Join the Conversation, Shape the Future
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore groundbreaking research, engage with leading experts, and make your mark on the global academic stage with Zep Research.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className=" rounded-md bg-gradient-to-tl from-cyan-400 via-blue-500 to-blue-600 drop-shadow-lg   px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-sm sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
         
            
          
          <img src={bgimgdown} alt=""  className="relative left-[calc(50%+3rem)] aspect-[690/728] w-[26.125rem] -translate-x-1/2 opacity-30 sm:left-[calc(50%+36rem)]  sm:w-[26.1875rem]"
/>
        </div>
      </div>
    </div>
  )
}

//  <div className="bg-white">
// {/* nav */}
  




//       <div className="relative isolate px-6 pt-14 lg:px-8">
//           <div
//         className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
//         aria-hidden="true"
//       >
//           <div
//             className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[50deg] bg-gradient-to-tr from-[#2B6BEE] to-[#3ea8e6] xl:ml-0 xl:mr-[calc(50%-12rem)]"
//             style={{
//               clipPath:
//                 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//             }}
//           >

//           </div>
//       </div>
   
//         <div
//           className="absolute  flex-none origin-top-right inset-x-20 -top-30 -z-10 transform-gpu  overflow-hidden  sm:top-40 hidden sm:block"
//           aria-hidden="true"
//         >
//          {/* <div>
//             <img src='https://res.cloudinary.com/dtsuvx8dz/image/upload/v1721065435/xb5f0kdfjvrgirx7y8q9.gif' alt="" className='relative blur-sm mx-auto right-[600px]' />
//            </div>
//            <div>
//             <img src='https://res.cloudinary.com/dtsuvx8dz/image/upload/v1720947382/l1klenlmpkflsvimilvx.gif' alt="" className='relative mx-auto blur-md top-[100px] right-[600px] w-[400px]' />
//            </div>
           
//            */}
//            </div>
//         <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
//           <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            
//           </div>
//           <div className="text-center">
//             <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-transparent bg-clip-text bg-gradient-to-tr from-cyan-500 via-blue-500 to-blue-600 drop-shadow-lg ">
//              Join the Conversation, Shape the Future
//             </h1>
//             <p className="mt-6 text-lg leading-8 text-gray-600">
//               Explore groundbreaking research, engage with leading experts, and make your mark on the global academic stage with Zep Research.
//             </p>
//             <div className="mt-10 flex items-center justify-center gap-x-6">
//               <a
//                 href="#"
//                 className=" rounded-md bg-gradient-to-tl from-cyan-400 via-blue-500 to-blue-600 drop-shadow-lg   px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 Get started
//               </a>
//               <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
//                 Learn more <span aria-hidden="true">→</span>
//               </a>
//             </div>
//           </div>
//         </div>
//         {/* <div
//           className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu select-none overflow-hidden blur-sm sm:top-[calc(100%-25rem)]"
//           aria-hidden="true"
//         >
//           <img src="https://res.cloudinary.com/dtsuvx8dz/image/upload/v1721064690/auujxpikxuai7w3p3noa.gif" alt=""  className="relative left-[calc(50%+3rem)] aspect-[690/728] w-[26.125rem] -translate-x-1/2 opacity-30 sm:left-[calc(50%+36rem)]  sm:w-[26.1875rem]"/>
//         </div> */}
//       </div>
//     </div>