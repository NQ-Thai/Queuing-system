import { Modal } from 'antd';
import { FC } from 'react';

interface NewModalProps {
    visible: boolean;
    onCancel: () => void;
}

const ModalCapSo: FC<NewModalProps> = ({ visible, onCancel }) => {
    return (
        <div>
            <Modal
                open={visible}
                onCancel={onCancel}
                width={400}
                title={
                    <div
                        style={{
                            textAlign: 'center',
                            margin: '0 0 0 0',
                        }}
                    >
                        <span>&nbsp;&nbsp;</span>
                    </div>
                }
                footer={
                    <div
                        style={{
                            backgroundColor: '#FF9138',
                            textAlign: 'center',
                            margin: '0',
                            borderRadius: '0 0 16px 16px',
                            padding: '20px 0',
                        }}
                    >
                        <div>
                            <span className="text-time-modal-capso" style={{ font: 'Nunito' }}>
                                Thời gian cấp: 09:30 11/10/2021
                            </span>
                        </div>
                        <div>
                            <span className="text-time-modal-capso" style={{ font: 'Nunito' }}>
                                Hạn sử dụng: 17:30 11/10/2021
                            </span>
                        </div>
                    </div>
                }
                centered
            >
                <div
                    style={{
                        textAlign: 'center',
                        margin: '0 0 24px 0',
                    }}
                >
                    <span className="text-title-modal-capso" style={{ font: 'Nunito' }}>
                        Số thứ tự được cấp
                    </span>
                </div>
                <div
                    style={{
                        textAlign: 'center',
                        margin: '0 0 26px 0',
                    }}
                >
                    <span className="number-title-modal-capso" style={{ font: 'Nunito' }}>
                        2001201
                    </span>
                </div>

                <div
                    style={{
                        textAlign: 'center',
                        margin: '0 0 26px 0',
                    }}
                >
                    <span className="text1-DV-capso" style={{ font: 'Nunito' }}>
                        DV: Khám răng hàm mặt{' '}
                        <span className="text2-DV-capso">(tại quầy số 1)</span>
                    </span>
                </div>
            </Modal>
        </div>
    );
};

export default ModalCapSo;
