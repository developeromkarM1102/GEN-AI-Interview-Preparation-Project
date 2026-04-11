import React, { useEffect } from "react";
import { useInterview } from "../Features/Interview/hooks/useInterview";
import { useNavigate } from "react-router-dom";

const Performance = () => {

  const { allReports, getAllReports } = useInterview();
  const navigate = useNavigate();

  useEffect(() => {
    getAllReports();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const recentReports = allReports
    ?.slice()
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 6);

  return (
    <div className="min-h-screen bg-[#020617] text-white px-6 py-16 mt-10 font-mono">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto mb-12">
        <h1 className="text-4xl font-bold">
          Your <span className="text-orange-500">Performance</span>
        </h1>
        <p className="text-gray-400 mt-2">
          Track your interview progress and improve over time 🚀
        </p>
      </div>

      {/* STATS CARDS */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 mb-12">
        {[
          { title: "Interviews Taken", value: allReports?.length || 0 },
          { title: "Avg Score", value: allReports?.length ? `${Math.round(allReports.reduce((sum, r) => sum + r.matchScore, 0) / allReports.length)}%` : "0%" }, 
          { title: "Best Score", value: allReports?.length ? `${Math.max(...allReports.map(r => r.matchScore))}%` : "0%" },
          { title: "Less Score", value: allReports?.length ? `${Math.min(...allReports.map(r => r.matchScore))}%` : "0%" }
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-lg hover:-translate-y-2 transition"
          >
            <p className="text-gray-400 text-sm">{item.title}</p>
            <h2 className="text-2xl font-bold mt-2 text-orange-500">
              {item.value}
            </h2>
          </div>
        ))}
      </div>

      {/* MAIN GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        {/* GRAPH */}
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-lg">
          <h3 className="text-xl font-semibold mb-4">
            Score Progress
          </h3>

          <div className="h-40 flex items-end gap-3">
            {[40, 55, 65, 70, 78, 85].map((h, i) => (
              <div
                key={i}
                className="bg-orange-500 w-6 rounded-t-lg"
                style={{ height: `${h}%` }}
              ></div>
            ))}
          </div>

          <p className="text-gray-400 mt-4 text-sm">
            Your scores are improving consistently 📈
          </p>
        </div>

        {/* AI INSIGHTS */}
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-lg">
          <h3 className="text-xl font-semibold mb-4">
            AI Insights
          </h3>

          <div className="space-y-3 text-sm">
            <div className="bg-green-500/10 p-3 rounded-lg">
              ✔ Strong communication skills
            </div>

            <div className="bg-yellow-500/10 p-3 rounded-lg">
              ⚠ Improve technical depth in DSA
            </div>

            <div className="bg-red-500/10 p-3 rounded-lg">
              ✖ Reduce filler words while speaking
            </div>
          </div>
        </div>
      </div>

      {/* 🔥 RECENT REPORTS */}
      <div className="max-w-6xl mx-auto mt-12">
        <h2 className="text-2xl font-bold mb-6 text-orange-400">
          Recent Reports
        </h2>

        {recentReports?.length === 0 ? (
          <p className="text-gray-400 text-sm">No reports found</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-4">
            {recentReports.map((report) => (
              <div
                key={report._id}
                onClick={() => navigate(`/ai-interview-report/${report._id}`)}
                className="p-4 rounded-xl bg-[#020617] border border-white/10 
                hover:border-orange-400 hover:shadow-[0_0_15px_rgba(255,115,0,0.5)] 
                cursor-pointer transition hover:scale-105 active:scale-95"
              >
                <p className="text-sm text-gray-300 line-clamp-2">
                  {report.title || "Untitled Report"}
                </p>

                <p className="text-orange-400 mt-2 font-semibold">
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
          Ready for your next <span className="text-orange-500">Interview?</span>
        </h2>

        <button
          onClick={() => navigate("/ai-interviews-prep")}
          className="mt-6 bg-orange-500 px-8 py-3 rounded-lg 
          transition-all duration-150 hover:scale-105 active:scale-95"
        >
          Start New Interview
        </button>
      </div>

    </div>
  );
};

export default Performance;