import React from 'react'
import p1 from '../../images/patners/1.png'
import p2 from '../../images/patners/2.png'
import p3 from '../../images/patners/3.png'
import p4 from '../../images/patners/4.png'
import p5 from '../../images/patners/5.png'
import p6 from '../../images/patners/6.png'
import p7 from '../../images/patners/7.png'
import p8 from '../../images/patners/8.png'
import p9 from '../../images/patners/9.png'
import p10 from '../../images/patners/10.png'
import p11 from '../../images/patners/11.png'
import p12 from '../../images/patners/12.png'
import p13 from '../../images/patners/13.png'
import p14 from '../../images/patners/14.png'
import p15 from '../../images/patners/15.jpg'
import p16 from '../../images/patners/16.png'
import { Helmet } from 'react-helmet-async'

function Partners() {
  return (<>
  <Helmet>
          {/* Basic meta tags */}
          <title>Partners | Zep Research | International Journal Publication and Conference</title>
          <meta 
            name="description" 
            content="Leading platform for international journal publications, academic conferences, and advanced courses in Data Science and AI." 
          />
          <meta 
            name="keywords" 
            content="research journal, international publication, academic conference, data science courses" 
          />
  
          {/* Open Graph meta tags */}
          <meta property="og:title" content="Zep Research | International Journal Publication" />
          <meta 
            property="og:description" 
            content="Leading platform for international journal publications and conferences" 
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://zepresearch.com" />
          <meta property="og:image" content="/og-image.jpg" />
  
          {/* Twitter Card meta tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Zep Research | International Journal Publication" />
          <meta 
            name="twitter:description" 
            content="Leading platform for international journal publications and conferences" 
          />
          <meta name="twitter:image" content="/og-image.jpg" />
  
          {/* Canonical URL */}
          <link rel="canonical" href="https://zepresearch.com" />
        </Helmet>
    <section>
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Trusted by the most innovative teams</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a
              scelerisque amet ullamcorper eu enim et fermentum, augue.
            </p>
            <div className="mt-8 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-gradient-to-tl from-cyan-400 via-blue-500 to-blue-600 drop-shadow-lg px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create account
              </a>
              <a href="#" className="text-sm font-semibold text-gray-900">
                Contact us <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8 ">
            <img
              className="max-h-28 w-full object-contain object-left"
              src={p1}
              alt="Tuple"
              width={105}
              height={48}
            />
            <img
              className="max-h-28 w-full object-contain object-left"
             src={p2}
              alt="Reform"
              width={104}
              height={48}
            />
            <img
              className="max-h-28 w-full object-contain object-left"
              src={p3}
              alt="SavvyCal"
              width={140}
              height={48}
            />
            <img
              className="max-h-28 w-full object-contain object-left"
               src={p4}
              alt="Laravel"
              width={136}
              height={48}
            />
            <img
              className="max-h-28 w-full object-contain object-left"
             src={p5}
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="max-h-28 w-full object-contain object-left" 
              src={p6}
              alt="Statamic"
              width={147}
              height={48}
            />
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white py-2 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
          <div className="bg-gray-400/5 p-8 sm:p-10">
            <img
              className="max-h-28 w-full object-contain"
              src={p7}
              alt="Transistor"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-gray-400/5 p-6 sm:p-10">
            <img
              className="max-h-28 w-full object-contain"
              src={p8}              alt="Reform"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-gray-400/5 p-6 sm:p-10">
            <img
              className="max-h-28 w-full object-contain"
              src={p9}
              alt="Tuple"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-gray-400/5 p-6 sm:p-10">
            <img
              className="max-h-28 w-full object-contain"
              src={p10}
              alt="Laravel"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-gray-400/5 p-6 sm:p-10">
            <img
              className="max-h-28 w-full object-contain"
              src={p11}
              alt="SavvyCal"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-gray-400/5 p-6 sm:p-10">
            <img
              className="max-h-28 w-full object-contain"
              src={p12}
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
           <div className="bg-gray-400/5 p-6 sm:p-10">
            <img
              className="max-h-28 w-full object-contain"
              src={p13}
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
           <div className="bg-gray-400/5 p-6 sm:p-10">
            <img
              className="max-h-28 w-full object-contain"
              src={p14}
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
           <div className="bg-gray-400/5 p-6 sm:p-10">
            <img
              className="max-h-28 w-full object-contain"
              src={p15}
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
           <div className="bg-gray-400/5 p-6 sm:p-10">
            <img
              className="max-h-28 w-full object-contain"
              src={p16}
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    </div>
    </section>
  </>
  )
}

export default Partners