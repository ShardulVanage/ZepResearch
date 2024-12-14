import React from 'react'
import { Fragment } from 'react'
import { Tab } from '@headlessui/react'
import { StarIcon } from '@heroicons/react/20/solid'

const reviews = {
    average: 4.8,
    featured: [
      {
        id: 1,
        rating: 5,
        content: `
          <p>Transformed my career in just 3 months! The hands-on projects and mentor support helped me land a job that doubled my salary. Best investment in my professional growth.</p>
        `,
        date: 'October 15, 2023',
        datetime: '2023-10-15',
        author: 'Sarah Chen',
        avatarSrc:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
      },
      {
        id: 2,
        rating: 4,
        content: `
          <p>Perfect for beginners! Clear explanations and great community support. The weekly assignments kept me motivated, and I successfully switched careers within 6 months of completion.</p>
        `,
        date: 'December 3, 2023',
        datetime: '2023-12-03',
        author: 'Michael Rodriguez',
        avatarSrc:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
      },
      {
        id: 3,
        rating: 5,
        content: `
          <p>The practical skills I gained were exactly what employers wanted. Used my capstone project in interviews and received multiple job offers. Worth every penny!</p>
        `,
        date: 'January 18, 2024',
        datetime: '2024-01-18',
        author: 'Priya Patel',
        avatarSrc:
          'https://plus.unsplash.com/premium_photo-1661964274927-84559011dd89?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
  }
  const faqs = [
    {
      question: 'How long do I have access to the course materials?',
      answer:
        'You get lifetime access to all course content, including future updates and improvements. Learn at your own pace and revisit materials whenever you need.',
    },
    {
      question: 'Do I need prior experience to take this course?',
      answer:
        'While basic computer literacy is helpful, our courses are designed for beginners. We provide foundational concepts and gradually build to advanced topics.',
    },
    {
      question: 'Is there job placement assistance?',
      answer:
        'Yes, we provide career support including resume reviews, interview preparation, and job search strategies. Our career counselors help you navigate your professional transition.',
    },
    {
      question: 'What is the time commitment per week?',
      answer:
        'We recommend 8-10 hours per week for optimal learning. The course is flexible - you can adjust the pace to fit your schedule while completing all assignments.',
    },
    {
      question: 'Are there any practical projects included?',
      answer:
        'Yes, each module includes hands-on projects using real-world scenarios. Youll build a portfolio of work to show potential employers.',
    }
  ]
  
  const license = {
    href: '#',
    summary:
      'Once enrolled, you get full access to all course materials and features included in your chosen plan.',
    content: `
      <h4>Course Access</h4>
      
      <p>Your enrollment gives you complete access to the course materials and features included in your selected plan.</p>
      
      <ul role="list">
      <li>Lifetime access to all course content</li>
      <li>Access to course community and discussion forums</li>
      <li>Certificate upon completion</li>
      </ul>
      
      <h4>What's Included</h4>
      
      <ul role="list">
      <li>All video lectures and course materials</li>
      <li>Practice exercises and assignments</li>
      <li>Project feedback and mentorship</li>
      </ul>
      
      <h4>Terms of Use</h4>
      
      <ul role="list">
      <li>Course materials are for personal use only and cannot be redistributed</li>
      <li>Certification is awarded after completing all required assignments</li>
      <li>Community guidelines must be followed for forum participation</li>
      </ul>
    `,
  }
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
function TabContainer() {
  return (
    <div className="mx-auto mt-16 w-full max-w-2xl lg:col-span-4 lg:mt-0 lg:max-w-none">
    <Tab.Group as="div">
      <div className="border-b border-gray-200">
        <Tab.List className="-mb-px flex space-x-8">
          <Tab
            className={({ selected }) =>
              classNames(
                selected
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800',
                'whitespace-nowrap border-b-2 py-6 text-sm font-medium'
              )
            }
          >
            Customer Reviews
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                selected
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800',
                'whitespace-nowrap border-b-2 py-6 text-sm font-medium'
              )
            }
          >
            FAQ
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                selected
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800',
                'whitespace-nowrap border-b-2 py-6 text-sm font-medium'
              )
            }
          >
            License
          </Tab>
        </Tab.List>
      </div>
      <Tab.Panels as={Fragment}>
        <Tab.Panel className="-mb-10">
          <h3 className="sr-only">Customer Reviews</h3>

          {reviews.featured.map((review, reviewIdx) => (
            <div key={review.id} className="flex space-x-4 text-sm text-gray-500">
              <div className="flex-none py-10">
                <img src={review.avatarSrc} alt="" className="h-10 w-10 rounded-full bg-gray-100 object-contain" />
              </div>
              <div className={classNames(reviewIdx === 0 ? '' : 'border-t border-gray-200', 'py-10')}>
                <h3 className="font-medium text-gray-900">{review.author}</h3>
                <p>
                  <time dateTime={review.datetime}>{review.date}</time>
                </p>

                <div className="mt-2 flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        review.rating > rating ? 'text-yellow-700' : 'text-gray-300',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{review.rating} out of 5 stars</p>

                <div
                  className="prose prose-sm mt-2 max-w-none text-gray-500"
                  dangerouslySetInnerHTML={{ __html: review.content }}
                />
              </div>
            </div>
          ))}
        </Tab.Panel>

        <Tab.Panel className="text-sm text-gray-500">
          <h3 className="sr-only">Frequently Asked Questions</h3>

          <dl>
            {faqs.map((faq) => (
              <Fragment key={faq.question}>
                <dt className="mt-10 font-medium text-gray-900">{faq.question}</dt>
                <dd className="prose prose-sm mt-2 max-w-none text-gray-500">
                  <p>{faq.answer}</p>
                </dd>
              </Fragment>
            ))}
          </dl>
        </Tab.Panel>

        <Tab.Panel className="pt-10">
          <h3 className="sr-only">License</h3>

          <div
            className="prose prose-sm max-w-none text-gray-500"
            dangerouslySetInnerHTML={{ __html: license.content }}
          />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  </div>
  )
}

export default TabContainer
