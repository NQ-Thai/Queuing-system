import { Button, DatePicker, DatePickerProps, Dropdown, Layout, Menu, MenuProps, message } from 'antd';

import { CalendarOutlined, CaretDownOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchCapSo from './Search';
import TableCapSo from './Table';

type MenuItemType = {
    label: string;
    key: string;
};

const itemsDichVu: MenuItemType[] = [
    {
        label: 'Tất cả',
        key: 'Tất cả',
    },
    {
        label: 'Khám sản - Phụ khoa',
        key: 'Khám sản - Phụ khoa',
    },
    {
        label: 'Khám răng hàm mặt',
        key: 'Khám răng hàm mặt',
    },
    {
        label: 'Khám tai mũi họng',
        key: 'Khám tai mũi họng',
    },
    {
        label: 'Khám tim mạch',
        key: 'Khám tim mạch',
    },
    {
        label: 'Khám hô hấp',
        key: 'Khám hô hấp',
    },
    {
        label: 'Khám tổng quát',
        key: 'Khám tổng quát',
    },
];

const itemsTinhTrang: MenuItemType[] = [
    {
        label: 'Tất cả',
        key: 'Tất cả',
    },
    {
        label: 'Đang chờ',
        key: 'Đang chờ',
    },
    {
        label: 'Đã sử dụng',
        key: 'Đã sử dụng',
    },
    {
        label: 'Bỏ qua',
        key: 'Bỏ qua',
    },
];

const itemsNguonCap: MenuItemType[] = [
    {
        label: 'Tất cả',
        key: 'Tất cả',
    },
    {
        label: '',
        key: 'Kiosk',
    },
    {
        label: 'Hệ thống',
        key: 'Hệ thống',
    },
];

const { Content } = Layout;

function ContentCapSo() {
    const [selectedTrangThaiDichVu, setSelectedTrangThaiDichVu] = useState<string | null>(null);
    const handleMenuClick: MenuProps['onClick'] = (e) => {
        message.info('Click on menu item.');
        console.log('click', e);
    };

    const handleDichVu: MenuProps['onClick'] = (e) => {
        setSelectedTrangThaiDichVu(e.key);
    };

    const menuPropsdichVu = {
        itemsDichVu,
        onClick: handleDichVu,
    };

    const menuPropsKetNoi = {
        itemsTinhTrang,
        onClick: handleMenuClick,
    };

    const menuPropsNguonCap = {
        itemsNguonCap,
        onClick: handleMenuClick,
    };

    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    };

    return (
        <Content style={{ margin: '0 0 0 24px', borderRadius: '12', font: 'Nunito' }}>
            <div style={{ display: 'flex' }}>
                <div style={{ marginRight: '24px' }}>
                    <div style={{ marginBottom: '5px' }}>
                        <span className="title-select-thietbi" style={{ font: 'Nunito' }}>
                            Tên dịch vụ
                        </span>
                    </div>

                    <div>
                        <div
                            style={{
                                marginRight: '20px',
                                display: 'inline',
                            }}
                        >
                            <Dropdown
                                overlay={
                                    <Menu onClick={handleDichVu}>
                                        {menuPropsdichVu.itemsDichVu.map((item) => (
                                            <Menu.Item key={item.key}>{item.label}</Menu.Item>
                                        ))}
                                    </Menu>
                                }
                                trigger={['click']}
                            >
                                <Button
                                    style={{
                                        width: '154px',
                                        height: '44px',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                >
                                    <span style={{ marginLeft: '10px' }}>
                                        {selectedTrangThaiDichVu ? itemsDichVu.find((item) => item.key === selectedTrangThaiDichVu)?.label : 'Tất cả'}
                                    </span>
                                    <CaretDownOutlined
                                        style={{
                                            color: '#FF7506',
                                            height: '12px',
                                            width: '12px',
                                            marginRight: '10px',
                                        }}
                                    />
                                </Button>
                            </Dropdown>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'inline-block', marginRight: '24px' }}>
                    <div style={{ marginBottom: '5px' }}>
                        <span className="title-select-thietbi" style={{ font: 'Nunito' }}>
                            Tình trạng
                        </span>
                    </div>

                    <div>
                        <div
                            style={{
                                marginRight: '20px',
                                display: 'inline',
                            }}
                        >
                            <Dropdown
                                overlay={
                                    <Menu onClick={handleMenuClick}>
                                        {menuPropsKetNoi.itemsTinhTrang.map((item) => (
                                            <Menu.Item key={item.key}>{item.label}</Menu.Item>
                                        ))}
                                    </Menu>
                                }
                                trigger={['click']}
                            >
                                <Button
                                    style={{
                                        width: '154px',
                                        height: '44px',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                >
                                    <span style={{ marginLeft: '10px' }}>Tất cả</span>
                                    <CaretDownOutlined
                                        style={{
                                            color: '#FF7506',
                                            height: '12px',
                                            width: '12px',
                                            marginRight: '10px',
                                        }}
                                    />
                                </Button>
                            </Dropdown>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'inline-block', marginRight: '24px' }}>
                    <div style={{ marginBottom: '5px' }}>
                        <span className="title-select-thietbi" style={{ font: 'Nunito' }}>
                            Nguồn cấp
                        </span>
                    </div>

                    <div>
                        <div
                            style={{
                                marginRight: '20px',
                                display: 'inline',
                            }}
                        >
                            <Dropdown
                                overlay={
                                    <Menu onClick={handleMenuClick}>
                                        {menuPropsNguonCap.itemsNguonCap.map((item) => (
                                            <Menu.Item key={item.key}>{item.label}</Menu.Item>
                                        ))}
                                    </Menu>
                                }
                                trigger={['click']}
                            >
                                <Button
                                    style={{
                                        width: '154px',
                                        height: '44px',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                >
                                    <span style={{ marginLeft: '10px' }}>Tất cả</span>
                                    <CaretDownOutlined
                                        style={{
                                            color: '#FF7506',
                                            height: '12px',
                                            width: '12px',
                                            marginRight: '10px',
                                        }}
                                    />
                                </Button>
                            </Dropdown>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'inline-block', marginRight: '24px' }}>
                    <div style={{ marginBottom: '4px' }}>
                        <span className="title2-baocao" style={{ font: 'Nunito' }}>
                            Chọn thời gian
                        </span>
                    </div>
                    <div>
                        <DatePicker suffixIcon={<CalendarOutlined />} style={{ height: '44px', width: '150px' }} onChange={onChange} />
                        <span style={{ margin: '0 4px 0 4px' }}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="7"
                                height="7"
                                viewBox="0 0 10 10"
                                fill="none"
                                style={{ verticalAlign: 'middle' }}
                            >
                                <path d="M3 0L10 5L3 10V0Z" fill="currentColor" />
                            </svg>
                        </span>
                        <DatePicker style={{ height: '44px', width: '150px' }} onChange={onChange} />
                    </div>
                </div>

                <div style={{ display: 'inline-block', marginRight: '80px' }}>
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
                            <SearchCapSo />
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <div id="table" style={{ display: 'inline-block', marginRight: '30px' }}>
                    <TableCapSo selectedTrangThaiDichVu={selectedTrangThaiDichVu} />
                </div>
                <Link to="/themcapso">
                    <div
                        id="button"
                        style={{
                            backgroundColor: '#FFF2E7',
                            height: '94px',
                            width: '80px',
                            textAlign: 'center',
                            padding: '10px',
                            borderRadius: '8px 0px 0px 8px',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '28px',
                                width: '28px',
                                backgroundColor: '#FF9138',
                                borderRadius: '7px',
                                overflow: 'hidden',
                                margin: '0 0 10px 15px',
                            }}
                        >
                            <span style={{ color: 'white', fontSize: '35px', marginBottom: '7px' }}>+</span>
                        </div>

                        <span className="text-add-button" style={{ font: 'Nunito' }}>
                            Cấp <br />
                            số mới
                        </span>
                    </div>
                </Link>
            </div>
        </Content>
    );
}

export default ContentCapSo;
