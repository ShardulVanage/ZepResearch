
import g9 from '../../images/gallery/9.jpg'


import { useState } from 'react'

import p1 from "../../images/patners/1.png"
import p2 from "../../images/patners/12.png"
import p3 from "../../images/patners/8.png"
import p4 from "../../images/patners/9.png"
import p5 from "../../images/patners/5.png"

import g6 from "../../images/gallery/6.jpg"
import g8 from "../../images/gallery/8.jpg"
import img from '../../images/sustainable developments/susdev.png'
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Promoting Quality Education (SDG 4)',
    description: 'Zep Research improves education by conducting research and sharing findings globally, and by hosting conferences and workshops where educators and researchers exchange innovative ideas and best practices to enhance teaching and learning.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Fostering Innovation and Infrastructure (SDG 9)',
    description: 'Zep Research drives innovation by supporting STEM research and collaborating with academic and industry partners, fostering a network that promotes the development of cutting-edge technologies and sustainable infrastructure for a better future.',
    icon: LockClosedIcon,
  },
  {
    name: 'Gender Equality (SDG 5)',
    description: 'Zep Research promotes gender equality in research by providing inclusive opportunities for all genders to participate in events and publications, and by supporting women in STEM fields through special initiatives and forums, contributing to a more balanced and diverse research community.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Climate Action and Environmental Sustainability (SDG 13)',
    description: 'Zep Research prioritizes environmental sustainability by supporting research on climate change and sustainability, publishing key findings, and incorporating eco-friendly practices in its events, such as reducing waste and carbon footprints, to contribute to global efforts in addressing climate challenges.',
    icon: FingerPrintIcon,
  },
  {
    name: 'Partnerships for the Goals (SDG 17)',
    description: 'Zep Research partners with universities, research institutions, and international organizations to achieve shared goals in education, innovation, and sustainability, amplifying its global impact and contributing to the United Nations Sustainable Development Goals (SDGs) through collaborative efforts.',
    icon: Cog6ToothIcon,
  },
 
]

const timeline = [
  {
    name: 'Founded company',
    description:
      'Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.',
    date: 'Aug 2021',
    dateTime: '2021-08',
  },
  {
    name: 'Secured $65m in funding',
    description:
      'Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil.',
    date: 'Dec 2021',
    dateTime: '2021-12',
  },
  {
    name: 'Released beta',
    description:
      'Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.',
    date: 'Feb 2022',
    dateTime: '2022-02',
  },
  {
    name: 'Global launch of product',
    description:
      'Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.',
    date: 'Dec 2022',
    dateTime: '2022-12',
  },
]
const jobOpenings = [
  {
    id: 1,
    role: 'Advanced Trends in Technology and Multidisciplinary Studies',
    href: '#',
    description:
      'Quos sunt ad dolore ullam qui. Enim et quisquam dicta molestias. Corrupti quo voluptatum eligendi autem labore.',
    salary: '22nd-23rd August , 2023',
    location: 'KUALA LUMPUR , MALAYSIA',
  },
  {
    id: 2,
    role: 'Exploring insights of recent developments in Management and Social Sciences',
    href: '#',
    description:
      'Et veniam et officia dolorum rerum. Et voluptas consequatur magni sapiente amet voluptates dolorum. Ut porro aut eveniet.',
    salary: '17th-18th October , 2023',
    location: 'BALI , INDONESIA',
  },
  {
    id: 3,
    role: 'Unifying the world through advanced Technology & communications',
    href: '#',
    description:
      'Veniam ipsam nisi quas architecto eos non voluptatem in nemo. Est occaecati nihil omnis delectus illum est.',
    salary: '13th-14th November , 2023',
    location: 'Hanoi , Vietnam',
  },
]


