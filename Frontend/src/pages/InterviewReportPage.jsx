import React, { useState, useEffect } from "react";
import { useInterview } from "../Features/Interview/hooks/useInterview";
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
            <div className="min-h-screen flex items-center justify-center bg-[#eaf3fb] text-gray-700">
                <p>Loading report...</p>
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
                className="p-4 mb-3 rounded-xl cursor-pointer bg-white border border-gray-200 hover:border-blue-500 hover:shadow transition"
            >
                {q.question}
            </div>
        ));
    };

    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-[#eaf3fb] text-gray-800 relative overflow-hidden pt-24">
            
        <div className="absolute inset-0 bg-gradient-to-b from-[#eaf3fb] to-[#d8e8f8]"></div>

        <div className="absolute w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] bg-white/40 blur-3xl rounded-full top-10 left-10"></div>
        <div className="absolute w-[180px] h-[180px] lg:w-[250px] lg:h-[250px] bg-blue-200/40 blur-3xl rounded-full bottom-10 right-10"></div>

        <div className="w-full lg:w-1/5 p-4 lg:p-6 border-b lg:border-b-0 lg:border-r border-gray-200 bg-white/60 backdrop-blur-md z-10">
            <h2 className="text-lg lg:text-xl font-bold mb-4 lg:mb-6 text-blue-600">
                Sections
            </h2>

            <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => {
                            setActiveTab(tab.id);
                            setSelectedQuestion(null);
                        }}
                        className={`p-2 lg:p-3 rounded-lg text-left whitespace-nowrap transition ${
                            activeTab === tab.id
                                ? "bg-blue-600 text-white"
                                : "bg-gray-100 hover:bg-gray-200"
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}

                <button
                    onClick={handleDownload}
                    disabled={loading}
                    className={`p-2 lg:p-3 rounded-lg transition whitespace-nowrap ${
                        loading
                            ? "bg-gray-300 cursor-not-allowed"
                            : "bg-green-500 hover:bg-green-600 text-white"
                    }`}
                >
                    {loading ? "Generating..." : "Download PDF"}
                </button>
            </div>
        </div>

        <div className="w-full lg:w-3/5 p-4 lg:p-8 z-10 overflow-y-auto">

            {activeTab === "roadmap" ? (
                <div>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-blue-600">
                        Preparation Plan
                    </h2>

                    {data.preparationPlan.map((day, i) => (
                        <div
                            key={i}
                            className="mb-4 p-4 lg:p-5 rounded-xl bg-white border border-gray-200 shadow-sm"
                        >
                            <p className="text-blue-600 font-semibold text-sm lg:text-base">
                                Day {day.days} — {day.focus}
                            </p>

                            <ul className="mt-3 list-disc list-inside text-gray-600 text-xs lg:text-sm">
                                {day.tasks.map((task, idx) => (
                                    <li key={idx}>{task}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div>
                        <h2 className="text-lg lg:text-xl mb-4 text-blue-600">
                            Questions
                        </h2>
                        {renderList()}
                    </div>

                    <div className="bg-white p-4 lg:p-5 rounded-xl border border-gray-200 shadow-sm">
                        {selectedQuestion ? (
                            <>
                                <h3 className="text-base lg:text-lg font-semibold mb-3">
                                    {selectedQuestion.question}
                                </h3>

                                <p className="text-xs lg:text-sm text-gray-500 mb-3">
                                    💡 {selectedQuestion.intention}
                                </p>

                                <p className="text-xs lg:text-sm text-green-600">
                                    ✅ {selectedQuestion.answer}
                                </p>
                            </>
                        ) : (
                            <p className="text-gray-400 text-sm">
                                Select a question to view details
                            </p>
                        )}
                    </div>
                </div>
            )}
        </div>

        <div className="w-full lg:w-1/5 p-4 lg:p-6 border-t lg:border-t-0 lg:border-l border-gray-200 bg-white/60 backdrop-blur-md z-10">
            <h2 className="text-lg lg:text-xl font-bold mb-4 lg:mb-6 text-blue-600">
                AI Insights
            </h2>

            <div className="mb-6 p-4 lg:p-5 rounded-xl bg-white border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-500">Match Score</p>
                <p className="text-3xl lg:text-4xl font-bold text-blue-600">
                    {data.matchScore}%
                </p>

                <div className="mt-3 h-2 bg-gray-200 rounded">
                    <div
                        className="h-2 bg-blue-600 rounded"
                        style={{ width: `${data.matchScore}%` }}
                    ></div>
                </div>
            </div>

            <div className="p-4 lg:p-5 rounded-xl bg-white border border-gray-200 shadow-sm">
                <h3 className="text-sm text-gray-500 mb-3">Skill Gaps</h3>

                {data.skillGaps.map((s, i) => (
                    <div key={i} className="flex justify-between mb-2 text-sm">
                        <span>{s.skills}</span>
                        <span
                            className={
                                s.severity === "high"
                                    ? "text-red-500"
                                    : s.severity === "medium"
                                    ? "text-yellow-500"
                                    : "text-green-500"
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
