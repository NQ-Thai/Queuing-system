import { Button, Checkbox, Input, Layout } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import TextArea from 'antd/es/input/TextArea';
import { useNavigate } from 'react-router-dom';

const { Content } = Layout;

const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
};

function UpdateContent() {
    const navigate = useNavigate();

    const handleCancel = () => {
        navigate('/quanlyvaitro');
    };

    const handleContinue = () => {
        navigate('/quanlyvaitro');
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
                                        value={'Kế toán'}
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
                                    <TextArea
                                        rows={4}
                                        value={'Chịu trách nhiệm thống kê số liệu và kiểm toán'}
                                        maxLength={6}
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
                                    <span style={{ color: 'red' }}>*</span> Là trường thông tin bắt
                                    buộc
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
                                        <span
                                            className="text-add-vaitro"
                                            style={{ display: 'block' }}
                                        >
                                            Nhóm chức năng A
                                        </span>
                                        <div style={{ margin: '0 0 0 24px' }}>
                                            <Checkbox
                                                className="text-checkbox"
                                                style={{ font: 'Nunito' }}
                                                onChange={onChange}
                                            >
                                                Tất cả
                                            </Checkbox>
                                            <br />
                                            <Checkbox
                                                className="text-checkbox"
                                                style={{ font: 'Nunito' }}
                                                onChange={onChange}
                                            >
                                                Chức năng x
                                            </Checkbox>
                                            <br />
                                            <Checkbox
                                                className="text-checkbox"
                                                style={{ font: 'Nunito' }}
                                                onChange={onChange}
                                            >
                                                Chức năng y
                                            </Checkbox>
                                            <br />
                                            <Checkbox
                                                className="text-checkbox"
                                                style={{ font: 'Nunito' }}
                                                onChange={onChange}
                                            >
                                                Chức năng z
                                            </Checkbox>
                                        </div>
                                    </div>
                                    <div style={{ font: 'Nunito' }}>
                                        <span
                                            className="text-add-vaitro"
                                            style={{ display: 'block' }}
                                        >
                                            Nhóm chức năng B
                                        </span>
                                        <div style={{ margin: '0 0 15px 24px' }}>
                                            <Checkbox
                                                className="text-checkbox"
                                                style={{ font: 'Nunito' }}
                                                onChange={onChange}
                                            >
                                                Tất cả
                                            </Checkbox>
                                            <br />
                                            <Checkbox
                                                className="text-checkbox"
                                                style={{ font: 'Nunito' }}
                                                onChange={onChange}
                                            >
                                                Chức năng x
                                            </Checkbox>
                                            <br />
                                            <Checkbox
                                                className="text-checkbox"
                                                style={{ font: 'Nunito' }}
                                                onChange={onChange}
                                            >
                                                Chức năng y
                                            </Checkbox>
                                            <br />
                                            <Checkbox
                                                className="text-checkbox"
                                                style={{ font: 'Nunito' }}
                                                onChange={onChange}
                                            >
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
