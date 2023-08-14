import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';
import { BsFillCircleFill } from 'react-icons/bs';

interface DataType {
    key: string;
    madichVu: string;
    tendichVu: string;
    moTa: string;
    trangThaiHoatdong: string[];
}

const renderKetNoi = (trangThaiKetNoi: string) => {
    const iconColor = trangThaiKetNoi === 'Mất kết nối' ? '#FD5959' : '#03AC00';

    return (
        <span
            style={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <BsFillCircleFill style={{ color: iconColor, marginRight: '5px' }} />
            {trangThaiKetNoi}
        </span>
    );
};

const renderHoatDong = (trangThaiHoatdong: string) => {
    const iconColor = trangThaiHoatdong === 'Ngưng hoạt động' ? '#FD5959' : '#03AC00';

    return (
        <span
            style={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <BsFillCircleFill style={{ color: iconColor, marginRight: '5px' }} />
            {trangThaiHoatdong}
        </span>
    );
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
                <a>
                    <u>Chi tiết</u>
                </a>
            </Space>
        ),
    },
    {
        title: ' ',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>
                    <u>Cập nhật</u>
                </a>
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
        trangThaiHoatdong: ['Hoạt động'],
    },
    {
        key: '2',
        madichVu: 'KIO_1',
        tendichVu: 'Kiosk',
        moTa: 'Hoạt động',
        trangThaiHoatdong: ['Hoạt động'],
    },
    {
        key: '3',
        madichVu: 'KIO_1',
        tendichVu: 'Kiosk',
        moTa: 'Hoạt động',
        trangThaiHoatdong: ['Hoạt động'],
    },
    {
        key: '4',
        madichVu: 'KIO_1',
        tendichVu: 'Kiosk',
        moTa: 'Hoạt động',
        trangThaiHoatdong: ['Hoạt động'],
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
