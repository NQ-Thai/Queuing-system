import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useEffect, useState } from 'react';

import { BsFillCircleFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchData } from '../../lib/User/UserReducer';

import { AppDispatch, RootState } from '../../lib/store';
import { User } from '../../lib/Type/User';

const renderHoatDong = (trangThaiHoatdong: string) => {
    if (trangThaiHoatdong === 'Hoạt động') {
        return (
            <span
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <BsFillCircleFill style={{ color: '#34CD26', marginRight: '5px' }} />
                {trangThaiHoatdong}
            </span>
        );
    } else if (trangThaiHoatdong === 'Ngưng hoạt động') {
        return (
            <span
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <BsFillCircleFill style={{ color: '#EC3740', marginRight: '5px' }} />
                {trangThaiHoatdong}
            </span>
        );
    }
};

const TableAccount: React.FC<{ selectedVaiTro: string | null; searchValue: string }> = ({ selectedVaiTro, searchValue }) => {
    const columns: ColumnsType<User> = [
        {
            title: 'Tên đăng nhập',
            dataIndex: 'TenDangNhap',
            key: 'TenDangNhap',
        },
        {
            title: 'Họ tên',
            dataIndex: 'TenNguoiDung',
            key: 'TenNguoiDung',
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'SDT',
            key: 'SDT',
        },
        {
            title: 'Email',
            dataIndex: 'Email',
            key: 'Email',
        },
        {
            title: 'Vai trò',
            dataIndex: 'VaiTro',
            key: 'VaiTro',
        },
        {
            title: 'Trạng thái hoạt động',
            key: 'TrangThaiHoatDong',
            dataIndex: 'TrangThaiHoatDong',
            render: renderHoatDong,
        },
        {
            title: ' ',
            key: 'updateAction',
            render: (_, record) => (
                <Space size="middle">
                    <Link to={`/quanlytaikhoan/capnhat/${record.id}`}>
                        <u>Cập nhật</u>
                    </Link>
                </Space>
            ),
        },
    ];

    const dispatch: AppDispatch = useDispatch();
    const accounts = useSelector((state: RootState) => state.User.user);
    const [filteredData, setFilteredData] = useState<User[]>(accounts);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    useEffect(() => {
        setFilteredData(accounts);
    }, [accounts]);

    const checkVaiTro = (Vaitro: string | undefined, selectedVaiTro: string | null) => {
        return Vaitro === undefined || selectedVaiTro === null || selectedVaiTro === 'Tất cả' || Vaitro === selectedVaiTro;
    };

    const filteredServices = filteredData.filter(
        (account) =>
            checkVaiTro(account.VaiTro, selectedVaiTro) && (searchValue === '' || (account.TenDangNhap && account.TenDangNhap.includes(searchValue))),
    );

    return (
        <div className="table-wrapper">
            <Table className="custom-table" columns={columns} dataSource={filteredServices} style={{ width: '1112px' }} />
        </div>
    );
};

export default TableAccount;
