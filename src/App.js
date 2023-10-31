import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from "./pages/home";
import Authpage from "./pages/authpage";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Test from "./pages/test";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Authpage />} />
        <Route path="/dashboard" element={<Homepage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
