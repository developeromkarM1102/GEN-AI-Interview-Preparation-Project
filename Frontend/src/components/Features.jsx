import React from "react";
import { BrainCircuit, FileText, BarChart3, Target } from "lucide-react";

const Features = () => {
  return (
    <div className="bg-gray-900 text-white px-6 py-20 font-mono">

      {/* 🔥 Heading */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Powerful <span className="text-orange-500">AI Features</span>
        </h2>
        <p className="text-gray-400">
          Everything you need to prepare, improve, and succeed in interviews.
        </p>
      </div>

      {/* 🔥 Feature Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Feature 1 */}
        <div className="bg-gray-800/60 backdrop-blur-md p-7 rounded-xl border border-gray-700 hover:border-orange-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:-translate-y-2 transition duration-300">
          <BrainCircuit className="text-orange-500 mb-4" size={32} />
          <h3 className="text-lg font-semibold mb-2">AI Interview Simulator</h3>
          <p className="text-gray-400 text-sm">
            Practice real-time interviews with AI-generated questions and get instant feedback.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-gray-800/60 backdrop-blur-md p-7 rounded-xl border border-gray-700 hover:border-orange-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:-translate-y-2 transition duration-300">
          <FileText className="text-orange-500 mb-4" size={32} />
          <h3 className="text-lg font-semibold mb-2">Smart Resume Analyzer</h3>
          <p className="text-gray-400 text-sm">
            Upload your resume and get ATS scores with AI-powered suggestions to improve.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-gray-800/60 backdrop-blur-md p-7 rounded-xl border border-gray-700 hover:border-orange-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:-translate-y-2 transition duration-300">
          <BarChart3 className="text-orange-500 mb-4" size={32} />
          <h3 className="text-lg font-semibold mb-2">Performance Dashboard</h3>
          <p className="text-gray-400 text-sm">
            Track your progress, analyze weak areas, and monitor your improvement over time.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="bg-gray-800/60 backdrop-blur-md p-7 rounded-xl border border-gray-700 hover:border-orange-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:-translate-y-2 transition duration-300">
          <Target className="text-orange-500 mb-4" size={32} />
          <h3 className="text-lg font-semibold mb-2">Guided Interview Prep</h3>
          <p className="text-gray-400 text-sm">
            Get curated questions, tips, and personalized guidance to boost your confidence.
          </p>
        </div>

      </div>

    </div>
  );
};

export default Features;