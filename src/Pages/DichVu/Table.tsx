import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';
import { BsFillCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

interface DataType {
    key: string;
    madichVu: string;
    tendichVu: string;
    moTa: string;
    trangThaiHoatdong: string;
}

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

const columns: ColumnsType<DataType> = [
    {
        title: 'Mã dịch vụ',
        dataIndex: 'madichVu',
        key: 'madichVu',
    },
    {
        title: 'Tên dịch vụ',
        dataIndex: 'tendichVu',
        key: 'tendichVu',
    },
    {
        title: 'Mô tả',
        dataIndex: 'moTa',
        key: 'moTa',
    },
    {
        title: 'Trạng thái hoạt động',
        key: 'trangThaiHoatdong',
        dataIndex: 'trangThaiHoatdong',
        render: renderHoatDong,
    },
    {
        title: ' ',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <Link to={'/chitietdichvu'}>
                    <u>Chi tiết</u>
                </Link>
            </Space>
        ),
    },
    {
        title: ' ',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <Link to={'/capnhatdichvu'}>
                    <u>Cập nhật</u>
                </Link>
            </Space>
        ),
    },
];

const data: DataType[] = [
    {
        key: '1',
        madichVu: 'KIO_1',
        tendichVu: 'Kiosk',
        moTa: 'Mô tả dịch vụ 1',
        trangThaiHoatdong: 'Hoạt động',
    },
    {
        key: '2',
        madichVu: 'KIO_1',
        tendichVu: 'Kiosk',
        moTa: 'Hoạt động',
        trangThaiHoatdong: 'Hoạt động',
    },
    {
        key: '3',
        madichVu: 'KIO_1',
        tendichVu: 'Kiosk',
        moTa: 'Hoạt động',
        trangThaiHoatdong: 'Ngưng hoạt động',
    },
    {
        key: '4',
        madichVu: 'KIO_1',
        tendichVu: 'Kiosk',
        moTa: 'Hoạt động',
        trangThaiHoatdong: 'Hoạt động',
    },
];

const TableDichVu: React.FC = () => (
    <Table
        className="custom-table"
        columns={columns}
        dataSource={data}
        style={{ width: '1112px' }}
    />
);

export default TableDichVu;
