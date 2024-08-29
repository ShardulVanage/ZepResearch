import React, { useState, useEffect } from 'react'
import { X } from 'lucide-react'



const conferences = [
  {
    name: "React Conf 2023",
    date: "May 15-16, 2023",
    description: "Exploring the latest in React ecosystem"
  },
  {
    name: "React Conf 2023",
    date: "May 15-16, 2023",
    description: "Exploring the latest in React ecosystem"
  },
  {
    name: "Next.js Conf",
    date: "October 25, 2023",
    description: "Unveiling the future of web development"
  },
  {
    name: "VueConf US",
    date: "May 24-26, 2023",
    description: "The biggest Vue.js conference in America"
  },
  {
    name: "TypeScript Congress",
    date: "August 31 - September 1, 2023",
    description: "Dedicated to all things TypeScript"
  }
]


export default function Component() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed left-0 bottom-4 sm:w-[500px] h-[400px] bg-white shadow-lg z-50 rounded-r-lg rounded-l-none border border-l-0 ml-4 border-gray-200 scroll-m-2 drop-shadow-2xl">
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h2 className="text-sm font-medium text-gray-900">Recent Conferences</h2>
        <button
          onClick={handleClose}
          className="text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      <div className="p-4 text-left">
        <div className="h-[300px] overflow-y-auto scrollbar-thin" >
          <ul className="space-y-9" aria-label="List of recent conferences">
            {conferences.map((conference, index) => (
              <li key={index}>
                <div className='flex items-center justify-start flex-row drop-shadow-sm bg-white pb-3'>
                    <div className='p-2 px-3 drop-shadow-lg border border-gray-200 rounded-xl bg-gray-800 mr-3 text-white'>
                       ZR
                    </div>
                    <div>    
                <h3 className="font-semibold text-gray-900">{conference.name}</h3>
                <p className="text-sm text-gray-500">{conference.date}</p>
                <p className="text-sm text-gray-700">{conference.description}</p>
                    </div>     
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}