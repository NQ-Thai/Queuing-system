import { CaretDownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Input, Layout, Menu, MenuProps, message } from 'antd';
import { useNavigate } from 'react-router-dom';

type MenuItemType = {
    label: string;
    key: string;
};

const itemsVaiTro: MenuItemType[] = [
    {
        label: 'Kế toán',
        key: '1',
    },
    {
        label: 'Quản lý',
        key: '2',
    },
    {
        label: 'Admin',
        key: '3',
    },
];

const itemsTinhTrang: MenuItemType[] = [
    {
        label: 'Tất cả',
        key: '1',
    },
    {
        label: 'Ngưng hoạt động',
        key: '2',
    },
    {
        label: 'Hoạt động',
        key: '3',
    },
];

const handleMenuClick: MenuProps['onClick'] = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
};

const menuPropsHVaiTro = {
    itemsVaiTro,
    onClick: handleMenuClick,
};

const menuPropsHTinhTrang = {
    itemsTinhTrang,
    onClick: handleMenuClick,
};

const { Content } = Layout;

function UpdateContent() {
    const navigate = useNavigate();

    const handleCancel = () => {
        navigate('/quanlytaikhoan');
    };

    const handleContinue = () => {
        navigate('/quanlytaikhoan');
    };
    return (
        <Content
            style={{
                margin: '16px 0 0 24px',
                borderRadius: '12px',
            }}
        >
            <div
                style={{
                    width: '1152px',
                    height: '470px',
                    padding: '0 24px 0 24px',
                    minHeight: 360,
                    background: '#FFFFFF',
                    borderRadius: '16px',
                }}
            >
                <div style={{ display: 'inline-block', font: 'Nunito' }}>
                    <span className="text-add-content" style={{ display: 'block' }}>
                        Thông tin tài khoản
                    </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div
                        style={{
                            width: '792px',
                            height: '276px',
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        <div style={{ flex: 1, display: 'inline', margin: '0 24px 81px 0' }}>
                            <div style={{ marginBottom: '4px' }}>
                                <span
                                    style={{
                                        font: 'Nunito',
                                    }}
                                    className="text-change-input"
                                >
                                    Họ tên <span style={{ color: 'red' }}>*</span>
                                </span>
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <div
                                    style={{
                                        display: 'inline',
                                    }}
                                >
                                    <Input
                                        value={'Nguyen Van A'}
                                        style={{
                                            width: '540px',
                                            height: '44px',
                                            backgroundColor: '#FFFFFF',
                                        }}
                                    />
                                </div>
                            </div>

                            <div style={{ marginBottom: '4px' }}>
                                <span
                                    style={{
                                        font: 'Nunito',
                                    }}
                                    className="text-change-input"
                                >
                                    Số điện thoại <span style={{ color: 'red' }}>*</span>
                                </span>
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <div
                                    style={{
                                        display: 'inline',
                                    }}
                                >
                                    <Input
                                        value={'0902345678'}
                                        style={{
                                            width: '540px',
                                            height: '44px',
                                            backgroundColor: '#FFFFFF',
                                        }}
                                    />
                                </div>
                            </div>

                            <div style={{ marginBottom: '4px' }}>
                                <span
                                    style={{
                                        font: 'Nunito',
                                    }}
                                    className="text-change-input"
                                >
                                    Email <span style={{ color: 'red' }}>*</span>
                                </span>
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <div
                                    style={{
                                        display: 'inline',
                                    }}
                                >
                                    <Input
                                        value={'NguyenA154@gmail.com'}
                                        style={{
                                            width: '540px',
                                            height: '44px',
                                            backgroundColor: '#FFFFFF',
                                        }}
                                    />
                                </div>
                            </div>

                            <div style={{ marginBottom: '4px' }}>
                                <span
                                    style={{
                                        font: 'Nunito',
                                    }}
                                    className="text-change-input"
                                >
                                    Vai trò <span style={{ color: 'red' }}>*</span>
                                </span>
                            </div>

                            <div
                                style={{
                                    marginRight: '20px',
                                    display: 'inline',
                                }}
                            >
                                <Dropdown
                                    overlay={
                                        <Menu onClick={handleMenuClick}>
                                            {menuPropsHVaiTro.itemsVaiTro.map((item) => (
                                                <Menu.Item key={item.key}>{item.label}</Menu.Item>
                                            ))}
                                        </Menu>
                                    }
                                    trigger={['click']}
                                    overlayStyle={{ width: '300px' }}
                                >
                                    <Button
                                        style={{
                                            width: '540px',
                                            height: '44px',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <span style={{ color: '#A9A9B0' }}>Kế toán</span>
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
                        {/* 2 */}
                        <div style={{ flex: 1, display: 'inline' }}>
                            <div style={{ marginBottom: '4px' }}>
                                <span
                                    style={{
                                        font: 'Nunito',
                                    }}
                                    className="text-change-input"
                                >
                                    Tên đăng nhập: <span style={{ color: 'red' }}>*</span>
                                </span>
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <div
                                    style={{
                                        display: 'inline',
                                    }}
                                >
                                    <Input
                                        value={'Tuyetnguyen123'}
                                        style={{
                                            width: '540px',
                                            height: '44px',
                                            backgroundColor: '#FFFFFF',
                                        }}
                                    />
                                </div>
                            </div>

                            <div style={{ marginBottom: '4px' }}>
                                <span
                                    style={{
                                        font: 'Nunito',
                                    }}
                                    className="text-change-input"
                                >
                                    Mật khẩu: <span style={{ color: 'red' }}>*</span>
                                </span>
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <div
                                    style={{
                                        display: 'inline',
                                    }}
                                >
                                    <Input.Password
                                        value={'Tuyetnguyen12'}
                                        style={{
                                            width: '540px',
                                            height: '44px',
                                            backgroundColor: '#FFFFFF',
                                        }}
                                    />
                                </div>
                            </div>

                            <div style={{ marginBottom: '4px' }}>
                                <span
                                    style={{
                                        font: 'Nunito',
                                    }}
                                    className="text-change-input"
                                >
                                    Nhập lại mật khẩu: <span style={{ color: 'red' }}>*</span>
                                </span>
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <div
                                    style={{
                                        display: 'inline',
                                    }}
                                >
                                    <Input.Password
                                        value={'Tuyetnguyen12'}
                                        style={{
                                            width: '540px',
                                            height: '44px',
                                            backgroundColor: '#FFFFFF',
                                        }}
                                    />
                                </div>
                            </div>

                            <div style={{ marginBottom: '4px' }}>
                                <span
                                    style={{
                                        font: 'Nunito',
                                    }}
                                    className="text-change-input"
                                >
                                    Tình trạng <span style={{ color: 'red' }}>*</span>
                                </span>
                            </div>

                            <div
                                style={{
                                    marginRight: '20px',
                                    display: 'inline',
                                }}
                            >
                                <Dropdown
                                    overlay={
                                        <Menu onClick={handleMenuClick}>
                                            {menuPropsHTinhTrang.itemsTinhTrang.map((item) => (
                                                <Menu.Item key={item.key}>{item.label}</Menu.Item>
                                            ))}
                                        </Menu>
                                    }
                                    trigger={['click']}
                                    overlayStyle={{ width: '300px' }}
                                >
                                    <Button
                                        style={{
                                            width: '540px',
                                            height: '44px',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <span style={{ color: '#A9A9B0' }}>Ngưng hoạt động</span>
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
                </div>

                <div style={{ margin: '80px 0 0 0' }}>
                    <span
                        style={{
                            font: 'Nunito',
                        }}
                        className="text-add-required"
                    >
                        <span style={{ color: 'red' }}>*</span> Là trường thông tin bắt buộc
                    </span>
                </div>
            </div>

            <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
                <Button
                    key="cancel"
                    className="button"
                    type="primary"
                    style={{
                        font: 'Montserrat',
                        color: '#FF993C',
                        borderColor: '#FF993C',
                        height: '40px',
                        width: '140px',
                        backgroundColor: '#FFF2E7',
                    }}
                    onClick={handleCancel}
                    ghost
                >
                    <span className="text-button-login">Hủy bỏ</span>
                </Button>

                <Button
                    key="save"
                    type="primary"
                    className="button"
                    style={{
                        font: 'Montserrat',
                        background: '#FF993C',
                        borderColor: '#FF993C',
                        height: '40px',
                        width: '140px',
                        marginLeft: '24px',
                    }}
                    onClick={handleContinue}
                >
                    <span className="text-button-login">Cập nhật</span>
                </Button>
            </div>
        </Content>
    );
}

export default UpdateContent;
