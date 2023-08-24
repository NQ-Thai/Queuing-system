import { Input, Layout } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../lib/User/UserReducer';
import { AppDispatch, RootState } from '../../lib/store';

const { Content } = Layout;

function UserInFormation() {
    const dispatch: AppDispatch = useDispatch();

    const users = useSelector((state: RootState) => state.User.user);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    const userInfo = users.length > 0 ? users[0] : null;
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
                                <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={userInfo?.Avata || ''} alt="" />
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    marginTop: '10px',
                                }}
                            >
                                <span className="text-menu-under">{userInfo?.TenNguoiDung || ''}</span>
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
                                        placeholder={userInfo?.TenNguoiDung || ''}
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
                                        placeholder={userInfo?.Email || ''}
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
                                        placeholder={userInfo?.TenDangNhap || ''}
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
                                        placeholder={userInfo?.MatKhau || ''}
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
                                        placeholder={userInfo?.VaiTro || ''}
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
