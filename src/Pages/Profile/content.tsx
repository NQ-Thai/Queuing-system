import { Input, Layout } from 'antd';
import changeAvata from '../../assets/images/avata.jpg';

const { Content } = Layout;

function UserInFormation() {
    return (
        <Content
            style={{
                width: '1112px',
                height: '397px',
                margin: '0 0 0 24px',
                borderRadius: '12px',
            }}
        >
            <div
                style={{
                    padding: '0 24px 0 24px',
                    minHeight: 360,
                    background: '#FFFFFF',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div
                        style={{
                            display: 'inline-block',
                            height: '303px',
                            width: '248px',
                            marginTop: '40px',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <div
                                style={{
                                    width: '248px',
                                    height: '248px',
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                }}
                            >
                                <img
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    src={changeAvata}
                                    alt=""
                                />
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    marginTop: '10px',
                                }}
                            >
                                <span className="text-menu-under">Da Trắng Tóc xù</span>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            margin: '0 0 0 24px',
                            width: '792px',
                            height: '276px',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                        }}
                    >
                        <div style={{ flex: 1, display: 'inline', margin: '0 24px 81px 0' }}>
                            <div style={{ marginBottom: '8px' }}>
                                <span
                                    style={{
                                        font: 'Nunito',
                                    }}
                                    className="text-change-input"
                                >
                                    Tên người dùng
                                </span>
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <div
                                    style={{
                                        display: 'inline',
                                    }}
                                >
                                    <Input
                                        placeholder="Lê Quỳnh Ái Vân"
                                        style={{
                                            width: '384px',
                                            height: '44px',
                                            backgroundColor: '#EAEAEC',
                                        }}
                                    />
                                </div>
                            </div>

                            <div style={{ marginBottom: '8px' }}>
                                <span
                                    style={{
                                        font: 'Nunito',
                                    }}
                                    className="text-change-input"
                                >
                                    Số điện thoại
                                </span>
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <div
                                    style={{
                                        display: 'inline',
                                    }}
                                >
                                    <Input
                                        placeholder="0767375921"
                                        style={{
                                            width: '384px',
                                            height: '44px',
                                            backgroundColor: '#EAEAEC',
                                        }}
                                    />
                                </div>
                            </div>

                            <div style={{ marginBottom: '8px' }}>
                                <span
                                    style={{
                                        font: 'Nunito',
                                    }}
                                    className="text-change-input"
                                >
                                    Email:
                                </span>
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <div
                                    style={{
                                        display: 'inline',
                                    }}
                                >
                                    <Input
                                        placeholder="adminSSO1@domain.com"
                                        style={{
                                            width: '384px',
                                            height: '44px',
                                            backgroundColor: '#EAEAEC',
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* 2 */}
                        <div style={{ flex: 1, display: 'inline' }}>
                            <div style={{ marginBottom: '8px' }}>
                                <span
                                    style={{
                                        font: 'Nunito',
                                    }}
                                    className="text-change-input"
                                >
                                    Tên đăng nhập
                                </span>
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <div
                                    style={{
                                        display: 'inline',
                                    }}
                                >
                                    <Input
                                        placeholder="lequynhaivan01"
                                        style={{
                                            width: '384px',
                                            height: '44px',
                                            backgroundColor: '#EAEAEC',
                                        }}
                                    />
                                </div>
                            </div>

                            <div style={{ marginBottom: '8px' }}>
                                <span
                                    style={{
                                        font: 'Nunito',
                                    }}
                                    className="text-change-input"
                                >
                                    Mật khẩu
                                </span>
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <div
                                    style={{
                                        display: 'inline',
                                    }}
                                >
                                    <Input
                                        placeholder="311940211"
                                        style={{
                                            width: '384px',
                                            height: '44px',
                                            backgroundColor: '#EAEAEC',
                                        }}
                                    />
                                </div>
                            </div>

                            <div style={{ marginBottom: '8px' }}>
                                <span
                                    style={{
                                        font: 'Nunito',
                                    }}
                                    className="text-change-input"
                                >
                                    Vai trò:
                                </span>
                            </div>

                            <div>
                                <div
                                    style={{
                                        display: 'inline',
                                    }}
                                >
                                    <Input
                                        placeholder="Kế toán"
                                        style={{
                                            width: '384px',
                                            height: '44px',
                                            backgroundColor: '#EAEAEC',
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Content>
    );
}

export default UserInFormation;
