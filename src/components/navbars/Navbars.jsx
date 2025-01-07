import React from "react";
import './Navbars.scss';
import { Link, useLocation } from "react-router-dom";

const navLinks = [
    { name: '首頁', path: '/' },
    { name: '醫療資訊', path: '/medical' },
    { name: '知識區', path: '/knowledge' },
    { name: '我的會員', path: '/about' },
];

export default function Navbars() {
    const location = useLocation();//獲取當前頁面路徑
    const currentPath = location.pathname;

    // 檢查當前路徑是否在已知的頁面路徑中
    const isPages = navLinks.some((link) => link.path === currentPath);
    // 如果是：要濾掉當前頁面的連結
    // 如果不是：就直接顯示全部連結
    const navbarLinks = isPages
        ? navLinks.filter((link) => link.path !== currentPath)
        : navLinks;
    return (
        <nav className="bunnynav">
            <div className="bunnylogobox">
                <img className="bunnylogo" src="./images/logo.svg" alt="" />
            </div>
            <ul className="navul">
                {navLinks.map((link) => {
                    // 檢查這個 link 是否就是現在所在的頁面
                    const isActive = link.path === currentPath;

                    return (
                            <li
                                key={link.path}
                                // 若 isActive = true，就在 className 裡加上 'active'
                                className={`bunnylink ${isActive ? 'active' : ''}`}
                            >
                                <Link to={link.path}>{link.name}</Link>
                            </li>
                    );
                })}
            </ul>
        </nav>
    );
}