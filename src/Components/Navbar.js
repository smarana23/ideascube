import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Getstarted from "./Getstarted";
const Navbar = () => {
  return (
    <>
      <nav class="bg-white text-black">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-8"
              alt="Flowbite Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap text-black">
              Idea's Cube
            </span>
          </a>
          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-800"
            >
             <Link to="/getstarted">  Get started</Link>
            </button>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white  md:bg-white border-gray-700">
              <li>
                <Link
                  to="/"
                  class="block py-2 px-3 md:p-0 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:text-black"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  class="block py-2 px-3 md:p-0 rounded hover:bg-gray-100 hover:bg-transparent hover:text-blue-700 hover:bg-gray-700 hover:bg-transparent border-gray-700 text-black"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  class="block py-2 px-3 md:p-0 rounded hover:bg-gray-100 hover:bg-transparent hover:text-blue-700 hover:bg-gray-700 hover:bg-transparent border-gray-700 text-black" 
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
