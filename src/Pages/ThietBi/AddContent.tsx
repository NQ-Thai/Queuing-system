import { CaretDownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Input, Layout, Menu, MenuProps, message } from 'antd';
import { useNavigate } from 'react-router-dom';

type MenuItemType = {
    label: string;
    key: string;
};

const itemsHoatDong: MenuItemType[] = [
    {
        label: 'Kiosk',
        key: '1',
    },
    {
        label: 'Display counter',
        key: '2',
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

const { Content } = Layout;

function AddContent() {
    const navigate = useNavigate();

    const handleCancel = () => {
        navigate('/thietbi');
    };

    const handleContinue = () => {
        navigate('/thietbi');
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
                        Thông tin thiết bị
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
                                    Mã thiết bị: <span style={{ color: 'red' }}>*</span>
                                </span>
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <div
                                    style={{
                                        display: 'inline',
                                    }}
                                >
                                    <Input
                                        placeholder="Nhập mã thiết bị"
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
                                    Tên thiết bị: <span style={{ color: 'red' }}>*</span>
                                </span>
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <div
                                    style={{
                                        display: 'inline',
                                    }}
                                >
                                    <Input
                                        placeholder="Nhập tên thiết bị"
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
                                    Địa chỉ IP: <span style={{ color: 'red' }}>*</span>
                                </span>
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <div
                                    style={{
                                        display: 'inline',
                                    }}
                                >
                                    <Input
                                        placeholder="Nhập địa chỉ IP"
                                        style={{
                                            width: '540px',
                                            height: '44px',
                                            backgroundColor: '#FFFFFF',
                                        }}
                                    />
                                </div>
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
                                    Loại thiết bị: <span style={{ color: 'red' }}>*</span>
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
                                            width: '540px',
                                            height: '44px',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <span style={{ color: '#A9A9B0' }}>Chọn loại thiết bị</span>
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
                                        placeholder="Nhập tài khoản"
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

                            <div>
                                <div
                                    style={{
                                        display: 'inline',
                                    }}
                                >
                                    <Input
                                        placeholder="Nhập mật khẩu"
                                        style={{
                                            width: '540px',
                                            height: '44px',
                                            backgroundColor: '#FFFFFF',
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ marginBottom: '4px' }}>
                    <span
                        style={{
                            font: 'Nunito',
                        }}
                        className="text-change-input"
                    >
                        Dịch vụ sử dụng: <span style={{ color: 'red' }}>*</span>
                    </span>
                </div>

                <div>
                    <div
                        style={{
                            display: 'inline',
                        }}
                    >
                        <Input
                            placeholder="Nhập dịch vụ sử dụng"
                            style={{
                                width: '1104px',
                                height: '44px',
                                backgroundColor: '#FFFFFF',
                            }}
                        />
                    </div>
                </div>

                <div style={{ margin: '10px 0 0 0' }}>
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
                    <span className="text-button-login">Thêm thiết bị</span>
                </Button>
            </div>
        </Content>
    );
}

export default AddContent;
