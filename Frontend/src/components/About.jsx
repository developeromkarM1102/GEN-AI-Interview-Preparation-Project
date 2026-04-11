import React from "react";
import { BrainCog, Target, Sparkles } from "lucide-react";

const About = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen px-6 pt-28 pb-16 font-mono">

      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About <span className="text-orange-500">GEN-AI Prep</span>
        </h1>
        <p className="text-gray-300 text-lg">
          Empowering students and professionals to crack interviews with the power of AI.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-16">

        <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:scale-105 transition duration-300 border border-dashed border-orange-500">
          <BrainCog className="text-orange-500 mb-4" size={32} />
          <h2 className="text-xl font-semibold mb-2">AI-Powered Learning</h2>
          <p className="text-gray-400">
            Practice real-world interview questions with intelligent AI that adapts to your responses.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:scale-105 transition duration-300 border border-orange-500">
          <Target className="text-orange-500 mb-4" size={32} />
          <h2 className="text-xl font-semibold mb-2">Goal-Focused Growth</h2>
          <p className="text-gray-400">
            Get personalized feedback to improve your skills and boost your confidence.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:scale-105 transition duration-300 border border-dashed border-orange-500">
          <Sparkles className="text-orange-500 mb-4" size={32} />
          <h2 className="text-xl font-semibold mb-2">Smart Resume Analysis</h2>
          <p className="text-gray-400">
            Upload your resume and receive AI-driven insights to stand out to recruiters.
          </p>
        </div>

      </div>

      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold mb-6">
          Why We Built This
        </h2>
        <p className="text-gray-400 leading-relaxed">
          We noticed that many students struggle with interviews not because they lack skills,
          but because they lack guidance and real practice. GEN-AI Prep was created to bridge
          this gap by providing a smart AI assistant that helps users prepare, improve, and succeed.
        </p>
      </div>

      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Ready to level up your career?
        </h2>
        <a
          href="/ai-interviews-prep"
          className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-full text-lg font-medium transition duration-200 shadow-md hover:scale-105 mb-4 inline-block"
        >
          Get Started Now 🚀
        </a>
      </div>

    </div>
  );
};

export default About;