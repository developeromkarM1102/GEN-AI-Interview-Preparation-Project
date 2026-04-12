import React from "react";
import { BrainCog, Target, Sparkles } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative bg-[#d8e8f8] pt-5 pb-20 px-6 overflow-hidden">

      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-linear-to-b from-[#d8e8f8] to-[#d8e8f8] z-0"></div>

      {/* ☁️ SOFT SHAPES */}
      <div className="absolute top-0 left-0 w-100 h-100 bg-white/40 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-75 h-75 bg-blue-200/40 blur-3xl rounded-full"></div>

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 , ease: "easeOut" , delay: 0.2}}
        viewport={{ once: true }}
        className="relative z-10 max-w-5xl mx-auto text-center mb-20"
      >
        <h1 className="text-4xl md:text-5xl font-[Raleway] mb-6 text-gray-800 mt-5">
          About <span className="text-blue-600 font-[Lato]">GEN-AI Prep</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Empowering students and professionals to crack interviews with the power of AI.
        </p>
      </motion.div>

      {/* FEATURES */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-24">

        {/* CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 , ease: "easeOut" , delay: 0.4}}
          viewport={{ once: true }}
          className="group bg-white p-6 rounded-2xl shadow-md 
          hover:shadow-xl transition duration-300 hover:-translate-y-2 border border-gray-100"
        >

          <BrainCog className="text-blue-600 mb-4 group-hover:scale-110 transition" size={34} />

          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            AI-Powered Learning
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Practice real-world interview questions with intelligent AI that adapts to your responses.
          </p>
        </motion.div>

        {/* CARD */}
        <motion.div initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 , ease: "easeOut" , delay: 0.6}}
          viewport={{ once: true }} className="group bg-white p-6 rounded-2xl shadow-md 
        hover:shadow-xl transition duration-300 hover:-translate-y-2 border border-gray-100">

          <Target className="text-blue-600 mb-4 group-hover:scale-110 transition" size={34} />

          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            Goal-Focused Growth
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Get personalized feedback to improve your skills and boost your confidence.
          </p>
        </motion.div>

        {/* CARD */}
        <motion.div initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 , ease: "easeOut" , delay: 0.8}}
          viewport={{ once: true }} className="group bg-white p-6 rounded-2xl shadow-md 
        hover:shadow-xl transition duration-300 hover:-translate-y-2 border border-gray-100">

          <Sparkles className="text-blue-600 mb-4 group-hover:scale-110 transition" size={34} />

          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            Smart Resume Analysis
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Upload your resume and receive AI-driven insights to stand out to recruiters.
          </p>
        </motion.div>

      </div>

      {/* WHY SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 , ease: "easeOut" , delay: 0.4}}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto text-center mb-24"
      >
        <h2 className="text-3xl font-[Raleway] mb-6 text-gray-800">
          Why We Built This
        </h2>
        <p className="text-gray-600 leading-relaxed text-lg">
          Many students struggle with interviews not because they lack skills,
          but because they lack guidance and real practice.
          <br /><br />
          GEN-AI Prep was created to bridge this gap using AI to help users prepare,
          improve, and succeed.
        </p>
      </motion.div>

      {/* 🚀 CTA */}
      <div className="relative z-10 text-center">

        <h2 className="text-2xl md:text-3xl font-[Saira+Stencil+One] mb-12 text-gray-800 ">
          Ready to level up your career?
        </h2>

        <a
          href="/ai-interviews-prep"
          className="bg-black hover:scale-100 text-white px-8 py-4 rounded-xl text-lg font-medium 
          shadow-md transition "
        >
          Get Started Now 🚀
        </a>

      </div>

    </div>
  );
};

export default About;