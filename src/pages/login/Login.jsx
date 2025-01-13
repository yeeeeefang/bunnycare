import { Link } from 'react-router-dom';
import './Login.scss';
// import '../css/Login.css'
export default function Login() {
    return (
        <>
            <div className="login">
                <Link to='/home'><img className='loginlogo' src="./images/loginlogo.svg" alt="" /></Link>

                <img className='loginfly' src="./images/loginfly.svg" alt="" />

                <div className='cloudall'>
                    <Link to='/loginleft'><div className='cloudcontent'>
                        <h2>登入</h2>
                        <img src="./images/logincloud.svg" alt="" />
                    </div></Link> 
                    <div className='cloudcontent'>
                        <h2>註冊</h2>
                        <img src="./images/logincloud.svg" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}