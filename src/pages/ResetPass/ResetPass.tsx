import { Button, Input, message } from 'antd';
import { updatePassword } from 'firebase/auth';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo3 from '../../assets/images/Frame.png';
import logo from '../../assets/images/Logo alta.png';
import { auth } from '../../lib/firebase';

function ResetPass() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const emailFromUrl = new URLSearchParams(location.search).get('email');

    if (!emailFromUrl) {
        navigate('/');
    }

    const handleConfirm = async () => {
        if (password === confirmPassword && emailFromUrl) {
            try {
                const user = auth.currentUser;
                if (user && user.email === emailFromUrl) {
                    await updatePassword(user, password);
                    message.success('Mật khẩu đã được cập nhật thành công.');
                    navigate('/');
                } else {
                    message.error('Không tìm thấy thông tin người dùng hoặc email không khớp.');
                }
            } catch (error) {
                message.error('Lỗi khi thay đổi mật khẩu');
            }
        } else {
            message.error('Mật khẩu và xác nhận mật khẩu không khớp.');
        }
    };
    return (
        <div className="container">
            <div className="left">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img className="img-logo" src={logo} alt="" />
                </div>
                <div style={{ margin: '60px 0 16px 0' }}>
                    <div style={{ font: 'Nunito' }} className="authEmail-text">
                        Đặt lại mật khẩu mới
                    </div>
                    <div>
                        <div style={{ marginBottom: '5px' }}>
                            <span
                                style={{
                                    font: 'Nunito',
                                    marginRight: '15px',
                                }}
                                className="text-input"
                            >
                                Mật khẩu
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
                                    }}
                                    placeholder="Mật khẩu mới"
                                />
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: '10px' }}>
                        <div style={{ marginBottom: '5px' }}>
                            <span
                                style={{
                                    font: 'Nunito',
                                    marginRight: '15px',
                                }}
                                className="text-input"
                            >
                                Nhập lại mật khẩu
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
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    style={{
                                        width: '400px',
                                        height: '40px',
                                    }}
                                    placeholder="Xác nhận mật khẩu mới"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center' }}>
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
                        }}
                        onClick={handleConfirm}
                    >
                        <span className="text-button-login">Xác nhận</span>
                    </Button>
                </div>
            </div>
            <div className="right">
                <img className="img-logo3" src={logo3} alt="" />
            </div>
        </div>
    );
}

export default ResetPass;
