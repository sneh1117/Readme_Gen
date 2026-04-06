import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Landing from "./Landing";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/app" element={<App />} />
    </Routes>
  </HashRouter>
);