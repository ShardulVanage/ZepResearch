import { IconCheck, IconDeviceIpadCheck, IconHeartHandshake, IconHourglassHigh, IconSchool, IconScript, IconTrendingUp } from '@tabler/icons-react';
import React from 'react'
import { Helmet } from 'react-helmet-async';

const benefits = [
  {
    title: 'Enhanced Professionalism',
    description: 'A well-prepared manuscript reflects professionalism and increases the likelihood of acceptance, whether its for a Scopus Indexed Journal or an international conference.',
    icon: <IconSchool/>
  },
  {
    title: 'Time Efficiency',
    description: 'With our expert assistance, you can focus on your research while we take care of the manuscript details, including preparation for conference registration and submission deadlines.',
    icon: <IconHourglassHigh/>
  },
  {
    title: 'Increased Acceptance Rate',
    description: 'Properly formatted and error-free manuscripts have a higher chance of passing the initial submission screening process for Scopus Indexed Journals and conference paper submissions.',
    icon: <IconTrendingUp/>
  },
];

const services = [
  {
    title: 'Expert Formatting',
    description: 'We ensure that your manuscript adheres to the formatting guidelines of the target journal, saving you time and effort. Our expertise extends to manuscripts prepared for submission to international conferences and global conferences, where precise formatting is critical.',
  },
  {
    title: 'Language and Style Refinement',
    description: 'Our team of editors helps refine your writing to ensure clarity, coherence, and fluency, improving the overall readability of your research paper. Whether your work is destined for a Scopus Indexed Conference or a prestigious education conference, we ensure your content resonates with its audience.',
  },
  {
    title: 'Citation Management',
    description: 'We organize and format your references according to the required citation style, ensuring accuracy and consistency. Proper citations are essential for submission to journals on the Scopus Indexed Journal List or conference paper submissions.',
  },
  {
    title: 'Final Proofreading',
    description: 'Before submission, we thoroughly proofread your manuscript to catch any errors in grammar, punctuation, or formatting. This step ensures that your work meets the high standards of Scopus-indexed platforms and conference organizers.',
  },
];

function ManuscriptPreparation() {
  return (
    <section>
      <Helmet>
                                                                 {/* Basic meta tags */}
                                                                 <title>ManuscriptPreparation | Zepresearch | International Journal Publication and Conference</title>
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
      <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2"/>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <div className="mt-5 max-w-xl text-center mx-auto">
          <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl font-JosefinSans">
            Manuscript Preparation
          </h1>
        </div>
        <div className="mt-5 max-w-3xl text-center mx-auto">
          <p className="text-lg text-gray-600 text-justify font-PTSerif">
            At Zep Research, we understand that preparing a research paper for publication can be a complex and time-consuming process. Our Manuscript Preparation service is designed to help researchers enhance the quality and presentation of their work, increasing the chances of successful publication in Scopus Indexed Journals or inclusion in the Scopus Journal List.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-screen-2xl">
          <h1 className="sm:text-3xl text-2xl py-4 text-center font-JosefinSans">
            Why Choose Zep Research for Manuscript Preparation?
          </h1>
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {services.map((s) => (
              <div className="relative pl-16" key={s.title}>
                <dt className="text-base font-semibold leading-7 text-gray-900 inline-flex font-JosefinSans">
                  <IconCheck className="w-6 h-6 text-blue-600 shrink-0 bg-white border-2 border-blue-600 rounded-full mr-2" />
                  {s.title}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 font-PTSerif">{s.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="lg:w-3/4">
            <h2 className="sm:text-3xl text-2xl py-4 text-center font-JosefinSans leading-tight">
              Benefits of Our Manuscript Preparation Service
            </h2>
            <img 
              src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1726479085/ha6lofgqessbiry9ipic.png" 
              alt="" 
              className="p-12 sm:p-0"
            />
          </div>

          <div className="space-y-6 lg:space-y-10 md:pt-24">
            {benefits.map((b) => (
              <div className="flex gap-x-5 sm:gap-x-8" key={b.title}>
                <span className="shrink-0 text-blue-500 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white shadow-sm mx-auto dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                  {b.icon}
                </span>
                <div className="grow">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200 font-JosefinSans">
                    {b.title}
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-neutral-400 font-PTSerif">
                    {b.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ManuscriptPreparation