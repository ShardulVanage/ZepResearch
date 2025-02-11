
import { motion } from "framer-motion"
import {  Briefcase, Dock, File, HeartHandshake } from "lucide-react"


export default function KnowInstrutor({course}) {
    if (!course) {
        return null
      }
  return (
    <div className="0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl md:text-2xl font-bold text-gray-900 mb-8"
            >
              Prepare for a career in {course.tag}
            </motion.h1>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-2 text-lg text-gray-600"
            >
              <li className="flex items-center">
                <span className="h-2 w-2 bg-blue-500 rounded-full mr-3"></span>
                Receive professional-level training from Zep Research
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-blue-500 rounded-full mr-3"></span>
                Demonstrate your proficiency in portfolio-ready projects
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-blue-500 rounded-full mr-3"></span>
                Earn an employer-recognized certificate from Zep Research
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-blue-500 rounded-full mr-3 p-1 "></span>
                Qualify for in-demand job titles: {course.Job_Roles}
              </li>
            </motion.ul>
          </div>

          {/* Stats & Instructor Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="absolute inset-0  rounded-2xl transform rotate-2"></div>
            <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl shadow-2xl overflow-hidden transform transition-transform duration-300">
      <div className="absolute top-0 right-0 w-40 h-40 bg-blue-300 rounded-full transform translate-x-20 -translate-y-20 opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-300 rounded-full transform -translate-x-20 translate-y-20 opacity-20"></div>

      <div className="relative z-10 p-8">
        <div className="flex items-center mb-6">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src={`https://zep-research.pockethost.io/api/files/${course.collectionId}/${course.id}/${course.author_Img}`}
              alt="Course Instructor"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="ml-6">
            <h3 className="text-2xl font-bold text-blue-800">{course.author_name}</h3>
            <p className="text-lg text-blue-600 font-semibold">{course.author_role}</p>
          </div>
        </div>

        <h4 className="text-xl font-semibold mb-4 text-blue-900">Meet Your Instructor</h4>
        <p className="text-gray-700 mb-6 leading-relaxed">{course.info}</p>

        <div className=" text-blue-900 font-semibold text-sm">  
          <p>
{
 course.author_bio 
}          </p>
        </div>
      </div>
    </div>
          </motion.div>
        </div>

        {/* Career Resources Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Get exclusive access to career resources upon completion
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Resume Review",
                description: "Improve your resume and LinkedIn with personalized feedback",
                icon: <File/>,
              },
              {
                title: "Interview Prep",
                description: "Practice your skills with interactive tools and mock interviews",
                icon: <Briefcase/>,
              },
              {
                title: "Career Support",
                description: "Plan your career move with Zep Research job search guide & dedicated 24/7 support",
                icon: <HeartHandshake/>,
              },
            ].map((resource, index) => (
              <div
                key={index}
                className="text-center flex flex-col justify-center items-center p-6 rounded-xl bg-gradient-to-tr from-blue-100/50 to-indigo-100/50 border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-4xl mb-4 h-12 w-12 text-center">{resource.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{resource.title}</h3>
                <p className="text-gray-600">{resource.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

