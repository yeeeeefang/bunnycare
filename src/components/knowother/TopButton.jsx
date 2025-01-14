import React, { useState, useEffect } from 'react';
import './TopButton.scss';
// import '../css/TopButton.css';


const TopButton = ({ triggerHeight, stopOffset }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [bottomOffset, setBottomOffset] = useState(20); // 預設距離底部 20px

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // 控制按鈕何時出現
        //scrollY：頁面當前已滾動的垂直距離。
        //windowHeight：瀏覽器視窗的可視高度。
        //documentHeight：整個頁面的高度。
        if (scrollY > triggerHeight) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }

        // 控制按鈕停留位置
        if (scrollY + windowHeight >= documentHeight - stopOffset) {
            setBottomOffset(stopOffset - (documentHeight - scrollY - windowHeight));
        } else {
            setBottomOffset(20);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        isVisible && (
            <img className="topbutton" 
            src="./images/topbutton.svg" alt="" 
            style={{ bottom: `${bottomOffset}px` }}
            onClick={scrollToTop}
            />
        )
    );
};

export default TopButton;



