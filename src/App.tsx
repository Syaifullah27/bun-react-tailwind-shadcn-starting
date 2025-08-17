// src/App.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/shared/Navabar";
import Profilepage from "./pages/Profilepage";
import DragonBallCharacterPage from "./pages/DragonBallCharacterPage";


export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="">
        <Routes>
          <Route path="/" element={<Profilepage />} />
          <Route path="/dragonball" element={<DragonBallCharacterPage />} />
        </Routes>
      </main>
    </div>
  );
};
