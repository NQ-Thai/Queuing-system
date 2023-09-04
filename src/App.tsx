import { Layout } from 'antd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './assets/style/style.css';
import TaiKhoan from './component/Header/AccountHeader';
import AddTaiKhoan from './component/Header/AddAccountHeader';
import ThemThietBi from './component/Header/AddDeviceHeader';
import AddVaiTro from './component/Header/AddRoleHeader';
import AddDichVu from './component/Header/AddServiceHeader';
import AddCapSo from './component/Header/AddlevelNHeader';
import Trangchu from './component/Header/DashBoardHeader';
import ChiTiet from './component/Header/DetailDeviceHeader';
import DetailCapSo from './component/Header/DetailLevelHeader';
import DetailDichVu from './component/Header/DetailServiceHeader';
import NhatKyNguoiDung from './component/Header/DiaryHeader';
import CapSo from './component/Header/LevelNHeader';
import Profile from './component/Header/ProfileHeader';
import BaoCao from './component/Header/ReportHeader';
import VaiTro from './component/Header/RoleHeader';
import DichVu from './component/Header/ServiceHeader';
import UpdateTaiKhoan from './component/Header/UpdateAccountHeader';
import UpdateThietBi from './component/Header/UpdateDeviceHeader';
import UpdateVaiTro from './component/Header/UpdateRoleHeader';
import UpdateDichVu from './component/Header/UpdateServiceHeader';
import NavBar from './component/Sider';
import CaiDat from './pages/CaiDat/Setting';
import ThietBi from './pages/Device/DeviceHeader';
import AuthEmail from './pages/EmailAuth.tsx/AuthEmail';
import Login from './pages/Login/Login';
import ResetPass from './pages/ResetPass/ResetPass';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <NavBar />

                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/authemail" element={<AuthEmail />} />
                    <Route path="/resetpass" element={<ResetPass />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/dashboard" element={<Trangchu />} />
                    <Route path="/thietbi" element={<ThietBi />} />
                    <Route path="/themthietbi" element={<ThemThietBi />} />
                    <Route path="/chitietthietbi/:id" Component={ChiTiet} />
                    <Route path="/capnhatthietbi/:id" Component={UpdateThietBi} />
                    <Route path="/dichvu" element={<DichVu />} />
                    <Route path="/themdichvu" element={<AddDichVu />} />
                    <Route path="/capnhatdichvu/:id" Component={UpdateDichVu} />
                    <Route path="/chitietdichvu/:id" Component={DetailDichVu} />
                    <Route path="/capso" element={<CapSo />} />
                    <Route path="/themcapso" element={<AddCapSo />} />
                    <Route path="/chitietcapso/:id" Component={DetailCapSo} />
                    <Route path="/baocao" element={<BaoCao />} />
                    <Route path="/caidat" element={<CaiDat />} />
                    <Route path="/quanlyvaitro" element={<VaiTro />} />
                    <Route path="/quanlyvaitro/themvaitro" element={<AddVaiTro />} />
                    <Route path="/quanlyvaitro/capnhatvaitro/:id" element={<UpdateVaiTro />} />
                    <Route path="/quanlytaikhoan" element={<TaiKhoan />} />
                    <Route path="/quanlytaikhoan/themtaikhoan" element={<AddTaiKhoan />} />
                    <Route path="/quanlytaikhoan/capnhat/:id" element={<UpdateTaiKhoan />} />
                    <Route path="/nhatkynguoidung" element={<NhatKyNguoiDung />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
