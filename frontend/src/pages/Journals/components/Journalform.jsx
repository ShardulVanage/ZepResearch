import React, { useState, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { Book, Send, Paperclip } from "lucide-react";
import axios from "axios";
import emailjs from "@emailjs/browser";
import Select from "react-select";
import countryList from "react-select-country-list";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function JournalSummationForm() {
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");
  const [phone, setPhone] = useState("");
  const form = useRef();

  // Cloudinary configuration
  const CLOUDINARY_UPLOAD_PRESET = "ml_default"; // Replace with your upload preset
  const CLOUDINARY_CLOUD_NAME = "dwlhesiyi"; // Your cloud name

  // Email.js configuration
  const EMAIL_JS_SERVICE_ID = "service_k0vmj0o";
  const EMAIL_JS_TEMPLATE_ID = "template_tky806n";
  const EMAIL_JS_PUBLIC_KEY = "6Go2235EEKikAwNMK";

  const uploadToCloudinary = async (file) => {
    // ... (unchanged)
  };

  const handleFileChange = async (e) => {
    // ... (unchanged)
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Add the PDF URL and phone number to the form data
      const formData = new FormData(form.current);
      formData.append("pdf_url", pdfUrl);
      formData.append("phone", phone);

      const result = await emailjs.sendForm(
        EMAIL_JS_SERVICE_ID,
        EMAIL_JS_TEMPLATE_ID,
        form.current,
        EMAIL_JS_PUBLIC_KEY
      );

      console.log("SUCCESS!", result.text);
      alert("Form submitted successfully!");
      // Reset form after successful submission
      form.current.reset();
      setFileName("");
      setPdfUrl("");
      setUploadStatus("");
      setPhone("");
    } catch (error) {
      console.error("FAILED...", error.text);
      alert("Error submitting form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full"
      >
        <div className="flex items-center justify-center mb-8">
          <Book className="w-12 h-12 text-blue-600 mr-4" />
          <h1 className="text-3xl font-bold text-gray-800">
            Journal Submission
          </h1>
        </div>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          {/* Form fields */}
          {[
            { name: "name", label: "Name", type: "text" },
            { name: "email", label: "Email", type: "email" },
            { name: "university", label: "University", type: "text" },
            { name: "journal", label: "Journal Name", type: "text" },
            { name: "country", label: "Country", type: "text" },
          ].map((field, index) => (
            <motion.div
              key={field.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <label
                htmlFor={field.name}
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {field.label}
              </label>
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </motion.div>
          ))}

          {/* Phone input field */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone/WhatsApp Number
            </label>
            <PhoneInput
              country={"us"}
              value={phone}
              onChange={setPhone}
              inputProps={{
                name: "phone",
                required: true,
                className:
                  "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500",
              }}
            />
          </motion.div>

          {/* Message field */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </motion.div>

          {/* Hidden field for PDF URL */}
          <input type="hidden" name="pdf_url" value={pdfUrl} />

          {/* File upload section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
          >
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload File
            </label>
            <div className="mt-1 flex flex-col space-y-2">
              <label className="cursor-pointer bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 inline-flex items-center">
                <Paperclip className="w-4 h-4 mr-2" />
                <span>{loading ? "Uploading..." : "Choose File"}</span>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="sr-only"
                  onChange={handleFileChange}
                  disabled={loading}
                />
              </label>
              {fileName && (
                <span className="text-sm text-gray-500">
                  Selected file: {fileName}
                </span>
              )}
              {uploadStatus && (
                <span
                  className={`text-sm ${
                    uploadStatus.includes("successfully")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {uploadStatus}
                </span>
              )}
            </div>
          </motion.div>

          {/* Submit button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300 disabled:bg-gray-400"
            >
              {loading ? "Submitting..." : "Submit"}{" "}
              <Send className="w-4 h-4 ml-2" />
            </button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
}
