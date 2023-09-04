import { Button, Checkbox, Input, Layout, message } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import TextArea from 'antd/es/input/TextArea';
import { format } from 'date-fns';
import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Role } from '../../lib/Type/Role';
import { roleCollection } from '../../lib/controller';
import { firestore } from '../../lib/firebase';

const { Content } = Layout;

const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
};

function UpdateContent() {
    const { id } = useParams();
    const [roleUpdate, setRoleUpdate] = useState<Role | null>(null);
    const [tenVaiTro, setTenVaiTro] = useState('');
    const [moTa, setMoTa] = useState('');
    const navigate = useNavigate();

    const handleCancel = () => {
        navigate('/quanlyvaitro');
    };

    const handleContinue = async () => {
        if (!roleUpdate) {
            return;
        }

        try {
            const docRef = doc(roleCollection, id);

            const updatedData: Partial<Role> = {
                TenVaiTro: tenVaiTro,
                MoTa: moTa,
            };
            await updateDoc(docRef, updatedData);

            const now = new Date();
            const thoiGian = format(now, 'dd/MM/yyyy HH:mm:ss');
            const nhatkyData = {
                IPThucHien: '192.168.3.1',
                TenDangNhap: 'gamming0165',
                ThaoTac: 'Cập nhật vai trò có tên là ' + tenVaiTro,
                ThoiGian: thoiGian,
            };
            await addDoc(collection(firestore, 'nhatky'), nhatkyData);
            navigate('/quanlyvaitro');
        } catch (error) {
            message.error('Đã xảy ra lỗi khi cập nhật thiết bị.');
        }
    };

    useEffect(() => {
        const fetchRoleUpdate = async () => {
            const docRef = doc(roleCollection, id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const data = docSnap.data() as Role;
                setRoleUpdate(data);
                setTenVaiTro(data.TenVaiTro || '');
                setMoTa(data.MoTa || '');
            }
        };

        fetchRoleUpdate();
    }, [id]);

    useEffect(() => {
        const fetchRoleUpdate = async () => {
            const docRef = doc(roleCollection, id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const data = docSnap.data() as Role;
                setRoleUpdate(data);
            }
        };

        fetchRoleUpdate();
    }, [id]);

    if (!roleUpdate) {
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
                        Thông tin vai trò
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
                                    Tên vai trò <span style={{ color: 'red' }}>*</span>
                                </span>
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <div
                                    style={{
                                        display: 'inline',
                                    }}
                                >
                                    <Input
                                        defaultValue={roleUpdate.TenVaiTro}
                                        onChange={(e) => setTenVaiTro(e.target.value)}
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
                                    Mô tả:
                                </span>
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <div
                                    style={{
                                        display: 'inline',
                                    }}
                                >
                                    <TextArea rows={4} defaultValue={roleUpdate.MoTa} onChange={(e) => setMoTa(e.target.value)} />
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
                                    Phân quyền chức năng <span style={{ color: 'red' }}>*</span>
                                </span>
                            </div>

                            <div
                                style={{
                                    marginBottom: '20px',
                                    height: '370px',
                                    width: '540px',
                                    backgroundColor: '#FFF2E7',
                                    borderRadius: '8px',
                                }}
                            >
                                <div
                                    style={{
                                        display: 'inline',
                                    }}
                                >
                                    <div style={{ display: 'inline-block', font: 'Nunito' }}>
                                        <span className="text-add-vaitro" style={{ display: 'block' }}>
                                            Nhóm chức năng A
                                        </span>
                                        <div style={{ margin: '0 0 0 24px' }}>
                                            <Checkbox className="text-checkbox" style={{ font: 'Nunito' }} onChange={onChange}>
                                                Tất cả
                                            </Checkbox>
                                            <br />
                                            <Checkbox className="text-checkbox" style={{ font: 'Nunito' }} onChange={onChange}>
                                                Chức năng x
                                            </Checkbox>
                                            <br />
                                            <Checkbox className="text-checkbox" style={{ font: 'Nunito' }} onChange={onChange}>
                                                Chức năng y
                                            </Checkbox>
                                            <br />
                                            <Checkbox className="text-checkbox" style={{ font: 'Nunito' }} onChange={onChange}>
                                                Chức năng z
                                            </Checkbox>
                                        </div>
                                    </div>
                                    <div style={{ font: 'Nunito' }}>
                                        <span className="text-add-vaitro" style={{ display: 'block' }}>
                                            Nhóm chức năng B
                                        </span>
                                        <div style={{ margin: '0 0 15px 24px' }}>
                                            <Checkbox className="text-checkbox" style={{ font: 'Nunito' }} onChange={onChange}>
                                                Tất cả
                                            </Checkbox>
                                            <br />
                                            <Checkbox className="text-checkbox" style={{ font: 'Nunito' }} onChange={onChange}>
                                                Chức năng x
                                            </Checkbox>
                                            <br />
                                            <Checkbox className="text-checkbox" style={{ font: 'Nunito' }} onChange={onChange}>
                                                Chức năng y
                                            </Checkbox>
                                            <br />
                                            <Checkbox className="text-checkbox" style={{ font: 'Nunito' }} onChange={onChange}>
                                                Chức năng z
                                            </Checkbox>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                    onClick={handleContinue}
                >
                    <span className="text-button-login">Cập nhật</span>
                </Button>
            </div>
        </Content>
    );
}

export default UpdateContent;
