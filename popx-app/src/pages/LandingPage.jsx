import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full p-6 bg-[#F7F8F9]">
      {/* Decorative Circles Section */}
      <div className="relative flex-grow">
        {/* Circle 6 - Top Left */}
        <div className="absolute top-[12%] left-[5%] w-10 h-10 bg-[#F2C94C] rounded-full flex items-center justify-center text-white font-bold text-sm">
          6
        </div>
        {/* Circle 1 */}
        <div className="absolute top-[22%] left-[25%] w-8 h-8 bg-[#F2C94C] rounded-full flex items-center justify-center text-white font-bold text-xs">
          1
        </div>
        {/* Circle 2 */}
        <div className="absolute top-[30%] left-[30%] w-8 h-8 bg-[#F2C94C] rounded-full flex items-center justify-center text-white font-bold text-xs">
          2
        </div>
        {/* Circle 3 */}
        <div className="absolute top-[38%] left-[43%] w-8 h-8 bg-[#F2C94C] rounded-full flex items-center justify-center text-white font-bold text-xs">
          3
        </div>
        {/* Circle 4 */}
        <div className="absolute top-[46%] left-[58%] w-8 h-8 bg-[#F2C94C] rounded-full flex items-center justify-center text-white font-bold text-xs">
          4
        </div>
        {/* Circle 5 - Bottom Right */}
        <div className="absolute top-[54%] left-[72%] w-8 h-8 bg-[#F2C94C] rounded-full flex items-center justify-center text-white font-bold text-xs">
          5
        </div>
      </div>

      {/* Welcome Content Section */}
      <div className="pb-8">
        <h1 className="text-[28px] font-bold text-[#1D2226] leading-tight">
          Welcome to PopX
        </h1>
        <p className="text-[#1D2226] opacity-60 text-[18px] mt-2 leading-snug">
          Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
        </p>

        <div className="mt-8 flex flex-col gap-3">
          {/* Main Action Button */}
          <button
            onClick={() => navigate("/signup")}
            className="w-full bg-[#6C25FF] text-white py-3.5 rounded-[6px] font-semibold text-[16px] border-none outline-none active:opacity-90"
          >
            Create Account
          </button>
          <button
            onClick={() => navigate("/login")}
            className="w-full bg-[#6C25FF4D] text-[#1D2226] py-3.5 rounded-[6px] font-bold text-[16px] border-none outline-none active:opacity-70"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
