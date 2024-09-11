import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import { Container } from './ui/Container'



const reviews = [
  {
    title: '',
    body: 'Zep Research elevated our conference experience with flawless organization and impactful academic interactions.',
    author: 'Dr. Ethan Walker',
    rating: 5,
  },
  {
    title: '',
    body: 'Thanks to Zep Research, our journal gained greater visibility and attracted high-quality submissions.',
    author: 'Prof. Olivia Smith',
    rating: 5,
  },
  {
    title: '',
    body: 'Their manuscript preparation services helped polish my research, making publication easier and quicker."',
    author: 'Dr. Emma Johnson',
    rating: 5,
  },
  {
    title: '',
    body: 'Networking opportunities at Zep Research events opened doors to valuable academic collaborations.',
    author: 'Dr. Michael Davis',
    rating: 5,
  },
  {
    title: '',
    body: 'The peer review management process was seamless and provided insightful feedback on my research',
    author: 'Prof. Sophia Harris',
    rating: 5,
  },
  {
    title: '',
    body: 'Their event promotion strategies significantly increased attendance at our academic conference.',
    author: 'Dr. William Scott',
    rating: 5,
  },
  {
    title: '',
    body: 'Zep Research’s training workshops have greatly enhanced my skills in research methods and writing.',
    author: 'Prof. Isabella Clark',
    rating: 5,
  },
  {
    title: '',
    body: 'Securing research funding became more manageable with Zep Research’s guidance and support."',
    author: 'Dr. Lucas Miller',
    rating: 5,
  },
  {
    title: '',
    body: 'Zep Researchs editorial services ensured my paper was error-free and publication-ready, saving me valuable time.',
    author: 'Dr. Ava Lee',
    rating: 5,
  },
  {
    title: '',
    body: 'Their conference planning expertise allowed us to focus on the content, resulting in a highly successful event.',
    author: 'Prof. Julian Sanchez',
    rating: 5,
  },
  {
    title: '',
    body: 'Their research impact assessment services helped me demonstrate the value of my research to stakeholders and secure further funding',
    author: 'Prof. Noah Kim',
    rating: 5,
  },
  {
    title: '',
    body: 'Zep Research research grant writing support helped me secure funding for my project, a game-changer for my career.',
    author: 'Dr. Ruby ',
    rating: 5,
  },
  {
    title: '',
    body: 'Their academic writing workshops helped me improve my publication record and advance my research agenda',
    author: 'Prof. Liam Chen',
    rating: 5,
  },
  {
    title: '',
    body: 'Zep Research peer review management took the burden off my shoulders, allowing me to focus on high-quality research.',
    author: 'Dr. Zoe ',
    rating: 5,
  },
]

function StarIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function StarRating({ rating }) {
  return (
    <div className="flex justify-center">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            'h-5 w-5',
            rating > index ? 'fill-yellow-600 drop-shadow-sm' : 'fill-gray-900'
          )}
        />
      ))}
    </div>
  )
}

function Review({ title, body, author, rating, className, ...props }) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ]
  }, [])

  return (
    <figure
      className={clsx(
        'animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5',
        className
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote className="text-gray-900">
        <StarRating rating={rating} />
        <p className="mt-4 text-lg font-semibold leading-6 before:content-['“'] after:content-['”'] font-PTSerif">
          {title}
        </p>
        <p className="mt-3 text-base leading-7">{body}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_'] font-JosefinSans">
        {author}
      </figcaption>
    </figure>
  )
}

function splitArray(array, numParts) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function ReviewColumn({
  className,
  reviews,
  reviewClassName = () => {},
  msPerPixel = 0,
}) {
  let columnRef = useRef()
  let [columnHeight, setColumnHeight] = useState(0)
  let duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current.offsetHeight)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration }}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  )
}

function ReviewGrid() {
  let containerRef = useRef()
  let isInView = useInView(containerRef, { once: true, amount: 0.4 })
  let columns = splitArray(reviews, 3)
  columns = [columns[0], columns[1], splitArray(columns[2], 2)]

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      <ReviewColumn
        reviews={[...columns[0], ...columns[2].flat(), ...columns[1]]}
        reviewClassName={(reviewIndex) =>
          clsx(
            reviewIndex >= columns[0].length + columns[2][0].length &&
              'md:hidden',
            reviewIndex >= columns[0].length && 'lg:hidden'
          )
        }
        msPerPixel={10}
      />
      <ReviewColumn
        reviews={[...columns[1], ...columns[2][1]]}
        className="hidden md:block"
        reviewClassName={(reviewIndex) =>
          reviewIndex >= columns[1].length && 'lg:hidden'
        }
        msPerPixel={15}
      />
      <ReviewColumn
        reviews={columns[2].flat()}
        className="hidden lg:block"
        msPerPixel={10}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50" />
    </div>
  )
}

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className=" pt-20  sm:pt-32"
    >
     <Container>

        <h2
          id="reviews-title"
        className='text-3xl md:text-4xl lg:text-5xl font-bold font-JosefinSans py-8 '
          >
          Hear from our clients about their experiences and success stories.
        </h2>
        <p className="text-base md:text-xl text-center  text-gray-600 mb-12 max-w-3xl mx-auto text-justify font-PTSerif ">
          Real stories of growth, collaboration, and success 
        </p>
        <ReviewGrid />
          </Container>
      
    </section>
  )
}
