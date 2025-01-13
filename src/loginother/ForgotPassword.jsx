import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './ForgotPassword.scss';

const ForgotPassword = ({ isOpen, onClose }) => {
  const forgotRef = useRef(null);

  if (!isOpen) return null; // 當 isOpen 為 false 時，不渲染彈窗

  // 點擊外部區域時關閉彈窗
  const handleClickOutside = (event) => {
    if (forgotRef.current && !forgotRef.current.contains(event.target)) {
      onClose(); // 呼叫關閉函數
    }
  };

  return (
    <div className="forgot" onClick={handleClickOutside}>
      <div className="forgot-content" ref={forgotRef}>
        <div className="foricon">
          <h4>忘記密碼</h4>
        </div>
        <form className="forgot-form">
          <label htmlFor="email">*Email：</label>
          <input type="email" name="email" id="email" title="Email" placeholder="請輸入Email" required />
          <label htmlFor="password">*請輸入密碼：</label>
          <input type="password" name="password" id="password" title="密碼" placeholder="請輸入6~8英數混合字元" />
          <label htmlFor="password-1">*再次確認密碼</label>
          <input type="password" name="password" id="password-1" title="再次確認密碼" placeholder="請輸入6~8英數混合字元" />
          <div className="remember">
            <input type="checkbox" name="remember" id="remember" title="記住密碼" value="記住密碼" />
            <label htmlFor="">記住這個帳號密碼</label>
          </div>
        </form>
        <button className="forgot-button">確認</button>
      </div>
    </div>
  );
};

export default ForgotPassword;
