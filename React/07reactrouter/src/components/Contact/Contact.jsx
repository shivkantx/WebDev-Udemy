import React from "react";

export default function Contact() {
  return (
    <section className="relative flex items-center justify-center min-h-[700px] bg-white py-8">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-50 rounded-xl shadow-lg overflow-hidden">
          {/* Left: Personal Info */}
          <div className="p-8 bg-gray-100">
            <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
              Let's Talk
            </h1>
            <p className="text-lg font-medium text-gray-600 mt-2">
              I'm Shiv Kant — a Full-Stack Developer (Django & MERN), DSA
              enthusiast.
            </p>

            {/* Email */}
            <div className="flex items-center mt-8 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-orange-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div className="ml-4 text-md font-semibold">
                <a
                  href="mailto:shivkant639624@gmail.com"
                  className="hover:underline"
                >
                  shivkant639624@gmail.com
                </a>
              </div>
            </div>

            {/* Social & Coding Links */}
            <div className="mt-8 space-y-4">
              <div>
                <strong>Connect with me:</strong>
              </div>
              <div className="flex flex-wrap gap-4 mt-2">
                <a
                  href="https://www.linkedin.com/in/shiv-kant-036a17289"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-orange-700 font-medium"
                >
                  LinkedIn
                </a>
                <a
                  href="https://leetcode.com/u/shivkant252/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-orange-700 font-medium"
                >
                  LeetCode
                </a>
                <a
                  href="https://www.geeksforgeeks.org/user/shivkantllj0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-orange-700 font-medium"
                >
                  GeeksforGeeks
                </a>
                <a
                  href="https://www.naukri.com/code360/profile/51b51bb6-9490-4ef9-b6d3-fef0fcdf3a60"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-orange-700 font-medium"
                >
                  Coding Ninjas (Code360)
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <form className="p-8 flex flex-col justify-center bg-white">
            <div className="flex flex-col mb-4">
              <label htmlFor="name" className="hidden">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Full Name"
                className="py-3 px-4 rounded-lg border border-gray-300 text-gray-800 font-medium focus:border-orange-500 focus:ring-2 focus:ring-orange-400 outline-none"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="email" className="hidden">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="py-3 px-4 rounded-lg border border-gray-300 text-gray-800 font-medium focus:border-orange-500 focus:ring-2 focus:ring-orange-400 outline-none"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="message" className="hidden">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Your message..."
                className="py-3 px-4 rounded-lg border border-gray-300 text-gray-800 font-medium focus:border-orange-500 focus:ring-2 focus:ring-orange-400 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full md:w-40 bg-orange-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-orange-800 transition ease-in-out duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
