import React from "react";
import { useNavigate } from "react-router-dom";

const ResumeAnalyzer = () => {

  const navigate = useNavigate();

  return (
    <div className="relative bg-[#eaf3fb] py-20 px-6 overflow-hidden min-h-screen">

      {/* 🌤️ BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#eaf3fb] to-[#d8e8f8]"></div>

      {/* ☁️ BLOBS */}
      <div className="absolute w-[300px] h-[300px] bg-white/40 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-[250px] h-[250px] bg-blue-200/40 blur-3xl rounded-full bottom-10 right-10"></div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mt-30 z-10">
        
        {/* LEFT - UI MOCK */}
        <div className="relative">

          <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-xl">
            
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Resume Analysis Report
            </h3>

            {/* Score */}
            <div className="mb-4">
              <p className="text-gray-500">Overall Score</p>
              <h2 className="text-3xl font-bold text-blue-600">82/100</h2>
            </div>

            {/* Feedback */}
            <div className="space-y-3 text-sm">
              
              <div className="bg-green-100 text-green-700 p-3 rounded-lg">
                ✔ Strong technical skills section
              </div>

              <div className="bg-yellow-100 text-yellow-700 p-3 rounded-lg">
                ⚠ Add more quantified achievements
              </div>

              <div className="bg-red-100 text-red-700 p-3 rounded-lg">
                ✖ Improve formatting consistency
              </div>

            </div>
          </div>

          {/* ✨ SOFT GLOW */}
          <div className="absolute -z-10 top-10 left-10 w-72 h-72 bg-blue-400/20 blur-3xl rounded-full"></div>
        </div>

        {/* RIGHT - CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
            Smart <span className="text-blue-600">Resume Analyzer</span>
          </h2>

          <p className="text-gray-600 mt-4">
            Upload your resume and get AI-powered insights instantly. 
            Improve your chances of getting shortlisted with actionable feedback.
          </p>

          {/* Features */}
          <div className="mt-6 space-y-3 text-gray-600">
            <p>✔ ATS-friendly score analysis</p>
            <p>✔ Skill gap detection</p>
            <p>✔ Keyword optimization</p>
            <p>✔ Personalized improvement tips</p>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <button
              onClick={() => navigate("/ai-interviews-prep")}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg transition hover:scale-105 active:scale-95"
            >
              Upload Resume
            </button>

            <button
              onClick={() => navigate("/")}
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition active:scale-95"
            >
              Learn More
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ResumeAnalyzer;