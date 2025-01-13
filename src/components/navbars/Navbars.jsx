import React, { useState,useEffect} from "react";
// import './Navbars.scss';
import '../css/Navbars.css'
import { Link, useLocation } from "react-router-dom";

const navLinks = [
    { name: '首頁', path: '/home' },
    { name: '醫療資訊', path: '/medical' },
    { name: '知識區', path: '/knowledge' },
    { name: '我的會員', path: '/about' },
    { name: '登入', path: '/' },
];

export default function Navbars() {
    const location = useLocation();//獲取當前頁面路徑
    const currentPath = location.pathname;
    const [menuOpen, setMenuOpen] = useState(false); // 新增狀態，用於控制菜單開關
    const toggleMenu = () => setMenuOpen(!menuOpen); // 新增方法，用於切換菜單狀態
    // 【新增】點擊畫面其他地方關閉菜單
    useEffect(() => {
        const handleClickOutside = (event) => {
            // 檢查是否點擊的是菜單以外的區域
            if (!event.target.closest(".bunnynav")) {
                setMenuOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    // 檢查當前路徑是否在已知的頁面路徑中
    // const isPages = navLinks.some((link) => link.path === currentPath);
    // 如果是：要濾掉當前頁面的連結
    // 如果不是：就直接顯示全部連結
    // const navbarLinks = isPages
    //     ? navLinks.filter((link) => link.path !== currentPath)
    //     : navLinks;
    return (
        <nav className="bunnynav">
            <div className="bunnylogobox">
                <img className="bunnylogo" src="./images/logo.svg" alt="" />
                {/* 新增漢堡菜單按鈕 */}
                <button
                    className={`burger-menu ${menuOpen ? 'open' : ''}`} // 【新增】動態樣式，依據 menuOpen 顯示不同樣式
                    onClick={(e) => {
                        e.stopPropagation(); // 【新增】防止點擊按鈕觸發外部點擊事件
                        toggleMenu();
                    }}
                    aria-label="Toggle navigation"
                >
                    <span className="burger-bar"></span>
                    <span className="burger-bar"></span>
                    <span className="burger-bar"></span>
                </button>
            </div>
            {/* 修改：根據 menuOpen 狀態切換選單的顯示 */}
            <ul className={`navul ${menuOpen ? 'open' : ''}`}>
                {navLinks.map((link) => {
                    // 檢查這個 link 是否就是現在所在的頁面
                    const isActive = link.path === currentPath;


                    return (
                        <li
                            key={link.path}
                            // 若 isActive = true，就在 className 裡加上 'active'
                            className={`bunnylink ${isActive ? 'active' : ''}`}
                            onClick={() => setMenuOpen(false)} // 點擊選單項目後關閉菜單
                        >
                            <Link to={link.path}>{link.name}</Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}