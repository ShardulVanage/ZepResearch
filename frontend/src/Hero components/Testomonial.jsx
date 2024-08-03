import testobg from '../images/testobg.png'
import testobg2 from '../images/testobg2.png'
const testimonials = [
  {
    body: 'This platform has been a game-changer for my research. The seamless integration of resources and the global connectivity it offers have significantly boosted the quality and reach of my work. Highly recommended for  innovate and collaborate',
    author: {
       id:1,
      name: 'John D.',
      handle: 'John.D',
      imageUrl:
        'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=2134&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  },
   {
    body: 'The support and tools provided here are unmatched. From language assistance to plagiarism checks, every feature is designed to uphold the highest standards of academic integrity and innovation. Its a must-have for anyone serious about their professional studies.',
    author: {
       id:2,
      name: 'Dr. Sarah M.',
      handle: 'Sarah',
      imageUrl:
        'https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  }, {
    body: 'Connecting with industry leaders and fellow professionals from around the world has never been easier. This platforms conferences and webinars have been instrumental in keeping me at the forefront of my field',
    author: {
       id:3,
      name: 'Michael L',
      handle: 'Michael',
      imageUrl:
        'https://images.unsplash.com/photo-1630208232589-e42b29428b19?q=80&w=1969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  }, {
    body: 'The comprehensive collection of journals and publications available here is invaluable. It has made my job as an editor more efficient and has expanded our journals reach to a global audience',
    author: {
       id:4,
      name: 'Emily R.',
      handle: 'Emily',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  }, {
    body: 'As a PhD student, the publication collaboration feature has been incredibly helpful. It has allowed me to co-author papers with international researchers, greatly enhancing the quality and impact of my research.',
    author: {
      id:5,
      name: 'Raj P',
      handle: 'Raj',
      imageUrl:
        'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  },
   {
    body: 'The language support services are exceptional. They ensure that research and publications are accessible and understood by a global audience, breaking down language barriers and promoting international collaboration..',
    author: {
       id:6,
      name: 'Laura S',
      handle: 'Laura',
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  }, 
  // More testimonials...
]

export default function Example() {
  return (
    <div className="  py-24 sm:py-32">
         <div
        className=" absolute  inset-x-1  -z-10 flex transform-gpu overflow-hidden pt-32 opacity-75 blur-sm sm:pt-40 xl:justify-end"
        aria-hidden="true"
      >
            <img src={testobg} alt="" className="relative  ml-[-22rem] aspect-[690/728] w-[23.0625rem] flex-none origin-top-right rotate-[50deg] top-44 right-[650px] xl:ml-0 xl:mr-[calc(50%-12rem)]" />
         
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            We have worked with thousands of amazing people
          </p>
        </div>
        
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author.id} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                  <blockquote className="text-gray-900">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <img className="h-10 w-10 rounded-full bg-gray-50" src={testimonial.author.imageUrl} alt="" />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                      <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
            
          </div>
       
        </div>
      </div>
    </div>
  )
}
