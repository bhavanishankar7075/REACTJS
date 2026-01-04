import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <div className="min-h-screen bg-[#f1f1f1] flex justify-center items-center sm:p-4">
      <div className="w-full h-screen sm:max-w-[375px] sm:h-[812px] bg-[#F7F8F9] sm:border sm:border-[#d1d1d1] relative overflow-hidden flex flex-col box-border">
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
