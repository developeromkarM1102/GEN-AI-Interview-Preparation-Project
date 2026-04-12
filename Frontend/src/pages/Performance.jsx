import React, { useEffect } from "react";
import { useInterview } from "../Features/Interview/hooks/useInterview";
import { useNavigate } from "react-router-dom";

const Performance = () => {

  const { allReports, getAllReports } = useInterview();
  const navigate = useNavigate();

  useEffect(() => {
    getAllReports();
  }, []);

  const recentReports = allReports
    ?.slice()
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 6);

  return (
    <div className="min-h-screen bg-[#eaf3fb] text-gray-800 px-6 py-16 pt-28 overflow-hidden">

      {/* 🌤️ BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#eaf3fb] to-[#d8e8f8]"></div>

      {/* ☁️ BLOBS */}
      <div className="absolute w-[300px] h-[300px] bg-white/40 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-[250px] h-[250px] bg-blue-200/40 blur-3xl rounded-full bottom-10 right-10"></div>

      <div className="relative z-10">

        {/* HEADER */}
        <div className="max-w-6xl mx-auto mb-12">
          <h1 className="text-4xl font-bold">
            Your <span className="text-blue-600">Performance</span>
          </h1>
          <p className="text-gray-600 mt-2">
            Track your interview progress and improve over time 🚀
          </p>
        </div>

        {/* STATS */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 mb-12">
          {[
            { title: "Interviews Taken", value: allReports?.length || 0 },
            { title: "Avg Score", value: allReports?.length ? `${Math.round(allReports.reduce((sum, r) => sum + r.matchScore, 0) / allReports.length)}%` : "0%" }, 
            { title: "Best Score", value: allReports?.length ? `${Math.max(...allReports.map(r => r.matchScore))}%` : "0%" },
            { title: "Less Score", value: allReports?.length ? `${Math.min(...allReports.map(r => r.matchScore))}%` : "0%" }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:-translate-y-2 hover:shadow-md transition"
            >
              <p className="text-gray-500 text-sm">{item.title}</p>
              <h2 className="text-2xl font-bold mt-2 text-blue-600">
                {item.value}
              </h2>
            </div>
          ))}
        </div>

        {/* MAIN GRID */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

          {/* GRAPH */}
          <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">
              Score Progress
            </h3>

            <div className="h-40 flex items-end gap-3">
              {[40, 55, 65, 70, 78, 85].map((h, i) => (
                <div
                  key={i}
                  className="bg-blue-600 w-6 rounded-t-lg"
                  style={{ height: `${h}%` }}
                ></div>
              ))}
            </div>

            <p className="text-gray-500 mt-4 text-sm">
              Your scores are improving consistently 📈
            </p>
          </div>

          {/* AI INSIGHTS */}
          <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">
              AI Insights
            </h3>

            <div className="space-y-3 text-sm">
              <div className="bg-green-100 text-green-700 p-3 rounded-lg">
                ✔ Strong communication skills
              </div>

              <div className="bg-yellow-100 text-yellow-700 p-3 rounded-lg">
                ⚠ Improve technical depth in DSA
              </div>

              <div className="bg-red-100 text-red-700 p-3 rounded-lg">
                ✖ Reduce filler words while speaking
              </div>
            </div>
          </div>
        </div>

        {/* RECENT REPORTS */}
        <div className="max-w-6xl mx-auto mt-12">
          <h2 className="text-2xl font-bold mb-6 text-blue-600">
            Recent Reports
          </h2>

          {recentReports?.length === 0 ? (
            <p className="text-gray-500 text-sm">No reports found</p>
          ) : (
            <div className="grid md:grid-cols-3 gap-4">
              {recentReports.map((report) => (
                <div
                  key={report._id}
                  onClick={() => navigate(`/ai-interview-report/${report._id}`)}
                  className="p-4 rounded-xl bg-white border border-gray-200 
                  hover:border-blue-500 hover:shadow-md 
                  cursor-pointer transition hover:scale-105 active:scale-95"
                >
                  <p className="text-sm text-gray-700 line-clamp-2">
                    {report.title || "Untitled Report"}
                  </p>

                  <p className="text-blue-600 mt-2 font-semibold">
                    {report.matchScore || 0}%
                  </p>

                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(report.createdAt).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="max-w-6xl mx-auto mt-16 text-center">
          <h2 className="text-3xl font-bold">
            Ready for your next <span className="text-blue-600">Interview?</span>
          </h2>

          <button
            onClick={() => navigate("/ai-interviews-prep")}
            className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg 
            transition hover:scale-105 active:scale-95"
          >
            Start New Interview
          </button>
        </div>

      </div>
    </div>
  );
};

export default Performance;