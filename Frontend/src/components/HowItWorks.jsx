import React from "react";
import { Upload, MessageSquare, BarChart3 } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import demoVideo from "../assets/demo.webm";

const HowItWorks = () => {
  return (
    <div className="relative bg-[#eaf3fb] px-6 py-24 overflow-hidden">

      {/* 🌤️ BACKGROUND */}
      <div className="absolute inset-0 bg-linear-to-b from-[#d8e8f8] to-[#d8e8f8] z-0"></div>

      {/* ☁️ SOFT SHAPES */}
      <div className="absolute top-10 left-10 w-87.5 h-87.5 bg-white/40 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-75 h-75 bg-blue-200/40 blur-3xl rounded-full"></div>

      {/* 🔥 HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 , ease: "easeOut" , delay: 0.2}}
        viewport={{ once: true }}
        className="relative z-10 max-w-5xl mx-auto text-center mt-0 mb-20"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-0 mt-0 text-gray-800">
          How It <span className="text-blue-600 font-[Raleway]">Works</span>
        </h2>

        {/* 💻 UI MOCKUP */}
      <div className="relative z-20 mt-16 px-6 mb-20">
        <div className="max-w-2xl mx-auto rounded-2xl shadow-2xl p-3 overflow-hidden">

          <video
            src={demoVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full rounded-xl object-cover"
          />

        </div>
      </div>

        <p className="text-gray-600 text-lg font-[Lato]">
          A simple 3-step process to boost your interview performance.
        </p>
      </motion.div>

      {/* ⚡ STEPS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 , ease: "easeOut" , delay: 0.4}}
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center"
      >

        {/* STEP 1 */}
        <div className="group bg-white p-8 rounded-2xl shadow-md 
        hover:shadow-xl hover:-translate-y-2 transition duration-300 border border-gray-100">

          <div className="flex justify-center mb-4">
            <div className="p-4 bg-blue-100 rounded-full">
              <Upload className="text-blue-600 group-hover:scale-110 transition" size={34} />
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-2 text-gray-800">
            Upload Resume
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Upload your resume and let our AI analyze it to give you a detailed ATS score.
          </p>
        </div>

        {/* STEP 2 */}
        <div className="group bg-white p-8 rounded-2xl shadow-md 
        hover:shadow-xl hover:-translate-y-2 transition duration-300 border border-gray-100">

          <div className="flex justify-center mb-4">
            <div className="p-4 bg-blue-100 rounded-full">
              <MessageSquare className="text-blue-600 group-hover:scale-110 transition" size={34} />
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-2 text-gray-800">
            Start AI Interview
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Practice real interview questions with AI and improve your answers in real-time.
          </p>
        </div>

        {/* STEP 3 */}
        <div className="group bg-white p-8 rounded-2xl shadow-md 
        hover:shadow-xl hover:-translate-y-2 transition duration-300 border border-gray-100">

          <div className="flex justify-center mb-4">
            <div className="p-4 bg-blue-100 rounded-full">
              <BarChart3 className="text-blue-600 group-hover:scale-110 transition" size={34} />
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-2 text-gray-800">
            Get Feedback & Improve
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Receive insights, track performance, and continuously improve your interview skills.
          </p>
        </div>

      </motion.div>

    </div>
  );
};

export default HowItWorks;