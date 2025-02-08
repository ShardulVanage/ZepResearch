import { CheckIcon } from "@heroicons/react/24/solid"
import petrobar from '../../../images/courselogo/petrobars.png'
import danone from '../../../images/courselogo/danone.png'
import loreal from '../../../images/courselogo/loreal.png'
import capgemini from '../../../images/courselogo/capgemini.png'
import pg from '../../../images/courselogo/pg.png'
import tata from '../../../images/courselogo/tata.png'





const logo=[
    petrobar,danone ,loreal ,capgemini, pg ,tata
]
export default function CourseAbout({ course }) {
  // Early return if no course data
  if (!course || !course.about_course) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-yellow-700">
          No course data available
        </div>
      </div>
    )
  }

  // Safely access learning objectives with optional chaining
  const learningObjectives = course.about_course?.learningObjectives || []

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      {/* What you'll learn section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">{course.about_course.title}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {learningObjectives.map((objective) => (
            <div key={objective.id} className="flex items-start space-x-3">
              <CheckIcon className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <p className="text-gray-600">{objective.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Rest of your code remains the same */}
      {/* Skills section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Skills you'll gain</h2>
        <div className="flex flex-wrap gap-3">
       
          {course.skills_you_will_gain.split(',').map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 rounded-full text-sm font-medium hover:from-blue-100 hover:to-blue-200 transition-colors duration-200"
            >
              {skill.trim()}
            </span>
          ))}
        </div>
      </section>

      {/* Details section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Details to know</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3ZM5 19V5H19V19H5ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Shareable certificate</h3>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Taught in English</h3>
             
            </div>
          </div>
        </div>
      </section>

      {/* Companies section */}
      <section className="space-y-6 bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 max-w-2xl">
          See how employees at top companies are mastering in-demand skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {logo.map((company) => (
            <div key={company} className="flex items-center justify-center">
              <img
                src={company}
                alt={`${company} logo`}
                width={120}
                height={40}
                className="opacity-70 hover:opacity-100 transition-opacity duration-200"
              />
            </div>
          ))}
        </div>
        <a href="/ZepResarch" className="inline-block mt-6 text-blue-600 hover:text-blue-800 font-medium">
          Learn more about ZepResearch for Business
        </a>
      </section>
    </div>
  )
}

