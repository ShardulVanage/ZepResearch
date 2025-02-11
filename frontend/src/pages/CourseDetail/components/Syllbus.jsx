import React,{useState} from 'react'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../../../Hero components/ui/accordion'
import { ChevronDown, ChevronRight, Star } from "lucide-react"
function Syllbus({course}) {
    const [openIndex, setOpenIndex] = useState(null)
    const [showAll, setShowAll] = useState(false)
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  const visibleFaqs = showAll ? course?.syllabus?.faqs : course?.syllabus?.faqs?.slice(0, 7)
  return (<>
     <div className='max-w-7xl mx-auto space-y-4 mt-4 py-12'>
      <h1 className="text-3xl font-bold  mb-6 text-center">Professional Certificate -  Course Series</h1>
      <p className=' mx-auto text-center'>Prepare for a career in the high-growth field of {course.tag}. In this program, you’ll build in-demand technical skills like {course.skills_you_will_gain} to get job-ready in 3 months or less, no prior experience needed. You'll also have the option to learn how generative AI tools and techniques are used in {course.tag}.</p>
      <div className="w-full max-w-3xl mx-auto space-y-4">
        {visibleFaqs?.map((section, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex items-center justify-between p-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
              aria-expanded={openIndex === index}
            >
              <span className="text-lg font-semibold text-gray-900">{section.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                  openIndex === index ? "transform rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-4 pt-2">
                <ul className="space-y-3">
                  {section.answer.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 text-gray-600">
                      <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-blue-500" />
                      <span className="text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}

        {course?.syllabus?.faqs?.length > 7 && !showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="w-full py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
          >
            View More
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
      </div>
      </>
  )
}

export default Syllbus
