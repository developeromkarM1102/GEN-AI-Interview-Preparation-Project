import React from "react";
import { BrainCircuit, FileText, BarChart3, Target } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Features = () => {
  return (
    <div className="relative bg-[#d8e8f8] px-6 pt-5 py-24 overflow-hidden ">

      {/* 🌤️ BACKGROUND */}
      <div className="absolute inset-0 bg-linear-to-b from-[#d8e8f8] to-[#d8e8f8] z-0"></div>

      {/* ☁️ SOFT SHAPES */}
      <div className="absolute top-10 left-10 w-87.5 h-87.5 bg-white/40 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-75 h-75 bg-blue-200/40 blur-3xl rounded-full"></div>

      {/* 🔥 HEADING */}
      <div  className="relative z-10 max-w-5xl mx-auto text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 , ease: "easeOut" , delay: 0.2}}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-[Raleway] mb-4 text-gray-800"
        >
          Powerful <span className="text-blue-600 font-[Lato]">AI Features</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 , ease: "easeOut" , delay: 0.4}}
          viewport={{ once: true }}
          className="text-gray-600 text-lg"
        >
          Everything you need to prepare, improve, and succeed in interviews.
        </motion.p>
      </div>

      {/* ⚡ FEATURE CARDS */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 , ease: "easeOut" , delay: 0.8}} viewport={{ once: true }} className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* CARD */}
        <div className="group bg-white p-7 rounded-2xl shadow-md 
        hover:shadow-xl hover:-translate-y-2 transition duration-300 border border-gray-100">
          
          <BrainCircuit className="text-blue-600 mb-4 group-hover:scale-110 transition" size={34} />
          
          <h3 className="text-lg font-semibold mb-2 text-gray-800">
            AI Interview Simulator
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Practice real-time interviews with AI-generated questions and get instant feedback.
          </p>
        </div>

        {/* CARD */}
        <div className="group bg-white p-7 rounded-2xl shadow-md 
        hover:shadow-xl hover:-translate-y-2 transition duration-300 border border-gray-100">
          
          <FileText className="text-blue-600 mb-4 group-hover:scale-110 transition" size={34} />
          
          <h3 className="text-lg font-semibold mb-2 text-gray-800">
            Smart Resume Analyzer
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Upload your resume and get ATS scores with AI-powered suggestions to improve.
          </p>
        </div>

        {/* CARD */}
        <div className="group bg-white p-7 rounded-2xl shadow-md 
        hover:shadow-xl hover:-translate-y-2 transition duration-300 border border-gray-100">
          
          <BarChart3 className="text-blue-600 mb-4 group-hover:scale-110 transition" size={34} />
          
          <h3 className="text-lg font-semibold mb-2 text-gray-800">
            Performance Dashboard
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Track your progress, analyze weak areas, and monitor your improvement over time.
          </p>
        </div>

        {/* CARD */}
        <div className="group bg-white p-7 rounded-2xl shadow-md 
        hover:shadow-xl hover:-translate-y-2 transition duration-300 border border-gray-100">
          
          <Target className="text-blue-600 mb-4 group-hover:scale-110 transition" size={34} />
          
          <h3 className="text-lg font-semibold mb-2 text-gray-800">
            Guided Interview Prep
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Get curated questions, tips, and personalized guidance to boost your confidence.
          </p>
        </div>

      </motion.div>

    </div>
  );
};

export default Features;