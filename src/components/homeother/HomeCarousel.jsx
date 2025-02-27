import React,{ useEffect, useState } from 'react';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import './HomeCarousel.scss';
// import '../css/HomeCarousel.css'

export default function HomeCarousel() {
    //建立目前背景圖的變數
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    //建立輪播圖片的陣列物件
    const slides = [
        { url: "./images/homecarouselnew-1.svg" },
        { url: "./images/homecarouselnew-2.svg" },
        { url: "./images/homecarouselnew-3.svg" },
    ]

    //setInterval方法=>多久時間可以執行裡面的事情
    //當currentImgIndex改變時，會觸發useEffect
    useEffect(() => {
        //每三秒呼叫nextSlide()換下一張圖
        const autoPlay = setInterval(() => {
            nextSlide();
        }, 3000);
        //每三秒，移除autoPlay，這樣才能取得最新的索引編號
        return () => clearInterval(autoPlay);
    }, [currentImgIndex]);

    //下一張
    const nextSlide = () => {
        //取得前一張的索引編號，檢查是否為最後一個編號
        //是 =>回到第一張
        //否 =>跳到下一張
        setCurrentImgIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1))
    }

    //上一張
    const prevSlide = () => {
        //取得前一張的索引編號，檢查是否為最後一個編號
        //是 =>跳到最後一張
        //否 =>跳到上一張
        setCurrentImgIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1))
    }

    //建立左右箭頭
    //同一個檔案中元件可以直接用小括號包起來，如果用小括號就不用return
    const Arrow = ({ direction, onClick }) => {//如果放大括號就要寫return
        return (
            //擺放icon的區域
            <div
            //   style={{
            //     position: 'absolute',
            //     top: '50%',
            //     cursor: 'pointer',
            //     color: 'white',
            //     [direction]: '10px',//將icon拆開 大小一樣是由size給
            //   }}
            >
                {
                    direction === 'left' ? (
                        <IoIosArrowDropleftCircle size={50} onClick={onClick} />
                    ) : (
                        <IoIosArrowDroprightCircle size={50} onClick={onClick} />
                    )
                }

            </div>
        )
    }

    return (
        <>
            {/* 最外層 */}
            {/* <div className='titlehome'>
                <img className='titlehomelogo' src="./images/bunnylogobignew.svg" alt="" />
            </div> */}
            <div className='wrapper'>

                {/* 滿版背景輪播區 */}
                <div className="bakimg"
                    style={{
                        backgroundImage: `url(${slides[currentImgIndex].url})`,
                            // height: '100%',
                            // width: '100%',
                        //     backgroundSize: "cover",
                        //     margin: 'auto',
                    }}
                >
                    <div className='homebox'>
                        <div className='homearrow'>
                            {/* 上一張 */}
                            <Arrow direction='left' onClick={prevSlide} className='arrowhome' />
                            {/* 下一張 */}
                            <Arrow direction='right' onClick={nextSlide} className='arrowhome' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


