import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import avata from '../../assets/images/avata.jpg';
import { iconBell } from '../../assets/svg/svg';

import UpdateContent from '../VaiTro/UpdateContent';

function UpdateVaiTro() {
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
                                Cài đặt hệ thống&nbsp;&nbsp;&gt;&nbsp;&nbsp;
                            </span>
                            <Link to={'/quanlyvaitro'}>
                                <span className="text-first-head">
                                    Quản lý vai trò&nbsp;&nbsp;&gt;
                                </span>
                            </Link>

                            <span className="text-add-header-content">
                                &nbsp;&nbsp;Cập nhật vai trò
                            </span>
                        </span>
                        <div
                            className="icon-wrapper-vaitro-update"
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
                        Danh sách vai trò
                    </span>
                </div>
                <UpdateContent />
            </Layout>
        </Layout>
    );
}

export default UpdateVaiTro;
