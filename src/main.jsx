import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Landing from "./Landing"
import {BrowserRouter, Routes,Route} from "react-router-dom";
import "./style.css";


ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/app" element={<App />} />
        
    </Routes>
    </BrowserRouter>
);