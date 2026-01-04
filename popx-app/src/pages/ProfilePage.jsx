import React from "react";

const ProfilePage = () => {
  return (
    <div className="h-full bg-[#F7F8F9] flex flex-col box-border">
      {/* 1. Header Section - Solid White */}
      <div className="bg-white px-5 py-6">
        <h3 className="text-[18px] text-[#1D2226] font-medium leading-tight">
          Account Settings
        </h3>
      </div>

      {/* 2. Main Content Area */}
      <div className="p-5 flex flex-col">
        {/* Profile Info with Camera Overlay */}
        <div className="flex items-center gap-5 mb-6">
          <div className="relative">
            <img
              src="https://avatar.iran.liara.run/public/74"
              alt="Marry Doe Profile"
              className="w-[76px] h-[76px] rounded-full object-cover bg-gray-200"
            />
            {/* Camera Icon Overlay */}
            <div className="absolute bottom-0 right-0 bg-[#6C25FF] p-1.5 rounded-full border-2 border-white flex items-center justify-center">
              <svg
                className="w-3.5 h-3.5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h4 className="font-bold text-[18px] text-[#1D2226] leading-none mb-1">
              Marry Doe
            </h4>
            <p className="text-[14px] text-[#1D2226] opacity-75">
              Marry@Gmail.Com
            </p>
          </div>
        </div>

        {/* Bio Text */}
        <div className="mb-2">
          <p className="text-[14px] text-[#1D2226] leading-[22px] opacity-80">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>
      </div>

      <div className="flex-grow">
        <div className="border-t border-dashed border-[#CBCBCB] w-full mt-2 opacity-100"></div>
        <div className="h-[450px]"></div>
        <div className="border-t border-dashed border-[#CBCBCB] w-full opacity-100"></div>
      </div>
    </div>
  );
};

export default ProfilePage;
