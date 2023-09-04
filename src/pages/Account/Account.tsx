import { Button, Dropdown, Layout, Menu, MenuProps } from 'antd';

import { CaretDownOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchTaiKhoan from './SearchAccount';
import TableThietBi from './TableAccount';

type MenuItemType = {
    label: string;
    key: string;
};

const itemsVaiTro: MenuItemType[] = [
    {
        label: 'Tất cả',
        key: 'Tất cả',
    },
    {
        label: 'Kế toán',
        key: 'Kế toán',
    },
    {
        label: 'Quản lý',
        key: 'Quản lý',
    },
    {
        label: 'Admin',
        key: 'Admin',
    },
];
function Account() {
    const [searchValue, setSearchValue] = useState<string>('');
    const [selectedVaiTro, setSelectedVaiTro] = useState<string | null>(null);

    const handleVaiTro: MenuProps['onClick'] = (e) => {
        setSelectedVaiTro(e.key);
    };

    const handleSearch = (value: string) => {
        setSearchValue(value);
    };

    const menuPropsVaiTro = {
        itemsVaiTro,
        onClick: handleVaiTro,
    };

    const { Content } = Layout;

    return (
        <Content style={{ margin: '0 0 0 24px', borderRadius: '12', font: 'Nunito' }}>
            <div style={{ display: 'flex' }}>
                <div style={{ marginRight: '24px' }}>
                    <div style={{ marginBottom: '5px' }}>
                        <span className="title-select-thietbi" style={{ font: 'Nunito' }}>
                            Tên vai trò
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
                                    <Menu onClick={handleVaiTro}>
                                        {menuPropsVaiTro.itemsVaiTro.map((item) => (
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
                                        {selectedVaiTro ? itemsVaiTro.find((item) => item.key === selectedVaiTro)?.label : 'Tất cả'}
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

                <div style={{ display: 'inline-block', marginLeft: '487px' }}>
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
                            <SearchTaiKhoan onSearch={handleSearch} />
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <div style={{ display: 'inline-block', marginRight: '30px' }}>
                    <TableThietBi selectedVaiTro={selectedVaiTro} searchValue={searchValue} />
                </div>
                <Link to="/quanlytaikhoan/themtaikhoan">
                    <div
                        style={{
                            backgroundColor: '#FFF2E7',
                            height: '94px',
                            width: '81px',
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
                            Thêm
                            <br />
                            tài khoản
                        </span>
                    </div>
                </Link>
            </div>
        </Content>
    );
}

export default Account;
