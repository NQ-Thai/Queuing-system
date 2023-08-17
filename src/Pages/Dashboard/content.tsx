import { CaretDownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Layout, MenuProps, Space, message, theme } from 'antd';
import { Link } from 'react-router-dom';
import {
    iconDashboard01,
    iconDashboard02,
    iconDashboard03,
    iconDashboard04,
} from '../../assets/svg/svg';

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
                            <span style={{ font: 'Nunito', display: 'block' }}>Số thứ tự</span>
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
                            <span style={{ font: 'Nunito', display: 'block' }}>Số thứ tự</span>
                            <span style={{ font: 'Nunito', display: 'block' }}>đã sử dụng</span>
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
                            <span style={{ font: 'Nunito', display: 'block' }}>Số thứ tự</span>
                            <span style={{ font: 'Nunito', display: 'block' }}>đang chờ</span>
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
                            <span style={{ font: 'Nunito', display: 'block' }}>Số thứ tự</span>
                            <span style={{ font: 'Nunito', display: 'block' }}>đã bỏ qua</span>
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
                    <Dropdown menu={menuProps}>
                        <Button style={{ width: '106px', height: '42' }}>
                            <Space>
                                Ngày
                                <CaretDownOutlined
                                    style={{ color: '#FF7506', height: '12px', width: '12px' }}
                                />
                            </Space>
                        </Button>
                    </Dropdown>
                </div>
            </div>
        </Content>
    );
}

export default ContentDashBoard;
