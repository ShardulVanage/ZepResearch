import React, { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { client } from '../lib/pocketbase';


  





export default function Component() {
  const [isVisible, setIsVisible] = useState(false)
const [conference, setConference] = useState([])
  useEffect(()=>{
    client.collection("Conference")
    .getFullList()
    .then((res)=> setConference(res))
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed left-0 bottom-4 sm:w-[500px] h-[400px] bg-white shadow-lg z-50 rounded-r-lg rounded-l-none border border-l-0 ml-4 border-gray-200 scroll-m-2 drop-shadow-2xl">
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h2 className="text-sm font-medium text-gray-900">Recent Upcoming Conferences</h2>
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
            {conference.map((data, index) => (
              <li key={index}>
                <div className='flex items-start justify-start flex-row drop-shadow-sm bg-white pb-3'>
                    <div className='p-2 px-3 drop-shadow-lg border border-gray-200 rounded-xl mr-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white'>
                       ZR
                    </div>
                    <div>    
                <h3 className="font-semibold text-gray-900 font-PTSerif">{data.title}</h3>
                <p className="text-sm text-gray-800 font-medium underline underline-offset-2">{data.date}</p>
                <p className='text-sm text-gray-800 font-medium'>{data.location}</p>
                <p className="text-sm text-gray-60 font-JosefinSans0">{data.shortDescription}</p>
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