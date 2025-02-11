"use client"

import  React from "react"
import { useState } from "react"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import axios from "axios"

export default function CourseContactForm() {
  const [showThankYou, setShowThankYou] = useState(false)
  const [phone, setPhone] = useState("")
  const [phoneCountryCode, setPhoneCountryCode] = useState("")
  const [formattedPhone, setFormattedPhone] = useState("")
  const [showPopup, setShowPopup] = useState(false) // Add state for confetti popup

  
  async function Submit(e) {
    e.preventDefault();
    console.log("Form submitted");
    const formEle = e.currentTarget;
    const formDatab = new FormData(formEle);
  
    // Use the formatted phone number for submission
    formDatab.set("Phone", formattedPhone);
  
    try {
      // Convert FormData to URL-encoded string
      const formDataString = new URLSearchParams(formDatab).toString();
  
      const response = await axios({
        method: 'post',
        url: 'https://script.google.com/macros/s/AKfycbw687RlYzVKtWUmMlErx0iFZoE0ZZbDmgx723QroHsNZyeYsEuXJnuktCXw-X3CpWqdMA/exec',
        data: formDataString,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
  
      console.log("Form submission successful:", response.data);
      formEle.reset();
      // Reset phone input
      setPhone("");
      setPhoneCountryCode("");
      setFormattedPhone("");
  
      // Show thank you message
      setShowThankYou(true);
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting the form. Please try again.");
    }
  }


  return (
    <div id="form" className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
        <p className="mt-4 text-xl text-gray-600">We're here to help you take the next step in your career.</p>

      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {/* Form Section */}
        <div className="bg-gray-50 shadow-xl rounded-lg overflow-hidden">
          <div className="px-6 py-8">
            <h3 className="text-3xl font-bold text-gray-900 ">Get in Touch</h3>
            <p className="my-2 text-lg text-indigo-600 font-semibold mb-6">
          Fill out this form for a chance to receive an exclusive discount!
        </p>
            <form onSubmit={Submit} className="space-y-6">
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="Name"
                    id="Name"
                    autoComplete="given-name"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="LastName"
                    id="LastName"
                    autoComplete="family-name"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
                  id="Email"
                  autoComplete="Email"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <PhoneInput
                    country={"in"}
                    value={phone}
                    onChange={(value, country) => {
                      setPhone(value)
                      setPhoneCountryCode(country.dialCode)
                      setFormattedPhone(value)
                    }}
                    inputProps={{
                      name: "Phone",
                      required: true,
                    }}
                    containerStyle={{ width: "100%" }}
                    inputStyle={{
                      width: "100%",
                      height: "42px",
                      borderRadius: "0.5rem",
                      borderColor: "#D1D5DB",
                    }}
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
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Ask about our courses, share your learning goals, or inquire about potential discounts..."
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
                >
                  Apply Now and Get Discount Info
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="bg-gradient-to-br from-blue-400 to-indigo-600 text-white shadow-xl rounded-lg overflow-hidden">
          <div className="px-6 py-8 flex justify-center items-start flex-col h-full">
            <div className="mb-8">
              <img
                className="bg-cover bg-center *: w-full rounded-lg object-cover"
                src="https://images.unsplash.com/photo-1626863905121-3b0c0ed7b94c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="AI and Data Science"
              />
            </div>
            <h3 className="text-3xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg">Email</h4>
                <p>info@zepresearch.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg">Phone</h4>
                <p>+852 51359932</p>
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
                Your application has been successfully submitted. We'll get back to you soon with course details and
                your exclusive discount offer!
              </p>
            </div>
            <div className="items-center px-4 py-3">
              <button
                id="ok-btn"
                className="px-4 py-2 bg-indigo-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300"
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

