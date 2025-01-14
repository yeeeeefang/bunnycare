import React from "react";
import './Navbars.scss';
// import '../css/Navbars.css';
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "首頁", path: "/home" },
  { name: "醫療資訊", path: "/medical" },
  { name: "知識區", path: "/knowledge" },
  { name: "我的會員", path: "/about" },
];

export default function Navbars() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="bunnynav">
      <ul className="navul">
        {navLinks.slice(0, 2).map((link) => (
          <li
            key={link.path}
            className={`bunnylink ${currentPath === link.path ? "active" : ""}`}
          >
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <div className="bunnylogobox">
        <img className="bunnylogo" src="./images/logonew.svg" alt="Bunny Care" />
      </div>
      <ul className="navul">
        {navLinks.slice(2).map((link) => (
          <li
            key={link.path}
            className={`bunnylink ${currentPath === link.path ? "active" : ""}`}
          >
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
