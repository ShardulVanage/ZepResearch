import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import DOMPurify from 'dompurify'
import { client } from '../../lib/pocketbase'
import profilephoto from '../../images/profile.jpg';
import { Button } from '@material-tailwind/react';

const SkeletonBlogCard = () => (
  <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-200 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 animate-pulse">
    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-300 via-gray-200/40" />
    <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-300/10" />
    <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
  </div>
)

function Blogdetail() {
const { id } = useParams()
  const [blog, setBlog] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [recommendedBlogs, setRecommendedBlogs] = useState([])
  const [recommendedLoading, setRecommendedLoading] = useState(true)

  const formatDate = useCallback((dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }, [])

  const getRandomBlogs = useCallback((blogs, count) => {
    return blogs
      .sort(() => 0.5 - Math.random())
      .slice(0, count)
      .map(blog => ({
        ...blog,
        formattedDate: formatDate(blog.created)
      }));
  }, [formatDate])

  const createMarkup = useMemo(() => (html) => ({
    __html: DOMPurify.sanitize(html)
  }), [])

  useEffect(() => {
    const fetchBlogAndRecommendations = async () => {
      try {
        const [blogRes, allBlogsRes] = await Promise.all([
          client.collection('Blogs').getOne(id, {
            expand: 'relField1,relField2.subRelField',
          }),
          client.collection("Blogs").getFullList()
        ]);

        setBlog(blogRes);
        const randomBlogs = getRandomBlogs(allBlogsRes.filter(b => b.id !== id), 3);
        setRecommendedBlogs(randomBlogs);
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setIsLoading(false);
        setRecommendedLoading(false);
      }
    }

    fetchBlogAndRecommendations();
    window.scrollTo(0, 0)
  }, [id, getRandomBlogs])
  console.log(blog)
  if (isLoading) {
    return (
      <div className="bg-white px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="h-12 bg-gray-200 rounded-md w-3/4 mb-4 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded-md w-1/4 mb-8 animate-pulse"></div>
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded-md w-full animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded-md w-full animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded-md w-3/4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded-md w-full animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded-md w-5/6 animate-pulse"></div>
          </div>
        </div>
      </div>
    )
  }

  if (!blog) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  return (
    <div className="bg-white  px-6 py-32 lg:px-8">
      <article className="mx-auto max-w-3xl prose prose-lg prose-indigo">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-JosefinSans">{blog.Title}</h1>
        <p className='font-PTSerif'>{blog.Description}</p>
        <div className='flex flex-row justify-between items-center text-sm sm:text-base'>
          <p className="mt-6  leading-8 text-gray-500 ">
            {new Date(blog.created).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          <p className=''>
            {/* <img src={profilephoto} alt="" className="h-10 w-10 rounded-full inline mr-2" /> */}
            @{blog.author}
          </p>
        </div>
        <hr className='p-0 ' />
        <div 
          className="mt-10 [&>h1]:font-JosefinSans [&>p]:font-PTSerif [&>div]:[&>p]:font-PTSerif  "
          dangerouslySetInnerHTML={createMarkup(blog.Content)}
        />
      </article>
      <hr />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-JosefinSans">Recommended Reads</h2>
            <p className='font-PTSerif'>Expand your knowledge and spark new ideas with our selection of engaging and informative blogs</p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {recommendedLoading ? (
              <>
                <SkeletonBlogCard />
                <SkeletonBlogCard />
              </>
            ) : (
              recommendedBlogs.map((blog) => (
                <NavLink to={`/Blogs/${blog.id}`} key={blog.id}>
                  <article
                    className="relative isolate sm:h-[500px] h-auto  flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
                  >
                    <img src={blog.imageUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
                    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                    <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                    
                    <h3 className="text-lg font-semibold leading-6 text-white">
                      <span className="absolute inset-0" />
                      {blog.Title}
                    </h3>
                    <div className="mt-3 flex flex-wrap justify-between gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                      <time dateTime={blog.datetime} className="mr-8">
                        {blog.formattedDate}
                      </time>
                      <div className="-ml-4 flex items-center gap-x-4">
                        <div className="flex gap-x-2.5">
                          {blog.author}
                        </div>
                      </div>
                    </div>
                  </article>
                </NavLink>
              ))
            )}
          </div>
          <div className='flex justify-center items-center py-8 '>
            <a href="/Blogs">
          <Button  color='blue'>Read More</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Blogdetail)