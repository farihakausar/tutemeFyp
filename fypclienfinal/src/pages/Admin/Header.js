import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownToggle, DropdownMenu } from 'react-bootstrap';
export default function Header() {
  return (
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8 bg-gray-800">
    <header class="flex items-center justify-between py-4 md:py-8">
     
      <a href="/" class="inline-flex items-center gap-2.5 text-2xl font-bold text-white md:text-3xl" aria-label="logo">
       

       Admin Panel
      </a>
     
      {/* <nav class="hidden gap-12 lg:flex">
        <a href="#" class="text-lg font-semibold text-indigo-500">Home</a>
        <a href="#" class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Features</a>
        <a href="#" class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Pricing</a>
        <a href="#" class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">About</a>
      </nav> */}
    
     
      {/* <button type="button" class="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
        </svg>

        Menu
      </button> */}
       {/* <Dropdown>
    <Dropdown.Toggle variant="secondary" id="dropdown-profile" className="mr-5 hover:text-white font-education hover:underline">
    <div class="h-7 w-7 overflow-hidden rounded-full bg-gray-100 shadow-lg  md:h-7 md:w-7">
          <img src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=256" loading="lazy" alt="Photo by Radu Florin" class="h-full w-full object-cover object-center" />
        </div>
        <p>Nmae</p>
    </Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Item href="/editprofile">Edit profile</Dropdown.Item>
      <Dropdown.Item href="/myhometutors">courses \\ home \\ online</Dropdown.Item>
      <Dropdown.Item href="/chat">msgs</Dropdown.Item>
      <Dropdown.Item href="/chat"><button >logout</button></Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown> */}
   
    </header>
</div>
  )
}
