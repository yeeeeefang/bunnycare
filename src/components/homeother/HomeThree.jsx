import { TiTick } from 'react-icons/ti';
import './HomeThree.scss';
// import '../css/HomeThree.css';

const HomeThree = () => {
    const freetexts = [
        '基本知識訪問',
        '基礎醫院資訊瀏覽',
        '有廣告支持',
    ];
    const premiumtexts = [
        '個性化健康與飲食建議',
        '專業醫療指南',
        '兔兔檔案完整管理',
        '專屬健康提醒',
        '無廣告體驗',
    ];

    return (
        <>
            <div className="membershipall">
                <h2 className='membertitle'>會員方案</h2>
                <div className="membershipbox">
                    {/* 免費區 */}
                    <div className="membershipcontent"  data-type="special">
                        <div className='metitle'>
                            <h3>Basic</h3>
                            <img src="./images/bgfree.svg" alt="" />
                        </div>
                        {/* 服務 */}
                        {freetexts.map((freetext, index) => (
                            <div className='icontext' key={index}>
                                <TiTick />
                                <div className='textall'>
                                    <p className='text'>{freetext}</p>
                                </div>
                            </div>
                        ))}

                        <div className='freebtn'><h4>免費</h4></div>

                    </div>
                    {/* 付費區 */}
                    <div className="membershipcontent">
                        <div className='metitle'>
                            <h3>Premium</h3>
                            <img src="./images/bgpre.svg" alt="" />
                        </div>
                        {/* 服務 */}
                        {premiumtexts.map((premiumtext, index) => (
                            <div className='icontext' key={index}>
                                <TiTick />
                                <div className='textall'>
                                    <p className='text'>{premiumtext}</p>
                                </div>
                            </div>
                        ))}

                        <div className='buttonall'>
                            <div className='buttonleft'>
                                <h4>12個月</h4>
                                <p>30天免費試用</p>
                            </div>
                            <div className='buttonright' data-type="discount">
                                <h4>1200元</h4>
                                <span>1800元</span>
                            </div>
                        </div>
                        <div className='buttonall'>
                            <div className='buttonleft'>
                                <h4>1個月</h4>
                                <p>7天免費試用</p>
                            </div>
                            <h4>150元</h4>
                        </div>
                        <h5>了解更多</h5>

                    </div>
                </div>
                <img className='homethreeimg1' src="./images/homethreeimg1.svg" alt="" />
            </div>
        </>
    )
}
export default HomeThree