import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Patient from "./Pages/Patient";
import Caretaker from "./Pages/Caretaker";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/caretaker" element={<Caretaker />} />
      </Routes>
    </div>
  );
};

export default App;
