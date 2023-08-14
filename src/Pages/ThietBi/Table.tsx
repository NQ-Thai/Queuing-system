import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';
import { BsFillCircleFill } from 'react-icons/bs';

interface DataType {
    key: string;
    thietBi: string;
    tenThietBi: string;
    diaChiIP: string;
    trangThaiHoatdong: string[];
    trangThaiKetNoi: string[];
    dichVuSuDung: string;
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
        title: 'Mã thiết bị',
        dataIndex: 'thietBi',
        key: 'thietBi',
    },
    {
        title: 'Tên thiết bị',
        dataIndex: 'tenThietBi',
        key: 'tenThietBi',
    },
    {
        title: 'Địa chỉ IP',
        dataIndex: 'diaChiIP',
        key: 'diaChiIP',
    },
    {
        title: 'Trạng thái hoạt động',
        key: 'trangThaiHoatdong',
        dataIndex: 'trangThaiHoatdong',
        render: renderHoatDong,
    },
    {
        title: 'Trạng thái Kết nối',
        key: 'trangThaiKetNoi',
        dataIndex: 'trangThaiKetNoi',
        render: renderKetNoi,
    },
    {
        title: 'Dịch vụ sử dụng',
        dataIndex: 'dichVuSuDung',
        key: 'dichVuSuDung',
        render: (dichVuSuDung) => (
            <div>
                <div>{dichVuSuDung}</div>
                {dichVuSuDung.length > 15 && (
                    <a>
                        <u>Xem thêm</u>
                    </a>
                )}
            </div>
        ),
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
        thietBi: 'KIO_1',
        tenThietBi: 'Kiosk',
        diaChiIP: '192.168.1.10',
        trangThaiHoatdong: ['Hoạt động'],
        trangThaiKetNoi: ['Kết nối'],
        dichVuSuDung: 'Khám tim mạch, khám mắt...',
    },
    {
        key: '2',
        thietBi: 'KIO_2',
        tenThietBi: 'Kiosk',
        diaChiIP: '192.168.1.10',
        trangThaiHoatdong: ['Hoạt động'],
        trangThaiKetNoi: ['Kết nối'],
        dichVuSuDung: 'Khám tim mạch, khám mắt...',
    },
    {
        key: '3',
        thietBi: 'KIO_3',
        tenThietBi: 'Kiosk',
        diaChiIP: '192.168.1.10',
        trangThaiHoatdong: ['Hoạt động'],
        trangThaiKetNoi: ['Kết nối'],
        dichVuSuDung: 'Khám tim mạch, khám mắt...',
    },
    {
        key: '4',
        thietBi: 'KIO_4',
        tenThietBi: 'Kiosk',
        diaChiIP: '192.168.1.10',
        trangThaiHoatdong: ['Hoạt động'],
        trangThaiKetNoi: ['Kết nối'],
        dichVuSuDung: 'Khám tim mạch, khám mắt...',
    },
];

const TableThietBi: React.FC = () => (
    <Table
        className="custom-table"
        columns={columns}
        dataSource={data}
        style={{ width: '1112px' }}
    />
);

export default TableThietBi;
