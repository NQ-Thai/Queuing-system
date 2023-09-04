import { Button, Checkbox, Input, Layout, message } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import TextArea from 'antd/es/input/TextArea';
import { format } from 'date-fns';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { firestore } from '../../lib/firebase';

const { Content } = Layout;

const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
};

function AddContent() {
    const navigate = useNavigate();

    const handleCancel = () => {
        navigate('/quanlyvaitro');
    };

    const handleSave = async () => {
        const tenVaiTroInput = document.getElementById('tenVaiTro') as HTMLInputElement;
        const tenVaiTro = tenVaiTroInput.value;
        const moTaInput = document.getElementById('moTa') as HTMLInputElement;
        const moTa = moTaInput.value;
        if (!tenVaiTro || !moTa) {
            message.error('Vui lòng nhập đầy đủ thông tin.');
            return;
        }

        try {
            const now = new Date();
            const thoiGian = format(now, 'dd/MM/yyyy HH:mm:ss');

            await addDoc(collection(firestore, 'role'), {
                TenVaiTro: tenVaiTro,
                MoTa: moTa,
                SoNguoiDung: '1',
            });

            await addDoc(collection(firestore, 'nhatky'), {
                IPThucHien: '192.168.3.1',
                TenDangNhap: 'gamming0165',
                ThaoTac: 'Thêm vai trò có tên là ' + tenVaiTro,
                ThoiGian: thoiGian,
            });

            navigate('/quanlyvaitro');
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
                                        id="tenVaiTro"
                                        placeholder="Nhập tên vai trò"
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
                                    <TextArea id="moTa" rows={4} placeholder="Nhập mô tả" />
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
                    onClick={handleSave}
                >
                    <span className="text-button-login">Thêm</span>
                </Button>
            </div>
        </Content>
    );
}

export default AddContent;
