import { Button, Checkbox, Input, Layout, message } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import TextArea from 'antd/es/input/TextArea';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { firestore } from '../../lib/Firebase';

const { Content } = Layout;

const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
};

function AddContent() {
    const navigate = useNavigate();

    const handleCancel = () => {
        navigate('/dichvu');
    };

    const handleSave = async () => {
        const maDichVuInput = document.getElementById('maDichVu') as HTMLInputElement;
        const maDichVu = maDichVuInput.value;
        const tenDichVuInput = document.getElementById('tenDichVu') as HTMLInputElement;
        const tenDichVu = tenDichVuInput.value;
        const moTaInput = document.getElementById('moTa') as HTMLInputElement;
        const moTa = moTaInput.value;

        if (!maDichVu || !tenDichVu || !moTa) {
            message.error('Vui lòng nhập đầy đủ thông tin.');
            return;
        }
        try {
            await addDoc(collection(firestore, 'dichvu'), {
                MaDichVu: maDichVu,
                TenDichVu: tenDichVu,
                MoTa: moTa,
                TrangThaiHoatDong: 'Hoạt động',
            });

            navigate('/dichvu');
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
                                        id="maDichVu"
                                        placeholder="Nhập mã dịch vụ"
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
                                        id="tenDichVu"
                                        placeholder="Nhập tên dịch vụ"
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
                                    <TextArea rows={6} placeholder="Mô tả dịch vụ" id="moTa" />
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
                    <span className="text-button-login">Thêm dịch vụ</span>
                </Button>
            </div>
        </Content>
    );
}

export default AddContent;
