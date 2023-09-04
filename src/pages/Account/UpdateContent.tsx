import { CaretDownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Input, Layout, Menu, MenuProps, message } from 'antd';
import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { format } from 'date-fns';
import { User } from '../../lib/Type/User';
import { userCollection } from '../../lib/controller';
import { firestore } from '../../lib/firebase';

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

const { Content } = Layout;

function UpdateContent() {
    const [tenNguoiDung, setTenNguoiDung] = useState('');
    const [SDT, setSDT] = useState('');
    const [Email, setEmail] = useState('');
    const [tenDangNhap, setTenDangNhap] = useState('');
    const [matKhau, setMatKhau] = useState('');
    const [selectedVaiTro, setSelectedVaiTro] = useState('');
    const [selectedTinhTrang, setSelectedtinhTrang] = useState('');
    const { id } = useParams();
    const [userUpdate, setUserUpdate] = useState<User | null>(null);

    const handleVaiTro: MenuProps['onClick'] = (e) => {
        setSelectedVaiTro(e.key);
    };
    const handleTinhTrang: MenuProps['onClick'] = (e) => {
        setSelectedtinhTrang(e.key);
    };

    const menuPropsHVaiTro = {
        itemsVaiTro,
        onClick: handleVaiTro,
    };

    const menuPropsHTinhTrang = {
        itemsTinhTrang,
        onClick: handleTinhTrang,
    };

    const navigate = useNavigate();

    const handleCancel = () => {
        navigate('/quanlytaikhoan');
    };

    const handleContinue = async () => {
        if (!userUpdate) {
            return;
        }

        try {
            const docRef = doc(userCollection, id);

            const updatedData: Partial<User> = {
                TenNguoiDung: tenNguoiDung,
                SDT: SDT,
                Email: Email,
                TenDangNhap: tenDangNhap,
                MatKhau: matKhau,
                TrangThaiHoatDong: selectedTinhTrang,
                VaiTro: selectedVaiTro,
            };
            await updateDoc(docRef, updatedData);

            const now = new Date();
            const thoiGian = format(now, 'dd/MM/yyyy HH:mm:ss');
            const nhatkyData = {
                IPThucHien: '192.168.3.1',
                TenDangNhap: 'gamming0165',
                ThaoTac: 'Cập nhật tài khoản có tên đăng nhập là ' + tenDangNhap,
                ThoiGian: thoiGian,
            };
            await addDoc(collection(firestore, 'nhatky'), nhatkyData);
            navigate('/quanlytaikhoan');
        } catch (error) {
            message.error('Đã xảy ra lỗi khi cập nhật thiết bị.');
        }
    };

    useEffect(() => {
        const fetchAccountUpdate = async () => {
            const docRef = doc(userCollection, id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const data = docSnap.data() as User;
                setUserUpdate(data);
                setTenNguoiDung(data.TenNguoiDung || '');
                setSDT(data.SDT || '');
                setEmail(data.Email || '');
                setTenDangNhap(data.TenDangNhap || '');
                setMatKhau(data.MatKhau || '');
                setSelectedVaiTro(data.VaiTro || '');
                setSelectedtinhTrang(data.TrangThaiHoatDong || '');
            }
        };

        fetchAccountUpdate();
    }, [id]);

    useEffect(() => {
        const fetchAccountUpdate = async () => {
            const docRef = doc(userCollection, id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const data = docSnap.data() as User;
                setUserUpdate(data);
            }
        };

        fetchAccountUpdate();
    }, [id]);

    if (!userUpdate) {
        return <div></div>;
    }

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
                                        defaultValue={userUpdate.TenNguoiDung}
                                        onChange={(e) => setTenNguoiDung(e.target.value)}
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
                                        defaultValue={userUpdate.SDT}
                                        onChange={(e) => setSDT(e.target.value)}
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
                                        defaultValue={userUpdate.Email}
                                        onChange={(e) => setEmail(e.target.value)}
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
                                        <span>{selectedVaiTro}</span>
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
                                        defaultValue={userUpdate.TenDangNhap}
                                        onChange={(e) => setTenDangNhap(e.target.value)}
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
                                        defaultValue={userUpdate.MatKhau}
                                        onChange={(e) => setMatKhau(e.target.value)}
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
                                        defaultValue={userUpdate.MatKhau}
                                        onChange={(e) => setMatKhau(e.target.value)}
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
                                        <span>{selectedTinhTrang}</span>
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
