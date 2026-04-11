import React from 'react'
import { Link } from "react-router-dom";
import { BrainCog } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const Hero = () => {
  return (
    <div className='relative min-h-screen flex items-center justify-center 
bg-linear-to-br from-[#020617] via-[#0f172a] to-[#ff7a18]/20 
text-white px-4 sm:px-6 pt-24 overflow-hidden'>

      {/* BACKGROUND ANIMATION */}
      <div className="absolute inset-0 z-0 opacity-60 hidden md:flex items-center justify-center mt-10">
        <DotLottieReact
          src="https://lottie.host/0ddc20e4-2355-4b45-adce-92e4766a3a97/KidZ5v3vKp.lottie"
          loop
          autoplay
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className='relative z-10 max-w-3xl text-center'>

        {/* TITLE */}
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-mono leading-tight'>
          Ace Your <span className='text-orange-500'>Interviews</span> with{" "}
          <span className='text-orange-500 drop-shadow-[0_0_10px_rgba(249,115,22,0.7)]'>
            AI
          </span>
          <BrainCog
            className='inline-block ml-2 sm:ml-3 text-orange-400 mb-1'
            size={28}
          />
        </h1>

        {/* DESCRIPTION */}
        <p className='text-sm sm:text-base md:text-lg text-gray-300 mt-4 mb-8 font-mono px-2'>
          Practice real interview questions, analyze your resume, and get AI-powered feedback to land your dream job.
        </p>

        {/* BUTTONS */}
        <div className='flex flex-col sm:flex-row justify-center gap-4 sm:gap-5'>

          <Link
            to="/ai-interviews-prep"
            className='bg-orange-500 hover:bg-orange-600 text-white font-mono 
            px-6 py-3 rounded-full text-base sm:text-lg font-medium 
            transition duration-200 shadow-md hover:scale-105 active:scale-95'
          >
            Start <span className="font-bold text-black font-serif">Preparing</span> Now
          </Link>

          <Link
            to="/about"
            className='border border-orange-500 hover:bg-orange-500 text-white font-mono 
            px-6 py-3 rounded-full text-base sm:text-lg font-medium 
            transition duration-200 hover:scale-105 active:scale-95'
          >
            Learn More
          </Link>

        </div>

      </div>

    </div>
  )
}

export default Hero