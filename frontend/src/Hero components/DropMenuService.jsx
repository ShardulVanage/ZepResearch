import { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {
  BookOpenIcon,
  BriefcaseIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  NewspaperIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  UsersIcon,
  VideoCameraIcon,
  BuildingLibraryIcon,
  SparklesIcon,
  SpeakerWaveIcon,
  TrophyIcon,
  UserPlusIcon,
  ChartBarSquareIcon,
  GlobeAsiaAustraliaIcon,
  ArrowPathIcon,
  NoSymbolIcon,
} from '@heroicons/react/24/outline'
import logo from '../images/logo.png'
import { useAuth } from '../context/AuthContext'
import ProfileDropDown from './ProfileDropDown'


const engagement = [
  { name: 'Zep Research', href: `/ZepResarch`, icon: InformationCircleIcon },
  { name: ' Mission & Vision', href: '/Mission&Vission', icon: UsersIcon },
  { name: 'Excellence', href: '/Excellence', icon: NewspaperIcon },
  { name: 'Careers', href: '/Careers', icon: BriefcaseIcon },
  { name: 'Partners', href: '/Patners', icon: ShieldCheckIcon },
  {name:'SponserShip',href:'/SponserShip',icon: BuildingLibraryIcon}
]

const resources = [
  { name: 'Conferences', href: '/Conferences', icon: UserGroupIcon },
  { name: 'Publications', href: '/Publication', icon: GlobeAltIcon },
  { name: 'Scientific Assistance', href: '/ScientificAssistance', icon: BookOpenIcon },
  { name: 'Courses', href: '/Courses', icon: VideoCameraIcon },
  { name: ' Awards & Recognitions', href: '/Awards&Recognitions', icon: TrophyIcon },
  {name: 'Collaboration', href:'/Collaboration', icon:  SparklesIcon},
  {name:'Speakers',href:'/Speakers', icon:SpeakerWaveIcon}

]
const polices = [
  { name: 'Publishing opportunities', href: '/PublishingOpportunities', icon: UserPlusIcon },
  { name: 'Professional Conference Organizer', href: '/ProfessionalConferenceOrganizer  ', icon: ChartBarSquareIcon },
  { name: 'Worldwide Platform', href: '/WorldwidePlatform', icon: GlobeAsiaAustraliaIcon  },
  { name: 'Experience a knowledge Exchange', href: '/ExperienceknowledgeExchange', icon: ArrowPathIcon },
  { name: 'Cancellation Policy', href: '/CancellationPolicy', icon: NoSymbolIcon },
  

]
const recentPosts = [
  {
    id: 1,
    title: 'Gallery',
    href: '/Gallery',
    date: '',
    datetime: '2023-03-16',
    category: { title: ' All Movements & Memorys ', href: '#' },
    imageUrl:
     'https://images.unsplash.com/photo-1497942304796-b8bc2cc898f3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'Et et dolore officia quis nostrud esse aute cillum irure do esse. Eiusmod ad deserunt cupidatat est magna Lorem.',
  },
  {
    id: 2,
    title: 'Membership ',
    href: '/Membership',
    date: 'Mar 10, 2023',
    datetime: '2023-03-10',
    category: { title: 'Sales', href: '#' },
    imageUrl:
      'https://res.cloudinary.com/dtsuvx8dz/image/upload/v1715926695/nujqgxmw1avicoxdgyug.png',
    description: 'Optio cum necessitatibus dolor voluptatum provident commodi et.',
  },
]


export default function DropMenuServicer() {

  const { authState, updateAuthState } = useAuth();
  return (
    <Popover className="relative isolate z-50 ">
      <div className="bg-transparent w-screen py-5">
        <div className="  flex sm:flex-row flex-col sm:justify-between justify-center items-center mx-auto max-w-7xl px-6 lg:px-8 bg-white/85 rounded-3xl py-1">
          <a href="./" className='hidden sm:block text-2xl font-medium '><img src={logo} alt="" className='h-12  text-yellow-300 ' />
          </a>

            <div  className="  flex sm:flex-row flex-col sm:justify-between justify-center items-center"> 
          {
              authState.isLoggedIn ?
              <><a href='/BecomeMember' className='hidden sm:block px-7 mx-2  py-1 text-white rounded-md bg-gradient-to-tl from-cyan-400 via-blue-500 to-blue-600 drop-shadow-lg   '>
                 Become Member
            </a> </> :<></>}

          <Popover.Button className=" hidden sm:block px-7 mx-2 my-2 py-1  text-white rounded-md bg-gradient-to-tl from-cyan-400 via-blue-500 to-blue-600 drop-shadow-lg "    >
           <span>
             Solutions ↓      
            </span>
          </Popover.Button>
          <a href="/ContactUs" className='hidden sm:block px-7 mx-2  py-1 text-white rounded-md bg-gradient-to-tl from-cyan-400 via-blue-500 to-blue-600 drop-shadow-lg   '>
                 Contact us
            </a>
            {/* <a href='/Login' className='hidden sm:block px-7 mx-2  py-1 text-white rounded-md bg-gradient-to-tl from-cyan-400 via-blue-500 to-blue-600 drop-shadow-lg   '>
                 login
            </a> */}
            
            
           <h1>
            {
              authState.isLoggedIn ?
               <>
               {/* {client.authStore.model.email}
                <a onClick={logout}  className='hidden sm:block px-7 mx-2  py-1 text-white rounded-md bg-gradient-to-tl from-cyan-400 via-blue-500 to-blue-600 drop-shadow-lg   '>
                 logouts
                </a> 
                */}
                <ProfileDropDown/>
               </>
               :
               <>
               <a href='/Login' className='hidden sm:block px-7 mx-2  py-1 text-white rounded-md bg-gradient-to-tl from-cyan-400 via-blue-500 to-blue-600 drop-shadow-lg   '>
                 login
            </a>
               </>
            }
           
            </h1>
            </div>
          
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 -translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-1"
      >
        <Popover.Panel className="absolute inset-x-0 top-0 -z-10 bg-white pt-16 shadow-lg ring-1 ring-gray-900/5">
          <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-x-8 gap-y-10 px-6 py-10 lg:grid-cols-2 lg:px-8">


            <div className="grid grid-cols-3 gap-x-6 sm:gap-x-8">
              <div>
                <h3 className="text-sm font-medium leading-6 text-gray-500">About</h3>
                <div className="mt-6 flow-root">
                  <div className="-my-2">
                    {engagement.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex gap-x-4 py-2 text-sm font-semibold leading-6 text-gray-900"
                      >
                        <item.icon className="h-6 w-6 flex-none text-gray-400" aria-hidden="true" />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium leading-6 text-gray-500">Services </h3>
                <div className="mt-6 flow-root">
                  <div className="-my-2">
                    {resources.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex gap-x-4 py-2 text-sm font-semibold leading-6 text-gray-900"
                      >
                        <item.icon className="h-6 w-6 flex-none text-gray-400" aria-hidden="true" />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium leading-6 text-gray-500">. </h3>
                <div className="mt-6 flow-root">
                  <div className="-my-2">
                    {polices.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex gap-x-4 py-2 text-sm font-semibold leading-6 text-gray-900"
                      >
                        <item.icon className="h-6 w-6 flex-none text-gray-400" aria-hidden="true" />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-10 sm:gap-8 lg:grid-cols-2">
              <h3 className="sr-only">Recent posts</h3>
              {recentPosts.map((post) => (
                <article
                  key={post.id}
                  className="relative isolate flex max-w-2xl flex-col gap-x-8 gap-y-6 sm:flex-row sm:items-start lg:flex-col lg:items-stretch"
                >
                  <div className="relative flex-none">
                    <img
                      className="aspect-[2/1] w-full rounded-lg bg-gray-100 object-cover  sm:aspect-[16/9] sm:h-32 lg:h-auto"
                      src={post.imageUrl}
                      alt=""
                    />
                    <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div>
                    <div className="flex items-center gap-x-4">
                     
                      {/* <a
                        href={post.category.href}
                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-100"
                      >
                        {post.category.title}
                      </a> */}
                    </div>
                    <h4 className="mt-2 text-sm font-semibold leading-6 text-gray-900">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-gray-600">{post.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>

    
    </Popover>
  )
}
