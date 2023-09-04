import { CaretDownOutlined } from '@ant-design/icons';
import { SpaTwoTone } from '@mui/icons-material';
import { Button, Dropdown, Input, Layout, Menu, MenuProps, message } from 'antd';
import { format } from 'date-fns';
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { firestore } from '../../lib/firebase';

const { Content } = Layout;

type MenuItemType = {
    label: string;
    key: string;
};

const itemsVaiTro: MenuItemType[] = [
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

const itemsTinhTrang: MenuItemType[] = [
    {
        label: 'Ngưng hoạt động',
        key: 'Ngưng hoạt động',
    },
    {
        label: 'Hoạt động',
        key: 'Hoạt động',
    },
];
function AddContent() {
    const [selectedTinhTrang, setSelectedTinhTrang] = useState('');
    const [selectedVaiTro, setSelectedVaiTro] = useState('');
    const navigate = useNavigate();

    const handleVaiTro: MenuProps['onClick'] = (e) => {
        const selectedKey = e.key as string;
        const selectedVaiTro = itemsVaiTro.find((item) => item.key === selectedKey);
        if (selectedVaiTro) {
            setSelectedVaiTro(selectedVaiTro.label);
        }
    };

    const handleTinhTrang: MenuProps['onClick'] = (e) => {
        const selectedKey2 = e.key as string;
        const selectedTinhTrang = itemsTinhTrang.find((item) => item.key === selectedKey2);
        if (selectedTinhTrang) {
            setSelectedTinhTrang(selectedTinhTrang.label);
        }
    };

    const menuPropsVaiTro = {
        itemsVaiTro,
        onClick: handleVaiTro,
    };

    const menuPropsTinhTrang = {
        itemsTinhTrang,
        onClick: handleTinhTrang,
    };

    const handleCancel = () => {
        navigate('/quanlytaikhoan');
    };

    const handleSave = async () => {
        const tenNguoiDungInput = document.getElementById('tenNguoiDung') as HTMLInputElement;
        const tenNguoiDung = tenNguoiDungInput.value;
        const SDTInput = document.getElementById('SDT') as HTMLInputElement;
        const SDT = SDTInput.value;
        const EmailInput = document.getElementById('Email') as HTMLInputElement;
        const Email = EmailInput.value;
        const tenDangNhapInput = document.getElementById('tenDangNhap') as HTMLInputElement;
        const tenDangNhap = tenDangNhapInput.value;
        const matKhauInput = document.getElementById('matKhau') as HTMLInputElement;
        const matKhau = matKhauInput.value;
        const nhapLaiMatKhauInput = document.getElementById('nhapLaiMatKhau') as HTMLInputElement;
        const nhapLaiMatKhau = nhapLaiMatKhauInput.value;

        if (!tenNguoiDung || !SDT || !Email || !tenDangNhap || !matKhau || !selectedTinhTrang || !selectedVaiTro) {
            message.error('Vui lòng nhập đầy đủ thông tin.');
            return;
        }

        try {
            const now = new Date();
            const thoiGian = format(now, 'dd/MM/yyyy HH:mm:ss');

            await addDoc(collection(firestore, 'user'), {
                TenNguoiDung: tenNguoiDung,
                SDT: SDT,
                Email: Email,
                TenDangNhap: tenDangNhap,
                MatKhau: matKhau,
                NhapLaiMatKhau: nhapLaiMatKhau,
                TrangThaiHoatDong: selectedTinhTrang,
                VaiTro: selectedVaiTro,
            });

            await addDoc(collection(firestore, 'nhatky'), {
                IPThucHien: '192.168.3.1',
                TenDangNhap: 'gamming0165',
                ThaoTac: 'Thêm tài khoản có tên đăng nhập là ' + tenDangNhap,
                ThoiGian: thoiGian,
            });

            navigate('/quanlytaikhoan');
        } catch (error) {
            message.error('Đã xảy ra lỗi khi thêm thiết bị.');
        }
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
                                        id="tenNguoiDung"
                                        placeholder="Nhập họ tên"
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
                                        id="SDT"
                                        placeholder="Nhập số điện thoại"
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
                                        id="Email"
                                        placeholder="Nhập email"
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
                                            width: '540px',
                                            height: '44px',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <span>
                                            {selectedVaiTro ? itemsVaiTro.find((item) => item.key === selectedVaiTro)?.label : 'Chọn vai trò'}
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
                                        id="tenDangNhap"
                                        placeholder="Nhập tên đăng nhập"
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
                                        id="matKhau"
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
                                        id="nhapLaiMatKhau"
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
                                        <Menu onClick={handleTinhTrang}>
                                            {menuPropsTinhTrang.itemsTinhTrang.map((item) => (
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
                                        <SpaTwoTone>
                                            {selectedTinhTrang
                                                ? itemsTinhTrang.find((item) => item.key === selectedTinhTrang)?.label
                                                : 'Chọn tình trạng'}
                                        </SpaTwoTone>
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
                    onClick={handleSave}
                >
                    <span className="text-button-login">Thêm</span>
                </Button>
            </div>
        </Content>
    );
}

export default AddContent;
