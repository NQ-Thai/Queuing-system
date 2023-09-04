import { Button, Checkbox, Input, Layout, message } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import TextArea from 'antd/es/input/TextArea';
import { format } from 'date-fns';
import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Service } from '../../lib/Type/Service';
import { serviceCollection } from '../../lib/controller';
import { firestore } from '../../lib/firebase';

const { Content } = Layout;

const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
};

function UpdateContent() {
    const [dichVuUpdate, setDichVuUpdate] = useState<Service | null>(null);
    const [maDichVu, setMaDichVu] = useState('');
    const [tenDichVu, setTenDichVu] = useState('');
    const [moTa, setMoTa] = useState('');

    const navigate = useNavigate();

    const handleCancel = () => {
        navigate('/dichvu');
    };

    const handleSave = async () => {
        if (!dichVuUpdate) {
            return;
        }

        try {
            const docRef = doc(serviceCollection, id);

            const updatedData: Partial<Service> = {
                MaDichVu: maDichVu,
                TenDichVu: tenDichVu,
                MoTa: moTa,
            };
            await updateDoc(docRef, updatedData);

            const now = new Date();
            const thoiGian = format(now, 'dd/MM/yyyy HH:mm:ss');
            const nhatkyData = {
                IPThucHien: '192.168.3.1',
                TenDangNhap: 'gamming0165',
                ThaoTac: 'Cập nhật dịch vụ có mã là ' + maDichVu,
                ThoiGian: thoiGian,
            };
            await addDoc(collection(firestore, 'nhatky'), nhatkyData);

            navigate('/dichvu');
        } catch (error) {
            message.error('Đã xảy ra lỗi khi cập nhật dịch vụ.');
        }
    };
    const { id } = useParams();

    useEffect(() => {
        const fetchDichVuUpdate = async () => {
            const docRef = doc(serviceCollection, id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const data = docSnap.data() as Service;
                setDichVuUpdate(data);
                setMaDichVu(data.MaDichVu || '');
                setTenDichVu(data.TenDichVu || '');
                setMoTa(data.MoTa || '');
            }
        };

        fetchDichVuUpdate();
    }, [id]);

    const [dichvuUpdate, setDichvuUpdate] = useState<Service | null>(null);

    useEffect(() => {
        const fetchdichvuUpdate = async () => {
            const docRef = doc(serviceCollection, id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const data = docSnap.data() as Service;
                setDichvuUpdate(data);
            }
        };

        fetchdichvuUpdate();
    }, [id]);

    if (!dichvuUpdate) {
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
                        Thông tin dịch vụ
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
                                    Mã dịch vụ: <span style={{ color: 'red' }}>*</span>
                                </span>
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <div
                                    style={{
                                        display: 'inline',
                                    }}
                                >
                                    <Input
                                        defaultValue={dichvuUpdate.MaDichVu}
                                        onChange={(e) => setMaDichVu(e.target.value)}
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
                                    Tên dịch vụ : <span style={{ color: 'red' }}>*</span>
                                </span>
                            </div>

                            <div style={{ marginBottom: '10px' }}>
                                <div
                                    style={{
                                        display: 'inline',
                                    }}
                                >
                                    <Input
                                        defaultValue={dichvuUpdate.TenDichVu}
                                        onChange={(e) => setTenDichVu(e.target.value)}
                                        style={{
                                            width: '540px',
                                            height: '44px',
                                            backgroundColor: '#FFFFFF',
                                        }}
                                    />
                                </div>
                            </div>

                            <div
                                style={{
                                    marginBottom: '10px',
                                    borderRadius: '8px',
                                }}
                            >
                                <div
                                    style={{
                                        display: 'inline',
                                    }}
                                >
                                    <div style={{ display: 'inline-block', font: 'Nunito' }}>
                                        <span className="text-add-dichvu" style={{ display: 'block' }}>
                                            Quy tắc cấp số
                                        </span>
                                        <div style={{ margin: '5px 0 0 24px' }}>
                                            <Checkbox style={{ font: 'Nunito' }} onChange={onChange}></Checkbox>
                                            <span className="text-checkbox">Tăng tự động từ:</span>
                                            <div
                                                style={{
                                                    width: '61px',
                                                    height: '44px',
                                                    display: 'inline-block',
                                                    marginLeft: '15px',
                                                }}
                                            >
                                                <Input value={'0001'}></Input>
                                            </div>
                                            <span style={{ marginLeft: '15px' }}>Đến</span>
                                            <div
                                                style={{
                                                    width: '61px',
                                                    height: '44px',
                                                    display: 'inline-block',
                                                    marginLeft: '15px',
                                                }}
                                            >
                                                <Input value={'9999'}></Input>
                                            </div>

                                            <br />
                                            <Checkbox style={{ font: 'Nunito' }} onChange={onChange}></Checkbox>
                                            <span className="text-checkbox">Prefix:</span>
                                            <div
                                                style={{
                                                    width: '61px',
                                                    height: '44px',
                                                    display: 'inline-block',
                                                    marginLeft: '92px',
                                                }}
                                            >
                                                <Input value={'0001'}></Input>
                                            </div>

                                            <br />
                                            <Checkbox style={{ font: 'Nunito' }} onChange={onChange}></Checkbox>
                                            <span className="text-checkbox">Surfix:</span>
                                            <div
                                                style={{
                                                    width: '61px',
                                                    height: '44px',
                                                    display: 'inline-block',
                                                    marginLeft: '92px',
                                                }}
                                            >
                                                <Input value={'0001'}></Input>
                                            </div>

                                            <br />
                                            <Checkbox style={{ font: 'Nunito' }} onChange={onChange}></Checkbox>
                                            <span className="text-checkbox">Reset mỗi ngày</span>
                                        </div>
                                    </div>
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
                        {/* 2 */}
                        <div style={{ flex: 1, display: 'inline' }}>
                            <div style={{ marginBottom: '4px' }}>
                                <span
                                    style={{
                                        font: 'Nunito',
                                    }}
                                    className="text-change-input"
                                >
                                    Mô tả:
                                </span>
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <div
                                    style={{
                                        display: 'inline',
                                    }}
                                >
                                    <TextArea
                                        defaultValue={dichvuUpdate.MoTa}
                                        onChange={(e) => setMoTa(e.target.value)}
                                        rows={6}
                                        placeholder="Mô tả dịch vụ"
                                    />
                                </div>
                            </div>

                            <div
                                style={{
                                    marginBottom: '20px',
                                    width: '540px',
                                    borderRadius: '8px',
                                }}
                            ></div>
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
                    <span className="text-button-login">Cập nhật</span>
                </Button>
            </div>
        </Content>
    );
}

export default UpdateContent;
