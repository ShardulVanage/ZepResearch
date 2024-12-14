import React, { useEffect, useState } from 'react'
import datascience from '../../images/Course/datascience.jpg'
import dataanalytics from '../../images/Course/dataanalytics.jpg'
import { client } from '../../lib/pocketbase'
import { NavLink } from 'react-router-dom'

// const posts = [
//   {
//     id: 1,
//     title: 'Mastering Data Analytics: From Insights to Action',
//     href: '/CourseDetailDA',
//     description:
//       'Explore the fundamentals of data analytics in this comprehensive course. Gain hands-on experience with industry-standard tools and techniques to analyze data and extract valuable insights. Perfect for beginners and professionals alike.',
//     imageUrl: dataanalytics,
//     date: 'Mar 16, 2020',
//     datetime: '2020-03-16',
//     category: { title: 'Data Analytics ', href: '#' },
//     author: {
//       name: 'Satyajit Pattnaik',
//       role: 'Co-Founder / CTO',
//       href: '#',
//       imageUrl:
//         'https://res.cloudinary.com/dtsuvx8dz/image/upload/v1687806712/whmgy2fkkrpsduevi9mk.png',
//     },
//   },
//    {
//     id: 2,
//     title: 'Data Science Fundamentals: From Zero to Hero',
//     href: '/CourseDetailDS',
//     description:
//       ' This course covers the basics of data science, including data analysis, visualization, and machine learning. Perfect for beginners, it provides a comprehensive introduction to the essential tools and techniques used by data scientists.',
//     imageUrl: datascience,
//     date: 'Mar 16, 2020',
//     datetime: '2020-03-16',
//     category: { title: 'Data Science', href: '#' },
//     author: {
//       name: 'Satyajit Pattnaik',
//       role: 'Co-Founder / CTO',
//       href: '#',
//       imageUrl:
//         'https://res.cloudinary.com/dtsuvx8dz/image/upload/v1687806712/whmgy2fkkrpsduevi9mk.png',
//     },
//   },
 
//   // More posts...
// ]


function Courses() {
  const [course, setCourse] = useState([])
  useEffect(()=>{
    client.collection("Course")
    .getFullList()
    .then((res)=> setCourse(res))
  })
  return (
    <section>

   
     <div className="bg-white py-4 sm:py-8 mt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Courses</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
           Join us for the Annual Technology Innovations Conference 2024, where industry leaders, innovators, and technology enthusiasts converge to explore the latest trends and breakthroughs shaping our world
          </p>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {course.map((course) => (
           <>
           <hr />
            <NavLink to={`/Courses/${course.id}`}>
             
              <article key={course.tag} className="relative mt-8 isolate flex flex-col gap-8 lg:flex-row">
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                  <img
                    src={`https://zep-research.pockethost.io/api/files/`+course.collectionId+`/`+course.id+`/`+course.front_Img}
                    alt=""
                    className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-fill"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <div
                      href=""
                      className="relative z-10 rounded-full bg-blue-200 px-3 py-1.5 font-medium text-gray-900"
                    >
                      {course.tag}
                    </div>
                  </div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a >
                        <span className="absolute inset-0" />
                        {course.title}
                      </a>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600">{course.description}</p>
                  </div>
                  <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                    <div className="relative flex items-center gap-x-4">
                      <img src={`https://zep-research.pockethost.io/api/files/`+course.collectionId+`/`+course.id+`/`+course.author_Img} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                          <a >
                            <span className="absolute inset-0" />
                            {course.author_name}
                          </a>
                        </p>
                        <p className="text-gray-600">{course.author_role}</p>
                      </div> 
                    </div>
                  </div>
                </div>
              </article>
            </NavLink>
            </>
            ))}
          </div>
        </div>
      </div>
    </div>

{/* <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Top Courses</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Join us for the Annual Technology Innovations Conference 2024, where industry leaders, innovators, and technology enthusiasts converge to explore the latest trends and breakthroughs shaping our world
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {Pastconf.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <img src={post.imageUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <time dateTime={post.datetime} className="mr-8">
                  {post.date}
                </time>
                <div className="-ml-4 flex items-center gap-x-4">
                  <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <div className="flex gap-x-2.5">
                    <img src={post.author.imageUrl} alt="" className="h-6 w-6 flex-none rounded-full bg-white/10" />
                    {post.author.name}
                  </div>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <a href={post.href}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </div> */}
     </section>
  )
}

export default Courses