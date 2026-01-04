import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/profile");
  };

  return (
    <div className="p-6 flex flex-col h-full bg-[#F7F8F9]">
      <div className="mt-8 mb-8">
        <h2 className="text-[26px] font-bold text-[#1D2226] leading-tight">
          Signin to your
          <br />
          PopX account
        </h2>
        <p className="text-[#1D2226] opacity-60 mt-2 text-[18px] leading-snug">
          Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
        </p>
      </div>

      <form onSubmit={handleLogin} className="space-y-6">
        {/* Email Field */}
        <div className="relative border border-[#CBCBCB] rounded-[6px] px-3 py-2.5 bg-transparent">
          <label className="absolute -top-2.5 left-3 bg-[#F7F8F9] px-1 text-[13px] text-[#6C25FF] font-medium leading-none">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full bg-transparent outline-none text-[15px] text-[#1D2226] pt-0.5 placeholder-gray-400"
            required
          />
        </div>

        {/* Password Field */}
        <div className="relative border border-[#CBCBCB] rounded-[6px] px-3 py-2.5 bg-transparent">
          <label className="absolute -top-2.5 left-3 bg-[#F7F8F9] px-1 text-[13px] text-[#6C25FF] font-medium leading-none">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full bg-transparent outline-none text-[15px] text-[#1D2226] pt-0.5 placeholder-gray-400"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#CBCBCB] text-white py-3.5 rounded-[6px] font-semibold text-[16px] mt-4 transition-all active:scale-[0.98]"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
