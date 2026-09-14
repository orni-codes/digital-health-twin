import React, { useState } from 'react'
import assets from "../assets/assets"
import ThemeToggleBtn from './ThemeToggleBtn'
import { Link } from "react-router-dom";


const Navbar = ({ theme, setTheme }) => {

    const[sidebarOpen,setSidebarOpen]=useState(false)


  return (
    <div className='flex justify-between items-center px-4 sm:px-6 lg:px-12 xl:px-36 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70'>
      <div className="flex items-center shrink-0">
        <a href="#home" className="flex items-center">
        <img
          src="/favicon.ico"
          alt="logo"
          className="w-8 h-8 lg:w-10 lg:h-10"
        />
        <h1 className="ml-2 text-2xl font-black dark:text-white">
        Digital Health Twin
        </h1>
        </a>
      </div>

      <div className={`text-gray-700 dark:text-white sm:text-sm ${!sidebarOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:item-ceter gap-8 transition-all`}>

        <img src={assets.close_icon} alt='' className='w-5 absolute right-4 top-4 sm:hidden' onClick={()=> setSidebarOpen(false)}/>
        <a onClick={()=> setSidebarOpen(false)}href="#" className='sm:hover:border-b'>Home</a>
        <a onClick={()=> setSidebarOpen(false)}href="#services" className='sm:hover:border-b'>Services</a>
        <a onClick={()=> setSidebarOpen(false)}href="#features" className='sm:hover:border-b'>Features</a>
        <a onClick={()=> setSidebarOpen(false)}href="#howtouse" className='sm:hover:border-b'>How to use</a>
        <a onClick={()=> setSidebarOpen(false)}href="#resources" className='sm:hover:border-b'>Resources</a>
        <div className="flex flex-col gap-4 mt-6 sm:hidden pr-10">
          <Link onClick={() => setSidebarOpen(false)} to="/login" className="border border-white py-2 px-4 rounded-full text-center hover:bg-white hover:text-primary transition-colors">
            Sign In
          </Link>
          <Link onClick={() => setSidebarOpen(false)} to="/signup" className="bg-white text-primary py-2 px-4 rounded-full text-center hover:bg-cyan-700 hover:text-white transition-colors font-bold">
            Sign Up
          </Link>
        </div>
      </div>

      <div className='flex items-center gap-2 sm:gap-4'>

        <ThemeToggleBtn theme={theme} setTheme={setTheme}/>

        <img src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon} onClick={()=> setSidebarOpen(true)} className='w-8 sm:hidden' />

        <Link
        to="/signup" href="#signin" className='text-xl max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all'>
          
          Sign In <img src={assets.arrow_icon} width={16} alt=''/>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
