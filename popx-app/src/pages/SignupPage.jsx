import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();
  const [isAgency, setIsAgency] = useState("yes");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/profile");
  };

  return (
    <div className="flex flex-col h-full bg-[#F7F8F9] p-5">
      {/* Title Section */}
      <div className="mb-8">
        <h2 className="text-[26px] font-bold text-[#1D2226] leading-tight">
          Create your
          <br />
          PopX account
        </h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col flex-grow relative"
      >
        {/* Input Fields Area */}
        <div className="space-y-6 flex-grow">
          {[
            { label: "Full Name", val: "Marry Doe" },
            { label: "Phone number", val: "Marry Doe" },
            { label: "Email address", val: "Marry Doe" },
            { label: "Password", val: "Marry Doe" },
            { label: "Company name", val: "Marry Doe" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="relative border border-[#CBCBCB] rounded-[6px] px-3 py-2.5 bg-transparent"
            >
              {/* The label background*/}
              <label className="absolute -top-2.5 left-3 bg-[#F7F8F9] px-1 text-[13px] text-[#6C25FF] font-medium leading-none">
                {item.label}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                defaultValue={item.val}
                className="w-full bg-transparent outline-none text-[15px] text-[#1D2226] pt-0.5"
              />
            </div>
          ))}

          {/* Agency Selection */}
          <div className="mt-2">
            <p className="text-[14px] font-medium mb-3 text-[#1D2226]">
              Are you an Agency?<span className="text-red-500">*</span>
            </p>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input
                  type="radio"
                  name="agency"
                  checked={isAgency === "yes"}
                  onChange={() => setIsAgency("yes")}
                  className="accent-[#6C25FF] h-5 w-5"
                />
                <span className="text-[#1D2226]">Yes</span>
              </label>
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input
                  type="radio"
                  name="agency"
                  checked={isAgency === "no"}
                  onChange={() => setIsAgency("no")}
                  className="accent-[#6C25FF] h-5 w-5"
                />
                <span className="text-[#1D2226]">No</span>
              </label>
            </div>
          </div>
        </div>

        {/* Bottom-aligned Button */}
        <div className="mt-auto pb-4">
          <button
            type="submit"
            className="w-full bg-[#6C25FF] text-white py-3.5 rounded-[6px] font-semibold text-[16px] active:scale-[0.98] transition-transform shadow-sm"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
