import React from 'react'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { useAuth } from '../../context/AuthContext';
import { Helmet } from 'react-helmet-async';
function BecomeMember() {
  
  const { authState, updateAuthState } = useAuth();
  return (
    <>
    <Helmet>
            {/* Basic meta tags */}
            <title>Become Member | Zep Research | International Journal Publication and Conference</title>
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
    {
    authState.isLoggedIn ?
      <>
      <div className='max-w-6xl mx-auto flex flex-col justify-center items-center my-12 py-36'>
     <form>
      <div className="space-y-12">
       

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>
          </div>

          <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Country
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div> */}

            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
               Department
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>


 <div className="sm:col-span-4">
              <label htmlFor="university" className="block text-sm font-medium leading-6 text-gray-900">
                University

              </label>
              <div className="mt-2">
                <input
                  id="university"
                  name="university"
                  type="text"
                  autoComplete="university"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
 <div className="sm:col-span-4">
              <label htmlFor="designation" className="block text-sm font-medium leading-6 text-gray-900">
                Designation

              </label>
              <div className="mt-2">
                <input
                  id="designation"
                  name="designation"
                  type="text"
                  autoComplete="designation"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

<div className="sm:col-span-3">
              <label htmlFor="phone-number" className="block text-sm font-medium leading-6 text-gray-900">
                Phone number
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="whatsapp-number" className="block text-sm font-medium leading-6 text-gray-900">
                Whatsapp Number
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="whatsapp-number"
                  id="whatsapp-number"
                  autoComplete="whatsapp-number"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

          </div>
        </div>

        {/* <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              We'll always let you know about important changes, but you pick what else you want to hear about.
            </p>
          </div>

          <div className="max-w-2xl space-y-10 md:col-span-2">
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">By Email</legend>
              <div className="mt-6 space-y-6">
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="comments" className="font-medium text-gray-900">
                      Comments
                    </label>
                    <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="candidates"
                      name="candidates"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="candidates" className="font-medium text-gray-900">
                      Candidates
                    </label>
                    <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Offers
                    </label>
                    <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">Push Notifications</legend>
              <p className="mt-1 text-sm leading-6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                    Everything
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                    Same as email
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-nothing"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                    No push notifications
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div> */}
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Submit
        </button>
      </div>
    </form>
   </div>
      </>
      :
      <> 
      <div
      className='h-screen w-screen text-5xl flex  justify-center items-center'
      >
        <h1>PLEASE LOGIN FOR BECOME MEMBER</h1>
      </div>
      </>
    }
   
    </>
  )
}

export default BecomeMember























            // <div className="sm:col-span-2 sm:col-start-1">
            //   <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
            //     City
            //   </label>
            //   <div className="mt-2">
            //     <input
            //       type="text"
            //       name="city"
            //       id="city"
            //       autoComplete="address-level2"
            //       className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            //     />
            //   </div>
            // </div>

            // <div className="sm:col-span-2">
            //   <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
            //     State / Province
            //   </label>
            //   <div className="mt-2">
            //     <input
            //       type="text"
            //       name="region"
            //       id="region"
            //       autoComplete="address-level1"
            //       className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            //     />
            //   </div>
            // </div>

            // <div className="sm:col-span-2">
            //   <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
            //     ZIP / Postal code
            //   </label>
            //   <div className="mt-2">
            //     <input
            //       type="text"
            //       name="postal-code"
            //       id="postal-code"
            //       autoComplete="postal-code"
            //       className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            //     />
            //   </div>
            // </div>