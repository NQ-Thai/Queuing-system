import { Layout } from 'antd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './assets/style/style.css';
import NavBar from './component/Sider';
import BaoCao from './pages/BaoCao';
import CaiDat from './pages/CaiDat';
import CapSo from './pages/CapSo';
import AddCapSo from './pages/CapSo/AddCapSo';
import DetailCapSo from './pages/CapSo/DetailCapSo';
import Trangchu from './pages/Dashboard';
import DichVu from './pages/DichVu';
import AuthEmail from './pages/EmailAuth.tsx';
import Login from './pages/Login';
import Profile from './pages/Profile';
import ResetPass from './pages/ResetPass';
import ThietBi from './pages/ThietBi';
import ChiTiet from './pages/ThietBi/DetailThietBi';
import ThemThietBi from './pages/ThietBi/ThemThietBi';
import UpdateThietBi from './pages/ThietBi/Update';
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
                    <Route path="/chitietthietbi" element={<ChiTiet />} />
                    <Route path="/capnhatthietbi" element={<UpdateThietBi />} />
                    <Route path="/dichvu" element={<DichVu />} />
                    <Route path="/capso" element={<CapSo />} />
                    <Route path="/themcapso" element={<AddCapSo />} />
                    <Route path="/chitietcapso" element={<DetailCapSo />} />
                    <Route path="/baocao" element={<BaoCao />} />
                    <Route path="/caidat" element={<CaiDat />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
