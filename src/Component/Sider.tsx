import { Button, Layout, Menu } from 'antd';
import { useEffect, useState } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { SiDatabricks } from 'react-icons/si';
import { TbSettings2 } from 'react-icons/tb';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/images/Logo alta.png';
import { iconBaoCao, iconDashboard, iconDichVu } from '../assets/svg/svg';
import { auth } from '../lib/firebase';

const { Sider } = Layout;

function NavBar() {
    const [selectedMenuKey, setSelectedMenuKey] = useState<string | null>(null);

    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await auth.signOut();
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };

    const shouldShowNavBar = ['/', '/authemail', '/resetpass'].includes(location.pathname);

    let matchingKey: string | null = null;
    if (!shouldShowNavBar) {
        const currentPath = location.pathname;

        const pathToKeyMap: Record<string, string> = {
            '/dashboard': '/dashboard',
            '/thietbi': '/thietbi',
            '/themthietbi': '/thietbi',
            '/chitietthietbi/:id': '/thietbi',
            '/capnhatthietbi/:id': '/thietbi',
            '/dichvu': '/dichvu',
            '/themdichvu': '/dichvu',
            '/capnhatdichvu/:id': '/dichvu',
            '/chitietdichvu/:id': '/dichvu',
            '/capso': '/capso',
            '/themcapso': '/capso',
            '/chitietcapso/:id': '/capso',
            '/baocao': '/baocao',
            '/caidat': '/caidat',
            '/quanlyvaitro': '/caidat',
            '/quanlyvaitro/themvaitro/:id': '/caidat',
            '/quanlyvaitro/capnhatvaitro/:id': '/caidat',
            '/quanlytaikhoan/capnhat/:id': '/caidat',
            '/quanlytaikhoan/themtaikhoan/:id': '/caidat',
        };

        Object.keys(pathToKeyMap).forEach((key) => {
            const pattern = new RegExp(`^${key.replace(/:\w+/g, '[\\w-]+')}$`);
            if (pattern.test(currentPath)) {
                matchingKey = pathToKeyMap[key];
            }
        });
    }
    useEffect(() => {
        setSelectedMenuKey(matchingKey);
    }, [matchingKey]);

    return (
        <>
            {!shouldShowNavBar && (
                <Sider theme="light" className="sider">
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            margin: '32px 0 50px 0',
                        }}
                    >
                        <Link to="/dashboard">
                            <img style={{ width: '80px', height: '64px' }} src={logo} alt="" />
                        </Link>
                    </div>
                    <Menu
                        style={{ width: '200px' }}
                        className="menu-width ant-menu-light"
                        theme="light"
                        mode="vertical"
                        selectedKeys={[selectedMenuKey!]}
                    >
                        <Menu.Item style={{ height: '48px', width: '195px' }} key="/dashboard">
                            {iconDashboard}
                            <Link className="text-menu" to="/dashboard">
                                Dashboard
                            </Link>
                        </Menu.Item>
                        <Menu.Item style={{ height: '48px', width: '195px' }} key="/thietbi">
                            <HiOutlineDesktopComputer className="icon-menu-sider" />
                            <Link className="text-menu" to="/thietbi">
                                Thiết bị
                            </Link>
                        </Menu.Item>
                        <Menu.Item style={{ height: '48px', width: '195px' }} key="/dichvu">
                            {iconDichVu}
                            <Link className="text-menu=" to="/dichvu">
                                Dịch vụ
                            </Link>
                        </Menu.Item>
                        <Menu.Item style={{ height: '48px', width: '195px' }} key="/capso">
                            <SiDatabricks className="icon-menu-sider" />
                            <Link className="text-menu" to="/capso">
                                Cấp số
                            </Link>
                        </Menu.Item>
                        <Menu.Item style={{ height: '48px', width: '195px' }} key="/baocao">
                            {iconBaoCao}
                            <Link className="text-menu" to="/baocao">
                                Báo cáo
                            </Link>
                        </Menu.Item>
                        <Menu.SubMenu
                            className="text-menu"
                            style={{ height: '48px', width: '202px' }}
                            key="/caidat"
                            title="Cài đặt hệ thống"
                            icon={<TbSettings2 className="icon-menu-sider" />}
                        >
                            <Menu.Item>
                                <Link to="/quanlyvaitro">Quản lý vai trò</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to="/quanlytaikhoan">Quản lý tài khoản</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to="/nhatkynguoidung">Nhật ký người dùng</Link>
                            </Menu.Item>
                        </Menu.SubMenu>
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
            )}
        </>
    );
}

export default NavBar;
