import React, { useState, useRef } from 'react';
import ArticlePage from './ArticlePage'; // 引入單一文章頁元件
// import './SearchBox.scss';
import '../css/SearchBox.css'
import { FaSearch } from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';

const ShowPages = 5; // 每頁顯示的文章數量

const SearchBox = ({ articles }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredArticles, setFilteredArticles] = useState(articles);
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();


    // 新增：分類對應的圖示與按鈕文字
    const categoryIcons = {
        '飲食': './images/articleicon1.svg',
        '健康照顧': './images/articleicon2.svg',
        '行為解讀': './images/articleicon3.svg',
        '新手教學': './images/articleicon4.svg',
    };

    const categoryTexts = {
        '飲食': '飲食保健',
        '健康照顧': '健康照顧',
        '行為解讀': '行為解讀',
        '新手教學': '新手教學',
    };

    const handleSearch = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchTerm(value);
        const filtered = articles.filter((article) =>
            article.title.toLowerCase().includes(value)
        );
        setFilteredArticles(filtered);
        setCurrentPage(1); // 重置到第一页
    };

    const filterByCategory = (category) => {
        const filtered = articles.filter((article) => article.category === category);
        setFilteredArticles(filtered);
        setCurrentPage(1); // 重置到第一页
    };

    const getPaginatedArticles = () => {
        const startIndex = (currentPage - 1) * ShowPages;
        return filteredArticles.slice(startIndex, startIndex + ShowPages);
    };

    const handlePageChange = (direction) => {
        if (direction === 'next') {
            setCurrentPage((prev) => prev + 1);
        } else if (direction === 'prev') {
            setCurrentPage((prev) => Math.max(prev - 1, 1));
        }
    };

    const handleArticleClick = () => {
        navigate('/articlepage')
    };

    return (
        <>
            <div className="searchbox">
                <img src="./images/articlepageimg4.svg" alt="" />
                <div className="search-section">
                    <div className='searchtexticon'>
                        <input
                            type="text"
                            placeholder="輸入關鍵字搜尋文章..."
                            value={searchTerm}
                            onChange={handleSearch}
                            className="textinput"
                        />
                        <span className="search-icon"><FaSearch /></span>
                    </div>

                    <div className="categories">
                        <p>分類:</p>
                        {Object.keys(categoryTexts).map((category) => (
                            <button
                                key={category}
                                className="categorybutton"
                                onClick={() => filterByCategory(category)}
                            >
                                {categoryTexts[category]}
                            </button>
                        ))}
                    </div>

                    <ul className="results">
                        {getPaginatedArticles().map((article) => (
                            <li key={article.id} className="resultitem">
                                <div
                                    onClick={() => handleArticleClick(article)}
                                    className="link"
                                >

                                    <img
                                        src={categoryIcons[article.category]}
                                        alt={article.category}
                                        className="icon"
                                    />
                                    {article.title}
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="pagination">
                        <button
                            className="paginationbutton"
                            onClick={() => handlePageChange('prev')}
                            disabled={currentPage === 1}
                        >
                            上一頁
                        </button>
                        <span className="paginationinfo">
                            第 {currentPage} 頁，共 {Math.ceil(filteredArticles.length / ShowPages)} 頁
                        </span>
                        <button
                            className="paginationbutton"
                            onClick={() => handlePageChange('next')}
                            disabled={currentPage === Math.ceil(filteredArticles.length / ShowPages)}
                        >
                            下一頁
                        </button>
                    </div>
                </div>


            </div>
           
        </>
    );
};


export default SearchBox;


