import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ForgotPassword from './ForgotPassword';

import './Loginleft.scss';
// import '../css/Loginleft.css'


export default function Loginleft() {
  const [forgot, setForgot] = useState(false);

  const forgotOpen = () => setForgot(true);
  const forgotClose = () => setForgot(false);


  const onSubmit = async (e) => {
    e.preventDefault(); // 防止表單自動刷新頁面
    const email = e.target.email.value; // 直接從表單元素取得欄位值
    const userpw = e.target.userpw.value;

    console.log({ email, userpw });
    // 在這裡處理提交資料
    // await someAsyncFunction(email, userpw); 這裡可以根據需求進行 async 操作
  };

  return (
    <>
      <div className="loginleftall">
        <img className='loginlogo' src="./images/loginlogo.svg" alt="" />
        <img className='bunnyimg1' src="./images/bunnyimg1.svg" alt="" />

        <div id="login-page">

          <div className="login-main">
            <div className="login-form">
              <h2>會員登入</h2>
              <form onSubmit={onSubmit}>
                <label htmlFor="email">Email：</label>
                <input
                  type="email"
                  id="email"
                  name="email" // 使用 name 屬性來標記欄位，便於表單提交
                  placeholder="請輸入Email"
                />

                <label htmlFor="userpw">請輸入密碼：</label>
                <input
                  type="password"
                  id="userpw"
                  name="userpw" // 使用 name 屬性來標記欄位，便於表單提交
                  placeholder="請輸入密碼"
                />

                <p className="forgot-password" onClick={forgotOpen}>忘記密碼</p>
                <Link to='/home'><button type="submit" className="login-button">登入</button></Link>
              </form>
              <div className="login-divider">
                <hr />
                <span>OR</span>
                <hr />
              </div>
              <div className="social-login">
                <button className="facebook"><img src="./images/icon_fb.svg" alt="" /></button>
                <button className="apple"><img src="./images/icon_apple.svg" alt="" /></button>
                <button className="google"><img src="./images/icon_google.svg" alt="" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
       {/* 彈窗 */}
       <ForgotPassword isOpen={forgot} onClose={forgotClose} />
    </>
  );
}
