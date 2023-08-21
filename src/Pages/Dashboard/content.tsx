import { CaretDownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Layout, Menu, MenuProps, Space, message, theme } from 'antd';
import { Link } from 'react-router-dom';
import {
    iconDashboard01,
    iconDashboard02,
    iconDashboard03,
    iconDashboard04,
} from '../../assets/svg/svg';
import LineChart from '../../component/LineChart';

type MenuItemType = {
    label: string;
    key: string;
};

const items: MenuItemType[] = [
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

const { Content } = Layout;
function ContentDashBoard() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Content
            style={{
                margin: '0 0 0 24px',
                borderRadius: '12',
                font: 'Nunito',
            }}
        >
            <div style={{ display: 'inline-block' }}>
                <div style={{ display: 'flex', font: 'Nunito', width: '795px' }}>
                    <Link to="/capso" style={{ display: 'flex', alignItems: 'center' }}>
                        <div
                            style={{
                                width: '186px',
                                height: '110px',
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
                                <span style={{ font: 'Nunito', display: 'block' }}>Số thứ tự</span>
                                <span style={{ font: 'Nunito', display: 'block' }}>đã cấp</span>
                            </div>
                            <div>
                                <span className="number-dashboard">4.221</span>
                            </div>
                        </div>

                        <div
                            style={{
                                width: '186px',
                                height: '110px',
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
                                <span style={{ font: 'Nunito', display: 'block' }}>Số thứ tự</span>
                                <span style={{ font: 'Nunito', display: 'block' }}>đã sử dụng</span>
                            </div>
                            <div>
                                <span className="number-dashboard">3.721</span>
                            </div>
                        </div>

                        <div
                            style={{
                                width: '186px',
                                height: '110px',
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
                                <span style={{ font: 'Nunito', display: 'block' }}>Số thứ tự</span>
                                <span style={{ font: 'Nunito', display: 'block' }}>đang chờ</span>
                            </div>
                            <div>
                                <span className="number-dashboard">468</span>
                            </div>
                        </div>

                        <div
                            style={{
                                width: '186px',
                                height: '110px',
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
                                <span style={{ font: 'Nunito', display: 'block' }}>Số thứ tự</span>
                                <span style={{ font: 'Nunito', display: 'block' }}>đã bỏ qua</span>
                            </div>
                            <div>
                                <span className="number-dashboard">32</span>
                            </div>
                        </div>
                    </Link>
                </div>

                <div
                    style={{
                        width: '785px',
                        height: '400px',
                        background: colorBgContainer,
                        margin: '10px 13px 0 0',
                        borderRadius: '12px',
                    }}
                >
                    <div style={{ display: 'inline-block', textAlign: 'left', font: 'Nunito' }}>
                        <span className="title-chart" style={{ display: 'block' }}>
                            Bảng thống kê theo tháng
                        </span>
                    </div>

                    <div
                        style={{
                            display: 'inline',
                            margin: '8px 12px 0 310px',
                        }}
                    >
                        <span className="title-dropdown">Xem theo</span>
                        <Dropdown
                            overlay={
                                <Menu onClick={handleMenuClick}>
                                    {menuProps.items.map((item) => (
                                        <Menu.Item key={item.key}>{item.label}</Menu.Item>
                                    ))}
                                </Menu>
                            }
                            trigger={['click']}
                        >
                            <Button
                                style={{
                                    width: '106px',
                                    height: '42',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                <Space>
                                    Ngày
                                    <CaretDownOutlined
                                        style={{
                                            color: '#FF7506',
                                            height: '12px',
                                            width: '12px',
                                            marginLeft: '10px',
                                        }}
                                    />
                                </Space>
                            </Button>
                        </Dropdown>
                    </div>
                    <div>
                        <span style={{ font: 'Nunito' }} className="date-chart">
                            Tháng 11/2021
                        </span>
                    </div>
                    <div style={{ margin: '10px 0 0 20px' }}>
                        <LineChart />
                    </div>
                </div>
            </div>
        </Content>
    );
}

export default ContentDashBoard;
