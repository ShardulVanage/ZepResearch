import React from 'react'
import { LifebuoyIcon, NewspaperIcon, PhoneIcon } from '@heroicons/react/20/solid'
import { Helmet } from 'react-helmet-async'

const cards = [
  {
    name: 'Extensive collaboration with global partners',
    description: 'Consectetur vel non. Rerum ut consequatur nobis unde. Enim est quo corrupti consequatur.',
    icon: PhoneIcon,
  },
  {
    name: 'Large and growing membership base',
    description: 'Quod possimus sit modi rerum exercitationem quaerat atque tenetur ullam.',
    icon: LifebuoyIcon,
  },
  {
    name: 'Numerous conferences and events',
    description: 'Ratione et porro eligendi est sed ratione rerum itaque. Placeat accusantium impedit eum odit.',
    icon: NewspaperIcon,
  },

]
function Excellence() {
  return (
    <>
    <Helmet>
                    {/* Basic meta tags */}
                    <title>Excellence | International Journal Publication and Conference</title>
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
    <section className=''>
     <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 mt-28   rounded-xl">
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#73badb] to-[#0f52a0] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#89cef7] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Our excellence</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            At Zep Research, our dedication and determination towards science drive our excellence in contributing to academic and scientific communities. Our global associates and partners have propelled us towards our ambition of becoming the largest scientific organization in the world.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
       Over the past five years, our focus has been on building a strong network of professionals worldwide, connecting researchers from engineering and life sciences.
          </p>
         <p className="mt-6 text-lg leading-8 text-gray-300">
      By 2018, Zep Research aims to provide the best professional opportunities for multidisciplinary scientific interaction.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div key={card.name} className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
              <card.icon className="h-7 w-5 flex-none text-blue-400 " aria-hidden="true" />
              <div className="text-base leading-7">
                <h3 className="font-semibold text-white">{card.name}</h3>
                <p className="mt-2 text-gray-300">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
    </>
  )
}

export default Excellence