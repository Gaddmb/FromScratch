import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LikePage from "./pages/LikePage";
import "./styles/index.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/coup-de-coeur" element={<LikePage />} />
      </Routes>
    </Router>
  );
}

export default App;
