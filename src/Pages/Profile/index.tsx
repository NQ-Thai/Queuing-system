import { Layout } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { iconBell } from '../../assets/svg/svg';
import { fetchData } from '../../lib/User/UserReducer';
import { AppDispatch, RootState } from '../../lib/store';
import UserInFormation from './content';

function Profile() {
    const dispatch: AppDispatch = useDispatch();

    const users = useSelector((state: RootState) => state.User.user);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    const userInfo = users.length > 0 ? users[0] : null;
    return (
        <Layout>
            <Layout>
                <div style={{ width: '1240px', height: '88px', marginBottom: '80px' }}>
                    <div style={{ font: 'Nunito', display: 'flex', alignItems: 'center' }}>
                        <span className="text-header-content">Thông tin cá nhân</span>

                        <div className="icon-wrapper-information" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                            {iconBell}
                        </div>
                        <Link to="/profile" style={{ display: 'flex', alignItems: 'center' }}>
                            <div
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    marginRight: '8px',
                                }}
                            >
                                <img src={userInfo?.Avata || ''} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>

                            <div
                                style={{
                                    display: 'inline-block',
                                    textAlign: 'left',
                                }}
                            >
                                <span className="text-hello" style={{ font: 'Nunito', display: 'block' }}>
                                    Xin chào
                                </span>
                                <span className="text-name-right" style={{ font: 'Nunito', display: 'block' }}>
                                    {userInfo?.TenDangNhap || ''}
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
                {/* Content */}
                <UserInFormation />
            </Layout>
        </Layout>
    );
}

export default Profile;
