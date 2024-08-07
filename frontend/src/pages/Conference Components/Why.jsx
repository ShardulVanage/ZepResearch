 const stats = [
  { id: 1, name: 'events since 2005', value: '32' },
  { id: 2, name: 'attendees on average', value: '3000+' },
  { id: 3, name: 'sessions per event', value: '165' },
   { id: 4, name: 'Creators on the platform', value: '8,000+' },
 
]

export default function Why() {
  return (
    <div className="bg-white py-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What is <span className="bg-clip-text text-transparent bg-gradient-to-tr from-cyan-500 via-blue-500 to-blue-600">ZepResearch ?</span>
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Lorem ipsum dolor sit amet consect adipisicing possimus.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4 ">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-gray-400/10 p-8 hover:drop-shadow-xl">
                <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>



 <div className="overflow-hidden bg-white py-8 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-blue-600">Leaders, Developers & End-users</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Keynotes & Sessions</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
            Our platform offers a comprehensive range of keynotes and sessions tailored to inspire and educate leaders,
             developers, and end users. Whether you're driving strategic decisions, building innovative solutions, or utilizing cutting-edge technology,
              our curated content delivers valuable insights and practical knowledge to enhance your skills and elevate your impact in the digital landscape.
             Join us to stay ahead of industry trends, learn from experts, and connect with a community of forward-thinkers.
              </p>
            </div>
          </div>
          <div  className="flex justify-center">
            
          <img
            src="https://images.pexels.com/photos/3321799/pexels-photo-3321799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1260&dpr=1 "
            alt="Product screenshot"
            className="rounded-lg"
            width={280}
            height={742}
          />
          </div>
        </div>
      </div>
    </div>





 <div className="overflow-hidden bg-white py-8 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-blue-600">Industry-focused to elevate your skill</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Summits & Training</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                At Zep Research, we are dedicated to elevating your skills through our industry-focused summits and training programs.
                 Designed specifically for aspiring data scientists and AI enthusiasts,
                  our events bring together leading experts and cutting-edge content to ensure you stay ahead in the fast-evolving tech landscape. 
                  Join us to gain practical insights, hands-on experience, and valuable networking opportunities that will propel your career to new heights.
                   Embrace the future of learning and skill development with Zep Research.
              </p>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <img
              src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Product screenshot"
              className="w-[40rem] max-w-none rounded-xl  ring-1 ring-gray-400/10 sm:w-[45 rem]"
              width={232}
              height={142}
            />
          </div>
        </div>
      </div>
    </div>



 <div className="overflow-hidden bg-white py-8 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-blue-600">Can only find at Zep Research</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Networking & Collaboration</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
           At Zep Research, we believe in the power of collaboration and networking to drive innovation and growth.
            Our e-learning platform is not just a place to acquire knowledge; it's a vibrant community where data science and AI enthusiasts come together to share ideas,
             solve problems, and create new opportunities. Engage with industry experts, connect with like-minded peers, 
             and participate in collaborative projects that enhance your learning experience and professional network.
            Join us and be part of a community where collaboration fuels success.</p>
            </div>
          </div>
          <div  className="flex justify-center">
            
          <img
            src="https://images.pexels.com/photos/1181609/pexels-photo-1181609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Product screenshot"
            className="w-[40rem] max-w-none rounded-xl  ring-1 ring-gray-400/10 sm:w-[45 rem]"
              width={232}
              height={142}
          />
          </div>
        </div>
      </div>
    </div>






      </div>
    </div>
  )
}
