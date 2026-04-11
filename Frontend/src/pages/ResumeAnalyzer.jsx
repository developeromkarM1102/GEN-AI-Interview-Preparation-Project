import React from "react";

import {useNavigate} from "react-router-dom";

const ResumeAnalyzer = () => {

  const navigate = useNavigate();

  return (
    <div className="bg-linear-to-b from-[#020617] to-[#0f172a] text-white py-20 px-6 font-mono">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mt-10">
        
        {/* LEFT - UI MOCK */}
        <div className="relative">

          <div className="bg-white/5 border border-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl">
            
            <h3 className="text-xl font-semibold mb-4">
              Resume Analysis Report
            </h3>

            {/* Score */}
            <div className="mb-4">
              <p className="text-gray-400">Overall Score</p>
              <h2 className="text-3xl font-bold text-orange-500">82/100</h2>
            </div>

            {/* Feedback */}
            <div className="space-y-3 text-sm">
              
              <div className="bg-green-500/10 p-3 rounded-lg">
                ✔ Strong technical skills section
              </div>

              <div className="bg-yellow-500/10 p-3 rounded-lg">
                ⚠ Add more quantified achievements
              </div>

              <div className="bg-red-500/10 p-3 rounded-lg">
                ✖ Improve formatting consistency
              </div>

            </div>
          </div>

          {/* Glow */}
          <div className="absolute -z-10 top-10 left-10 w-72 h-72 bg-orange-500/20 blur-3xl rounded-full"></div>
        </div>

        {/* RIGHT - CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Smart <span className="text-orange-500">Resume Analyzer</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Upload your resume and get AI-powered insights instantly. 
            Improve your chances of getting shortlisted with actionable feedback.
          </p>

          {/* Features */}
          <div className="mt-6 space-y-3 text-gray-300">
            <p>✔ ATS-friendly score analysis</p>
            <p>✔ Skill gap detection</p>
            <p>✔ Keyword optimization</p>
            <p>✔ Personalized improvement tips</p>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <button onClick={() => navigate("/ai-interviews-prep")} className="bg-orange-500 px-6 py-3 rounded-lg transition-all duration-150 hover:scale-105 active:scale-95 cursor-pointer">
              Upload Resume
            </button>
            <button onClick={() => navigate("/")} className="border border-orange-500 px-6 py-3 rounded-lg hover:bg-orange-500/10 transition active:scale-95 cursor-pointer">
              Lern More
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ResumeAnalyzer;