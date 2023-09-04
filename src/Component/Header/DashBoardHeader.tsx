import { Layout } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import datePicker from '../../assets/images/Date picker.png';
import { iconBell, iconNextPercent1, iconNextPercent2, iconNextPercent3, iconPercent1, iconPercent2, iconPercent3 } from '../../assets/svg/svg';
import { fetchData } from '../../lib/Device/Device';
import { fetchData1 } from '../../lib/Nofication/Nofication';
import { AppDispatch, RootState } from '../../lib/store';
import ContentDashBoard from '../../pages/Dashboard/DashBoard';

import 'react-datepicker/dist/react-datepicker.css';

function DashboardHeader() {
    const [showNotifications, setShowNotifications] = useState(false);
    const handleNotificationIconClick = () => {
        setShowNotifications(!showNotifications);
    };
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const dispatch: AppDispatch = useDispatch();
    const dispatchs: AppDispatch = useDispatch();

    const users = useSelector((state: RootState) => state.User.user);
    const notifications = useSelector((state: RootState) => state.Nofi.nofi);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    useEffect(() => {
        dispatchs(fetchData1());
    }, [dispatchs]);

    const userInfo = users.length > 0 ? users[0] : null;
    const nofiInfo = notifications.length > 0 ? notifications[0] : null;

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
                                        <span onClick={handleNotificationIconClick}>{iconBell}</span>
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
                                {showNotifications && (
                                    <div className="notification-container">
                                        <div className="notification-header" style={{ height: '40px' }}>
                                            <span
                                                style={{
                                                    margin: '20px 0 10px 20px',
                                                    font: 'Nunito',
                                                    fontSize: '24px',
                                                    color: 'white',
                                                    fontWeight: 'normal',
                                                }}
                                            >
                                                Thông báo
                                            </span>
                                        </div>
                                        {/* Lặp qua danh sách thông báo từ Firestore */}
                                        <div
                                            className="notification-list notification-list-scroll"
                                            style={{
                                                maxHeight: '480px',
                                                overflowY: 'auto',
                                            }}
                                        >
                                            {/* Lặp qua danh sách thông báo từ Firestore */}
                                            {notifications.map((notification, index) => (
                                                <div
                                                    key={notification.id}
                                                    style={{
                                                        marginBottom: '10px',
                                                        borderBottom: index !== notifications.length - 1 ? '1px solid #ccc' : 'none',
                                                    }}
                                                >
                                                    <div
                                                        className="notification-content"
                                                        style={{
                                                            margin: '10px 0 10px 20px',
                                                            font: 'Nunito',
                                                            fontSize: '16px',
                                                            color: '#BF5805',
                                                            fontWeight: 'normal',
                                                            height: '55px',
                                                        }}
                                                    >
                                                        <span>Người dùng: {notification.TenNguoiDung || ''}</span>
                                                        <div>
                                                            <span style={{ color: 'black' }}>
                                                                Thời gian nhận số: {notification.Gio || ''} ngày {notification.Ngay || ''}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
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
                                    boxShadow: '1px 1px 10px rgba(0, 0, 0, 0.1)',
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
                                        <span style={{ font: 'Nunito', display: 'block' }}>
                                            <div className="number-percent" style={{ display: 'inline-block', marginRight: '30px' }}>
                                                4.221
                                            </div>
                                            <div style={{ display: 'inline-block' }}>
                                                <span style={{ color: 'black' }}>
                                                    Đang hoạt động &nbsp;&nbsp;&nbsp;&nbsp; <span style={{ color: '#FF7506' }}>3.799</span>
                                                </span>
                                            </div>
                                        </span>
                                        <span style={{ display: 'block' }}>
                                            {iconNextPercent1}{' '}
                                            <span className="text-percen" style={{ color: '#FF7506' }}>
                                                Thiết bị
                                                <span style={{ color: 'black', marginLeft: '28px' }}>
                                                    Ngưng hoạt động &nbsp;&nbsp;&nbsp;&nbsp; <span style={{ color: '#FF7506' }}>422</span>
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                </Link>
                            </div>

                            <div
                                id="header"
                                style={{
                                    margin: '0 24px 12px 24px',
                                    boxShadow: '1px 1px 10px rgba(0, 0, 0, 0.1)',
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
                                        <span style={{ font: 'Nunito', display: 'block' }}>
                                            <div className="number-percent" style={{ display: 'inline-block', marginRight: '52px' }}>
                                                276
                                            </div>
                                            <div style={{ display: 'inline-block' }}>
                                                <span style={{ color: 'black' }}>
                                                    Đang hoạt động &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style={{ color: '#4277FF' }}>210</span>
                                                </span>
                                            </div>
                                        </span>
                                        <span style={{ display: 'block' }}>
                                            {iconNextPercent2}{' '}
                                            <span className="text-percen" style={{ color: '#4277FF' }}>
                                                Dịch vụ
                                                <span style={{ color: 'black', marginLeft: '28px' }}>
                                                    Ngưng hoạt động &nbsp;&nbsp;&nbsp; <span style={{ color: '#4277FF' }}>66</span>
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                </Link>
                            </div>

                            <div
                                id="header"
                                style={{
                                    margin: '0 24px 12px 24px',
                                    font: 'Nunito',
                                    display: 'flex',
                                    alignItems: 'center',
                                    borderRadius: '12px',
                                    boxShadow: '1px 1px 10px rgba(0, 0, 0, 0.1)',
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
                                        <span style={{ font: 'Nunito', display: 'block' }}>
                                            <div className="number-percent" style={{ display: 'inline-block', marginRight: '70px' }}>
                                                12
                                            </div>
                                            <div style={{ display: 'inline-block' }}>
                                                <span style={{ color: 'black' }}>
                                                    Đã sử dụng &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                                    <span style={{ color: '#4277FF' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 486</span>
                                                </span>
                                            </div>
                                        </span>
                                        <span style={{ display: 'block' }}>
                                            {iconNextPercent3}{' '}
                                            <span className="text-percen" style={{ color: '#35C75A' }}>
                                                Cấp số
                                                <span style={{ color: 'black', marginLeft: '36px' }}>
                                                    Đã bỏ qua &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                                    <span style={{ color: '#4277FF' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 32</span>
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                </Link>
                            </div>

                            <div style={{ marginLeft: '20px' }}>
                                <img src={datePicker} alt="" height={260} width={385} />
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </Layout>
    );
}

export default DashboardHeader;
