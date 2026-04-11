import React from "react";
import { BrainCog , Mail} from "lucide-react";
import { useNavigate } from "react-router-dom";


const Footer = () => {

  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 text-white px-6 py-12 border-t border-gray-800">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        <div>
          <div className="flex items-center gap-2 mb-4">
            <BrainCog className="text-orange-500" />
            <h1 className="text-xl font-bold text-orange-500">GEN-AI Prep</h1>
          </div>
          <p className="text-gray-400 text-sm">
            Empowering you to crack interviews with AI-powered tools and smart preparation.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li onClick={() => navigate("/")} className="hover:text-orange-500 cursor-pointer transition">Home</li>
            <li onClick={() => navigate("/ai-interviews-prep")} className="hover:text-orange-500 cursor-pointer transition">AI Interview Prep</li>
            <li onClick={() => navigate("/resume-review")} className="hover:text-orange-500 cursor-pointer transition">Resume Analyzer</li>
            <li onClick={() => navigate("/performance")} className="hover:text-orange-500 cursor-pointer transition">Performance</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Connect With Us On</h3>
          <div className="flex gap-4 text-gray-400">
            
            <Mail className="hover:text-orange-500 cursor-pointer transition" />
            
          </div>
        </div>

      </div>

      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} GEN-AI Prep. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;