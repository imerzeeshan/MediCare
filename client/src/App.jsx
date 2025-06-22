import React from "react";
import { Routes, Route } from "react-router-dom";
import Patient from "./Pages/Patient";
import Caretaker from "./Pages/Caretaker";
import Home from "./Pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/patient" element={<Patient />} />
      <Route path="/caretaker" element={<Caretaker />} />
    </Routes>
  );
};

export default App;
