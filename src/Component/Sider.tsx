import { Button, Layout, Menu } from 'antd';
import { FiLogOut } from 'react-icons/fi';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { SiDatabricks } from 'react-icons/si';
import { TbSettings2 } from 'react-icons/tb';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/images/Logo alta.png';
import { iconBaoCao, iconDashboard, iconDichVu } from '../assets/svg/svg';

const { Sider } = Layout;

function NavBar() {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    };

    const shouldShowNavBar = [
        '/dashboard',
        '/thietbi',
        '/dichvu',
        '/capso',
        '/baocao',
        '/caidat',
        '/profile',
    ].includes(location.pathname);

    if (!shouldShowNavBar) {
        return null;
    }
    return (
        <Sider theme="light" className="sider">
            <div style={{ display: 'flex', justifyContent: 'center', margin: '32px 0 50px 0' }}>
                <Link to="/dashboard">
                    <img style={{ width: '80px', height: '64px' }} src={logo} alt="" />
                </Link>
            </div>
            <Menu className="menu-width ant-menu-light" theme="light" mode="inline">
                <Menu.Item style={{ height: '48px' }} key="/dashboard">
                    {iconDashboard}
                    <Link className="text-menu" to="/dashboard">
                        Dashboard
                    </Link>
                </Menu.Item>
                <Menu.Item style={{ height: '48px' }} key="/thietbi">
                    <HiOutlineDesktopComputer className="icon-menu-sider" />
                    <Link className="text-menu" to="/thietbi">
                        Thiết bị
                    </Link>
                </Menu.Item>
                <Menu.Item style={{ height: '48px' }} key="/dichvu">
                    {iconDichVu}
                    <Link className="text-menu" to="/dichvu">
                        Dịch vụ
                    </Link>
                </Menu.Item>
                <Menu.Item style={{ height: '48px' }} key="/capso">
                    <SiDatabricks className="icon-menu-sider" />
                    <Link className="text-menu" to="/capso">
                        Cấp số
                    </Link>
                </Menu.Item>
                <Menu.Item style={{ height: '48px' }} key="/baocao">
                    {iconBaoCao}
                    <Link className="text-menu" to="/baocao">
                        Báo cáo
                    </Link>
                </Menu.Item>
                <Menu.Item style={{ height: '48px' }} key="/caidat">
                    <TbSettings2 className="icon-menu-sider" />
                    <Link className="text-menu" to="/caidat">
                        Cài đặt hệ thống
                    </Link>
                </Menu.Item>
            </Menu>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '140px' }}>
                <Button
                    onClick={handleLogout}
                    className="button-sider"
                    type="primary"
                    style={{
                        font: 'Nunito',
                        color: '#FF993C',
                        borderColor: '#FFF2E7',
                        backgroundColor: '#FFF2E7',
                    }}
                    ghost
                >
                    <FiLogOut className="icon-button-sider" />
                    <span className="text-button-sider">Đăng xuất</span>
                </Button>
            </div>
        </Sider>
    );
}

export default NavBar;
