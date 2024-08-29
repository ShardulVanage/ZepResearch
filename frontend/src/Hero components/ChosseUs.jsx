import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { InView } from './ui/inView'

const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
]

export default function WhyChooseUs() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
           <InView
          variants={{
            hidden: {
              opacity: 0,
              x: 100,
            },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          viewOptions={{ margin: '0px 0px -350px 0px' }}
        >
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-right">Why Choose Zep Research</p>
              <p className="mt-6 text-lg leading-8 text-gray-600 text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                iste dolor cupiditate blanditiis ratione.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                iste dolor cupiditate blanditiis ratione.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                iste dolor cupiditate blanditiis ratione.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                iste dolor cupiditate blanditiis .
              </p>
              
            </div>
          </div>
          </InView>
          <div className="flex items-start justify-end lg:order-first">
            
            <img
              src="https://images.unsplash.com/photo-1560439514-e960a3ef5019?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Product screenshot"
              className=" max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 w-[42rem]"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
