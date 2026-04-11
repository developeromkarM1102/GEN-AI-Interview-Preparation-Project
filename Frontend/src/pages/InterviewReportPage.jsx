import React, { useState } from "react";
import { useInterview } from "../Features/Interview/hooks/useInterview";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const InterviewReportPage = () => {
    const [activeTab, setActiveTab] = useState("technical");
    const [selectedQuestion, setSelectedQuestion] = useState(null);

    const { id } = useParams();
    const { loading, report, getReportById, getResumePdf } = useInterview();
    const data = report;

    const handleDownload = async () => {
        try {
            await getResumePdf(id);
        } catch (err) {
            console.error(err);
        }


    };

    useEffect(() => {
        if (!report && id) {
            getReportById(id);
        }
    }, [id, report, getReportById]);

    if (!data) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#020617] text-white">
                <p className="text-orange-400">Loading report...</p>
            </div>
        );
    }

    const tabs = [
        { id: "technical", label: "Technical" },
        { id: "behavioral", label: "Behavioral" },
        { id: "roadmap", label: "Roadmap" },
    ];

    const renderList = () => {
        const list =
            activeTab === "technical"
                ? data.technicalQuestions
                : activeTab === "behavioral"
                    ? data.behavioralQuestions
                    : [];

        return list.map((q, i) => (
            <div
                key={i}
                onClick={() => setSelectedQuestion(q)}
                className="p-4 mb-3 rounded-xl cursor-pointer bg-[#020617] border border-white/10 hover:border-orange-400 transition"
            >
                {q.question}
            </div>
        ));
    };

    return (
        <div className="min-h-screen flex bg-[#020617] text-white relative overflow-hidden mt-20">

            {/* 🔥 ORANGE AI BACKGROUND */}
            <div className="absolute inset-0">
                <div className="absolute w-125 h-125 bg-orange-500/20 blur-[120px] -top-[-100px] -left-[-100px]"></div>
                <div className="absolute w-100 h-100 bg-orange-400/10 blur-[100px] -bottom-[-100px] -right-[-100px]"></div>
            </div>

            {/* LEFT SIDEBAR */}
            <div className="w-1/5 p-6 border-r border-white/10 bg-white/5 backdrop-blur-md z-10">
                <h2 className="text-xl font-bold mb-6 text-orange-400">
                    Sections
                </h2>

                <div className="flex flex-col gap-3">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => {
                                setActiveTab(tab.id);
                                setSelectedQuestion(null);
                            }}
                            className={`p-3 rounded-lg text-left ${activeTab === tab.id
                                ? "bg-orange-500 text-black"
                                : "bg-[#0f172a] hover:bg-[#1e293b]"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                    <button
                        onClick={handleDownload}
                        disabled={loading}
                        className={`mt-4 w-full text-left p-3 rounded-lg ${loading
                            ? "bg-gray-500 cursor-not-allowed"
                            : "bg-green-400 hover:bg-green-500 text-black"
                            }`}
                    >
                        {loading ? "Generating PDF..." : "Download Resume PDF"}
                    </button>
                </div>
            </div>

            {/* MIDDLE CONTENT */}
            <div className="w-3/5 p-8 z-10 overflow-y-auto">

                {/* ROADMAP */}
                {activeTab === "roadmap" ? (
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-orange-400">
                            Preparation Plan
                        </h2>

                        {data.preparationPlan.map((day, i) => (
                            <div
                                key={i}
                                className="mb-4 p-5 rounded-xl bg-[#020617] border border-white/10"
                            >
                                <p className="text-orange-400 font-semibold">
                                    Day {day.days} — {day.focus}
                                </p>

                                <ul className="mt-3 list-disc list-inside text-gray-300 text-sm">
                                    {day.tasks.map((task, idx) => (
                                        <li key={idx}>{task}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-2 gap-6">

                        {/* QUESTION LIST */}
                        <div>
                            <h2 className="text-xl mb-4 text-orange-400">
                                Questions
                            </h2>
                            {renderList()}
                        </div>

                        {/* DETAILS PANEL */}
                        <div className="bg-[#0f172a] p-5 rounded-xl border border-orange-500/20">

                            {selectedQuestion ? (
                                <>
                                    <h3 className="text-lg font-semibold mb-3">
                                        {selectedQuestion.question}
                                    </h3>

                                    <p className="text-sm text-gray-400 mb-3">
                                        💡 {selectedQuestion.intention}
                                    </p>

                                    <p className="text-sm text-green-400">
                                        ✅ {selectedQuestion.answer}
                                    </p>
                                </>
                            ) : (
                                <p className="text-gray-500 text-sm">
                                    Select a question to view details
                                </p>
                            )}

                        </div>
                    </div>
                )}
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="w-1/5 p-6 border-l border-white/10 bg-white/5 backdrop-blur-md z-10">
                <h2 className="text-xl font-bold mb-6 text-orange-400">
                    AI Insights
                </h2>

                {/* MATCH SCORE */}
                <div className="mb-6 p-5 rounded-xl bg-[#0f172a] border border-orange-500/20">
                    <p className="text-sm text-gray-400">Match Score</p>
                    <p className="text-4xl font-bold text-orange-400">
                        {data.matchScore}%
                    </p>

                    <div className="mt-3 h-2 bg-gray-700 rounded">
                        <div
                            className="h-2 bg-orange-500 rounded"
                            style={{ width: `${data.matchScore}%` }}
                        ></div>
                    </div>
                </div>

                {/* SKILL GAPS */}
                <div className="p-5 rounded-xl bg-[#0f172a] border border-white/10">
                    <h3 className="text-sm text-gray-400 mb-3">Skill Gaps</h3>

                    {data.skillGaps.map((s, i) => (
                        <div key={i} className="flex justify-between mb-2 text-sm">
                            <span>{s.skills}</span>
                            <span
                                className={
                                    s.severity === "high"
                                        ? "text-red-400"
                                        : s.severity === "medium"
                                            ? "text-yellow-400"
                                            : "text-green-400"
                                }
                            >
                                {s.severity}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InterviewReportPage;