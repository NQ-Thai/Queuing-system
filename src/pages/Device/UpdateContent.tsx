import { CaretDownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Input, Layout, Menu, MenuProps, message } from 'antd';
import { format } from 'date-fns';
import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Device } from '../../lib/Type/Device';
import { deviceCollection } from '../../lib/controller';
import { firestore } from '../../lib/firebase';

type MenuItemType = {
    label: string;
    key: string;
};

const itemsHoatDong: MenuItemType[] = [
    {
        label: 'Kiosk',
        key: 'Kiosk',
    },
    {
        label: 'Display counter',
        key: 'Display counter',
    },
];
function UpdateContent() {
    const [maThietBi, setMaThietBi] = useState('');
    const [tenThietBi, setTenThietBi] = useState('');
    const [diaChiIP, setDiaChiIP] = useState('');
    const [tenDangNhap, setTenDangNhap] = useState('');
    const [matKhau, setMatKhau] = useState('');
    const [dichVu, setDichVu] = useState('');
    const [selectedLoaiThietBi, setSelectedLoaiThietBi] = useState('');
    const { id } = useParams();
    const [thietBiUpdate, setThietBiUpdate] = useState<Device | null>(null);

    const handleMenuClick: MenuProps['onClick'] = (e) => {
        setSelectedLoaiThietBi(e.key);
    };

    const menuPropsHoatDong = {
        itemsHoatDong,
        onClick: handleMenuClick,
    };

    const { Content } = Layout;

    const navigate = useNavigate();

    const handleCancel = () => {
        navigate('/thietbi');
    };

    const handleContinue = async () => {
        if (!thietBiUpdate) {
            return;
        }

        try {
            const docRef = doc(deviceCollection, id);

            const updatedData: Partial<Device> = {
                MaThietBi: maThietBi,
                TenThietBi: tenThietBi,
                DiaChiIP: diaChiIP,
                TenDangNhap: tenDangNhap,
                MatKhau: matKhau,
                DichVu: dichVu,
                LoaiThietBi: selectedLoaiThietBi,
            };
            await updateDoc(docRef, updatedData);

            const now = new Date();
            const thoiGian = format(now, 'dd/MM/yyyy HH:mm:ss');
            const nhatkyData = {
                IPThucHien: '192.168.3.1',
                TenDangNhap: 'gamming0165',
                ThaoTac: 'Cập nhật thiết bị có mã là ' + maThietBi,
                ThoiGian: thoiGian,
            };
            await addDoc(collection(firestore, 'nhatky'), nhatkyData);
            navigate('/thietbi');
        } catch (error) {
            message.error('Đã xảy ra lỗi khi cập nhật thiết bị.');
        }
    };

    useEffect(() => {
        const fetchThietBiUpdate = async () => {
            const docRef = doc(deviceCollection, id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const data = docSnap.data() as Device;
                setThietBiUpdate(data);
                setMaThietBi(data.MaThietBi || '');
                setTenThietBi(data.TenThietBi || '');
                setDiaChiIP(data.DiaChiIP || '');
                setTenDangNhap(data.TenDangNhap || '');
                setMatKhau(data.MatKhau || '');
                setDichVu(data.DichVu || '');
                setSelectedLoaiThietBi(data.LoaiThietBi || '');
            }
        };

        fetchThietBiUpdate();
    }, [id]);

    useEffect(() => {
        const fetchThietBiUpdate = async () => {
            const docRef = doc(deviceCollection, id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const data = docSnap.data() as Device;
                setThietBiUpdate(data);
            }
        };

        fetchThietBiUpdate();
    }, [id]);

    if (!thietBiUpdate) {
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
                                        defaultValue={thietBiUpdate.MaThietBi}
                                        onChange={(e) => setMaThietBi(e.target.value)}
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
                                        defaultValue={thietBiUpdate.TenThietBi}
                                        onChange={(e) => setTenThietBi(e.target.value)}
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
                                        defaultValue={thietBiUpdate.DiaChiIP}
                                        onChange={(e) => setDiaChiIP(e.target.value)}
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
                                        <span>{selectedLoaiThietBi}</span>
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
                                        defaultValue={thietBiUpdate.TenDangNhap}
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

                            <div>
                                <div
                                    style={{
                                        display: 'inline',
                                    }}
                                >
                                    <Input
                                        defaultValue={thietBiUpdate.MatKhau}
                                        onChange={(e) => setMatKhau(e.target.value)}
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
                            defaultValue={thietBiUpdate.DichVu}
                            onChange={(e) => setDichVu(e.target.value)}
                            style={{
                                width: '540px',
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
                    <span className="text-button-login">Cập nhật</span>
                </Button>
            </div>
        </Content>
    );
}

export default UpdateContent;
