import React from "react";
import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto w-full max-w-screen-xl px-6 py-10 md:flex md:items-center md:justify-between">
        {/* Left Side - Logo + Name */}
        <div className="flex items-center space-x-3 mb-6 md:mb-0">
          <Link to="/" className="flex items-center">
            <img
              src="https://avatars.githubusercontent.com/u/118378275?v=4"
              className="h-12 w-12 rounded-full border-2 border-orange-600"
              alt="Logo"
            />
          </Link>
          <span className="text-xl font-bold text-gray-800">Shivkant Pal</span>
        </div>

        {/* Middle - Quick Links */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 text-sm">
          <div>
            <h2 className="mb-4 font-semibold text-gray-900 uppercase">
              Pages
            </h2>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-orange-600 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-orange-600 transition">
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-orange-600 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 font-semibold text-gray-900 uppercase">
              Follow Me
            </h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/shivkantx"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-orange-600 transition"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-orange-600 transition"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-orange-600 transition"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 font-semibold text-gray-900 uppercase">
              Legal
            </h2>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="hover:text-orange-600 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-orange-600 transition">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side - Social Icons */}
        <div className="flex mt-6 md:mt-0 space-x-6">
          <a
            href="https://github.com/shivkantx"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 hover:text-orange-600 transition transform hover:scale-110"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 hover:text-orange-600 transition transform hover:scale-110"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 hover:text-orange-600 transition transform hover:scale-110"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-200 mt-6 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Shivkant Pal. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
