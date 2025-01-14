import React, { useState } from 'react';
// import './MedicalShow.scss';
import '../css/MedicalShow.css'

const MedicalShow = () => {
    const [currentView, setCurrentView] = useState("chart"); // 管理當前顯示的視圖
    const [selectedRegion, setSelectedRegion] = useState(""); // 管理選中的地區

    const data = {
        北: [
            { name: "小不點特寵動物醫院", description: "台北 內湖" },
            { name: "興新特寵動物診所", description: "台北 松山", status: "24HR" },
            { name: "你好特寵動物醫院", description: "台北 信義", status: "24HR" },
            { name: "旺旺特寵動物診所", description: "台北 大安", },
            { name: "星語特寵動物診所", description: "台北 士林", status: "24HR" },
            { name: "小寵動物醫院", description: "新北 淡水", status: "24HR" },
            { name: "寵愛家特寵動物醫院", description: "新北 汐止", },
            { name: "毛星球特寵動物診所", description: "新北 板橋", },
            { name: "暖心特寵動物診所", description: "基隆 中正", },
            { name: "森林特寵動物診所", description: "桃園 龍潭", },
            { name: "星語特寵動物診所", description: "桃園 中壢", status: "24HR" },
            { name: "暖心特寵動物診所", description: "新竹 關西", },
            { name: "森林特寵動物診所", description: "新竹 羅東", },

        ],
        中: [
            { name: "安新巢特寵動物醫院", description: "苗栗 通霄" },
            { name: "幸福特寵動物診所", description: "苗栗 竹南", status: "24HR" },
            { name: "愛寵特寵動物醫院", description: "台中 西屯", status: "24HR" },
            { name: "暖暖特寵動物診所", description: "台中 沙鹿", },
            { name: "小寵動物診所", description: "台中 北屯", status: "24HR" },
            { name: "寵愛家特寵動物醫院", description: "台中 霧峰", },
            { name: "毛星球特寵動物診所", description: "彰化 和美", },
            { name: "暖心特寵動物醫院", description: "彰化 鹿港", },
            { name: "森林特寵動物醫院", description: "南投 竹山", },
            { name: "星語特寵動物診所", description: "南投 埔里", },
            { name: "星語特寵動物診所", description: "雲林 斗六", status: "24HR" },
            { name: "森林特寵動物醫院", description: "雲林 虎尾", },
        ],
        南: [
            { name: "毛孩特寵動物診所", description: "嘉義 東區" },
            { name: "真真特寵動物診所", description: "嘉義 民雄", status: "24HR" },
            { name: "你好特寵動物醫院", description: "台南 永康", },
            { name: "旺旺特寵動物診所", description: "台南 安平", },
            { name: "小寵動物醫院", description: "台南 中西", status: "24HR" },
            { name: "寵愛家特寵動物診所", description: "高雄 左營", status: "24HR" },
            { name: "毛星球特寵動物診所", description: "高雄 鳳山", },
            { name: "暖心特寵動物診所", description: "高雄 三民", },
            { name: "森林特寵動物醫院", description: "高雄 前鎮", },
            { name: "星語特寵動物診所", description: "屏東 恆春", status: "24HR" },
        ],
        東: [
            { name: "小太陽特寵動物醫院", description: "宜蘭 蘇澳" },
            { name: "亮亮寶貝寵動物診所", description: "宜蘭 南澳", },
            { name: "你好特寵動物醫院", description: "花蓮 吉安", },
            { name: "旺旺特寵動物診所", description: "花蓮 秀林", },
            { name: "小寵動物診所", description: "花蓮 壽豐", },
            { name: "寵愛家特寵動物診所", description: "台東 池上", },
            { name: "毛星球特寵動物診所", description: "台東 成功", },
        ],
    };

    const handleRegionClick = (regionName) => {
        setSelectedRegion(regionName);
        setCurrentView("list");
    };

    const handleBackToChart = () => {
        setCurrentView("chart");
        setSelectedRegion(""); // 清空選中地區
    };

    return (
        <>
            <div className="medical-show">
                {currentView === "chart" ? (
                    <div className="chart-view">

                        <div className="chart">
                        <svg id="b" data-name="圖層 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2455.94 267.9">
  <g id="c" data-name="圖層 59">
    <g>
      <path className="d" d="M2027.53,97.03c22.73,41.32,15.47,90.51-13.12,107.32-27.69,16.25-67.99-5.61-92.88-46.13-27.21-38.15-27.53-80.8,2.2-97.93,30.68-17.66,78.57-2.33,103.8,36.74Z"/>
      <path className="d" d="M1963.7,97.03c-22.73,41.32-15.47,90.51,13.12,107.32,27.69,16.25,67.99-5.61,92.88-46.13,27.21-38.15,27.53-80.8-2.2-97.93-30.68-17.66-78.57-2.33-103.8,36.74Z"/>
    </g>
    <g>
      <path className="e" d="M1533.68,128.94c16.6,1.47,33.25,1.86,49.9,2.09,7.51.1,15.54.96,23-.08,6.64-.93,10.9-4.68,13.59-10.71,6.54-14.68,11.5-30.25,17.17-45.29,6.06-16.07,12.11-32.14,18.17-48.21h-5.79c11.82,59.49,20.38,119.61,25.53,180.04,1.45,17.04,2.62,34.11,3.55,51.19.18,3.33,4.91,4.14,5.89.8,11.17-38.01,19.46-76.8,24.78-116.06h-5.79c1.84,6.2,3.67,12.4,5.51,18.59,1.44,4.85,2.25,10.83,5.41,14.93,5.09,6.6,14.3,3.59,18.61-2.26,2.95-4,3.5-8.99,4.24-13.75.87-5.61,2.39-10.67,6.23-14.99,7.61-8.56,19.25-11.61,30.31-11.92,18.3-.52,41.69,8.06,56.26-7.11,9.32-9.7,11.34-24.26,13.42-36.96,2.44-14.89,4.29-33.74,17.79-43.11l-4.41-1.79c18.77,73.53,37.54,147.06,56.31,220.59.75,2.92,4.97,2.79,5.79,0,12.92-44.23,18.84-90.32,17.51-136.37l-5.89.8c7.11,19.25,14.21,38.5,21.32,57.74.83,2.25,4.19,3.18,5.48.72,4.26-8.13,8.51-16.26,12.77-24.39,2.13-4.07,4.26-8.13,6.39-12.2,1.94-3.71,3.64-8.12,6.45-11.28,3.21-3.61,7.59-3.66,12.09-3.64s9.11.1,13.67.15c9.42.1,18.83.21,28.25.31,9.04.1,18.08.31,27.12.3,7.02-.01,13.97-.79,19.51-5.51s8.94-11.95,12.51-18.27c4.49-7.96,8.99-15.93,13.48-23.89,10.34-18.32,20.67-36.63,31.01-54.95l-5.48-.72c10.28,61.43,26.73,121.78,49.17,179.89,6.27,16.23,13,32.28,20.16,48.14.74,1.63,3.59,2.04,4.71.61,26.28-33.63,5.52-79.38,20.33-116.72h-5.79c5.86,14.57,11.72,29.15,17.58,43.72,1.29,3.21,5.47,2.62,5.89-.8,1.68-13.59,6.72-27.67,16.2-37.79,10.44-11.15,23.89-13.15,38.42-10.59,13.14,2.31,27.41,7.44,40.72,3.39,15.07-4.58,21.01-19.6,27.13-32.63,9.22-19.65,18.44-39.3,27.65-58.96l-5.48-.72c12.86,60.94,25.72,121.88,38.58,182.82,2.03,9.61,4.13,28.01,17.68,27.47.99-.04,2.14-.53,2.59-1.49,1.59-3.38,3.17-6.76,4.76-10.14s-3.54-6.53-5.18-3.03-3.17,6.76-4.76,10.14l2.59-1.49c-7.72.3-9.4-11.2-10.58-16.82-1.88-8.92-3.76-17.84-5.65-26.75-3.76-17.84-7.53-35.67-11.29-53.51-7.65-36.27-15.3-72.53-22.96-108.8-.51-2.42-4.39-3.04-5.48-.72-8.32,17.74-16.64,35.48-24.97,53.23-6.5,13.86-12.44,33.69-29.9,36.46-14.76,2.33-29.63-4.71-44.3-5.56-13.41-.78-25.7,4.31-34.64,14.34-10.1,11.34-15.29,26.26-17.14,41.14l5.89-.8c-5.86-14.57-11.72-29.15-17.58-43.72-1.13-2.82-4.66-2.85-5.79,0-7.29,18.38-6.39,38.48-6.22,57.88.17,19.29-.12,40.26-12.57,56.19l4.71.61c-25.38-56.28-45.07-115.09-58.67-175.31-3.84-17-7.17-34.1-10.05-51.29-.44-2.61-4.3-2.82-5.48-.72-9.14,16.19-18.27,32.39-27.41,48.58-4.49,7.96-8.99,15.93-13.48,23.89-4.02,7.12-7.56,15.56-13.21,21.57-6.36,6.76-15.82,5.63-24.29,5.54-9.11-.1-18.22-.2-27.33-.3-9.42-.1-18.83-.21-28.25-.31-6.86-.08-14.98-1.15-20.75,3.42-2.88,2.28-4.67,5.53-6.37,8.71-2.45,4.59-4.82,9.22-7.24,13.82-4.97,9.49-9.93,18.97-14.9,28.46l5.48.72c-7.11-19.25-14.21-38.5-21.32-57.74-1.11-3-6-2.8-5.89.8,1.32,45.56-4.51,91.03-17.29,134.78h5.79c-18.77-73.53-37.54-147.06-56.31-220.59-.45-1.77-2.82-2.9-4.41-1.79-23.01,15.96-16.87,48.35-26.41,71.37-2.31,5.57-5.84,10.62-11.17,13.65-9.47,5.38-21.27,2.85-31.54,1.97-18.39-1.57-40.02-.67-52.01,15.67-3.14,4.28-4.72,9.03-5.53,14.24s-1.12,12.97-6.94,15.55c-6.81,3.03-8.04-7.53-9.36-12-2-6.76-4.01-13.52-6.01-20.29-.77-2.59-5.36-3.11-5.79,0-5.33,39.26-13.61,78.05-24.78,116.06l5.89.8c-3.29-60.8-9.92-121.4-19.9-181.47-2.85-17.17-5.99-34.29-9.39-51.36-.63-3.17-4.84-2.51-5.79,0-10.94,29.04-21.89,58.08-32.83,87.12-1.19,3.16-2.23,6.85-4.46,9.47-2.45,2.89-6.1,3.38-9.65,3.51-7.56.29-15.21-.15-22.77-.27-15.46-.23-30.92-.68-46.32-2.04-3.85-.34-3.82,5.66,0,6h0Z"/>
      <path className="e" d="M1556.45,125.65c-14.95,0-29.63-4.71-44.3-5.56-13.41-.78-25.7,4.31-34.64,14.34-6.83,7.66-11.41,16.97-14.23,26.79-.34,1.17-1.96,1.27-2.41.13-4.06-10.1-8.12-20.2-12.19-30.3-1.13-2.82-4.66-2.85-5.79,0-7.29,18.38-6.39,38.48-6.22,57.88.15,16.94-.06,35.18-8.55,50.15-.52.92-1.87.86-2.3-.11-23.93-54.22-42.62-110.74-55.67-168.56-3.84-17-7.17-34.1-10.05-51.29-.44-2.61-4.3-2.82-5.48-.72-9.14,16.19-18.27,32.39-27.41,48.58-4.49,7.96-8.99,15.93-13.48,23.89-4.02,7.12-7.56,15.56-13.21,21.57-6.36,6.76-15.82,5.63-24.29,5.54-9.11-.1-18.22-.2-27.33-.3-9.42-.1-18.83-.21-28.25-.31-6.86-.08-14.98-1.15-20.75,3.42-2.88,2.28-4.67,5.52-6.37,8.71-2.45,4.59-4.82,9.21-7.24,13.82-3.5,6.69-7,13.38-10.5,20.06-.51.98-1.95.89-2.33-.15-5.97-16.16-11.93-32.32-17.9-48.48-1.11-3-6-2.8-5.89.8,1.16,40.14-3.24,80.19-13.04,119.08-.32,1.28-2.15,1.28-2.48,0-17.43-68.3-34.87-136.59-52.3-204.89-.45-1.77-2.82-2.9-4.41-1.79-23.31,16.18-16.6,48.96-26.72,72.1-2.37,5.42-5.94,10.25-11.21,13.12-9.4,5.12-21.05,2.64-31.18,1.77-18.39-1.57-40.02-.67-52.01,15.67-3.33,4.54-4.8,9.52-5.65,15.02-.81,5.22-1.23,12.29-6.82,14.77-6.82,3.03-8.06-7.58-9.36-12-2-6.76-4.01-13.52-6.01-20.29-.77-2.59-5.36-3.11-5.79,0-4.18,30.81-10.19,61.33-17.98,91.41-.36,1.41-2.41,1.22-2.51-.23-3.63-52.18-9.73-104.19-18.31-155.79-2.85-17.17-5.99-34.29-9.39-51.36-.63-3.17-4.84-2.51-5.79,0-10.94,29.04-21.89,58.08-32.83,87.12-1.19,3.16-2.23,6.85-4.46,9.47-2.45,2.89-6.1,3.38-9.65,3.51-7.6.29-15.29-.19-22.89-.3-15.67-.24-31.33-.47-47-.71-3.86-.06-3.86,5.94,0,6,16.87.25,33.74.51,50.61.76,7.54.11,15.59,1,23.08-.05,6.64-.93,10.9-4.68,13.59-10.71,6.54-14.67,11.5-30.25,17.17-45.29,4.25-11.28,8.5-22.56,12.75-33.84.46-1.21,2.22-1.06,2.46.21,10.37,54.72,17.97,109.96,22.7,165.46,1.45,17.04,2.62,34.11,3.55,51.19.18,3.33,4.91,4.14,5.89.8,9.39-31.96,16.74-64.47,22.01-97.35.22-1.34,2.09-1.47,2.48-.16,0,.02.01.04.02.05,1.42,4.8,2.27,10.86,5.41,14.93,5,6.49,13.96,3.67,18.38-1.96,3.15-4.01,3.72-9.18,4.47-14.05.88-5.66,2.36-10.63,6.23-14.99,7.19-8.1,18.12-11.32,28.61-11.86,18.59-.95,42.3,8.2,57.43-6.64,9.66-9.48,11.78-24.27,13.87-36.99,2.13-13.01,3.75-29.07,12.99-39.29.68-.75,1.93-.43,2.18.55,18.2,71.31,36.41,142.62,54.61,213.93.75,2.92,4.97,2.79,5.79,0,10.68-36.56,16.58-74.38,17.55-112.41.04-1.41,1.98-1.73,2.47-.41,4.31,11.66,8.61,23.32,12.92,34.99.83,2.25,4.19,3.18,5.48.72,4.26-8.13,8.51-16.26,12.77-24.39,2.13-4.07,4.26-8.13,6.38-12.2,1.94-3.71,3.64-8.12,6.45-11.28,3.21-3.61,7.59-3.66,12.09-3.64,4.56.02,9.11.1,13.67.15,9.42.1,18.83.21,28.25.31,9.04.1,18.08.31,27.12.3,7.02-.01,13.97-.79,19.51-5.51,5.63-4.8,8.94-11.95,12.51-18.27,4.49-7.96,8.99-15.93,13.48-23.89,8.39-14.87,16.78-29.74,25.17-44.6.59-1.04,2.15-.78,2.36.4,10.36,57.47,26.12,113.94,47.16,168.43,6.27,16.23,13,32.28,20.16,48.14.74,1.63,3.59,2.04,4.71.61,23.56-30.15,9.32-70.03,16.79-104.87.26-1.23,1.97-1.36,2.44-.2,4.3,10.69,8.6,21.38,12.9,32.08,1.29,3.21,5.47,2.62,5.89-.8,1.68-13.59,6.72-27.67,16.2-37.79,10.44-11.15,24.57-13.4,39.1-10.84,13.14,2.31,26.13,3.65,40.04,3.65,2.96,0,5.96-4.93-5.27-4.93Z"/>
      <path className="e" d="M814.68,112.94c-14.95,0-38.63,2.08-53-1s-24.22,2.46-33.16,12.5c-6.83,7.66-11.41,16.97-14.23,26.79-.34,1.17-1.96,1.27-2.41.13-4.06-10.1-8.12-20.2-12.19-30.3-1.13-2.82-4.66-2.85-5.79,0-7.29,18.38-6.39,38.48-6.22,57.88.15,16.94-.06,35.18-8.55,50.15-.52.92-1.87.86-2.3-.11-23.93-54.22-42.62-110.74-55.67-168.56-3.84-17-7.17-34.1-10.05-51.29-.44-2.61-4.3-2.82-5.48-.72-9.14,16.19-18.27,32.39-27.41,48.58-4.49,7.96-8.99,15.93-13.48,23.89-4.02,7.12-7.56,15.56-13.21,21.57-6.36,6.76-15.82,5.63-24.29,5.54-9.11-.1-18.22-.2-27.33-.3-9.42-.1-18.83-.21-28.25-.31-6.86-.08-14.98-1.15-20.75,3.42-2.88,2.28-4.67,5.52-6.37,8.71-2.45,4.59-4.82,9.21-7.24,13.82-3.5,6.69-7,13.38-10.5,20.06-.51.98-1.95.89-2.33-.15-5.97-16.16-11.93-32.32-17.9-48.48-1.11-3-6-2.8-5.89.8,1.16,40.14-3.24,80.19-13.04,119.08-.32,1.28-2.15,1.28-2.48,0-17.43-68.3-34.87-136.59-52.3-204.89-.45-1.77-2.82-2.9-4.41-1.79-23.31,16.18-16.6,48.96-26.72,72.1-2.37,5.42-5.94,10.25-11.21,13.12-9.4,5.12-21.05,2.64-31.18,1.77-18.39-1.57-40.02-.67-52.01,15.67-3.33,4.54-4.8,9.52-5.65,15.02-.81,5.22-1.23,12.29-6.82,14.77-6.82,3.03-8.06-7.58-9.36-12-2-6.76-4.01-13.52-6.01-20.29-.77-2.59-5.36-3.11-5.79,0-4.18,30.81-10.19,61.33-17.98,91.41-.36,1.41-2.41,1.22-2.51-.23-3.63-52.18-9.73-104.19-18.31-155.79-2.85-17.17-5.99-34.29-9.39-51.36-.63-3.17-4.84-2.51-5.79,0-10.94,29.04-21.89,58.08-32.83,87.12-1.19,3.16-2.23,6.85-4.46,9.47-2.45,2.89-6.1,3.38-9.65,3.51-7.6.29-15.29-.19-22.89-.3-15.67-.24-31.33-.47-47-.71-3.86-.06-3.86,5.94,0,6,16.87.25,33.74.51,50.61.76,7.54.11,15.59,1,23.08-.05,6.64-.93,10.9-4.68,13.59-10.71,6.54-14.67,11.5-30.25,17.17-45.29,4.25-11.28,8.5-22.56,12.75-33.84.46-1.21,2.22-1.06,2.46.21,10.37,54.72,17.97,109.96,22.7,165.46,1.45,17.04,2.62,34.11,3.55,51.19.18,3.33,4.91,4.14,5.89.8,9.39-31.96,16.74-64.47,22.01-97.35.22-1.34,2.09-1.47,2.48-.16,0,.02.01.04.02.05,1.42,4.8,2.27,10.86,5.41,14.93,5,6.49,13.96,3.67,18.38-1.96,3.15-4.01,3.72-9.18,4.47-14.05.88-5.66,2.36-10.63,6.23-14.99,7.19-8.1,18.12-11.32,28.61-11.86,18.59-.95,42.3,8.2,57.43-6.64,9.66-9.48,11.78-24.27,13.87-36.99,2.13-13.01,3.75-29.07,12.99-39.29.68-.75,1.93-.43,2.18.55,18.2,71.31,36.41,142.62,54.61,213.93.75,2.92,4.97,2.79,5.79,0,10.68-36.56,16.58-74.38,17.55-112.41.04-1.41,1.98-1.73,2.47-.41,4.31,11.66,8.61,23.32,12.92,34.99.83,2.25,4.19,3.18,5.48.72,4.26-8.13,8.51-16.26,12.77-24.39,2.13-4.07,4.26-8.13,6.38-12.2,1.94-3.71,3.64-8.12,6.45-11.28,3.21-3.61,7.59-3.66,12.09-3.64,4.56.02,9.11.1,13.67.15,9.42.1,18.83.21,28.25.31,9.04.1,18.08.31,27.12.3,7.02-.01,13.97-.79,19.51-5.51,5.63-4.8,8.94-11.95,12.51-18.27,4.49-7.96,8.99-15.93,13.48-23.89,8.39-14.87,16.78-29.74,25.17-44.6.59-1.04,2.15-.78,2.36.4,10.36,57.47,26.12,113.94,47.16,168.43,6.27,16.23,13,32.28,20.16,48.14.74,1.63,3.59,2.04,4.71.61,23.56-30.15,9.32-70.03,16.79-104.87.26-1.23,1.97-1.36,2.44-.2,4.3,10.69,8.6,21.38,12.9,32.08,1.29,3.21,5.47,2.62,5.89-.8,1.68-13.59,6.72-27.67,16.2-37.79,10.44-11.15,24.35-11.15,39.1-10.84,18.07.37,34.05.23,46,1,2.95.19,7.23-5-4-5Z"/>
    </g>
  </g>
</svg>
                            <p>點擊地區按鈕查看醫院資訊</p>
                        </div>
                    </div>
                ) : (
                    <div className="list-view">
                        {/* <h2>{selectedRegion}地區的醫院</h2> */}
                        <ul className="hospital-list">
                            {data[selectedRegion].map((hospital, index) => (
                                <li key={index} className="hospital-item">
                                    <div className='box'>
                                        <div className='iconnamebox'>
                                            <img src="./images/deco2.png" alt="" />
                                            <div className="hospital-name">{hospital.name}</div>
                                        </div>
                                        <div className="info-box">
                                            <div className="description pink-box">
                                                {hospital.description}
                                            </div>
                                            {hospital.status && (
                                                <div className="status yellow-box">{hospital.status}</div>
                                            )}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <div className="buttons">
                    {["北", "中", "南", "東"].map((region) => (
                        <button
                            key={region}
                            className={`region-button ${selectedRegion === region && currentView === "list"
                                ? "active"
                                : ""
                                }`}
                            onClick={() => handleRegionClick(region)}
                        >
                            {region}
                        </button>
                    ))}
                    <img
                        src="./images/deco3.png" // 替換為紅色按鈕圖片路徑
                        alt="返回心電圖"
                        className="red-button"
                        onClick={handleBackToChart}
                    />
                </div>
            </div>
        </>
    );
};

export default MedicalShow;

