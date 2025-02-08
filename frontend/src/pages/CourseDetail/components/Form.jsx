"use client"

import  React from "react"
import { useState } from "react"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import axios from "axios"

export default function CourseContactForm() {
  const [phone, setPhone] = useState("")
  const [formattedPhone, setFormattedPhone] = useState("")
  const [showThankYou, setShowThankYou] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    formData.set("Phone", formattedPhone)

    try {
      await axios.post(
        "https://script.google.com/macros/s/AKfycbzfcQy-JyDxXxf39J_GiVxO9P_Tu3-kB6YegLZUrgONt1eRc2FoFLliVIeBh6YfRKtd/exec",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      )
      setShowThankYou(true)
      e.currentTarget.reset()
      setPhone("")
      setFormattedPhone("")
    } catch (error) {
      console.error("Form submission error:", error)
      alert("There was an error submitting the form. Please try again.")
    }
  }

  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 ">Contact Us for Course Information</h2>
          <p className="mt-4 text-xl text-gray-600">We're here to help you take the next step in your career.</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Form Section */}
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="px-6 py-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="Name"
                      id="firstName"
                      autoComplete="given-name"
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="LastName"
                      id="lastName"
                      autoComplete="family-name"
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="Email"
                    id="email"
                    autoComplete="email"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <PhoneInput
                    country={"in"}
                    value={phone}
                    onChange={(value) => {
                      setPhone(value)
                      setFormattedPhone(value)
                    }}
                    inputProps={{
                      name: "Phone",
                      required: true,
                      autoComplete: "tel",
                    }}
                    containerClass="mt-1"
                    inputClass="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    buttonClass="border border-gray-300 rounded-l-md"
                  />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                    Country
                  </label>
                  <input
                    type="text"
                    name="Country"
                    id="country"
                    autoComplete="country"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="Message"
                    rows={4}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Apply Now
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="bg-gradient-to-br from-blue-400 to-blue-700  text-white shadow-xl rounded-lg overflow-hidden">
            <div className="px-6 py-8 flex justify-center items-start flex-col h-full  ">
            <div> <img className='bg-cover bg-center h-full w-full rounded-3xl' 
        src={"https://images.unsplash.com/photo-1626863905121-3b0c0ed7b94c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
         alt="bg-img" /></div>
              <h3 className="text-3xl font-bold text-center mb-12">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <p>info@zepresearch.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>
                  <p>+91 82600 80050</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      {/* Thank You Modal */}
      {showThankYou && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Thank You!</h3>
              <div className="mt-2 px-7 py-3">
                <p className="text-sm text-gray-500">
                  Your application has been successfully submitted. We'll get back to you soon!
                </p>
              </div>
              <div className="items-center px-4 py-3">
                <button
                  id="ok-btn"
                  className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  onClick={() => setShowThankYou(false)}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

