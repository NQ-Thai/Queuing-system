import { Layout, MenuProps, message } from 'antd';
import { HiPencil } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';

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

function ChiTietContent() {
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
            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <div
                    style={{
                        width: '1100px',
                        height: '500px',
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
                                height: '120px',
                                display: 'flex',
                                flexDirection: 'row',
                            }}
                        >
                            <div style={{ flex: 1, display: 'inline', margin: '0 24px 30px 0' }}>
                                <div style={{ marginBottom: '16px' }}>
                                    <span
                                        style={{
                                            font: 'Nunito',
                                        }}
                                        className="text-change-input"
                                    >
                                        Mã thiết bị:{' '}
                                        <span
                                            className="text-detail"
                                            style={{ marginLeft: '43px', font: 'Nunito' }}
                                        >
                                            KIO_01
                                        </span>
                                    </span>
                                </div>

                                <div style={{ marginBottom: '16px' }}>
                                    <span
                                        style={{
                                            font: 'Nunito',
                                        }}
                                        className="text-change-input"
                                    >
                                        Tên thiết bị:{' '}
                                        <span
                                            className="text-detail"
                                            style={{ marginLeft: '39px' }}
                                        >
                                            Kiosk
                                        </span>
                                    </span>
                                </div>

                                <div style={{ marginBottom: '16px' }}>
                                    <span
                                        style={{
                                            font: 'Nunito',
                                        }}
                                        className="text-change-input"
                                    >
                                        Địa chỉ IP:{' '}
                                        <span
                                            className="text-detail"
                                            style={{ marginLeft: '51px' }}
                                        >
                                            128.172.308
                                        </span>
                                    </span>
                                </div>
                            </div>
                            {/* 2 */}
                            <div style={{ flex: 1, display: 'inline', marginLeft: '250px' }}>
                                <div style={{ marginBottom: '16px' }}>
                                    <span
                                        style={{
                                            font: 'Nunito',
                                        }}
                                        className="text-change-input"
                                    >
                                        Loại thiết bị:{' '}
                                        <span
                                            className="text-detail"
                                            style={{ marginLeft: '69px' }}
                                        >
                                            Kiosk
                                        </span>
                                    </span>
                                </div>

                                <div style={{ marginBottom: '16px' }}>
                                    <span
                                        style={{
                                            font: 'Nunito',
                                        }}
                                        className="text-change-input"
                                    >
                                        Tên đăng nhập:{' '}
                                        <span
                                            className="text-detail"
                                            style={{ marginLeft: '46px' }}
                                        >
                                            Linhkyo011
                                        </span>
                                    </span>
                                </div>

                                <div style={{ marginBottom: '16px' }}>
                                    <span
                                        style={{
                                            font: 'Nunito',
                                        }}
                                        className="text-change-input"
                                    >
                                        Mật khẩu:{' '}
                                        <span
                                            className="text-detail"
                                            style={{ marginLeft: '87px' }}
                                        >
                                            CMS
                                        </span>
                                    </span>
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
                            Dịch vụ sử dụng:
                        </span>
                    </div>

                    <div>
                        <div
                            style={{
                                display: 'inline',
                            }}
                        >
                            <span className="text-detail">
                                Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi
                                họng, Khám hô hấp, Khám tổng quát.
                            </span>
                        </div>
                    </div>
                </div>
                <Link to={'/capnhatthietbi'}>
                    <div
                        id="button"
                        style={{
                            backgroundColor: '#FFF2E7',
                            height: '94px',
                            width: '80px',
                            textAlign: 'center',
                            padding: '10px',
                            borderRadius: '8px 0px 0px 8px',
                            marginLeft: '42px',
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
                            {/* <span style={{ color: 'white', fontSize: '35px', marginBottom: '7px' }}>+</span> */}
                            {/* {iconUpdateThietBi} */}
                            <HiPencil
                                style={{
                                    color: 'white',
                                    height: '30px',
                                    width: '30px',
                                }}
                            />
                        </div>

                        <span className="text-add-button" style={{ font: 'Nunito' }}>
                            Cập nhật <br />
                            thiết bị
                        </span>
                    </div>
                </Link>
            </div>
        </Content>
    );
}

export default ChiTietContent;
