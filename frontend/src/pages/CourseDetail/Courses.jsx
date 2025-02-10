import React, { useEffect, useState } from 'react'
import datascience from '../../images/Course/datascience.jpg'
import dataanalytics from '../../images/Course/dataanalytics.jpg'
import { client } from '../../lib/pocketbase'
import { NavLink } from 'react-router-dom'
import { Button } from '@material-tailwind/react'
import { Helmet } from 'react-helmet-async'



import PocketBase from 'pocketbase';

// Initialize PocketBase
const pb = new PocketBase('https://zep-research.pockethost.io');

function Courses() {
  const [course, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const records = await pb.collection('Course').getFullList({
          sort: '-created',
          requestKey:null
        });
        setCourses(records);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const createSlug = (title) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">
          <div className="h-8 w-64 bg-gray-200 rounded mb-4" />
          <div className="h-4 w-48 bg-gray-200 rounded" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Error Loading Courses</h2>
          <p className="mt-2 text-gray-600">{error}</p>
        </div>
      </div>
    );
  }
  return (
    <section>
 <Helmet>
                {/* Basic meta tags */}
                <title>Courses | International Journal Publication and Conference</title>
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
   
     <div className="bg-white py-4 sm:py-8 mt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Courses</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
           Join us for the Annual Technology Innovations Conference 2025, where industry leaders, innovators, and technology enthusiasts converge to explore the latest trends and breakthroughs shaping our world
          </p>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20 pb-24">
            {course.map((course) => (
              <React.Fragment key={course.id}> 
           <>
           <hr />
           <NavLink 
                to={`/Courses/${createSlug(course.title)}`}
                state={{ courseData: course }} // Pass full course data in state
              >
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
                    <h3 className="mt-3 text-lg flex justify-between font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a >
                        <span className="absolute inset-0 font-JosefinSans" />
                        {course.title}
                      </a>
                      <a className='text-2xl font-JosefinSans' href="">
                        $99
                      </a>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600 font-PTSerif">{course.description}</p>
                  </div>
                  <div className="mt-6 flex border-t border-gray-900/5 pt-6 justify-between">

                    <div className="relative flex items-center gap-x-4">
                      {/* <img src={`https://zep-research.pockethost.io/api/files/`+course.collectionId+`/`+course.id+`/`+course.author_Img} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                          <a >
                            <span className="absolute inset-0" />
                            {course.author_name}
                          </a>
                        </p>
                        <p className="text-gray-600">{course.author_role}</p>
                      </div>  */}
                    </div>
                    <div className='flex gap-4 text-sm'>
                      <Button className='text-xs font-normal ' size='sm'>know more</Button>
                      {/* <Button className='text-xs font-normal '  size='sm' variant='outlined'> buy now</Button> */}
                    </div>
                  </div>
                </div>
              </article>
            </NavLink>
            </>
            </React.Fragment>
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