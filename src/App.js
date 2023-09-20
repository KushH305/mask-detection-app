import React from "react"
import HomePage from "./Components/HomePage"
import WelcomePage from "./Components/WelcomePage"
import MachinePage from "./Components/MachinePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';


function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/machinepage" element={<MachinePage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
