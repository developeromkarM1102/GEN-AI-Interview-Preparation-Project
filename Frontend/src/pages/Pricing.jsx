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
    <div className="bg-linear-to-b from-[#0f172a] to-[#020617] text-white py-20 px-6 font-mono">
      
      {/* Heading */}
      <div className="text-center mb-16 mt-10">
        <h1 className="text-4xl md:text-5xl font-bold">
          Choose Your <span className="text-orange-500">Plan</span>
        </h1>
        <p className="text-gray-400 mt-3">
          Crack interviews with AI-powered practice 🚀
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`w-80 p-8 rounded-2xl backdrop-blur-lg border border-dashed border-orange-500 
            transition-all duration-300 
            ${
              plan.highlight
                ? "bg-orange-500/10 scale-105 shadow-2xl border-orange-500/40"
                : "bg-white/5 hover:translate-y-2"
            }`}
          >
            {/* Plan Name */}
            <h2 className="text-2xl font-semibold">{plan.name}</h2>
            <p className="text-gray-400 mt-2">{plan.desc}</p>

            {/* Price */}
            <h3 className="text-3xl font-bold mt-4 text-orange-500">
              {plan.price}
            </h3>

            {/* Features */}
            <ul className="mt-6 space-y-2 text-gray-300">
              {plan.features.map((f, i) => (
                <li key={i}>✔ {f}</li>
              ))}
            </ul>

            {/* Button */}
            <button
              className={`mt-6 w-full py-2 rounded-lg transition-all duration-300 hover:scale-105 
              ${
                plan.highlight
                  ? "bg-orange-500 hover:bg-orange-600 text-white"
                  : "border border-orange-500 hover:bg-orange-500/20"
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