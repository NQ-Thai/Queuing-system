import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';
import { BsFillCircleFill } from 'react-icons/bs';

interface DataType {
    key: string;
    STT: string;
    trangThai: string;
}

const renderHoatDong = (trangThai: string) => {
    if (trangThai === 'Đã hoàn thành') {
        return (
            <span
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <BsFillCircleFill style={{ color: '#34CD26', marginRight: '5px' }} />
                {trangThai}
            </span>
        );
    } else if (trangThai === 'Đang thực hiện') {
        return (
            <span
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <BsFillCircleFill style={{ color: '#5490EB', marginRight: '5px' }} />
                {trangThai}
            </span>
        );
    } else if (trangThai === 'Vắng') {
        return (
            <span
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <BsFillCircleFill style={{ color: '#6C7585', marginRight: '5px' }} />
                {trangThai}
            </span>
        );
    }
};

const columns: ColumnsType<DataType> = [
    {
        title: 'Số thứ tự',
        dataIndex: 'STT',
        key: 'STT',
    },
    {
        title: 'Trạng thái',
        key: 'trangThai',
        dataIndex: 'trangThai',
        render: renderHoatDong,
    },
];

const data: DataType[] = [
    {
        key: '1',
        STT: '2010001',
        trangThai: 'Đã hoàn thành',
    },
    {
        key: '2',
        STT: '2010002',

        trangThai: 'Đang thực hiện',
    },
    {
        key: '3',
        STT: '2010003',
        trangThai: 'Vắng',
    },
    {
        key: '4',
        STT: '2010004',
        trangThai: 'Đã hoàn thành',
    },
];

const TableDetailDichVu: React.FC = () => (
    <Table
        className="custom-table"
        columns={columns}
        dataSource={data}
        style={{ width: '669px' }}
    />
);

export default TableDetailDichVu;