export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
 
     

      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/50 pt-14">
          <div
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-blue-100 sm:-mr-80 lg:-mr-96"
            aria-hidden="true"
          />
          <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto text-transparent bg-clip-text bg-gradient-to-tl from-cyan-400 via-blue-500 to-blue-600 drop-shadow-lg  ">
               Connecting Academicians and Researches of multidimentional scope through Conferences Journals and educational aid.
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-lg leading-8 text-gray-600">
                Zep Research, we are dedicated to provide an outstanding platform for leading institutions, academicians and researchers. We strive create an environment that encourages knowledge scalability and cater to the requirement of our associated members by providing conference and journals publication services.
                </p>
              </div>
              <img
                src={g9}
                alt=""
                className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36 drop-shadow-lg"
              />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>

        {/* Timeline section */}
        <div className="mx-auto -mt-8 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {timeline.map((item) => (
              <div key={item.name}>
                <time
                  dateTime={item.dateTime}
                  className="flex items-center text-sm font-semibold leading-6 text-blue-600"
                >
                  <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                    <circle cx={2} cy={2} r={2} fill="currentColor" />
                  </svg>
                  {item.date}
                  <div
                    className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                    aria-hidden="true"
                  />
                </time>
                <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{item.name}</p>
                <p className="mt-1 text-base leading-7 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Logo cloud */}
        <div className="mx-auto mt-32 max-w-7xl sm:mt-40 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gradient-to-tl from-cyan-950 via-blue-950 to-blue-800  px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
             University which love us
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Aliquip reprehenderit incididunt amet quis fugiat ut velit. Sit occaecat labore proident cillum in nisi
              adipisicing officia excepteur tempor deserunt.
            </p>
            <div className="mx-auto mt-20 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:max-w-4xl lg:grid-cols-5">
              <img
                className="col-span-2 max-h-16 w-full object-contain lg:col-span-1 grayscale hover:grayscale-0"
                src={p5}
                alt="Transistor"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-16 w-full object-contain lg:col-span-1 grayscale hover:grayscale-0"
                src={p1}
                alt="Reform"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-16 w-full object-contain lg:col-span-1 grayscale hover:grayscale-0"
                src={p2}
                alt="Tuple"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-16 w-full object-contain sm:col-start-2 lg:col-span-1 grayscale hover:grayscale-0"
                src={p3}
                alt="SavvyCal"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 col-start-2 max-h-16 w-full object-contain sm:col-start-auto lg:col-span-1 grayscale hover:grayscale-0"
                src={p4}
                alt="Statamic"
                width={158}
                height={48}
              />
            </div>
            <div className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
              <div
                className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
                style={{
                  clipPath:
                    'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                }}
              />
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="mt-32 overflow-hidden sm:mt-40">
          <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
              <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Mission & Vision</h2>
                <p className="mt-6 text-xl leading-8 text-gray-600">
                 Our mission is to ensure the quality of incubation and innovation processes across the globe, reaching every corner of the world. 
                 We aim to create an integrated platform that connects professionals, 
                  
                 
                </p>
                <p className="mt-6 text-base leading-7 text-gray-600">
             
                 We are committed to working with organizations to enhance the scope of professional studies and research by continually monitoring further opportunities and applications.
                </p>
              </div>
              <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                  <img
                    src={g6}
                    alt=""
                    className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                  
                  <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                    <img
                      src={g8}
                      alt=""
                      className="aspect-[7/3] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                     <img
                      src='https://res.cloudinary.com/dtsuvx8dz/image/upload/v1715777055/wyvu4agxb93rmml9fzgf.jpg'
                      alt=""
                      className="aspect-[7/4] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our objectives are clear and focused.
            </h2>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Firstly, we aim to establish a premier platform for researchers worldwide, facilitating the sharing of research findings through meticulously organized International and National Conferences.we are dedicated to fostering a culture of innovation and problem-solving by encouraging researchers to identify and address significant research challenges across diverse fields
            </p>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-50 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
              <p className="flex-none text-3xl font-bold tracking-tight text-gray-900">30+</p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold tracking-tight text-gray-900"> Conference</p>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  Vel labore deleniti veniam consequuntur sunt nobis.
                </p>
              </div>
            </div>
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-900 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
              <p className="flex-none text-3xl font-bold tracking-tight text-white">1000+</p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold tracking-tight text-white">
                Article Published 
                </p>
                <p className="mt-2 text-base leading-7 text-gray-400">
                  Eu duis porta aliquam ornare. Elementum eget magna egestas.
                </p>
              </div>
            </div>
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-blue-600 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
              <p className="flex-none text-3xl font-bold tracking-tight text-white">75+</p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold tracking-tight text-white"> Journal tie-ups</p>
                <p className="mt-2 text-base leading-7 text-indigo-200">
                  Eu duis porta aliquam ornare. Elementum eget magna egestas. Eu duis porta aliquam ornare.
                </p>
              </div>
            </div>
          </div>
        </div>
 {/* Sus Dev section */}
      <div>
          <div className="bg-white p py-8 sm:pt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Sustainable Development Goals</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
             The Zep Research supports the Sustainable Development Goals (SDGs) through various initiatives that align with global sustainability efforts. 
             Here's how ZEP Research contributes to the SDGs:

          </p>
        </div>
      </div>
      <div className="relative overflow-hidden ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className='flex justify-center items-center'>
          <img
            src={img}
            alt="App screenshot"
            className="mb-[-1%] rounded-xl "
            
          />
          </div>
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                
                {feature.name}
              </dt>{' '}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
        </div>


        {/* Content section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
            <div className="w-full lg:max-w-lg lg:flex-auto">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
               Excellence is at the core of our ethos, permeating every aspect of our organization. 
              </h2>
              <p className="mt-6 text-xl leading-8 text-gray-600">
                From the meticulous planning of our events to the seamless execution of our initiatives, we are driven by a relentless pursuit of excellence.
              </p>
              <img
                src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&h=1104&q=80"
                alt=""
                className="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
              />
            </div>
            <div className="w-full lg:max-w-xl lg:flex-auto">
              <h3 className="sr-only">Job openings</h3>
              <ul className="-my-8 divide-y divide-gray-100">
                {jobOpenings.map((opening) => (
                  <li key={opening.id} className="py-8 ">
                    <dl className="relative flex flex-wrap gap-x- bg-white p-2 rounded-xl drop-shadow-md">
                      <dt className="sr-only">Role</dt>
                      <dd className="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                        <a href={opening.href}>
                          {opening.role}
                          <span className="absolute inset-0" aria-hidden="true" />
                        </a>
                      </dd>
                      <dt className="sr-only">Description</dt>
                      <dd className="mt-2 w-full flex-none text-base leading-7 text-gray-600">{opening.description}</dd>
                      <dt className="sr-only">Salary</dt>
                      <dd className="mt-4 text-base font-semibold leading-7 text-gray-900">{opening.salary}</dd>
                      <dt className="sr-only">Location</dt>
                      <dd className="mt-4 flex items-center gap-x-3 text-base leading-7 text-gray-500">
                        <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 flex-none fill-gray-300" aria-hidden="true">
                          <circle cx={1} cy={1} r={1} />
                        </svg>
                        {opening.location}
                      </dd>
                    </dl>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex border-t border-gray-100 pt-8">
                <a href="#" className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500">
                  View all Conference <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>



      </main>

      {/* Footer */}
     
    </div>
  )
}