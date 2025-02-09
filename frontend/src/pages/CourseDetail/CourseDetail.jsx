import React, { useState, useEffect } from 'react'
import { client } from '../../lib/pocketbase'
import { useParams } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Helmet } from 'react-helmet-async'
import CourseHero from './components/CourseHero'
import CourseAbout from './components/CourseAbout'
import KnowInstrutor from './components/KnowInstructor'
import CareerCertificate from './components/Certificate'
import Syllbus from './components/Syllbus'
import CourseForm from './components/Form'
import whatsapplogo from '../../assets/whatsapp.png';


const CourseDetailSkeleton = () => {
  return (
    <div className="bg-white">
         
      <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
          {/* Image Skeleton */}
          <div className="lg:col-span-4 lg:row-end-1">
            <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg">
              <div className="animate-pulse bg-gray-200 w-full h-full" />
            </div>
          </div>

          {/* Content Skeleton */}
          <div className="mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none">
            <div className="flex flex-col-reverse">
              <div className="mt-4">
                {/* Title Skeleton */}
                <div className="animate-pulse bg-gray-200 h-8 w-3/4 rounded" />
              </div>
            </div>

            {/* Description Skeleton */}
            <div className="mt-6 space-y-2">
              <div className="animate-pulse bg-gray-200 h-4 w-full rounded" />
              <div className="animate-pulse bg-gray-200 h-4 w-5/6 rounded" />
              <div className="animate-pulse bg-gray-200 h-4 w-4/6 rounded" />
            </div>

            {/* Buttons Skeleton */}
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
              <div className="animate-pulse bg-gray-200 h-12 rounded" />
              <div className="animate-pulse bg-gray-200 h-12 rounded" />
            </div>

            {/* Job Roles Skeleton */}
            <div className="mt-10 border-t border-gray-200 pt-10">
              <div className="animate-pulse bg-gray-200 h-6 w-48 rounded mb-4" />
              <div className="space-y-2">
                <div className="animate-pulse bg-gray-200 h-4 w-3/4 rounded" />
                <div className="animate-pulse bg-gray-200 h-4 w-2/3 rounded" />
                <div className="animate-pulse bg-gray-200 h-4 w-1/2 rounded" />
              </div>
            </div>

            {/* License Skeleton */}
            <div className="mt-10 border-t border-gray-200 pt-10">
              <div className="animate-pulse bg-gray-200 h-6 w-32 rounded mb-4" />
              <div className="animate-pulse bg-gray-200 h-16 w-full rounded" />
            </div>

            {/* Social Links Skeleton */}
            <div className="mt-10 border-t border-gray-200 pt-10">
              <div className="animate-pulse bg-gray-200 h-6 w-32 rounded mb-4" />
              <div className="flex space-x-4">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <div key={index} className="animate-pulse bg-gray-200 h-8 w-8 rounded-full" />
                ))}
              </div>
            </div>
          </div>

          {/* Tab Container Skeleton */}
          <div className="lg:col-span-7 mt-10">
            <div className="animate-pulse bg-gray-200 h-12 w-full rounded mb-4" />
            <div className="animate-pulse bg-gray-200 h-48 w-full rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};
function CourseDetail() {
  const { id } = useParams()
  const [course, setCourse] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true)
        setError(null)
        const res = await client.collection('Course').getOne(id, {
          expand: 'relField1,relField2.subRelField',
          requestKey:null,
        })
        setCourse(res)
      } catch (error) {
        console.error("Error fetching course:", error)
        setError(error.message)
      }finally {
        setLoading(false)
      }
    }

    fetchCourse()
  }, [id])


  if (loading) {
    return <CourseDetailSkeleton />
  }

  // Show error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Error Loading Course</h2>
          <p className="mt-2 text-gray-600">{error}</p>
        </div>
      </div>
    )
  }

  
  
  return (
    <section>
   <Helmet>
  {course ? (
    <>
      {/* Basic meta tags */}
      <title>{`${course.title} Course | Zep Research`}</title>
      <meta 
        name="description" 
        content={`${course.description.slice(0, 155)}...`} 
      />
      <meta 
        name="keywords" 
        content={`${course.title}, online course, professional training, ${course.Job_Roles}, zep research`} 
      />

      {/* Open Graph meta tags */}
      <meta property="og:title" content={`${course.title} | Zep Research`} />
      <meta property="og:description" content={course.description} />
      <meta property="og:type" content="product" />
      <meta property="og:url" content={`https://zepresearch.com/courses/${course.id}`} />
      <meta 
        property="og:image" 
        content={`https://zep-research.pockethost.io/api/files/${course.collectionId}/${course.id}/${course.front_Img}`} 
      />
      <meta property="og:price:amount" content={course.price} />
      <meta property="og:price:currency" content="USD" />

      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${course.title} | Zep Research`} />
      <meta name="twitter:description" content={course.description} />
      <meta 
        name="twitter:image" 
        content={`https://zep-research.pockethost.io/api/files/${course.collectionId}/${course.id}/${course.front_Img}`} 
      />

      {/* Canonical URL */}
      <link rel="canonical" href={`https://zepresearch.com/courses/${course.id}`} />

      {/* Schema.org markup for course */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          "name": course.title,
          "description": course.description,
          "provider": {
            "@type": "Organization",
            "name": "Zep Research",
            "sameAs": [
              "https://www.facebook.com/profile.php?id=61561809783777",
              "https://www.instagram.com/zepresearch/",
              "https://x.com/Zepresearch",
              "https://www.linkedin.com/company/zep-research/"
            ]
          },
          "offers": {
            "@type": "Offer",
            "price": course.price,
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          },
          "image": `https://zep-research.pockethost.io/api/files/${course.collectionId}/${course.id}/${course.front_Img}`,
          "url": `https://zepresearch.com/courses/${course.id}`,
          "occupationalCredentialAwarded": "Certificate",
          "occupationalCategory": course.Job_Roles.split(',').map(role => role.trim())
        })}
      </script>
    </>
  ) : (
    // Loading state meta tags
    <>
      <title>Loading Course... | Zep Research</title>
      <meta name="robots" content="noindex,nofollow" />
    </>
  )}
</Helmet>
<a
              href="https://wa.me/+85251359932"
              className="fixed w-[40px] h-[40px] sm:bottom-10 bottom-3 z-10 sm:right-10 right-3 rounded-full text-center text-4xl shadow-lg z-100 flex items-center justify-center md:w-[70px] md:h-[70px] md:bottom-5 md:right-5 md:text-2xl"
              aria-label="Get Course Information"
            >
             <img src={whatsapplogo} className="" />
            </a>
     {course && <CourseHero course={course} />}
     {course && <CourseAbout course={course} />}
     {course && <KnowInstrutor course={course} />}
     {course && <CareerCertificate course={course}/>}
     {course && <Syllbus course={course} />}
<CourseForm/>
    </section>
  )
}

export default CourseDetail