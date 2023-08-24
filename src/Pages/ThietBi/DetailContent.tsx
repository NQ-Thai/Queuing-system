import { Layout } from 'antd';
import { useEffect } from 'react';
import { HiPencil } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchData } from '../../lib/User/UserReducer';
import { AppDispatch, RootState } from '../../lib/store';

const { Content } = Layout;

function ChiTietContent() {
    // const { id } = useParams();
    // const [thietbi, setThietbi] = useState<ThietBi | undefined>();
    // const dispatch = useDispatch();
    // const selectedThietBi = useSelector((state: RootState) => state.Thietbi.thietbi);

    // useEffect(() => {
    //     const data = selectedThietBi.find((item) => item.key === id);
    //     setThietbi(data);
    //     dispatch(fetchData() as any);
    // }, [selectedThietBi, dispatch, id]);

    const dispatch: AppDispatch = useDispatch();

    const users = useSelector((state: RootState) => state.User.user);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    const userInfo = users.length > 0 ? users[0] : null;

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
                                        <span className="text-detail" style={{ marginLeft: '43px', font: 'Nunito' }}>
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
                                        <span className="text-detail" style={{ marginLeft: '39px' }}>
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
                                        <span className="text-detail" style={{ marginLeft: '51px' }}>
                                            192.168.1.10
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
                                        <span className="text-detail" style={{ marginLeft: '69px' }}>
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
                                        <span className="text-detail" style={{ marginLeft: '46px' }}>
                                            {userInfo?.TenDangNhap || ''}
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
                                        <span className="text-detail" style={{ marginLeft: '87px' }}>
                                            {userInfo?.MatKhau || ''}
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
                                Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát
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
