import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { Brain, Menu, X } from 'lucide-react';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='fixed top-0 left-0 w-full z-50 bg-black shadow-md'>

      <div className='flex justify-between items-center px-6 py-4'>

        {/* LOGO */}
        <h1 className='text-white font-bold tracking-wide flex items-center gap-2'>
          <Brain className='text-orange-400' size={30} />
          GEN-AI Prep
        </h1>

        {/* DESKTOP MENU */}
        <div className='hidden md:flex items-center gap-6 text-sm font-medium'>

          <NavLink to="/" className={navStyle}>Home</NavLink>
          <NavLink to="/ai-interviews-prep" className={navStyle}>AI Interview Prep</NavLink>
          <NavLink to="/resume-review" className={navStyle}>Resume Analyzer</NavLink>
          <NavLink to="/performance" className={navStyle}>Performance</NavLink>
          <NavLink to="/pricing" className={navStyle}>Pricing</NavLink>

        </div>

        {/* DESKTOP AUTH */}
        <div className='hidden md:flex items-center gap-4'>
          <NavLink to="/login" className={btnStyle}>Login</NavLink>
          <NavLink to="/register" className={btnStyle}>Sign Up</NavLink>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className='text-white' /> : <Menu className='text-white' />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className='md:hidden px-6 pb-4 flex flex-col gap-4 text-sm font-medium bg-black border-t border-white/10'>

          <NavLink onClick={() => setIsOpen(false)} to="/" className={mobileNav}>Home</NavLink>
          <NavLink onClick={() => setIsOpen(false)} to="/ai-interviews-prep" className={mobileNav}>AI Interview Prep</NavLink>
          <NavLink onClick={() => setIsOpen(false)} to="/resume-review" className={mobileNav}>Resume Analyzer</NavLink>
          <NavLink onClick={() => setIsOpen(false)} to="/performance" className={mobileNav}>Performance</NavLink>
          <NavLink onClick={() => setIsOpen(false)} to="/pricing" className={mobileNav}>Pricing</NavLink>

          <div className='flex flex-col gap-2 mt-4'>
            <NavLink onClick={() => setIsOpen(false)} to="/login" className={btnStyle}>Login</NavLink>
            <NavLink onClick={() => setIsOpen(false)} to="/register" className={btnStyle}>Sign Up</NavLink>
          </div>

        </div>
      )}

    </div>
  )
}

export default Navbar


// 🔥 Reusable styles
const navStyle = ({ isActive }) =>
  isActive
    ? "text-white border-b-2 border-orange-400 pb-1"
    : "text-gray-300 hover:text-orange-400 transition duration-200";

const mobileNav = "text-gray-300 hover:text-orange-400 transition duration-200";

const btnStyle = "bg-orange-500 hover:bg-green-500 text-white px-4 py-2 rounded-lg transition duration-200 active:scale-95";