import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import { iconBell } from '../../assets/svg/svg';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../lib/User/UserReducer';
import { AppDispatch, RootState } from '../../lib/store';
import AddContent from './AddContent';

function ThemThietBi() {
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
                    <div
                        style={{
                            font: 'Nunito',
                            display: 'flex',
                            alignItems: 'center',
                            margin: '18px 0 0 24px',
                        }}
                    >
                        <span>
                            <span className="text-first-head" style={{ font: 'Nunito' }}>
                                Thiết bị&nbsp;&nbsp;&gt;&nbsp;&nbsp;
                            </span>
                            <Link to={'/thietbi'}>
                                <span className="text-first-head">Danh sách thiết bị&nbsp;&nbsp;&gt;</span>
                            </Link>

                            <span className="text-add-header-content">&nbsp;&nbsp;Thêm thiết bị</span>
                        </span>
                        <div className="icon-wrapper-thietbi-add" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
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
                <div style={{ marginBottom: '5px' }}>
                    <span className="title2-dashboard" style={{ font: 'Nunito' }}>
                        Quản lý thiết bị
                    </span>
                </div>
                <AddContent />
            </Layout>
        </Layout>
    );
}

export default ThemThietBi;
