import { Button, Dropdown, Layout, Menu, MenuProps, message } from 'antd';

import { CaretDownOutlined } from '@ant-design/icons';
import SearchThietBi from './Search';
import TableThietBi from './Table';

type MenuItemType = {
    label: string;
    key: string;
};

const itemsHoatDong: MenuItemType[] = [
    {
        label: 'Tất cả',
        key: '1',
    },
    {
        label: 'Hoạt động',
        key: '2',
    },
    {
        label: 'Ngưng hoạt động',
        key: '3',
    },
];

const itemsKetNoi: MenuItemType[] = [
    {
        label: 'Tất cả',
        key: '1',
    },
    {
        label: 'Kết nỗi',
        key: '2',
    },
    {
        label: 'Mất kết nối',
        key: '3',
    },
];

const handleMenuClick: MenuProps['onClick'] = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
};

const menuPropsHoatDong = {
    itemsHoatDong,
    onClick: handleMenuClick,
};

const menuPropsKetNoi = {
    itemsKetNoi,
    onClick: handleMenuClick,
};

const { Content } = Layout;

function ContentThietBi() {
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
                                    <Menu onClick={handleMenuClick}>
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
                                    <span style={{ marginLeft: '10px' }}>Tất cả</span>
                                    <CaretDownOutlined
                                        style={{
                                            color: '#FF7506',
                                            height: '6px',
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
                                    <Menu onClick={handleMenuClick}>
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
                                    <span style={{ marginLeft: '10px' }}>Tất cả</span>
                                    <CaretDownOutlined
                                        style={{
                                            color: '#FF7506',
                                            height: '6px',
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
                            <SearchThietBi />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <TableThietBi />
            </div>
        </Content>
    );
}

export default ContentThietBi;