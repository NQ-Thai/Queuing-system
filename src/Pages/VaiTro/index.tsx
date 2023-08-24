import { Layout } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { iconBell } from '../../assets/svg/svg';
import { fetchData } from '../../lib/User/UserReducer';
import { AppDispatch, RootState } from '../../lib/store';
import SearchVaiTro from './Search';
import ContentVaiTro from './content';

function VaiTro() {
    const dispatch: AppDispatch = useDispatch();

    const users = useSelector((state: RootState) => state.User.user);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    const userInfo = users.length > 0 ? users[0] : null;
    return (
        <Layout>
            <Layout>
                <div style={{ width: '1240px', height: '88px', marginBottom: '5px' }}>
                    <div style={{ font: 'Nunito', display: 'flex', alignItems: 'center' }}>
                        <span className="text-header-content">
                            <span className="text-first-head" style={{ font: 'Nunito' }}>
                                Cài đặt hệ thống&nbsp;&nbsp;&gt;&nbsp;&nbsp;
                            </span>
                            Quản lý vai trò
                        </span>
                        <div className="icon-wrapper-caidat" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                            {iconBell}
                        </div>
                        <Link to="/profile" style={{ display: 'flex', alignItems: 'center' }}>
                            <div
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    marginRight: '7.5px',
                                }}
                            >
                                <img src={userInfo?.Avata || ''} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>

                            <div style={{ display: 'inline-block', textAlign: 'left' }}>
                                <span className="text-hello" style={{ font: 'Nunito', display: 'block' }}>
                                    Xin chào
                                </span>
                                <span className="text-name-right" style={{ font: 'Nunito', display: 'block' }}>
                                    {userInfo?.TenNguoiDung || ''}
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div style={{ marginBottom: '19px' }}>
                    <div style={{ display: 'inline-block' }}>
                        <span className="title2-dashboard" style={{ font: 'Nunito' }}>
                            Danh sách vai trò
                        </span>
                    </div>

                    <div style={{ display: 'inline-block', marginLeft: '676px' }}>
                        <div style={{ marginBottom: '5px' }}>
                            <span className="title-select-thietbi" style={{ font: 'Nunito' }}>
                                Từ khóa
                            </span>
                        </div>

                        <div>
                            <div
                                style={{
                                    marginRight: '20px',
                                    display: 'inline',
                                }}
                            >
                                <SearchVaiTro />
                            </div>
                        </div>
                    </div>
                </div>
                <ContentVaiTro />
            </Layout>
        </Layout>
    );
}

export default VaiTro;
