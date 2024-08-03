import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import Faqbg from '../images/Faqbg.png'
const faqs = [
  {
    id:1,
    question: " How can I participate in the conferences and webinars?",
    answer:
      "To participate in our conferences and webinars, simply register through our platform. You can browse upcoming events, choose the ones that interest you, and sign up. Once registered, you will receive all necessary details and instructions via email.",
  },
  {
     id:2,
    question: "What types of journals and publications are available on your platform?",
    answer:
      "Our platform offers a wide array of peer-reviewed journals and publications across various disciplines, including science, technology, medicine, humanities, and social sciences. You can access these resources to stay updated with the latest research and contribute your own work.",
  },
  {
     id:3,
    question: "How does the plagiarism check tool work?",
    answer:
      "Our plagiarism check tool uses advanced algorithms to compare your work against a vast database of academic papers, publications, and online content. It provides a detailed report highlighting any potential instances of plagiarism, ensuring your work is original and adheres to academic integrity standards.",
  },
  {
     id:4,
    question: "What kind of language support do you offer?",
    answer:
      "We offer comprehensive language support services, including translation, proofreading, and editing. Our team of language experts ensures that your work is clear, accurate, and accessible to a global audience, helping you overcome any language barriers.",
  },
  {
     id:5,
    question: " How can I collaborate with other researchers and professionals on your platform?",
    answer:
      "Our platform facilitates collaboration through dedicated tools that allow you to connect with other researchers and professionals. You can share documents, co-author papers, and communicate seamlessly, making it easy to work together on projects and publications. Simply create a profile and start connecting with peers in your field.",
  },
 
  // More questions...
]

export default function Faq() {
  return (
    <div className="bg-pink-100/10">
      <div className="mx-auto max-w-7xl px-6 py-8 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.id} className="pt-6 py-3">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600 text-justify">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
         
    </div>
  )
}
