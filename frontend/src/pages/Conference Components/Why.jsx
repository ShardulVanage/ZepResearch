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
             We connect scholars through conferences, publications, and academic collaboration
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
              <h2 className="text-base font-semibold leading-7 text-blue-600">Leaders, Innovators & Experts</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Keynotes & Sessions</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
            Join us for inspiring keynotes and interactive sessions featuring leading experts, innovative developers, and influential end-users. Our events offer a platform for in-depth exploration of the latest trends and breakthroughs in your field. Benefit from the insights and experiences shared by renowned speakers who are at the forefront of their industries. Whether you are seeking to understand new technologies, explore emerging trends, or gain practical knowledge, our keynotes and sessions are designed to educate, engage, and inspire.

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
              <h2 className="text-base font-semibold leading-7 text-blue-600">Industry Specialists, Practitioners & Skill Builders</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Summits & Training</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Enhance your expertise through our targeted summits and training programs, designed to address specific industry needs. Our events feature hands-on workshops, in-depth sessions, and expert guidance tailored to elevate your skills and knowledge. Dive into practical learning experiences that cover the latest techniques, tools, and best practices in your field. These sessions are crafted to provide you with actionable insights and practical skills that you can apply directly to your work, ensuring you stay competitive and informed.
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
              <h2 className="text-base font-semibold leading-7 text-blue-600">Peers, Researchers & Industry Professionals</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Networking & Collaboration</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
            Experience unique networking opportunities and collaborative experiences at our events. Zep Research’s conferences and webinars are designed to connect you with a diverse group of professionals, researchers, and industry leaders. Engage in meaningful discussions, exchange ideas, and build relationships that can lead to new projects, partnerships, and career opportunities. Our events foster an environment where you can share your work, learn from others, and collaborate on innovative solutions, enhancing both your professional network and your impact in your field.
</p>
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
