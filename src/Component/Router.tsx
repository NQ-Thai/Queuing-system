import { Layout } from 'antd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Setting from '../pages/CaiDat/Setting';
import DashBoard from '../pages/Dashboard/DashBoard';
import DeviceHeader from '../pages/Device/DeviceHeader';
import AuthEmail from '../pages/EmailAuth.tsx/AuthEmail';
import DetailContent from '../pages/LevelN/DetailContent';
import Login from '../pages/Login/Login';
import Profile from '../pages/Profile/Profile';
import ResetPass from '../pages/ResetPass/ResetPass';
import './App.css';
import AccountHeader from './Header/AccountHeader';
import AddAccountHeader from './Header/AddAccountHeader';
import AddDeviceHeader from './Header/AddDeviceHeader';
import AddRoleHeader from './Header/AddRoleHeader';
import AddServiceHeader from './Header/AddServiceHeader';
import AddlevelNHeader from './Header/AddlevelNHeader';
import DetailLevelHeader from './Header/DetailLevelHeader';
import DetailServiceHeader from './Header/DetailServiceHeader';
import DiaryHeader from './Header/DiaryHeader';
import LevelNHeader from './Header/LevelNHeader';
import ReportHeader from './Header/ReportHeader';
import RoleHeader from './Header/RoleHeader';
import ServiceHeader from './Header/ServiceHeader';
import UpdateAccountHeader from './Header/UpdateAccountHeader';
import UpdateDeviceHeader from './Header/UpdateDeviceHeader';
import UpdateRoleHeader from './Header/UpdateRoleHeader';
import UpdateServiceHeader from './Header/UpdateServiceHeader';
import NavBar from './Sider';
import './assets/style/style.css';
function Routess() {
    return (
        <BrowserRouter>
            <Layout>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/authemail" element={<AuthEmail />} />
                    <Route path="/resetpass" element={<ResetPass />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/dashboard" element={<DashBoard />} />
                    <Route path="/thietbi" element={<DeviceHeader />} />
                    <Route path="/themthietbi" element={<AddDeviceHeader />} />
                    <Route path="/chitietthietbi/:id" Component={DetailContent} />
                    <Route path="/capnhatthietbi/:id" Component={UpdateDeviceHeader} />
                    <Route path="/dichvu" element={<ServiceHeader />} />
                    <Route path="/themdichvu" element={<AddServiceHeader />} />
                    <Route path="/capnhatdichvu/:id" Component={UpdateServiceHeader} />
                    <Route path="/chitietdichvu/:id" Component={DetailServiceHeader} />
                    <Route path="/capso" element={<LevelNHeader />} />
                    <Route path="/themcapso" element={<AddlevelNHeader />} />
                    <Route path="/chitietcapso/:id" Component={DetailLevelHeader} />
                    <Route path="/baocao" element={<ReportHeader />} />
                    <Route path="/caidat" element={<Setting />} />
                    <Route path="/quanlyvaitro" element={<RoleHeader />} />
                    <Route path="/quanlyvaitro/themvaitro" element={<AddRoleHeader />} />
                    <Route path="/quanlyvaitro/capnhatvaitro/:id" element={<UpdateRoleHeader />} />
                    <Route path="/quanlytaikhoan" element={<AccountHeader />} />
                    <Route path="/quanlytaikhoan/themtaikhoan" element={<AddAccountHeader />} />
                    <Route path="/quanlytaikhoan/capnhat/:id" element={<UpdateAccountHeader />} />
                    <Route path="/nhatkynguoidung" element={<DiaryHeader />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default Routess;
