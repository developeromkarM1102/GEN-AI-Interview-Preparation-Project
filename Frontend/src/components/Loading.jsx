import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900/95 backdrop-blur-sm z-9999">

      <div className="flex flex-col items-center gap-4">

        <div className="absolute w-40 h-40 bg-orange-400/30 blur-2xl rounded-full animate-pulse"></div>

        <div className="w-95 h-95 relative z-10 transform-gpu">
          <DotLottieReact
            src="https://lottie.host/2924bcf0-d1cf-4660-8f64-49400d6542cc/LHXrDJUWpV.lottie"
            loop
            autoplay
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        <p className="text-orange-500 font-semibold tracking-wide animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loading;