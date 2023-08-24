import { Layout } from 'antd';

import { Link } from 'react-router-dom';
import TableDichVu from './Table';

const { Content } = Layout;

function ContentVaiTro() {
    return (
        <Content style={{ margin: '0 0 0 24px', borderRadius: '12', font: 'Nunito' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <div id="table" style={{ display: 'inline-block', marginRight: '30px' }}>
                    <TableDichVu />
                </div>
                <Link to="/quanlyvaitro/themvaitro">
                    <div
                        id="button"
                        style={{
                            backgroundColor: '#FFF2E7',
                            height: '94px',
                            width: '80px',
                            textAlign: 'center',
                            padding: '10px',
                            borderRadius: '8px 0px 0px 8px',
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
                            <span style={{ color: 'white', fontSize: '35px', marginBottom: '7px' }}>
                                +
                            </span>
                        </div>

                        <span className="text-add-button" style={{ font: 'Nunito' }}>
                            Thêm <br />
                            vai trò
                        </span>
                    </div>
                </Link>
            </div>
        </Content>
    );
}

export default ContentVaiTro;
