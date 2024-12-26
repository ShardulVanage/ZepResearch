import { useState } from 'react'
import { Dialog, RadioGroup } from '@headlessui/react'
import { Bars3Icon, XMarkIcon as XMarkIconOutline } from '@heroicons/react/24/outline'
import { CheckIcon, XMarkIcon as XMarkIconMini } from '@heroicons/react/20/solid'
import axios from 'axios'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Helmet } from 'react-helmet-async'

const pricing = {
  frequencies: [
    { value: 'monthly', label: 'Monthly' },
    { value: 'annually', label: 'Annually' },
  ],
  tiers: [
    // {
    //   name: 'Starter',
     
    //   href: '#',
    //   featured: false,
    //   description: 'All your essential business finances, taken care of.',
    //   price: { monthly: '$15', annually: '$144' },
    //   mainFeatures: ['Basic invoicing', 'Easy to use accounting', 'Mutli-accounts'],w
    // },
    {
      name: 'Scale',
      id: 'tier-scale',
      href: '#',
      featured: true,
      description: 'The best financial services for your thriving business.',
      price: { monthly: '$60', annually: '$576' },
      mainFeatures: [
        'Advanced invoicing',
        'Easy to use accounting',
        'Mutli-accounts',
        'Tax planning toolkit',
        'VAT & VATMOSS filing',
        'Free bank transfers',
      ],
    },
    // {
    //   name: 'Growth',
     
    //   href: '#',
    //   featured: false,
    //   description: 'Convenient features to take your business to the next level.',
    //   price: { monthly: '$30', annually: '$288' },
    //   mainFeatures: ['Basic invoicing', 'Easy to use accounting', 'Mutli-accounts', 'Tax planning toolkit'],
    // },
  ],
  sections: [
    {
      name: 'Catered for business',
      features: [
        { name: 'Tax Savings', tiers: { Starter: true, Scale: true, Growth: true } },
        { name: 'Easy to use accounting', tiers: { Starter: true, Scale: true, Growth: true } },
        { name: 'Multi-accounts', tiers: { Starter: '3 accounts', Scale: 'Unlimited accounts', Growth: '7 accounts' } },
        { name: 'Invoicing', tiers: { Starter: '3 invoices', Scale: 'Unlimited invoices', Growth: '10 invoices' } },
        { name: 'Exclusive offers', tiers: { Starter: false, Scale: true, Growth: true } },
        { name: '6 months free advisor', tiers: { Starter: false, Scale: true, Growth: true } },
        { name: 'Mobile and web access', tiers: { Starter: false, Scale: true, Growth: false } },
      ],
    },
    {
      name: 'Other perks',
      features: [
        { name: '24/7 customer support', tiers: { Starter: true, Scale: true, Growth: true } },
        { name: 'Instant notifications', tiers: { Starter: true, Scale: true, Growth: true } },
        { name: 'Budgeting tools', tiers: { Starter: true, Scale: true, Growth: true } },
        { name: 'Digital receipts', tiers: { Starter: true, Scale: true, Growth: true } },
        { name: 'Pots to separate money', tiers: { Starter: false, Scale: true, Growth: true } },
        { name: 'Free bank transfers', tiers: { Starter: false, Scale: true, Growth: false } },
        { name: 'Business debit card', tiers: { Starter: false, Scale: true, Growth: false } },
      ],
    },
  ],
}


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Membership() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [frequency, setFrequency] = useState(pricing.frequencies[0])

 const initialOptions = {
        clientId: "AZU3oztDcWLmqmnY-bED6GW8jjMYP8XpfgF6h3TBaFXDgaTWQkVTWzsrkX3dh5ThFQoffrypZl3QFsJE",
        // Add other options as needed
        currency:"USD",
        
        
    };

