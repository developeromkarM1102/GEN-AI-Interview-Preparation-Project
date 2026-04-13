import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import heroImg from "../assets/hero.jpg";


const Hero = () => {
  return (
    <div className="relative overflow-hidden flex min-h-screen pt-24">

      {/* 🖼️ BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="AI Background"
          className="w-full h-full object-cover opacity-100 brightness-[0.6]"
        />
      </div>

      {/* 🌤️ GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent z-10"></div>

      {/* ☁️ SOFT SHAPES */}
      <div className="absolute top-0 left-0 w-125 h-125 z-10"></div>
      <div className="absolute bottom-0 right-0 w-100 h-100 bg-blue-200/40 blur-3xl rounded-full z-10"></div>

      {/* 🧠 MAIN CONTENT */}
      <div className="relative z-20 text-center justify-center max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mt-6 sm:mt-15 md:mt-14">

        {/* BADGE */}
        <motion.div
          initial={{ opacity: 0, z: 20 }}
          animate={{ opacity: 1, z: 0 }}
          transition={{ duration: 2, delay: 1 }}
          className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-6"
        >
          🚀 AI Interview Platform
        </motion.div>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
  animate={{
    opacity: 1, 
    scale: [1, 1.05, 1], 
  }}
  transition={{
    opacity: { duration: 0.6, ease: "easeOut" },
    scale: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0.5,
    },
  }}
          className="text-4xl md:text-6xl font-[Raleway] text-white leading-tight mt-13"
        >
          The future of{" "}
          <span className="text-orange-400 font-[Saira+Stencil+One]">interview preparation</span> is here
        </motion.h1>

        {/* DESCRIPTION */}
        <p className="mt-6 text-lg text-white font-[Lato] max-w-2xl mx-auto">
          Practice interviews, analyze resumes, and get AI-powered feedback —
          all in one platform.
        </p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, scale: [0.95, 1.05, 1] }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 flex flex-col items-center"
        >
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
    
            <Link
            to="/ai-interviews-prep"
            className="w-full sm:w-auto text-center bg-orange-500 text-white px-5 py-4 rounded-xl text-base sm:text-lg font-medium shadow-md hover:scale-105 transition active:scale-95"
            >
            Generate My Plan
            </Link>

            <Link
            to="/about"
            className="w-full sm:w-auto text-center text-white px-6 py-4 rounded-xl text-base sm:text-lg font-medium border border-white hover:bg-white hover:text-orange-500 transition"
             >
            Learn more
            </Link>

            </div>

            <p className="text-sm text-gray-300 mt-5 text-center">
              No commitment • Free trial available
            </p>
        </motion.div>     
      </div>

    <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-b from-transparent to-[#d8e8f8] z-10"></div>

    </div >
  );
};

export default Hero;
