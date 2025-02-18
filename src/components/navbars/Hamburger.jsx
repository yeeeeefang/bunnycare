import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Hamburger.scss";
import menuImg from '../../../public/images/menu.svg';//menu點擊地方
import logoImg from '../../../public/images/logonew.svg';
import { useState } from "react";

const Hamburger = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="hamburgermenu">
            <div className="hamburgernav">
                <img className="logoImg" src={logoImg} alt="logo" />
                {/* 漢堡鈕 */}
                <button className="menubtn" onClick={() => setIsOpen(!isOpen)}>
                    <img className="menuImg" src={menuImg} alt="Meun" />
                </button>
            </div>
            {/* 導覽列 */}
            <ul className="navlinks">
                <li><Link to='/home'>首頁</Link></li>
                <li><Link to='/knowledge'>知識園區</Link></li>
                <li><Link to='/medical'>醫療專區</Link></li>
            </ul>
        </nav >
    )
}
export default Hamburger;