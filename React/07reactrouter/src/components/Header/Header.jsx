import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Right side buttons (always visible on large screens) */}
          <div className="hidden lg:flex items-center lg:order-2">
            <Link
              to="/login"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 mr-2"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 mr-2"
            >
              Get started
            </Link>
          </div>

          {/* Navigation Links */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full lg:flex lg:w-auto lg:order-1`}
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 font-bold pr-4 pl-3 duration-200 ${
                      isActive
                        ? "text-orange-700 font-semibold"
                        : "text-gray-700 hover:text-orange-700"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 font-bold pl-3 duration-200 ${
                      isActive
                        ? "text-orange-700 font-semibold"
                        : "text-gray-700 hover:text-orange-700"
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 font-bold pl-3 duration-200 ${
                      isActive
                        ? "text-orange-700 font-semibold"
                        : "text-gray-700 hover:text-orange-700"
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/github"
                  className={({ isActive }) =>
                    `block py-2 pr-4 font-bold pl-3 duration-200 ${
                      isActive
                        ? "text-orange-700 font-semibold"
                        : "text-gray-700 hover:text-orange-700"
                    }`
                  }
                >
                  Github
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/user"
                  className={({ isActive }) =>
                    `block py-2 pr-4  font-bold pl-3 duration-200 ${
                      isActive
                        ? "text-orange-700 font-semibold"
                        : "text-gray-700 hover:text-orange-700"
                    }`
                  }
                >
                  User
                </NavLink>
              </li>
            </ul>

            {/* Mobile buttons (inside dropdown) */}
            <div className="flex flex-col mt-4 space-y-2 lg:hidden">
              <Link
                to="/login"
                className="w-full text-center text-gray-800 border rounded-lg px-4 py-2 hover:bg-gray-50"
              >
                Log in
              </Link>
              <Link
                to="/signup"
                className="w-full text-center text-white bg-orange-700 rounded-lg px-4 py-2 hover:bg-orange-800"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
