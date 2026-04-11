import React from "react";
import { Upload, MessageSquare, BarChart3 } from "lucide-react";

const HowItWorks = () => {
  return (
    <div className="bg-gray-900 text-white px-6 py-20 border-t border-gray-800 font-mono">

      {/* 🔥 Heading */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          How It <span className="text-orange-500">Works</span>
        </h2>
        <p className="text-gray-400">
          A simple 3-step process to boost your interview performance.
        </p>
      </div>

      {/* 🔥 Steps */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center relative">

        {/* Step 1 */}
        <div className="bg-gray-800/60 backdrop-blur-md p-8 rounded-xl border border-gray-700 hover:border-orange-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:-translate-y-2 transition duration-300">
          <div className="flex justify-center mb-4">
            <Upload className="text-orange-500" size={36} />
          </div>
          <h3 className="text-lg font-semibold mb-2">Upload Resume</h3>
          <p className="text-gray-400 text-sm">
            Upload your resume and let our AI analyze it to give you a detailed ATS score.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-gray-800/60 backdrop-blur-md p-8 rounded-xl border border-gray-700 hover:border-orange-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:translate-y-2 transition duration-300">
          <div className="flex justify-center mb-4">
            <MessageSquare className="text-orange-500" size={36} />
          </div>
          <h3 className="text-lg font-semibold mb-2">Start AI Interview</h3>
          <p className="text-gray-400 text-sm">
            Practice real interview questions with AI and improve your answers in real-time.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-gray-800/60 backdrop-blur-md p-8 rounded-xl border border-gray-700 hover:border-orange-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:-translate-y-2 transition duration-300">
          <div className="flex justify-center mb-4">
            <BarChart3 className="text-orange-500" size={36} />
          </div>
          <h3 className="text-lg font-semibold mb-2">Get Feedback & Improve</h3>
          <p className="text-gray-400 text-sm">
            Receive insights, track performance, and continuously improve your interview skills.
          </p>
        </div>

      </div>

    </div>
  );
};

export default HowItWorks;