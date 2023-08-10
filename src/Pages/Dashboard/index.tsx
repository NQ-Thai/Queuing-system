import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Layout, MenuProps, Space, message, theme } from 'antd';
import { Link } from 'react-router-dom';
import avata from '../../assets/images/avt.png';
import {
    iconBell,
    iconDashboard01,
    iconDashboard02,
    iconDashboard03,
    iconDashboard04,
} from '../../assets/svg/svg';

const { Content } = Layout;

const items: MenuProps['items'] = [
    {
        label: 'Ngày',
        key: '1',
    },
    {
        label: 'Tháng',
        key: '2',
    },
    {
        label: 'Năm',
        key: '3',
    },
];

const handleMenuClick: MenuProps['onClick'] = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
};

const menuProps = {
    items,
    onClick: handleMenuClick,
};

function Trangchu() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout>
            <Layout>
                <div style={{ width: '1240px', height: '88px', marginBottom: '5px' }}>
                    <div style={{ font: 'Nunito', display: 'flex', alignItems: 'center' }}>
                        <span className="text-header-content">Dashboard</span>
                        <div
                            className="icon-wrapper"
                            style={{ display: 'inline-block', verticalAlign: 'middle' }}
                        >
                            {iconBell}
                        </div>
                        <Link to="/profile" style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ display: 'inline-block', marginRight: '8px' }}>
                                <img src={avata} alt="" />
                            </div>

                            <div style={{ display: 'inline-block', textAlign: 'left' }}>
                                <span
                                    className="text-hello"
                                    style={{ font: 'Nunito', display: 'block' }}
                                >
                                    Xin chào
                                </span>
                                <span
                                    className="text-name-right"
                                    style={{ font: 'Nunito', display: 'block' }}
                                >
                                    Lê Quỳnh Ái Vân
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div style={{ marginBottom: '16px' }}>
                    <span className="title2-dashboard" style={{ font: 'Nunito' }}>
                        Biểu đồ số cấp
                    </span>
                </div>
                <Content
                    style={{
                        margin: '0 0 0 24px',
                        borderRadius: '12',
                        font: 'Nunito',
                    }}
                >
                    <Link to="/capso" style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ display: 'flex' }}>
                            <div
                                style={{
                                    width: '186px',
                                    height: '120px',
                                    background: colorBgContainer,
                                    marginRight: '13px',
                                    borderRadius: '12px',
                                }}
                            >
                                <div
                                    className="icon-dashboard01-wrapper"
                                    style={{ display: 'inline-block', margin: '8px 12px 0 12px' }}
                                >
                                    {iconDashboard01}
                                </div>

                                <div
                                    className="text-capso"
                                    style={{ display: 'inline-block', textAlign: 'left' }}
                                >
                                    <span style={{ font: 'Nunito', display: 'block' }}>
                                        Số thứ tự
                                    </span>
                                    <span style={{ font: 'Nunito', display: 'block' }}>đã cấp</span>
                                </div>
                            </div>

                            <div
                                style={{
                                    width: '186px',
                                    height: '120px',
                                    background: colorBgContainer,
                                    marginRight: '13px',
                                    borderRadius: '12px',
                                }}
                            >
                                <div
                                    className="icon-dashboard02-wrapper"
                                    style={{ display: 'inline-block', margin: '8px 12px 0 12px' }}
                                >
                                    {iconDashboard02}
                                </div>

                                <div
                                    className="text-capso"
                                    style={{ display: 'inline-block', textAlign: 'left' }}
                                >
                                    <span style={{ font: 'Nunito', display: 'block' }}>
                                        Số thứ tự
                                    </span>
                                    <span style={{ font: 'Nunito', display: 'block' }}>đã cấp</span>
                                </div>
                            </div>

                            <div
                                style={{
                                    width: '186px',
                                    height: '120px',
                                    background: colorBgContainer,
                                    marginRight: '13px',
                                    borderRadius: '12px',
                                }}
                            >
                                <div
                                    className="icon-dashboard03-wrapper"
                                    style={{ display: 'inline-block', margin: '8px 12px 0 12px' }}
                                >
                                    {iconDashboard03}
                                </div>

                                <div
                                    className="text-capso"
                                    style={{ display: 'inline-block', textAlign: 'left' }}
                                >
                                    <span style={{ font: 'Nunito', display: 'block' }}>
                                        Số thứ tự
                                    </span>
                                    <span style={{ font: 'Nunito', display: 'block' }}>đã cấp</span>
                                </div>
                            </div>

                            <div
                                style={{
                                    width: '186px',
                                    height: '120px',
                                    background: colorBgContainer,
                                    marginRight: '13px',
                                    borderRadius: '12px',
                                }}
                            >
                                <div
                                    className="icon-dashboard04-wrapper"
                                    style={{ display: 'inline-block', margin: '8px 12px 0 12px' }}
                                >
                                    {iconDashboard04}
                                </div>

                                <div
                                    className="text-capso"
                                    style={{ display: 'inline-block', textAlign: 'left' }}
                                >
                                    <span style={{ font: 'Nunito', display: 'block' }}>
                                        Số thứ tự
                                    </span>
                                    <span style={{ font: 'Nunito', display: 'block' }}>đã cấp</span>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <div
                        style={{
                            width: '785px',
                            height: '400px',
                            background: colorBgContainer,
                            margin: '10px 13px 0 0',
                            borderRadius: '12px',
                        }}
                    >
                        <div className="title-chart" style={{ display: 'inline', font: 'Nunito' }}>
                            <span>Bảng thống kê theo ngày</span>
                        </div>
                        <div
                            style={{
                                display: 'inline-block',
                                verticalAlign: 'middle',
                                margin: '8px 12px 0 327px',
                            }}
                        >
                            <span>Xem theo</span>
                            <Dropdown menu={menuProps}>
                                <Button>
                                    <Space>
                                        Ngày
                                        <DownOutlined />
                                    </Space>
                                </Button>
                            </Dropdown>
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
}

export default Trangchu;
