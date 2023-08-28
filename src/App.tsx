import { Layout } from 'antd';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import './assets/style/style.css';
import { requireAuth } from './component/AuthRouter';
import NavBar from './component/Sider';
import BaoCao from './pages/BaoCao';
import CaiDat from './pages/CaiDat';
import CapSo from './pages/CapSo';
import AddCapSo from './pages/CapSo/AddCapSo';
import DetailCapSo from './pages/CapSo/DetailCapSo';
import Trangchu from './pages/Dashboard';
import DichVu from './pages/DichVu';
import AddDichVu from './pages/DichVu/Add';
import DetailDichVu from './pages/DichVu/Detail';
import UpdateDichVu from './pages/DichVu/Update';
import AuthEmail from './pages/EmailAuth.tsx';
import Login from './pages/Login';
import NhatKyNguoiDung from './pages/NhatKy';
import Profile from './pages/Profile';
import ResetPass from './pages/ResetPass';
import TaiKhoan from './pages/TaiKhoan';
import AddTaiKhoan from './pages/TaiKhoan/Add';
import UpdateTaiKhoan from './pages/TaiKhoan/Update';
import ThietBi from './pages/ThietBi';
import ThemThietBi from './pages/ThietBi/Add';
import ChiTiet from './pages/ThietBi/DetailThietBi';
import UpdateThietBi from './pages/ThietBi/Update';
import VaiTro from './pages/VaiTro';
import AddVaiTro from './pages/VaiTro/Add';
import UpdateVaiTro from './pages/VaiTro/Update';
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
                    <Route path="/quanlyvaitro/capnhatvaitro" element={<UpdateVaiTro />} />
                    <Route path="/quanlytaikhoan" element={<TaiKhoan />} />
                    <Route path="/quanlytaikhoan/themtaikhoan" element={<AddTaiKhoan />} />
                    <Route path="/quanlytaikhoan/capnhat" element={<UpdateTaiKhoan />} />
                    <Route path="/nhatkynguoidung" element={requireAuth() ? <NhatKyNguoiDung /> : <Navigate to="/" replace />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
