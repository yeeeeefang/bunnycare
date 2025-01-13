import './HomeTwo.css';

 const HomeTwo=()=>{
    const characters =[
        {
            imgSrc:"./images/lumi.svg",
            kidney:["熱心助人","有條理","認真但偶爾有點緊張"],
            hobby:"看健康科普書、跳健身操、每天早起喝胡蘿蔔汁。",
            introduce:"一隻熱情又活力滿滿的兔子，喜歡學習新知識，經常翻閱醫學書籍。雖然有時候會太過認真，但這都是因為希望每隻兔兔都能健健康康地奔跑跳躍！",
        },
        {
            imgSrc:"./images/mimi.svg",
            kidney:["溫柔細心","愛吃","非常有耐心"],
            hobby:" 嘗試新食譜、收集小物品、午後喝花草茶。",
            introduce:"一隻甜美又溫柔的兔子，最大的興趣就是研究兔兔的飲食搭配，每樣都知道怎麼做最健康的組合。他相信，美味的食物不僅能填飽肚子，還能填滿心靈！",
        },{
            imgSrc:"./images/nova.svg",
            kidney:["聰明伶俐","愛探索","有時有點小淘氣"],
            hobby:" 記錄兔兔行為日記、收集放大鏡、分享兔兔趣事。",
            introduce:"一隻熱愛冒險的兔子！每天都在森林裡尋找新發現，從小蟲子到大樹洞，沒什麼能逃過他的眼睛。探險和發現讓我每天都充滿樂趣！",
        }
    ]
    return(
        <>
        <div className="hometwoall">
            <div className="strip">
                <img src="./images/homestrip.svg" alt="" />
            </div>
            <div className="characterbox">
            {characters.map((role,index)=>(
                <div className="char-card" key={index}>
                    <div className={`roleimg roleimg-${index}`}>
                        <img src={role.imgSrc} alt="" />
                    </div>
                    <div className="kidney">
                        {role.kidney.map((kidn,i)=>(
                            <p className='kidn' key={i}>
                                {kidn}
                            </p>
                        ))}
                    </div>
                    <div className="hobby">
                        <h3 className="cardh3">愛好</h3>
                        <p className="hobbytext">{role.hobby}</p>
                        <p className='inttext'>{role.introduce}</p>
                    </div>
                    
                </div>
            ))}
        </div>
        </div>
        </>
    )
}
export default HomeTwo