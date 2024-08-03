import p1 from '../images/patners/1.png'
import p2 from '../images/patners/2.png'
import p3 from '../images/patners/3.png'
import p4 from '../images/patners/4.png'
import p5 from '../images/patners/5.png'
import p6 from '../images/patners/6.png'
import p7 from '../images/patners/7.png'
import p8 from '../images/patners/8.png'
import p9 from '../images/patners/9.png'
import p10 from '../images/patners/10.png'
import p11 from '../images/patners/11.png'
import p12 from '../images/patners/12.png'
import p13 from '../images/patners/13.png'
import p14 from '../images/patners/14.png'
import p15 from '../images/patners/15.jpg'
import p16 from '../images/patners/16.png'


export default function Partners() {
  return (
    <div className="bg-white py-24 sm:py-12">
      <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl py-12">
           Research and Publication Allies
          </p>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-6 lg:mx-0 lg:max-w-none lg:grid-cols-5  contrast-125">
          <img
            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
            src={p1}
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
            src={p2}
            alt="Reform"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
            src={p3}
            alt="Tuple"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-20 w-full object-contain sm:col-start-2 lg:col-span-1"
            src={p4}
            alt="SavvyCal"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 col-start-2 max-h-20 w-full object-contain sm:col-start-auto lg:col-span-1"
            src={p5}
            alt="Statamic"
            width={158}
            height={48}
          />
{/* 2 */}
           <img
            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
            src={p6}
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
            src={p7}
            alt="Reform"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
            src={p8}
            alt="Tuple"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-20 w-full object-contain sm:col-start-2 lg:col-span-1"
            src={p9}
            alt="SavvyCal"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 col-start-2 max-h-20 w-full object-contain sm:col-start-auto lg:col-span-1"
            src={p10}
            alt="Statamic"
            width={158}
            height={48}
          />
{/* 3 */}

 <img
            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
            src={p11}
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
            src={p12}
            alt="Reform"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
            src={p13}
            alt="Tuple"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-20 w-full object-contain sm:col-start-2 lg:col-span-1"
            src={p14}
            alt="SavvyCal"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 col-start-2 max-h-20 w-full object-contain sm:col-start-auto lg:col-span-1"
            src={p15}
            alt="Statamic"
            width={158}
            height={48}
          />

          
        </div>
        <div className="mt-16 flex justify-center">
          <p className="relative rounded-full bg-gray-50 px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/5">
            <span className="hidden md:inline">Over 2500 companies use our tools to better their business.</span>
            <a href="/Patners" className="font-semibold text-blue-600">
              <span className="absolute inset-0" aria-hidden="true" /> Read our customer stories{' '}
              <span aria-hidden="true">&rarr;</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
