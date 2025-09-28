import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Rules from "./pages/Rules";
import Sanctions from "./pages/Sanctions";
import Support from "./pages/Support";
import sphSpadeLogo from "./assets/sph_spade_logo.png";

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300 relative">
        {/* Background Logo */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img
              src={sphSpadeLogo}
              alt="SPH Spade Logo Background"
              className="w-[80vw] h-[80vw] sm:w-[60vw] sm:h-[60vw] md:w-[50vw] md:h-[50vw] lg:w-[40vw] lg:h-[40vw] xl:w-[35vw] xl:h-[35vw] max-w-[800px] max-h-[800px] object-contain opacity-3 sm:opacity-5 md:opacity-8"
            />
          </div>
        </div>

        <div className="relative z-10">
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/sanctions" element={<Sanctions />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
