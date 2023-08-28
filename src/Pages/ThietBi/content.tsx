import { Button, Dropdown, Layout, Menu, MenuProps } from 'antd';

import { CaretDownOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchThietBi from './Search';
import TableThietBi from './Table';

const { Content } = Layout;

type MenuItemType = {
    label: string;
    key: string;
};

function ContentThietBi() {
    const itemsHoatDong: MenuItemType[] = [
        {
            label: 'Tất cả',
            key: 'Tất cả',
        },
        {
            label: 'Hoạt động',
            key: 'Hoạt động',
        },
        {
            label: 'Ngưng hoạt động',
            key: 'Ngưng hoạt động',
        },
    ];

    const itemsKetNoi: MenuItemType[] = [
        {
            label: 'Tất cả',
            key: 'Tất cả',
        },
        {
            label: 'Kết nối',
            key: 'Kết nối',
        },
        {
            label: 'Mất kết nối',
            key: 'Mất kết nối',
        },
    ];
    const [selectedTrangThaiKetNoi, setSelectedTrangThaiKetNoi] = useState<string | null>(null);
    const [selectedTrangThaiHoatDong, setSelectedTrangThaiHoatDong] = useState<string | null>(null);
    const [searchValue, setSearchValue] = useState<string>('');

    const handleKetNoi: MenuProps['onClick'] = (e) => {
        setSelectedTrangThaiKetNoi(e.key);
    };

    const handleHoatDong: MenuProps['onClick'] = (e) => {
        setSelectedTrangThaiHoatDong(e.key);
    };

    const handleSearch = (value: string) => {
        setSearchValue(value);
    };

    const menuPropsHoatDong = {
        itemsHoatDong,
        onClick: handleHoatDong,
    };

    const menuPropsKetNoi = {
        itemsKetNoi,
        onClick: handleKetNoi,
    };

    return (
        <Content style={{ margin: '0 0 0 24px', borderRadius: '12', font: 'Nunito' }}>
            <div style={{ display: 'flex' }}>
                <div style={{ marginRight: '24px' }}>
                    <div style={{ marginBottom: '5px' }}>
                        <span className="title-select-thietbi" style={{ font: 'Nunito' }}>
                            Trạng thái hoạt động
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
                                    <Menu onClick={handleHoatDong}>
                                        {menuPropsHoatDong.itemsHoatDong.map((item) => (
                                            <Menu.Item key={item.key}>{item.label}</Menu.Item>
                                        ))}
                                    </Menu>
                                }
                                trigger={['click']}
                                overlayStyle={{ width: '300px' }}
                            >
                                <Button
                                    style={{
                                        width: '300px',
                                        height: '44px',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                >
                                    <span style={{ marginLeft: '10px' }}>
                                        {selectedTrangThaiHoatDong
                                            ? itemsHoatDong.find((item) => item.key === selectedTrangThaiHoatDong)?.label
                                            : 'Tất cả'}
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

                <div style={{ display: 'inline-block', marginRight: '188px' }}>
                    <div style={{ marginBottom: '5px' }}>
                        <span className="title-select-thietbi" style={{ font: 'Nunito' }}>
                            Trạng thái kết nối
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
                                    <Menu onClick={handleKetNoi}>
                                        {menuPropsKetNoi.itemsKetNoi.map((item) => (
                                            <Menu.Item key={item.key}>{item.label}</Menu.Item>
                                        ))}
                                    </Menu>
                                }
                                trigger={['click']}
                                overlayStyle={{ width: '300px' }}
                            >
                                <Button
                                    style={{
                                        width: '300px',
                                        height: '44px',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                >
                                    <span style={{ marginLeft: '10px' }}>
                                        {selectedTrangThaiKetNoi ? itemsKetNoi.find((item) => item.key === selectedTrangThaiKetNoi)?.label : 'Tất cả'}
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

                <div style={{ display: 'inline-block', marginRight: '100px' }}>
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
                            <SearchThietBi onSearch={handleSearch} />
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <div id="table" style={{ display: 'inline-block', marginRight: '30px' }}>
                    <TableThietBi
                        selectedTrangThaiKetNoi={selectedTrangThaiKetNoi}
                        selectedTrangThaiHoatDong={selectedTrangThaiHoatDong}
                        searchValue={searchValue}
                    />
                </div>
                <Link to="/themthietbi">
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
                            Thêm <br />
                            thiết bị
                        </span>
                    </div>
                </Link>
            </div>
        </Content>
    );
}

export default ContentThietBi;
