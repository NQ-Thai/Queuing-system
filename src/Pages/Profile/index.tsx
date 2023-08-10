import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import avata from '../../assets/images/avt.png';
import { iconBell } from '../../assets/svg/svg';
import UserInFormation from './content';

function Profile() {
    return (
        <Layout>
            <Layout>
                <div style={{ width: '1240px', height: '88px', marginBottom: '80px' }}>
                    <div style={{ font: 'Nunito', display: 'flex', alignItems: 'center' }}>
                        <span className="text-header-content">Thông tin cá nhân</span>

                        <div
                            className="icon-wrapper-information"
                            style={{ display: 'inline-block', verticalAlign: 'middle' }}
                        >
                            {iconBell}
                        </div>
                        <Link to="/profile" style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ display: 'inline-block', marginRight: '8px' }}>
                                <img src={avata} alt="" />
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
                                    Lê Quỳnh Ái Vân
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
                {/* Content */}
                <UserInFormation />
            </Layout>
        </Layout>
    );
}

export default Profile;
