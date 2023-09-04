import { CaretDownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Layout, Menu, MenuProps, message } from 'antd';
import { format } from 'date-fns';
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalCapSo from '../../component/Modal/ModalLevelN';
import { firestore } from '../../lib/firebase';

type MenuItemType = {
    label: string;
    key: string;
};

const itemsDichVu: MenuItemType[] = [
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
const { Content } = Layout;

function AddLevelNContent() {
    const [selectedLoaiDichVu, setSelectedLoaiDichVu] = useState('');
    type NewlyAddedData = {
        STTBaoCao: string;
        TenDichVu: string;
        ThoiGianCap: string;
        HanSuDung: string;
    };

    const [newlyAddedData, setNewlyAddedData] = useState<NewlyAddedData | null>(null);

    const handleMenuClick: MenuProps['onClick'] = (e) => {
        const selectedKey = e.key as string;
        const selectedMenuItem = itemsDichVu.find((item) => item.key === selectedKey);
        if (selectedMenuItem) {
            setSelectedLoaiDichVu(selectedMenuItem.label);
        }
    };

    const menuPropsDichVu = {
        itemsDichVu,
        onClick: handleMenuClick,
    };

    const generateRandomFourDigits = () => {
        const min = 0;
        const max = 9999;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomNumber.toString().padStart(4, '0');
    };
    function getRandomSTT() {
        const min = 5;
        const max = 99;
        const randomSTT = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomSTT;
    }

    const trangThaiOptions = ['Đang chờ', 'Đã sử dụng', 'Bỏ qua'];

    const handleSave = async () => {
        if (!selectedLoaiDichVu) {
            message.error('Vui lòng nhập đầy đủ thông tin.');
            return;
        }

        try {
            const nowDiary = new Date();
            const thoiGian = format(nowDiary, 'dd/MM/yyyy HH:mm:ss');
            const trangThaiRandomIndex = Math.floor(Math.random() * trangThaiOptions.length);
            const trangThaiRandom = trangThaiOptions[trangThaiRandomIndex];
            const now = new Date();
            const thoiGianCap = format(now, 'HH:mm dd/MM/yyyy');
            const hanSuDungDate = new Date(now);
            hanSuDungDate.setDate(hanSuDungDate.getDate() + 1);
            const hanSuDung = format(hanSuDungDate, 'HH:mm dd/MM/yyyy');
            const newSTT = getRandomSTT();
            const randomFourDigits = generateRandomFourDigits();
            const sttBaoCao = `201${randomFourDigits}`;
            const nowNofiTime = new Date();
            const Gio = format(nowNofiTime, 'HH:mm');
            const nowNofiDay = new Date();
            const Day = format(nowNofiDay, 'dd/MM/yyyy');

            const docRef = await addDoc(collection(firestore, 'capso'), {
                STTBaoCao: sttBaoCao,
                STT: newSTT,
                TenKhachHang: 'Nguyễn Quang Thái',
                TenDichVu: selectedLoaiDichVu,
                ThoiGianCap: thoiGianCap,
                HanSuDung: hanSuDung,
                TrangThai: trangThaiRandom,
                NguonCap: 'Hệ thống',
            });

            setNewlyAddedData({
                STTBaoCao: sttBaoCao,
                TenDichVu: selectedLoaiDichVu,
                ThoiGianCap: thoiGianCap,
                HanSuDung: hanSuDung,
            });

            await addDoc(collection(firestore, 'nhatky'), {
                IPThucHien: '192.168.3.1',
                TenDangNhap: 'gamming0165',
                ThaoTac: 'Thêm cấp số có mã là ' + sttBaoCao,
                ThoiGian: thoiGian,
            });

            await addDoc(collection(firestore, 'thongbao'), {
                TenNguoiDung: 'Nguyễn Quang Thái',
                Gio: Gio,
                Ngay: Day,
            });

            setModalVisible(true);
        } catch (error) {
            message.error('Đã xảy ra lỗi khi thêm thiết bị.');
        }
    };

    const [modalVisible, setModalVisible] = useState(false);
    const navigate = useNavigate();

    const handleCancel = () => {
        navigate('/capso');
    };

    const closeModal = () => {
        setModalVisible(false);
    };
    return (
        <>
            <Content
                style={{
                    margin: '16px 0 0 24px',
                    borderRadius: '12px',
                }}
            >
                <div
                    style={{
                        width: '1200px',
                        height: '490px',
                        padding: '0 24px 0 24px',
                        minHeight: 360,
                        background: '#FFFFFF',
                        borderRadius: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <div
                        style={{
                            font: 'Nunito',
                            margin: '24px 0 20px 0',
                            textAlign: 'center',
                        }}
                    >
                        <span className="text-add-capso-header">Cấp số mới</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div
                            style={{
                                width: '792px',
                                height: '150px',
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <div>
                                <div
                                    style={{
                                        marginBottom: '12px',
                                        textAlign: 'center',
                                    }}
                                >
                                    <span
                                        style={{
                                            font: 'Nunito',
                                        }}
                                        className="text-add-capso"
                                    >
                                        Dịch vụ khách hàng lựa chọn
                                    </span>
                                </div>

                                <div
                                    style={{
                                        display: 'flex',
                                        textAlign: 'center',
                                    }}
                                >
                                    <Dropdown
                                        overlay={
                                            <Menu onClick={handleMenuClick}>
                                                {menuPropsDichVu.itemsDichVu.map((item) => (
                                                    <Menu.Item key={item.key}>{item.label}</Menu.Item>
                                                ))}
                                            </Menu>
                                        }
                                        trigger={['click']}
                                        overlayStyle={{ width: '300px' }}
                                    >
                                        <Button
                                            style={{
                                                width: '400px',
                                                height: '44px',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <span>
                                                {selectedLoaiDichVu
                                                    ? itemsDichVu.find((item) => item.key === selectedLoaiDichVu)?.label
                                                    : 'Chọn dịch vụ'}
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
                    </div>
                    <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
                        <Button
                            key="cancel"
                            className="button"
                            type="primary"
                            style={{
                                font: 'Nunito',
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
                                font: 'Nunito',
                                background: '#FF993C',
                                borderColor: '#FF993C',
                                height: '40px',
                                width: '140px',
                                marginLeft: '24px',
                            }}
                            onClick={handleSave}
                        >
                            <span className="text-button-login">In số</span>
                        </Button>
                    </div>
                </div>
            </Content>
            <ModalCapSo visible={modalVisible} onCancel={closeModal} newlyAddedData={newlyAddedData} />
        </>
    );
}

export default AddLevelNContent;
