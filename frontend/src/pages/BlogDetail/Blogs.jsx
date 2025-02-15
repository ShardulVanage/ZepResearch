import { useEffect, useState, useCallback, memo } from "react"
import { client } from "../../lib/pocketbase"
import { NavLink } from 'react-router-dom'
import { Helmet } from "react-helmet-async"

const SkeletonBlogCard = memo(() => (
  <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-200 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 animate-pulse">
    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-300 via-gray-200/40" />
    <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-300/10" />
    <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
  </div>
))

const BlogCard = memo(({ blog }) => (
  <NavLink to={`/Blogs/${blog.id}`}>
    <article className="relative sm:h-[500px] h-auto isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
      <img src={blog.imageUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
      <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      
      <h3 className="text-lg font-semibold leading-6 text-white">
        <span className="absolute inset-0" />
        {blog.Title}
      </h3>
      
      <div className="mt-3 flex flex-wrap justify-between gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
        <time dateTime={blog.datetime}>
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

export default function Blogs() {
  const [blog, setBlog] = useState([])
  const [loading, setLoading] = useState(true)

  const formatDate = useCallback((dateString) => {
    const date = new Date(dateString)
    const options = { year: 'numeric', month: 'short', day: 'numeric' }
    return date.toLocaleDateString('en-US', options)
  }, [])

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await client.collection("Blogs").getFullList(
          {sort:'-created'}
        )
        const formattedBlog = res.map(ew => ({
          ...ew,
          formattedDate: formatDate(ew.created)
        }))
        setBlog(formattedBlog)
      } catch (error) {
        console.error("Error fetching blogs:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [formatDate])

  return (
    <>
    <Helmet>
            {/* Basic meta tags */}
            <title>Blogs | Zep Research | International Journal Publication and Conference</title>
            <meta 
              name="description" 
              content="Leading platform for international journal publications, academic conferences, and advanced courses in Data Science and AI." 
            />
            <meta 
              name="keywords" 
              content="research journal, international publication, academic conference, data science courses,Blogs" 
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
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {loading ? (
            <>
              <SkeletonBlogCard />
              <SkeletonBlogCard />
              <SkeletonBlogCard />
            </>
          ) : (
            blog.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))
          )}
        </div>
      </div>
    </div>
          </>
  )
}