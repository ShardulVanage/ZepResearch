
import featureimg from '../images/featurimg.png'
import { NewspaperIcon, LanguageIcon, BookOpenIcon, UserGroupIcon ,DocumentCheckIcon ,RectangleGroupIcon} from '@heroicons/react/24/outline'
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
</svg>

const features = [
  {
    name: 'Conferences & Webinars',
    description:
      'Stay ahead in your field by joining our expert-led conferences and webinars. Engage with industry leaders, gain insights into the latest research, and expand your professional network from anywhere in the world',
    icon: UserGroupIcon,
  },
  {
    name: 'Journals',
    description:
      'Access a wide array of peer-reviewed journals covering various disciplines. Stay informed with the latest research, enhance your knowledge, and contribute to your field with our comprehensive collection',
    icon: BookOpenIcon,
  },
  {
    name: 'Publications',
    description:
      'Discover a vast collection of high-quality publications across multiple domains. Whether you are researching for a project or looking to publish your own work, our platform provides the resources you need.',
    icon: NewspaperIcon,
  },
  {
    name: 'Language Support',
    description:
      'Break down language barriers with our robust language support services. From translation to editing, we ensure your work is understood and appreciated by a global audience..',
    icon: LanguageIcon,
  },
    {
    name: 'Plagiarism check',
    description:
      'Ensure the originality of your work with our advanced plagiarism detection tools. Protect your intellectual property and maintain academic integrity with comprehensive plagiarism checks',
    icon: DocumentCheckIcon,
  },
  {
    name: 'Publication Collaboration',
    description:
      'Collaborate seamlessly with fellow researchers and authors. Our platform facilitates smooth communication and efficient co-authoring, making it easier to produce high-quality publications together.',
    icon: RectangleGroupIcon,
  },
]

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl  ">
           Comprehensive Services We Offer
        <img src={featureimg} alt=""  className='py-4'/>
          </h2>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt className="text-base text-left font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tl from-cyan-400 via-blue-500 to-blue-600   drop-shadow-md">
                    <feature.icon className="h-6 w-6 text-white " aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 text-base leading-7 text-justify text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
