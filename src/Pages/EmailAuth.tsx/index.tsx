import { Button, Input } from 'antd';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo3 from '../../assets/images/Frame.png';
import logo from '../../assets/images/Logo alta.png';

function AuthEmail() {
    const [email, setEmail] = useState('');
    const auth = getAuth();
    const navigate = useNavigate();

    const triggerResetEmail = async () => {
        await sendPasswordResetEmail(auth, email);
        console.log('Password reset email sent');
    };

    const handleCancel = () => {
        navigate('/');
    };

    const handleContinue = () => {
        navigate('/resetpass', { state: { email } });
    };

    return (
        <div className="container">
            <div className="left">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img className="img-logo" src={logo} alt="" />
                </div>
                <div style={{ margin: '60px 0 16px 0' }}>
                    <div style={{ font: 'Nunito' }} className="authEmail-text">
                        Đặt lại mật khẩu
                    </div>
                    <div style={{ marginBottom: '5px' }}>
                        <span
                            style={{
                                font: 'Nunito',
                                marginRight: '15px',
                            }}
                            className="text-input"
                        >
                            Vui lòng nhập email để đặt lại mật khẩu của bạn *
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{
                                    width: '400px',
                                    height: '40px',
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center' }}>
                    <Button
                        key="cancel"
                        className="button"
                        type="primary"
                        style={{
                            font: 'Montserrat',
                            color: '#FF993C',
                            borderColor: '#FF993C',
                            height: '40px',
                            width: '140px',
                            backgroundColor: '#E7E9F2',
                        }}
                        onClick={handleCancel}
                        ghost
                    >
                        <span className="text-button-login">Hủy</span>
                    </Button>

                    <Button
                        key="save"
                        type="primary"
                        className="button"
                        style={{
                            font: 'Montserrat',
                            background: '#FF993C',
                            borderColor: '#FF993C',
                            height: '40px',
                            width: '140px',
                            marginLeft: '24px',
                        }}
                        onClick={triggerResetEmail}
                    >
                        <span className="text-button-login">Tiếp tục</span>
                    </Button>
                </div>
            </div>
            <div className="right">
                <img className="img-logo3" src={logo3} alt="" />
            </div>
        </div>
    );
}

export default AuthEmail;
