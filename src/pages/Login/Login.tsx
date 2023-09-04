import { Button, Input } from 'antd';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo2 from '../../assets/images/Group 341.png';
import logo from '../../assets/images/Logo alta.png';
import { iconErrorLogin } from '../../assets/svg/svg';

function Login() {
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin() {
        try {
            const authInstance = getAuth();
            const credentials = await signInWithEmailAndPassword(authInstance, `${username}@gmail.com`, password);
            const user = credentials.user;
            if (user) {
                setLoginError(false);
                navigate('/dashboard');
            } else {
                setLoginError(true);
            }
        } catch (error) {
            console.error(error);
            setLoginError(true);
        }
    }

    return (
        <div className="container">
            <div className="left">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img className="img-logo" src={logo} alt="" />
                </div>
                <div style={{ margin: '60px 0 16px 0' }}>
                    <div style={{ marginBottom: '5px' }}>
                        <span
                            style={{
                                font: 'Nunito',
                                marginRight: '285px',
                            }}
                            className="text-input"
                        >
                            Tên đăng nhập *
                        </span>
                    </div>

                    <div>
                        <div
                            style={{
                                marginRight: '20px',
                                display: 'inline',
                            }}
                        >
                            <Input
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                style={{
                                    width: '400px',
                                    height: '40px',
                                    borderColor: loginError ? 'red' : '',
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <div style={{ marginBottom: '5px' }}>
                        <span
                            style={{
                                font: 'Nunito',
                                marginRight: '325px',
                            }}
                            className="text-input"
                        >
                            Mật khẩu *
                        </span>
                    </div>

                    <div>
                        <div
                            style={{
                                marginRight: '20px',
                                display: 'inline',
                            }}
                        >
                            <Input.Password
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={{
                                    width: '400px',
                                    height: '40px',
                                    borderColor: loginError ? 'red' : '',
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: '5px' }}>
                    {loginError ? (
                        <div
                            style={{
                                color: 'red',
                                marginRight: '185px',
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            {iconErrorLogin}
                            <span style={{ marginLeft: '5px' }}>Sai mật khẩu hoặc tên đăng nhập</span>
                        </div>
                    ) : (
                        <Link
                            style={{
                                font: 'Nunito',
                                marginRight: '310px',
                                color: 'red',
                            }}
                            to="/authemail"
                            className="forgotPass-text"
                        >
                            Quên mật khẩu?
                        </Link>
                    )}
                </div>

                <div>
                    <Button
                        key="save"
                        type="primary"
                        className="button"
                        style={{
                            font: 'Nunito',
                            background: '#FF993C',
                            borderColor: '#FF993C',
                            height: '40px',
                            width: '162px',
                            margin: '20px 0 0 0',
                            borderRadius: '8px',
                        }}
                        onClick={handleLogin}
                    >
                        <span style={{ font: 'Nunito' }} className="text-button-login">
                            Đăng nhập
                        </span>
                    </Button>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px' }}>
                    {loginError ? (
                        <div style={{ color: 'red' }}>
                            <div>
                                <Link
                                    style={{
                                        font: 'Nunito',
                                        color: 'red',
                                    }}
                                    to="/authemail"
                                    className="forgotPass-text"
                                >
                                    Quên mật khẩu?
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <span></span>
                    )}
                </div>
            </div>
            <div className="right">
                <img className="img-logo2" src={logo2} alt="" />
                <span style={{ font: 'Nunito' }} className="image-text1">
                    Hệ thống
                </span>
                <span style={{ font: 'Nunito' }} className="image-text2">
                    QUẢN LÝ XẾP HÀNG
                </span>
            </div>
        </div>
    );
}

export default Login;
