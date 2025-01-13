
import React from 'react';
import SearchBox from '../../components/knowother/SearchBox';
// import ArticlePage from '../../components/knowother/ArticlePage';
import './Knowledge.css';
const articles = [
  { id: 1, title: '超級蔬菜排行榜：哪些能增強兔兔免疫力？', category: '飲食' },
  { id: 2, title: '新手必讀：如何迎接兔兔的第一天？', category: '新手教學' },
  { id: 3, title: '兔兔為什麼咬籠子？行為背後的真相與對策', category: '行為解讀' },
  { id: 4, title: '如何建立兔兔的健康檢查日程？細節決定健康', category: '健康照顧' },
  { id: 5, title: '從毛髮到牙齒：兔兔身體異常的早期警訊', category: '健康照顧' },
  { id: 6, title: '兔兔的體重管理：如何預防肥胖與營養不良？', category: '健康照顧' },
  { id: 7, title: '常見兔子疾病深度解析：症狀、預防與處理', category: '健康照顧' },
  { id: 8, title: '年長兔的特別照護：從飲食到環境的全面指南', category: '健康照顧' },
  { id: 9, title: '兔兔的運動需求：打造健康活力生活的關鍵', category: '健康照顧' },
  { id: 10, title: '眼睛、耳朵和爪子的全面檢查與照護技巧', category: '健康照顧' },
  { id: 11, title: '兔兔壽命延長的關鍵：預防性健康管理全攻略', category: '健康照顧' },
  { id: 12, title: '從便便形狀解讀兔兔的內在健康狀況', category: '健康照顧' },
  { id: 13, title: '如何應對突發健康問題？兔兔急救箱準備指南', category: '健康照顧' },
  { id: 14, title: '兔兔的基本健康檢查：每天需要注意哪些細節？', category: '新手教學' },
  { id: 15, title: '新手養兔入門：如何選擇適合的兔籠與用品？', category: '新手教學' },
  { id: 16, title: '初學者指南：如何抱兔子才安全又舒適？', category: '新手教學' },
  { id: 17, title: '兔兔喝水的重要性：選擇水瓶還是水碗？', category: '新手教學' },
  { id: 18, title: '兔兔換毛期大作戰：從梳理到清潔的全攻略', category: '新手教學' },
  { id: 19, title: '別忽略！兔兔舔你的手是在傳達什麼？', category: '行為解讀' },
  { id: 20, title: '甩耳朵、抖身體：兔子的微動作大解析', category: '行為解讀' },
  { id: 21, title: '跳高高又甩頭？認識兔兔的開心小動作', category: '行為解讀' },
  { id: 22, title: '安靜的兔兔真的快樂嗎？如何辨別牠的情緒', category: '行為解讀' },
  { id: 23, title: '為什麼兔兔會推翻食盆？行為中藏著的訊息', category: '行為解讀' },
  { id: 24, title: '逃避還是害怕？如何識別兔兔的壓力行為', category: '行為解讀' },
  { id: 25, title: '腸胃保健必備：兔兔飲食中的益生菌重要性', category: '飲食' },
  { id: 26, title: '飲食與行為：如何利用食物改善兔兔壓力與情緒？', category: '飲食' },
  { id: 27, title: '季節性草與蔬菜：如何為兔兔打造四季飲食計劃', category: '飲食' },
  { id: 28, title: '自製兔兔健康零食：安全又美味的 DIY 食譜', category: '飲食' },
  { id: 29, title: '兔子挑食怎麼辦？破解挑戰背後的原因與解決方法', category: '飲食' },
  { id: 30, title: '進階牧草選擇：讓兔兔品嘗高級草的秘密', category: '飲食' },
  { id: 31, title: '營養補充小秘訣：如何選擇兔子健康零食？', category: '飲食' },
];
function Knowledge() {
  return (
    <>
      <SearchBox articles={articles}/>
    </>
  )
}

export default Knowledge;