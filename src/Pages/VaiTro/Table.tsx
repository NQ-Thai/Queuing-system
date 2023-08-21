import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';
import { Link } from 'react-router-dom';

interface DataType {
    key: string;
    tenVaiTro: string;
    soNguoiDung: string;
    moTa: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Tên vai trò',
        dataIndex: 'tenVaiTro',
        key: 'tenVaiTro',
    },
    {
        title: 'Số người dùng',
        dataIndex: 'soNguoiDung',
        key: 'soNguoiDung',
    },
    {
        title: 'Mô tả',
        dataIndex: 'moTa',
        key: 'moTa',
    },
    {
        title: ' ',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <Link to={'/quanlyvaitro/capnhatvaitro'}>
                    <u>Cập nhật</u>
                </Link>
            </Space>
        ),
    },
];

const data: DataType[] = [
    {
        key: '1',
        tenVaiTro: 'Kế toán',
        soNguoiDung: '6',
        moTa: 'Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu',
    },
    {
        key: '2',
        tenVaiTro: 'Bác sĩ',
        soNguoiDung: '6',
        moTa: 'Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu',
    },
    {
        key: '3',
        tenVaiTro: 'Lễ tân',
        soNguoiDung: '6',
        moTa: 'Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu',
    },
    {
        key: '4',
        tenVaiTro: 'Quản lý',
        soNguoiDung: '6',
        moTa: 'Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu',
    },
];

const TableVaiTro: React.FC = () => (
    <Table
        className="custom-table"
        columns={columns}
        dataSource={data}
        style={{ width: '1112px' }}
    />
);

export default TableVaiTro;
