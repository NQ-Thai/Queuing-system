import { Layout } from 'antd';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { Link, useParams } from 'react-router-dom';
import { CapSo } from '../../lib/Type/CapSo';
import { capSoCollection } from '../../lib/controller';

const { Content } = Layout;

function DetailContent() {
    const { id } = useParams();
    const [capSoDetail, setCapSoDetail] = useState<CapSo | null>(null);

    useEffect(() => {
        const fetchCapSoDetail = async () => {
            const docRef = doc(capSoCollection, id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const data = docSnap.data() as CapSo;
                setCapSoDetail(data);
            }
        };

        fetchCapSoDetail();
    }, [id]);

    if (!capSoDetail) {
        return <div></div>;
    }
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
                            Thông tin cấp số
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
                                <div style={{ marginBottom: '16px', width: '300px' }}>
                                    <span
                                        style={{
                                            font: 'Nunito',
                                        }}
                                        className="text-change-input"
                                    >
                                        Họ tên:{' '}
                                        <span className="text-detail" style={{ marginLeft: '73px', font: 'Nunito' }}>
                                            {capSoDetail.TenKhachHang}
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
                                        Tên dịch vụ:{' '}
                                        <span className="text-detail" style={{ marginLeft: '39px' }}>
                                            {capSoDetail.TenDichVu}
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
                                        Số thứ tự:{' '}
                                        <span className="text-detail" style={{ marginLeft: '50px' }}>
                                            {capSoDetail.STT}
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
                                        Thời gian cấp:
                                        <span className="text-detail" style={{ marginLeft: '24px' }}>
                                            {capSoDetail.ThoiGianCap}
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
                                        Nguồn cấp:{' '}
                                        <span className="text-detail" style={{ marginLeft: '40px' }}>
                                            {capSoDetail.NguonCap}
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
                                        Trạng thái:{' '}
                                        <span className="text-detail" style={{ marginLeft: '46px' }}>
                                            {capSoDetail.TrangThai}
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
                                        Số điện thoại:{' '}
                                        <span className="text-detail" style={{ marginLeft: '24px' }}>
                                            {capSoDetail.SDT}
                                        </span>
                                    </span>
                                </div>

                                <div style={{ marginBottom: '16px', width: '350px' }}>
                                    <span
                                        style={{
                                            font: 'Nunito',
                                        }}
                                        className="text-change-input"
                                    >
                                        Địa chỉ Email:
                                        <span className="text-detail" style={{ marginLeft: '30px' }}>
                                            {capSoDetail.Email}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ margin: '40px 0 16px 0' }}>
                        <span
                            style={{
                                font: 'Nunito',
                            }}
                            className="text-change-input"
                        >
                            Hạn sử dụng:
                            <span className="text-detail" style={{ marginLeft: '29px' }}>
                                {capSoDetail.HanSuDung}
                            </span>
                        </span>
                    </div>
                </div>
                <Link to={'/capso'}>
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
                            <RiArrowGoBackFill
                                style={{
                                    color: 'white',
                                    height: '20px',
                                    width: '20px',
                                }}
                            />
                        </div>

                        <span className="text-add-button" style={{ font: 'Nunito' }}>
                            Quay lại
                        </span>
                    </div>
                </Link>
            </div>
        </Content>
    );
}

export default DetailContent;
