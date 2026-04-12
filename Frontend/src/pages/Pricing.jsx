import React from "react";

const plans = [
  {
    name: "Free",
    price: "₹0",
    desc: "Basic practice",
    features: [
      "5 AI Interviews / day",
      "Basic Feedback",
      "Limited Questions",
    ],
    button: "Get Started",
    highlight: false,
  },
  {
    name: "Pro",
    price: "₹299/mo",
    desc: "Best for students",
    features: [
      "Unlimited Interviews",
      "Smart AI Feedback",
      "Resume Analysis",
      "Performance Tracking",
    ],
    button: "Upgrade Now",
    highlight: true,
  },
  {
    name: "Premium",
    price: "₹599/mo",
    desc: "For serious candidates",
    features: [
      "Everything in Pro",
      "Real-time AI Mock Interviews",
      "Voice + Video Analysis",
      "HR + Tech Rounds",
    ],
    button: "Go Premium",
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <div className="relative bg-[#eaf3fb] py-20 px-6 overflow-hidden">

      {/* 🌤️ BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#eaf3fb] to-[#d8e8f8]"></div>

      {/* ☁️ BLOBS */}
      <div className="absolute w-[300px] h-[300px] bg-white/40 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-[250px] h-[250px] bg-blue-200/40 blur-3xl rounded-full bottom-10 right-10"></div>

      {/* HEADING */}
      <div className="relative text-center mb-16 mt-10 z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Choose Your <span className="text-blue-600">Plan</span>
        </h1>
        <p className="text-gray-600 mt-3">
          Crack interviews with AI-powered practice 🚀
        </p>
      </div>

      {/* CARDS */}
      <div className="relative flex flex-col md:flex-row justify-center items-center gap-8 z-10">
        
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`w-80 p-8 rounded-2xl border transition-all duration-300 
            ${
              plan.highlight
                ? "bg-white scale-105 shadow-xl border-blue-500"
                : "bg-white border-gray-200 hover:-translate-y-2 hover:shadow-md"
            }`}
          >
            {/* NAME */}
            <h2 className="text-2xl font-semibold text-gray-800">
              {plan.name}
            </h2>
            <p className="text-gray-500 mt-2">{plan.desc}</p>

            {/* PRICE */}
            <h3 className="text-3xl font-bold mt-4 text-blue-600">
              {plan.price}
            </h3>

            {/* FEATURES */}
            <ul className="mt-6 space-y-2 text-gray-600">
              {plan.features.map((f, i) => (
                <li key={i}>✔ {f}</li>
              ))}
            </ul>

            {/* BUTTON */}
            <button
              className={`mt-6 w-full py-2 rounded-lg transition hover:scale-105 
              ${
                plan.highlight
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              }`}
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;