const style ={
  layout: "horizontal",
  color:"gold",
}
  return (
    <>
    <Helmet>
                {/* Basic meta tags */}
                <title>Membership | International Journal Publication and Conference</title>
                <meta 
                  name="description" 
                  content="Leading platform for international journal publications, academic conferences, and advanced courses in Data Science and AI." 
                />
                <meta 
                  name="keywords" 
                  content="research journal, international publication, academic conference, data science courses" 
                />
        
                {/* Open Graph meta tags */}
                <meta property="og:title" content="Zep Research | International Journal Publication" />
                <meta 
                  property="og:description" 
                  content="Leading platform for international journal publications and conferences" 
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://zepresearch.com" />
                <meta property="og:image" content="/og-image.jpg" />
        
                {/* Twitter Card meta tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Zep Research | International Journal Publication" />
                <meta 
                  name="twitter:description" 
                  content="Leading platform for international journal publications and conferences" 
                />
                <meta name="twitter:image" content="/og-image.jpg" />
        
                {/* Canonical URL */}
                <link rel="canonical" href="https://zepresearch.com" />
              </Helmet>
    <div className="bg-white">
      {/* Header */}
    

      <main>
        {/* Pricing section */}
        <div className="isolate overflow-hidden">
          <div className="flow-root bg-slate-50 py-16 sm:pt-32 lg:pb-0 ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="relative z-10">
                <h1 className="mx-auto max-w-4xl text-center text-5xl font-bold tracking-tight ">
                  Simple pricing, no commitment
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-8 text-gray-800">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos odit doloribus
                  molestiae voluptatum quos odit doloribus.
                </p>  
              </div>
               <div className='flex items-center justify-center'>
                <div className="mt-16 flex justify-center flex-col">
                  
                </div>
              <div className="relative mx-auto mt-10   max-w-md  gap-y-8 lg:mx-0 lg:-mb-14 lg:max-w-none  w-2/5 ">
                <svg
                  viewBox="0 0 1208 1024"
                  aria-hidden="true"
                  className="absolute justify-center items-center flex -bottom-48 left-1/2 h-[64rem] -translate-x-1/2 translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] lg:-top-48 lg:bottom-auto lg:translate-y-0"
                >
                  <ellipse cx={604} cy={512} fill="url(#d25c25d4-6d43-4bf9-b9ac-1842a30a4867)" rx={604} ry={512} />
                  <defs>
                    <radialGradient id="d25c25d4-6d43-4bf9-b9ac-1842a30a4867">
                      <stop stopColor="#2B6BEE" />
                      <stop offset={1} stopColor="#2DAFF2" />
                    </radialGradient>
                  </defs>
                </svg>
                <div
                  className="hidden lg:absolute lg:inset-x-px lg:bottom-0 lg:top-4 lg:block lg:rounded-t-2xl lg:bg-gray-800 lg:ring-1 lg:ring-white/10"
                  aria-hidden="true"
                />
                {pricing.tiers.map((tier) => (
                  <div
                    key={tier.id}
                    className={classNames(
                      tier.featured
                        ? 'z-10 bg-white shadow-xl ring-1 ring-gray-900/10'
                        : 'bg-gray-800/80 ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0',
                      'relative rounded-2xl'
                    )}
                  >
                    <div className="p-8 lg:pt-12 xl:p-10 xl:pt-14">
                      <h2
                        id={tier.id}
                        className={classNames(
                          tier.featured ? 'text-gray-900' : 'text-white',
                          'text-sm font-semibold leading-6'
                        )}
                      >
                        {tier.name}
                      </h2>
                      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch">
                        <div className="mt-2 flex items-center gap-x-4">
                          <p
                            className={classNames(
                              tier.featured ? 'text-gray-900' : 'text-white',
                              'text-4xl font-bold tracking-tight'
                            )}
                          >
                            {tier.price[frequency.value]}
                          </p>
                          <div className="text-sm leading-5">
                            <p className={tier.featured ? 'text-gray-900' : 'text-white'}>USD</p>
                            <p
                              className={tier.featured ? 'text-gray-500' : 'text-gray-400'}
                            >{`Billed ${frequency.value}`}</p>
                          </div>
                        </div>
                        <a
                          href="https://buy.stripe.com/test_6oE5ole1xa5324M000"
                          aria-describedby={tier.id}
                          className={classNames(
                            tier.featured
                              ? 'bg-blue-600 shadow-sm hover:bg-blue-500 focus-visible:outline-blue-600'
                              : 'bg-white/10 hover:bg-white/20 focus-visible:outline-white',
                            'rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                          )}
                        >
                          Buy this plan
                        </a>
                        <PayPalScriptProvider  options={initialOptions}>
                <PayPalButtons style={style}/>
            </PayPalScriptProvider>
                      </div>
                      <div className="mt-8 flow-root sm:mt-10">
                        <ul
                          role="list"
                          className={classNames(
                            tier.featured
                              ? 'divide-gray-900/5 border-gray-900/5 text-gray-600'
                              : 'divide-white/5 border-white/5 text-white',
                            '-my-2 divide-y border-t text-sm leading-6 lg:border-t-0'
                          )}
                        >
                          {tier.mainFeatures.map((mainFeature) => (
                            <li key={mainFeature} className="flex gap-x-3 py-2">
                              <CheckIcon
                                className={classNames(
                                  tier.featured ? 'text-blue-600' : 'text-gray-500',
                                  'h-6 w-5 flex-none'
                                )}
                                aria-hidden="true"
                              />
                              {mainFeature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
                </div> 
            </div>
          </div>
          <div className="relative bg-gray-50 lg:pt-14 drop-shadow-2xl">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">


              {/* Feature comparison (up to lg) */}
             

              {/* Feature comparison (lg+) */}
         
              
            </div>
          </div>
        </div>

        
      </main>

      {/* Footer */}
     
    </div>
    </>
  )
}
