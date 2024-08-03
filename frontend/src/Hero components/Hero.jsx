
import bgimg from '../images/bgimg.png' 
import bgimgdown from '../images/bgimgdown.png'
import { useState } from 'react'
import heromain from '../images/heromain.svg'
export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-[#87B1D6]">
 
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
        <div
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-gray-800 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-4xl font-bold text-left tracking-tight text-gray-100 sm:text-6xl lg:col-span-2 xl:col-auto">
              We’re changing the way people connect.
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-lg leading-8 text-gray-300 text-justify">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <img
              src={heromain}
              alt=""
              className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36 drop-shadow-2xl "
            />
          </div>
        </div>
        {/* <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-#87B1D6 sm:h-32" /> */}
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