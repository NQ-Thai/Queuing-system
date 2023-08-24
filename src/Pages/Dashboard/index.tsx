import { Layout } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { iconBell, iconNextPercent1, iconNextPercent2, iconNextPercent3, iconPercent1, iconPercent2, iconPercent3 } from '../../assets/svg/svg';
import { fetchData } from '../../lib/ThietBi/ThietBiReducer';
import { AppDispatch, RootState } from '../../lib/store';
import ContentDashBoard from './content';

function Trangchu() {
    const dispatch: AppDispatch = useDispatch();

    const users = useSelector((state: RootState) => state.User.user);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    const userInfo = users.length > 0 ? users[0] : null;
    return (
        <Layout>
            <Layout>
                <div style={{ display: 'flex', height: '98vh' }}>
                    <div style={{ width: '830px', display: 'inline-block' }}>
                        <div style={{ width: '600px', height: '88px', marginBottom: '5px' }}>
                            <div id="header" style={{ font: 'Nunito', display: 'flex', alignItems: 'center' }}>
                                <span className="text-header-content">Dashboard</span>
                            </div>
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                            <span className="title2-dashboard" style={{ font: 'Nunito' }}>
                                Biểu đồ số cấp
                            </span>
                        </div>
                        {/* Content */}
                        <ContentDashBoard />
                    </div>
                    <div
                        style={{
                            backgroundColor: '#FFFFFF',
                            width: '416px',

                            display: 'inline-block',
                            borderRadius: '5px',
                        }}
                    >
                        <div>
                            <div style={{ width: '417px', height: '88px', marginBottom: '5px' }}>
                                <div
                                    id="header"
                                    style={{
                                        font: 'Nunito',
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <span className="text-header-content" style={{ color: '#fff' }}>
                                        h
                                    </span>
                                    <div className="icon-wrapper" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
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
                                            <img
                                                src={userInfo?.Avata || ''}
                                                alt=""
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                }}
                                            />
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
                                                {userInfo?.TenNguoiDung || ''}
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div style={{ marginBottom: '16px' }}>
                                <span className="title2-dashboard" style={{ font: 'Nunito' }}>
                                    Tổng quan
                                </span>
                            </div>

                            <div
                                id="header"
                                style={{
                                    margin: '0 24px 12px 24px',
                                    backgroundColor: 'rgb(251, 247, 247)',
                                    font: 'Nunito',
                                    display: 'flex',
                                    alignItems: 'center',
                                    borderRadius: '12px',
                                }}
                            >
                                <span className="text-header-content" style={{ color: 'rgb(251, 247, 247)' }}>
                                    h
                                </span>
                                <div
                                    style={{
                                        display: 'inline-block',
                                        verticalAlign: 'middle',
                                        marginRight: '12px',
                                    }}
                                >
                                    {iconPercent1}
                                </div>
                                <Link to="/thietbi" style={{ display: 'flex', alignItems: 'center' }}>
                                    <div
                                        style={{
                                            font: 'Nunito',
                                            display: 'inline-block',
                                            textAlign: 'left',
                                        }}
                                    >
                                        <span className="number-percent" style={{ font: 'Nunito', display: 'block' }}>
                                            4.221
                                        </span>
                                        <span style={{ display: 'block' }}>
                                            {iconNextPercent1}{' '}
                                            <span className="text-percen" style={{ color: '#FF7506' }}>
                                                Thiết bị
                                            </span>
                                        </span>
                                    </div>
                                </Link>
                            </div>

                            <div
                                id="header"
                                style={{
                                    margin: '0 24px 12px 24px',
                                    backgroundColor: 'rgb(251, 247, 247)',
                                    font: 'Nunito',
                                    display: 'flex',
                                    alignItems: 'center',
                                    borderRadius: '12px',
                                }}
                            >
                                <span className="text-header-content" style={{ color: 'rgb(251, 247, 247)' }}>
                                    h
                                </span>
                                <div
                                    style={{
                                        display: 'inline-block',
                                        verticalAlign: 'middle',
                                        marginRight: '12px',
                                    }}
                                >
                                    {iconPercent2}
                                </div>
                                <Link to="/dichvu" style={{ display: 'flex', alignItems: 'center' }}>
                                    <div
                                        style={{
                                            font: 'Nunito',
                                            display: 'inline-block',
                                            textAlign: 'left',
                                        }}
                                    >
                                        <span className="number-percent" style={{ font: 'Nunito', display: 'block' }}>
                                            276
                                        </span>
                                        <span style={{ display: 'block' }}>
                                            {iconNextPercent2}{' '}
                                            <span className="text-percen" style={{ color: '#4277FF' }}>
                                                Dịch vụ
                                            </span>
                                        </span>
                                    </div>
                                </Link>
                            </div>

                            <div
                                id="header"
                                style={{
                                    margin: '0 24px 12px 24px',
                                    backgroundColor: 'rgb(251, 247, 247)',
                                    font: 'Nunito',
                                    display: 'flex',
                                    alignItems: 'center',
                                    borderRadius: '12px',
                                }}
                            >
                                <span className="text-header-content" style={{ color: 'rgb(251, 247, 247)' }}>
                                    h
                                </span>
                                <div
                                    style={{
                                        display: 'inline-block',
                                        verticalAlign: 'middle',
                                        marginRight: '12px',
                                    }}
                                >
                                    {iconPercent3}
                                </div>
                                <Link to="/capso" style={{ display: 'flex', alignItems: 'center' }}>
                                    <div
                                        style={{
                                            font: 'Nunito',
                                            display: 'inline-block',
                                            textAlign: 'left',
                                        }}
                                    >
                                        <span className="number-percent" style={{ font: 'Nunito', display: 'block' }}>
                                            4221
                                        </span>
                                        <span style={{ display: 'block' }}>
                                            {iconNextPercent3}{' '}
                                            <span className="text-percen" style={{ color: '#35C75A' }}>
                                                Cấp số
                                            </span>
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </Layout>
    );
}

export default Trangchu;
