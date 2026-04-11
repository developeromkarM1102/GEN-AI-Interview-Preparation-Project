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
        <div className="min-h-screen bg-[#020617] text-white flex items-center justify-center relative overflow-hidden px-6 mt-10">

            <div className="absolute inset-0">
                <div className="absolute w-125 h-125 bg-orange-500/20 blur-[120px] -top-[-100px] -left-[-100px]"></div>
                <div className="absolute w-100 h-100 bg-orange-400/10 blur-[100px] -bottom-[-100px] -right-[-100px]"></div>
            </div>

            <div className="w-full max-w-6xl bg-[#0f172a]/80 backdrop-blur-lg border border-orange-500/20 rounded-2xl p-8 shadow-[0_0_40px_rgba(255,115,0,0.15)] z-10">

                <h1 className="text-3xl font-bold text-orange-400 mb-2">
                    AI Interview Prepation
                </h1>
                <p className="text-gray-400 mb-8">
                    Provide your details and let AI generate your interview plan
                </p>

                <div className="grid md:grid-cols-2 gap-6">

                    {/* LEFT SIDE - JOB DESCRIPTION */}
                    <div>
                        <label className="block mb-2 text-sm text-gray-300">
                            Job Description
                        </label>
                        <textarea
                            rows="12"
                            value={jobDescription}
                            onChange={(e) => setJobDescription(e.target.value)}
                            placeholder="Paste job description here..."
                            className="w-full p-4 rounded-xl bg-[#020617] border border-white/10 focus:border-orange-400 outline-none"
                        />
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="flex flex-col gap-6">

                        {/* RESUME FILE UPLOAD */}
                        <div>
                            <label className="block mb-2 text-sm text-gray-300">
                                Upload Resume (PDF)
                            </label>

                            <label className="flex flex-col items-center justify-center h-32 border-2 border-dashed border-white/10 rounded-xl cursor-pointer hover:border-orange-400 transition bg-[#020617]">
                                <input
                                    type="file"
                                    accept=".pdf"
                                    className="hidden"
                                    onChange={(e) => setResumeFile(e.target.files[0])}
                                />

                                <p className="text-gray-400 text-sm">
                                    {resumeFile
                                        ? resumeFile.name
                                        : "Click to upload or drag & drop"}
                                </p>
                            </label>
                        </div>

                        {/* SELF DESCRIPTION */}
                        <div>
                            <label className="block mb-2 text-sm text-gray-300">
                                Self Description
                            </label>
                            <textarea
                                rows="6"
                                value={selfDescription}
                                onChange={(e) => setSelfDescription(e.target.value)}
                                placeholder="Tell about yourself (skills, goals, experience)..."
                                className="w-full p-4 rounded-xl bg-[#020617] border border-white/10 focus:border-orange-400 outline-none"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex justify-center">
                    <button
                        onClick={handleGenerateReport}
                        disabled={loading}
                        className="px-10 py-4 rounded-xl cursor-pointer bg-orange-500 disabled:opacity-50"
                    >
                        {loading ? <Loading/> : "Generate AI Report"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default InterviewInput;