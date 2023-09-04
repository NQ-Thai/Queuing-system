import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchData } from '../../lib/Role/Role';
import { Role } from '../../lib/Type/Role';
import { AppDispatch, RootState } from '../../lib/store';

const TableRole: React.FC<{ searchValue: string }> = ({ searchValue }) => {
    const columns: ColumnsType<Role> = [
        {
            title: 'Tên vai trò',
            dataIndex: 'TenVaiTro',
            key: 'TenVaiTro',
        },
        {
            title: 'Số người dùng',
            dataIndex: 'SoNguoiDung',
            key: 'SoNguoiDung',
        },
        {
            title: 'Mô tả',
            dataIndex: 'MoTa',
            key: 'MoTa',
        },
        {
            title: ' ',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Link to={`/quanlyvaitro/capnhatvaitro/${record.id}`}>
                        <u>Cập nhật</u>
                    </Link>
                </Space>
            ),
        },
    ];

    const dispatch: AppDispatch = useDispatch();
    const roles = useSelector((state: RootState) => state.Role.roles);
    const [filteredData, setFilteredData] = useState<Role[]>(roles);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    useEffect(() => {
        setFilteredData(roles);
    }, [roles]);

    const filteredRoles = filteredData.filter((role) => searchValue === '' || (role.TenVaiTro && role.TenVaiTro.includes(searchValue)));

    return (
        <div>
            <Table className="custom-table" columns={columns} dataSource={filteredRoles} style={{ width: '1112px' }} />
        </div>
    );
};

export default TableRole;
