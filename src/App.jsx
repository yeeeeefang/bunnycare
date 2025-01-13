import React from "react";
import {Routes,Route } from "react-router-dom";
//components
import Navbars from "./components/navbars/Navbars";

//pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Knowledge from "./pages/knowledge/Knowledge";
import Medical from "./pages/medical/Medical";

import './assets/css/App.css';

function App() {
  
  return (
    <>
      {/* 在任何頁面都顯示Navbars */}
      <Navbars/>

      {/* 對應的路由 */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/knowledge" element={<Knowledge/>} />
        <Route path="/medical" element={<Medical/>} />
      </Routes>
    </>
  )
}

export default App
