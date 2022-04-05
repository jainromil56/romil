import React from "react";
import {CgCoffee} from 'react-icons/cg'

function Nav() {
  return (
    <div>
      <header className="text-gray-600 body-font shadow-md">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
            <CgCoffee className="text-4xl text-purple-700"/>
            <span className="ml-3 text-xl">Romil Jain</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base font-medium justify-center">
            <a className="mr-5 hover:text-purple-800 cursor-pointer">Home</a>
            <a className="mr-5 hover:text-purple-800 cursor-pointer">About</a>
            <a className="mr-5 hover:text-purple-800 cursor-pointer">Skills</a>
            <a className="mr-5 hover:text-purple-800 cursor-pointer">Projects</a>
            <a className="mr-5 hover:text-purple-800 cursor-pointer">Contact me</a>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
}

export default Nav;
