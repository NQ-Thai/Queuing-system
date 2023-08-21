import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import avata from '../../assets/images/avata.jpg';
import { iconBell } from '../../assets/svg/svg';
import UpdateContent from './UpdateContent';

function UpdateDichVu() {
    return (
        <Layout>
            <Layout>
                <div style={{ width: '1240px', height: '88px', marginBottom: '5px' }}>
                    <div
                        style={{
                            font: 'Nunito',
                            display: 'flex',
                            alignItems: 'center',
                            margin: '18px 0 0 24px',
                        }}
                    >
                        <span>
                            <span className="text-first-head" style={{ font: 'Nunito' }}>
                                Dịch vụ&nbsp;&nbsp;&gt;&nbsp;&nbsp;
                            </span>
                            <Link to={'/dichvu'}>
                                <span className="text-first-head">
                                    Danh sách dịch vụ&nbsp;&nbsp;&gt;&nbsp;&nbsp;
                                </span>
                            </Link>
                            <Link to={'/chitietdichvu'}>
                                <span className="text-first-head">Chi tiết&nbsp;&nbsp;&gt;</span>
                            </Link>

                            <span className="text-add-header-content">&nbsp;&nbsp;Cập nhật</span>
                        </span>
                        <div
                            className="icon-wrapper-dichvu-update"
                            style={{ display: 'inline-block', verticalAlign: 'middle' }}
                        >
                            {iconBell}
                        </div>
                        <Link to="/profile" style={{ display: 'flex', alignItems: 'center' }}>
                            <div
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    marginRight: '7.5px',
                                }}
                            >
                                <img
                                    src={avata}
                                    alt=""
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>

                            <div style={{ display: 'inline-block', textAlign: 'left' }}>
                                <span
                                    className="text-hello"
                                    style={{ font: 'Nunito', display: 'block' }}
                                >
                                    Xin chào
                                </span>
                                <span
                                    className="text-name-right"
                                    style={{ font: 'Nunito', display: 'block' }}
                                >
                                    Da Trắng Tóc Xù
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div style={{ marginBottom: '5px' }}>
                    <span className="title2-dashboard" style={{ font: 'Nunito' }}>
                        Quản lý dịch vụ
                    </span>
                </div>
                <UpdateContent />
            </Layout>
        </Layout>
    );
}

export default UpdateDichVu;
