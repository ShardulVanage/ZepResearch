import { CheckCircleIcon } from '@heroicons/react/20/solid'

const benefits = [
  'Industry Professionals',
  'A great work environment',
  'Researchers',
  'Priority registration for conferences',
  'Students',
  'Exclusive access to workshops and seminar',
  'Entrepreneurs',
  'Networking opportunities with industry leaders',
  'Tech Enthusiasts',
  
'Discounts on conference tickets and merchandise',



]

export default function BenefitMember() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative py-24 isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex justify-center items-center   lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#3593F4" />
                <stop offset={1} stopColor="#3593F4" />
              </radialGradient>
            </defs>
          </svg>
          <img
              className="h-80 w-[340px] flex-none rounded-2xl object-cover shadow-xl m"
              src="https://res.cloudinary.com/dtsuvx8dz/image/upload/v1724678979/n1tbxmjixfulcwts29rg.png"
              alt=""
            />
            <div className="w-full flex-auto">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl pt-12">Benefits of Membership</h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
             Join Our Conference Community
              </p>
              <ul
                role="list"
                className="mt-10 grid grid-cols-1 gap-x-2 gap-y-3 text-base leading-7 text-white sm:grid-cols-2"
              >
                {benefits.map((benefit) => (
                  <li key={benefit} className="text-left flex gap-x-3">
                    <CheckCircleIcon className="h-7 w-5 flex-none tet" aria-hidden="true" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex">
                <a href="#" className="text-sm font-semibold px-7 mx-2  py-2 text-white rounded-md bg-gradient-to-tl from-cyan-400 via-blue-500 to-blue-600 drop-shadow-lg  ">
                 Apply Now
                </a>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
