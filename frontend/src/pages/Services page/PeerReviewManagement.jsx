import { IconCheck, IconDeviceIpadCheck, IconHeartHandshake, IconHourglassHigh, IconScript } from '@tabler/icons-react';
import React from 'react'
import { Helmet } from 'react-helmet-async';

const benefits = [
  {
    title: 'Quality Assurance',
    description: 'Enhance the credibility of your research with expert reviews, helping your work stand out at global conferences.',
    icone: <IconDeviceIpadCheck />
  },
  {
    title: 'Improved Manuscript Readiness',
    description: 'Ensure your work is ready for submission to top-tier Scopus Indexed Journals with actionable feedback.',
    icone: <IconScript />
  },
  {
    title: 'Time and Resource Efficiency',
    description: 'Save time by outsourcing the administrative aspects of peer review, allowing more focus on research.',
    icone: <IconHourglassHigh />
  },
  {
    title: 'Fostering Academic Relationships',
    description: 'Promote interaction between authors, reviewers, and editors, creating opportunities for academic networking and collaboration at Scopus Indexed Conferences.',
    icone: <IconHeartHandshake />
  },
];

const features = [
  {
    title: 'Streamlined Process',
    description: 'Our platform simplifies the often complex and time-consuming task of managing peer reviews, enabling seamless interactions between authors and reviewers, making it easier to prepare conference paper submissions and align research with Scopus Indexed Conference guidelines.',
  },
  {
    title: 'Expert Reviewers',
    description: 'We work with a diverse network of experienced academics and subject matter experts, ensuring that your research is evaluated by professionals familiar with Scopus Indexed Journals, enhancing the quality of your work.',
  },
  {
    title: 'Transparent Feedback',
    description: 'We ensure an open and transparent peer review process, with constructive feedback shared in a clear, actionable format, improving your manuscripts quality before submitting it to top-tier journals or Scopus Indexed Conferences.',
  },
  {
    title: 'Efficient Turnaround',
    description: 'Timely feedback is essential in the publication process. Our platform optimizes the workflow to provide prompt reviews without compromising quality, helping researchers prepare for conference registration and event promotion.',
  },
  {
    title: 'Confidentiality and Ethics',
    description: 'At Zep Research, we adhere to strict confidentiality protocols and ethical guidelines throughout the peer review process to protect the integrity of your work.',
  },
  {
    title: 'Customizable Solutions',
    description: 'Whether youre a journal editor seeking to streamline the review process or a researcher needing quality feedback for Scopus Indexed Journals or conference paper submissions, we offer tailored solutions to meet your specific needs.',
  },
];

function PeerReviewManagement() {
  return (
    <section>
      <Helmet>
                                                                        {/* Basic meta tags */}
                                                                        <title>PeerReviewManagement | Zepresearch | International Journal Publication and Conference</title>
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
      <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2" />
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <div className="mt-5 max-w-xl text-center mx-auto">
          <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl font-JosefinSans">
            Peer <br />Review Management
          </h1>
        </div>
        <div className="mt-5 max-w-3xl text-center mx-auto">
          <p className="text-lg text-gray-600 text-justify font-PTSerif">
            At Zep Research, we understand the critical importance of a thorough and efficient peer review process in maintaining the integrity and quality of academic research. Our Peer Review Management service offers a comprehensive solution that connects researchers with qualified reviewers, ensuring research outputs meet the highest standards of excellence for Scopus Indexed Journals and international conferences.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-screen-2xl">
          <h1 className='sm:text-3xl text-2xl py-4 text-center font-JosefinSans'>Why Choose Zep Research for Peer Review Management?</h1>
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((f, index) => (
              <div key={index} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900 inline-flex font-JosefinSans">
                  <IconCheck className='w-6 h-6 text-blue-600 shrink-0 bg-white border-2 border-blue-600 rounded-full mr-2' />
                  {f.title}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 font-PTSerif">{f.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="lg:w-3/4">
            <h2 className='sm:text-3xl text-2xl py-4 text-left font-JosefinSans leading-tight'>
              Benefits of Our Peer Review Management Service
            </h2>
            <img src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1726470072/pdxfe0atpybsbjvuzirx.png" alt="" className="sm:pl-16 p-12 sm:p-0" />
          </div>

          <div className="space-y-6 lg:space-y-10 md:pt-24">
            {benefits.map((b, index) => (
              <div key={index} className="flex gap-x-5 sm:gap-x-8">
                <span className="shrink-0 text-blue-500 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white shadow-sm mx-auto dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                  {b.icone}
                </span>
                <div className="grow">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                    {b.title}
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-neutral-400">
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

export default PeerReviewManagement

