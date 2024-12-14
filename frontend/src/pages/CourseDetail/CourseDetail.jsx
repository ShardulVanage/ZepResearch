import React, { useState, useEffect } from 'react'
import { client } from '../../lib/pocketbase'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { DocumentArrowDownIcon } from '@heroicons/react/24/outline'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
import TabContainer from './TabContainer'

const socialLinks = [
  {
    icon: <FaFacebook />,
    href: "https://www.facebook.com/profile.php?id=61561809783777",
  },
  { icon: <FaTwitter />, href: "https://x.com/Zepresearch" },
  { icon: <FaYoutube />, href: "https://youtube.com" },
  {
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/company/zep-research/",
  },
  {
    icon: <FaInstagram/>,
    href: "https://www.instagram.com/zepresearch/",
  },
];

function CourseDetail() {
  const { id } = useParams()
  const [course, setCourse] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: 'India'
  })
  const [showBillingForm, setShowBillingForm] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const paymentCCAvenue = async () => {
    const backendHost = "https://icsift.onrender.com"; //change this to your backend host

    let paymentData = {
      merchant_id: "350427",
      order_id: "ORD" + Date.now(),
      amount: course.price,
      currency: "USD",
      billing_email: "",
      billing_name: "",
      billing_address: "",
      billing_city: "",
      billing_state:"",
      billing_zip: "",
      billing_country: "",
      redirect_url: `${backendHost}/api/ccavenue-handle`,
      cancel_url: `${backendHost}/api/ccavenue-handle`,
      merchant_param1: "Extra Information",
      merchant_param2: "Extra Information",
      merchant_param3: "Extra Information",
      merchant_param4: "Extra Information",
      language: "EN",
      billing_tel: "",
    };

    try {
  
      const response = await axios.post(
        `${backendHost}/api/ccavenue-initiate`,
        paymentData
      );
      const { encRequest, accessCode } = response.data;
      const URL = `https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction&merchant_id=${paymentData.merchant_id}&encRequest=${encRequest}&access_code=${accessCode}`;
      window.location.href = URL;
    } catch (error) {
      console.error("Error initiating payment:", error);
    }
  };

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await client.collection('Course').getOne(id, {
          expand: 'relField1,relField2.subRelField',
        })
        setCourse(res)
      } catch (error) {
        console.error("Error fetching course:", error)
      }
    }

    fetchCourse()
  }, [id])

  
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
  return (
    <section>
      <div>
        {course ? (
          <div className="bg-white">
            <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
              <div className="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
                <div className="lg:col-span-4 lg:row-end-1">
                  <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src={`https://zep-research.pockethost.io/api/files/${course.collectionId}/${course.id}/${course.front_Img}`}
                      alt={course.id}
                      className="object-cover object-center"
                    />
                  </div>
                </div>

                <div className="mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none">
                  <div className="flex flex-col-reverse">
                    <div className="mt-4">
                      <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                        {course.title}
                      </h1>
                    </div>
                  </div>

                  <p className="mt-6 text-gray-500">{course.description}</p>

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                    <button
                      type="button"
                     // onClick={paymentCCAvenue}
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                    >
                      Pay {course.price}₹
                    </button>
                    <button
                      type="button"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-50 px-8 py-3 text-base font-medium text-blue-700 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                    >
                      Syllabus <DocumentArrowDownIcon className="h-6 ml-2" />
                    </button>
                  </div>

                

                  {/* Rest of the component remains the same */}
                  <div className="mt-10 border-t border-gray-200 pt-10">
                    <h3 className="text-xl font-semibold text-gray-900">
                      Job Roles after the course
                    </h3>
                    <div className="prose prose-sm mt-4 text-gray-500">
                      <ul className="list-disc pl-5">
                        {course.Job_Roles.split(',').map((role, index) => (
                          <li key={index} className="mb-1">
                            {role.trim()}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-10 border-t border-gray-200 pt-10">
                    <h3 className="text-xl font-semibold py-2 text-gray-900">
                      License
                    </h3>
                    <p className="mt-4 text-sm text-gray-500">
                      For personal and professional use. You cannot resell or
                      redistribute these Course in their original or modified state.
                      <a
                        href="/TermsAndCondition"
                        className="font-medium text-blue-600 hover:text-blue-500"
                      >
                        Read full license
                      </a>
                    </p>
                  </div>

                  <div className="mt-10 border-t border-gray-200 pt-10">
                    <h3 className="text-xl font-semibold py-2 text-gray-900">
                      Connect
                    </h3>
                    <div className="flex space-x-4 mt-4 md:mt-0 text-white">
                      {socialLinks.map((link, index) => (
                        <a
                          key={index}
                          href={link.href}
                          className="bg-blue-400 p-2 rounded-full hover:bg-blue-800 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <TabContainer />
              </div>
            </div>
          </div>
        ) : (
          <CourseDetailSkeleton/>
        )}
      </div>
    </section>
  )
}

export default CourseDetail