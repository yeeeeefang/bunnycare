import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
//components
import Navbars from "./components/navbars/Navbars";
import Loginleft from "./loginother/Loginleft";
//pages
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Knowledge from "./pages/knowledge/Knowledge";
import Medical from "./pages/medical/Medical";

import './assets/css/App.css';


function App() {
  const location = useLocation();

  
  // 需要「隱藏 Navbar」的多個路徑清單
  const hideNavOn = ["/", "/loginleft"];

  // 判斷目前路徑是否在清單中
  const hideNav = hideNavOn.includes(location.pathname);

  return (
    <>
      {/* 只有在非 /login 時才顯示 Navbars */}
      {!hideNav && <Navbars />}
      {/* <Navbars /> */}

      {/* 對應的路由 */}
      <Routes>
       <Route path="/" element={<Login />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/knowledge" element={<Knowledge />} />
        <Route path="/medical" element={<Medical />} />
        <Route path="/loginleft" element={<Loginleft/>}></Route>
      </Routes>
    </>
  )
}

export default App
