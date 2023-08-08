import { Button, Input } from 'antd';
import logo2 from '../../assets/images/Group 341.png';
import logo from '../../assets/images/Logo alta.png';

const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

function Login() {
    return (
        <div className="container">
            <div className="left">
                <div>
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
                                style={{
                                    width: '400px',
                                    height: '40px',
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
                                style={{
                                    width: '400px',
                                    height: '40px',
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: '5px' }}>
                    <span
                        style={{
                            font: 'Nunito',
                            marginRight: '310px',
                        }}
                        className="forgotPass-text"
                    >
                        Quên mật khẩu?
                    </span>
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
                    >
                        <span className="text-button">Đăng nhập</span>
                    </Button>
                </div>
            </div>
            <div className="right">
                <img className="img-logo2" src={logo2} alt="" />
            </div>
        </div>
    );
}

export default Login;