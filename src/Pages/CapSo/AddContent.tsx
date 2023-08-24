import { CaretDownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Layout, Menu, MenuProps, message } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalCapSo from './Modal';

type MenuItemType = {
    label: string;
    key: string;
};

const itemsDichVu: MenuItemType[] = [
    {
        label: 'Tất cả',
        key: '1',
    },
    {
        label: 'Khám sản - Phụ khoa',
        key: '2',
    },
    {
        label: 'Khám răng hàm mặt',
        key: '3',
    },
    {
        label: 'Khám tai mũi họng',
        key: '4',
    },
    {
        label: 'Khám tim mạch',
        key: '5',
    },
    {
        label: 'Khám hô hấp',
        key: '6',
    },
    {
        label: 'Khám tổng quát',
        key: '7',
    },
];

const handleMenuClick: MenuProps['onClick'] = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
};

const menuPropsDichVu = {
    itemsDichVu,
    onClick: handleMenuClick,
};

const { Content } = Layout;

function AddCapSoContent() {
    const [modalVisible, setModalVisible] = useState(false);
    const navigate = useNavigate();

    const handleCancel = () => {
        navigate('/capso');
    };

    const openModal = () => {
        setModalVisible(true);
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
                                                    <Menu.Item key={item.key}>
                                                        {item.label}
                                                    </Menu.Item>
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
                                            <span style={{ color: '#A9A9B0' }}>Chọn dịch vụ</span>
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
                            onClick={openModal}
                        >
                            <span className="text-button-login">In số</span>
                        </Button>
                    </div>
                </div>
            </Content>
            <ModalCapSo visible={modalVisible} onCancel={closeModal} />
        </>
    );
}

export default AddCapSoContent;
