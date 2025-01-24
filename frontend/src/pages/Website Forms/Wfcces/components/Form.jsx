"use client"

import axios from "axios" // Import axios
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function WfccesForm() {
  function redirectToWfcces() {
    window.location.href = "https://www.wfcces.com/"
  }

  async function Submit(e) {
    e.preventDefault()
    console.log("Form submitted")
    const formEle = e.currentTarget
    const formDatab = new FormData(formEle)

    try {
      const response = await axios.post(
        "https://script.google.com/macros/s/AKfycbxiBHus3dUw7WBdvG_AQUjBl7b81VBFfWXH-qNGnq5hDbcj7hk5YsMw-XeE2j2rvhd7aQ/exec",
        formDatab,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      )
      toast.success("Form submission successful:");

      console.log("Form submission successful:", response.data)
      formEle.reset()
      // Redirect to WFCCES website after successful submission
      setTimeout(() => {
        redirectToWfcces()
      }, 5000);
      
     
    } catch (error) {
      console.error("Form submission error:", error)
      alert("There was an error submitting the form. Please try again.")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="ml-2 gap-5 mb-8">
          <h1 className="md:text-5xl text-3xl font-bold text-blue-900 mb-4">
            World Forum on Climate Change and Environmental Sustainability
          </h1>
          <p className="text-gray-600 md:text-xl text-lg">
          Fill up the form to secure your spot in WFCCES conference
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Form Section */}
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Let's Chat, Reach Out to Us</h2>
              <p className="text-gray-600 text-sm">
                Have questions or feedback? We're here to help. Send us a message, and we'll respond within 24 hours.
              </p>
            </div>

            <form onSubmit={Submit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="Name" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                  placeholder="John"
                    type="text"
                    name="Name"
                    id="Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="LastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                  placeholder="Doe"
                    name="LastName"
                    id="LastName"
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="Country" className="block text-sm font-medium text-gray-700 mb-1">
                    Country
                  </label>
                  <input
                  placeholder="India"
                    type="text"
                    name="Country"
                    id="Country"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="Phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                  placeholder="91+ 9821114112"
                    type="number"
                    id="Phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                    name="Phone"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="Email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  placeholder="JoheDoe@gmail.com"
                  type="email"
                  name="Email"
                  id="Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="Message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  placeholder="Your message here..."
                  name="Message"
                  id="Message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="relative overflow-hidden rounded-3xl bg-blue-50 p-8">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute h-64 w-64 rounded-full border-8 border-blue-200"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                />
              ))}
            </div>

            <div className="relative ">
              <img
                src={`https://plus.unsplash.com/premium_photo-1661764559869-f6052a14b4c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                alt="Contact support"
                className="mb-8 rounded-3xl mx-auto"
              />

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Email</p>
                    <p className="text-sm text-gray-600">info@wfcces.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Phone</p>
                    <p className="text-sm text-gray-600">+91 82600 80050</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Venue</p>
                    <p className="text-sm text-gray-600"> Kuala Lumpur, Malaysia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

