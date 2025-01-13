import React from "react";
import './ArticlePage.css';
import { VscDebugBreakpointFunction } from "react-icons/vsc";
const ArticlePage = () => {
    // if (!article) {
    //     return <div>沒有選擇任何文章</div>;
    // }
    const popo = [
        { title: "形狀", content: ["健康便便呈圓形或略微橢圓形，", "大小均勻，每顆直徑約為0.5-1厘米。"] },
        { title: "質地", content: ["便便應乾燥但不過於脆弱，", "內部可見纖維成分。"] },
        { title: "顏色", content: ["正常顏色為淺棕色至深棕色，", "根據飲食可能略有變化。"] },
    ];
    const nopopo = [
        { title: "正常", content: ["形狀像葡萄串", "表面黏滑，富含營養，", "兔兔通常會直接食用。"] },
        { title: "異常情況", content: ["盲腸便堆積在籠子內，", "未被兔兔食用，", "可能是過量供應飼料或蔬菜，", "導致腸胃不適。"] },
    ];
    const meaning = [
        { bigtitle: "軟便、稀便", title1: "原因", title2: "應對", content1: "高糖食物、纖維不足或腸胃感染。", content2: "減少蔬菜和水果的供應，增加牧草比例，觀察便便是否改善。" },
        { bigtitle: "便便過小或稀少", title1: "原因", title2: "應對", content1: "腸胃堵塞、壓力或飲水不足。", content2: "增加飲水量，觀察兔兔的飲食情況，必要時就醫。" },
        { bigtitle: "便便帶血", title1: "原因", title2: "應對", content1: "消化道損傷或疾病。", content2: "立即停止所有高纖以外的食物，並儘快就醫。" },
    ];
    const articleimg = [
        { ImgURL: "./images/articlepageimg2.svg", imgtext: "這是正常大便" },
        { ImgURL: "./images/articlepageimg3.svg", imgtext: "這是盲腸便" },
    ];

    return (
        <>
            {/* 整個文章 */}
            <div className="articleall">
                <h3 className="arth3">從<span>便便形狀</span></h3>
                <h3 className="arth3-1">解讀兔兔的健康狀況</h3>
                <div className="artbox1">
                    <p>兔兔有兩種大便，主要是因為牠有兩種消化過程：<br />
                        第一種和人類一樣，食物從口腔進入到胃、小腸、盲腸和結腸，<br />
                        排泄出一小粒一小粒的圓型黑色便便；<br />
                        第二種消化過程就特別了，而且對兔子來說超級重要，<br />
                        那就是「食糞」！</p>
                    <img src="./images/articlepageimg1.svg" alt="rabbit-banner" />
                </div>
                <div className="artbox2">
                    <h2>正常便便的特徵</h2>
                    <div className="artbox2-1">
                        {popo.map((popo, index) => (
                            <div key={index} className="popocontent">
                                <h4>{popo.title}</h4>
                                {/* 讓內容換行 */}
                                {popo.content.map((line, i) => (
                                    <p key={i}>{line}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="artbox3">
                    <h2>盲腸便</h2>
                    <div className="artbox3-1">
                        {nopopo.map((nopopo, index) => (
                            <div key={index} className="nopopocontent">
                                <h4>{nopopo.title}</h4>
                                {/* 讓內容換行 */}
                                {nopopo.content.map((line, i) => (
                                    <p key={i}>{line}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* 異常含意與應對 */}
                <div className="artcontent">

                    <h2>異常便便的含意與應對</h2>


                    {meaning.map((meaning, index) => (
                        <div key={index} className="artprt1">
                            <div className="artcontenth5">
                                <h5>{meaning.bigtitle}</h5>
                            </div>
                            <div className="meaning1">
                                <div className="meaning2">
                                    <h5>{meaning.title1}</h5>
                                    <p>{meaning.content1}</p>
                                </div>
                                <div className="meaning2">
                                    <h5>{meaning.title2}</h5>
                                    <p>{meaning.content2}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="arttextbox">
                        {/* <div className="arttext"> */}
                        <div className="imgbox">
                            <img src={articleimg[0].ImgURL} alt="" />
                            <div className="imgtextbox">
                                <VscDebugBreakpointFunction />
                                {articleimg[0].imgtext}
                            </div>
                        </div>
                        <div className="imgbox">
                            <img src={articleimg[1].ImgURL} alt="" />
                            <div className="imgtextbox">
                                <VscDebugBreakpointFunction className="rcicon" />
                                {articleimg[1].imgtext}
                            </div>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
                <h4 className="arth4">便便是兔兔健康的晴雨表，<br />
                    觀察便便能幫助飼主及早發現問題並進行調整。<br />
                    每天清理便盆、注意飲食平衡，<br />
                    為兔兔打造健康快樂的生活環境。
                </h4 >
            </div>
        </>
    );
}
export default ArticlePage;