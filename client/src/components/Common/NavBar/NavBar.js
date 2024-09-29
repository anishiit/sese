"use client"
// ======================== Imports ========================
import 'flowbite';
import React, { useState } from 'react'
import NavLinks from './NavLinks'
import Link from "next/link";
import AnimatedElement from '../Animation/AnimatedElement';
import HamburgerIcon from './HamburgerIcon';

export default function Navbar() {
  const [NavOpen, setNavOpen] = useState(false)

  
  return (
    <>
      <div className='sticky bg-white bg-opacity-40 top-0 z-50 backdrop-blur-2xl transform transition-all duration-1000 ease-in-out'>
        <nav className="bg-transparent">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-2">

            {/* college name and logo  */}
            <Link href="/" className="flex  justify-between space-x-3">
            <div  className="flex items-center">
             <img src="/logo.jpeg" className="h-6 md:h-8 lg:h-10 px-2 " alt="SESE Logo" />
              <AnimatedElement className="font-bold  font-serif text-xs sm:text-lg text-blue-900 ">
              Society of Environmental Science and Engineers
                <div className="text-[8px] sm:text-xs text-right ">
                  ...Shaping a Sustainable Future
                </div>
              </AnimatedElement></div>
              <div> </div>
             
             
            </Link>

          

            {/* Hamburger */}
            {/* <button className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden dark:text-gray-400 " aria-expanded="false"
              onClick={() => { setNavOpen(prev => !prev) }}>

              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button> */}
            <button className='md:hidden' onClick={() => { setNavOpen(prev => !prev) }} >
              <HamburgerIcon NavOpen={NavOpen} />
            </button> 
            <img src="/collegelogo.png" className="h-6 md:h-8 lg:h-10" alt="SESE Logo" />
          </div>
         
        </nav>

        <nav className="bg-transparent flex justify-evenly items-center">
          <div className={`items-center justify-center ${NavOpen ? 'h-96 p-2' : 'h-0'} transition-transition-height duration-500 ease-in-out overflow-hidden md:overflow-visible md:h-full md:p-2 w-full md:flex bg-blue-950 md:order-1`} >

            {/* Nav Links */}
            <AnimatedElement>
              <ul className="flex  flex-col p-2 md:p-0 font-medium md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
                <NavLinks />
              </ul>
            </AnimatedElement>

          </div>
         
        </nav>
      </div>

      <div className='scroll-watcher'></div>

    </>
  )
}