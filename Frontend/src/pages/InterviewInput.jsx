import React, { useState } from "react";
import { useInterview } from "../Features/Interview/hooks/useInterview";
import { useNavigate } from "react-router-dom"
import Loading from "../components/Loading";

const InterviewInput = () => {

    const { loading, generateReport } = useInterview()
    const navigate = useNavigate()

    const [jobDescription, setJobDescription] = useState("");
    const [selfDescription, setSelfDescription] = useState("");
    const [resumeFile, setResumeFile] = useState(null);

    const handleGenerateReport = async () => {
        if (!resumeFile || !jobDescription || !selfDescription) {
            alert("Please fill all fields and upload your resume.")
            return;
        }

        const data = await generateReport({
            resumeFile,
            jobDescription,
            selfDescription
        })

        if (!data || !data._id) {
            alert("Failed to generate report (Unauthorized or server error)")
            return
        }

        navigate(`/ai-interview-report/${data._id}`)
    }

    return (
        <div className="min-h-screen bg-[#eaf3fb] flex items-center justify-center relative overflow-hidden px-6 pt-24 pb-16">

            {/* 🌤️ BACKGROUND GRADIENT */}
            <div className="absolute inset-0 bg-linear-to-b from-[#eaf3fb] to-[#d8e8f8]"></div>

            {/* ☁️ SOFT SHAPES */}
            <div className="absolute w-87.5 h-87.5 bg-white/40 blur-3xl rounded-full top-10 left-10"></div>
            <div className="absolute w-75 h-75 bg-blue-200/40 blur-3xl rounded-full bottom-10 right-10"></div>

            {/* 🧠 MAIN CARD */}
            <div className="w-full max-w-6xl bg-cyan-501 rounded-2xl p-8 shadow-xl border border-gray-100 z-10">

                <h1 className="text-3xl font-[Raleway] text-gray-800 mb-2">
                    AI Interview Preparation
                </h1>
                <p className="text-gray-500 mb-8 font-[Lato]">
                    Provide your details and let AI generate your interview plan
                </p>

                <div className="grid md:grid-cols-2 gap-6">

                    {/* LEFT SIDE */}
                    <div>
                        <label className="block mb-2 text-sm text-gray-600">
                            Job Description
                        </label>
                        <textarea
                            rows="12"
                            value={jobDescription}
                            onChange={(e) => setJobDescription(e.target.value)}
                            placeholder="Paste job description here..."
                            className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 outline-none"
                        />
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="flex flex-col gap-6">

                        {/* RESUME UPLOAD */}
                        <div>
                            <label className="block mb-2 text-sm text-gray-600">
                                Upload Resume (PDF)
                            </label>

                            <label className="flex flex-col items-center justify-center h-32 border-2 border-dashed border-gray-200 rounded-xl cursor-pointer hover:border-blue-500 transition bg-gray-50">
                                <input
                                    type="file"
                                    accept=".pdf"
                                    className="hidden"
                                    onChange={(e) => setResumeFile(e.target.files[0])}
                                />

                                <p className="text-gray-500 text-sm">
                                    {resumeFile
                                        ? resumeFile.name
                                        : "Click to upload or drag & drop"}
                                </p>
                            </label>
                        </div>

                        {/* SELF DESCRIPTION */}
                        <div>
                            <label className="block mb-2 text-sm text-gray-600">
                                Self Description
                            </label>
                            <textarea
                                rows="6"
                                value={selfDescription}
                                onChange={(e) => setSelfDescription(e.target.value)}
                                placeholder="Tell about yourself..."
                                className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 outline-none"
                            />
                        </div>
                    </div>
                </div>

                {/* BUTTON */}
                <div className="mt-8 flex justify-center">
                    <button
                        onClick={handleGenerateReport}
                        disabled={loading}
                        className="px-10 py-4 rounded-xl cursor-pointer bg-blue-600 text-white font-medium hover:scale-105 transition disabled:opacity-50"
                    >
                        {loading ? <Loading /> : "Generate AI Report"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default InterviewInput;