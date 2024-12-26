import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { Helmet } from 'react-helmet-async';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_k0vmj0o', 'template_3oh54ti', form.current, {
        publicKey: '6Go2235EEKikAwNMK',
      })
      .then(
        () => {
         toast.success('Message sent successfully!');
        },
        (error) => {
          toast.error('An error occurred while sending the message.',error);
        },
      );
      form.current.reset();
  };
  return (
    <>
     <Helmet>
                        {/* Basic meta tags */}
                        <title>ContactUs | International Journal Publication and Conference</title>
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
        
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg ">
              
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in touch</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We'd love to hear from you. Please fill out this form and we will get in touch with you shortly.
              </p>
              <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <BuildingOffice2Icon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd>
                    DCB-330,<br />
                   3rd Floor, DLF Cyber City, Patia, Bhubaneswar, ODISHA - 751024
India
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd>
                     <a className="hover:text-gray-900" href="tel:+91 73587 37843">
                    +91 7358737843
                  </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd>
                    <a className="hover:text-gray-900" href="mailto:info@zepresearch.com">
                    info@zepresearch.com
                  </a>
                  </dd>
                </div>
              </dl>
              <iframe
                className='mt-12 border-2 border-gray-300 rounded-lg h-[500px] w-full'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50351.01855104059!2d85.83567018735276!3d20.285284425494797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19099ff09b60c5%3A0x4c4d74eab468759f!2sZep%20Research%20Private%20Limited!5e0!3m2!1sen!2sin!4v1726046779519!5m2!1sen!2sin"
                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      autoComplete="given-name"
                      required
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      autoComplete="family-name"
                      required
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                    Phone number
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      name="phone_number"
                      id="phone_number"
                      autoComplete="tel"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      required
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <input
                  type="submit"
                
                  value={'Send message'}
                  className="rounded-md bg-gradient-to-tl from-cyan-400 via-blue-500 to-blue-600 drop-shadow-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50"
                />
                
              </div>
           
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ContactUs