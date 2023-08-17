// import { Table } from 'antd';
// import type { ColumnsType, TableProps } from 'antd/es/table';
// import React from 'react';

// interface DataType {
//     key: React.Key;
//     name: string;
//     age: number;
//     address: string;
// }

// const columns: ColumnsType<DataType> = [
//     {
//         title: 'Name',
//         dataIndex: 'name',
//         sorter: (a, b) => a.age - b.age,
//     },
//     {
//         title: 'Age',
//         dataIndex: 'age',
//         defaultSortOrder: 'descend',
//         sorter: (a, b) => a.age - b.age,
//     },
//     {
//         title: 'Address',
//         dataIndex: 'address',
//         sorter: (a, b) => a.age - b.age,
//     },
// ];

// const data = [
//     {
//         key: '1',
//         name: 'John Brown',
//         age: 32,
//         address: 'New York No. 1 Lake Park',
//     },
//     {
//         key: '2',
//         name: 'Jim Green',
//         age: 42,
//         address: 'London No. 1 Lake Park',
//     },
//     {
//         key: '3',
//         name: 'Joe Black',
//         age: 32,
//         address: 'Sydney No. 1 Lake Park',
//     },
//     {
//         key: '4',
//         name: 'Jim Red',
//         age: 32,
//         address: 'London No. 2 Lake Park',
//     },
// ];

// const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
//     console.log('params', pagination, filters, sorter, extra);
// };

// const TableBaoCao: React.FC = () => (
//     <Table columns={columns} dataSource={data} onChange={onChange} />
// );

// export default TableBaoCao;

import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import React from 'react';
import { BsFillCircleFill } from 'react-icons/bs';

interface DataType {
    key: string;
    STT: number;
    tenDichVu: string;
    thoiGianCap: string;
    tinhTrang: string;
    nguonCap: string;
}

const renderHoatDong = (trangThaiHoatdong: string) => {
    if (trangThaiHoatdong === 'Đang chờ') {
        return (
            <span
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <BsFillCircleFill style={{ color: '#4277FF', marginRight: '5px' }} />
                {trangThaiHoatdong}
            </span>
        );
    } else if (trangThaiHoatdong === 'Đã sử dụng') {
        return (
            <span
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <BsFillCircleFill style={{ color: '#7E7D88', marginRight: '5px' }} />
                {trangThaiHoatdong}
            </span>
        );
    } else if (trangThaiHoatdong === 'Bỏ qua') {
        return (
            <span
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <BsFillCircleFill style={{ color: '#E73F3F', marginRight: '5px' }} />
                {trangThaiHoatdong}
            </span>
        );
    }
};

const columns: ColumnsType<DataType> = [
    {
        title: 'Số thứ tự',
        dataIndex: 'STT',
        key: 'STT',
        sorter: (a, b) => a.STT - b.STT,
    },
    {
        title: 'Tên dịch vụ',
        dataIndex: 'tenDichVu',
        key: 'tenDichVu',
        sorter: (a, b) => a.STT - b.STT,
    },
    {
        title: 'Thời gian cấp',
        dataIndex: 'thoiGianCap',
        key: 'thoiGianCap',
        sorter: (a, b) => a.STT - b.STT,
    },
    {
        title: 'Tình trạng',
        key: 'tinhTrang',
        dataIndex: 'tinhTrang',
        render: renderHoatDong,
        sorter: (a, b) => a.STT - b.STT,
    },
    {
        title: 'Nguồn cấp',
        dataIndex: 'nguonCap',
        key: 'nguonCap',
        sorter: (a, b) => a.STT - b.STT,
    },
];

const data: DataType[] = [
    {
        key: '1',
        STT: 2010001,
        tenDichVu: 'Khám tim mạch',
        thoiGianCap: '07:20 - 07/10/2021',
        tinhTrang: 'Đang chờ',
        nguonCap: 'Kiosk',
    },
    {
        key: '1',
        STT: 2010002,
        tenDichVu: 'Răng hàm mặt',
        thoiGianCap: '07:20 - 07/10/2021',
        tinhTrang: 'Đã sử dụng',
        nguonCap: 'Hệ thống',
    },
    {
        key: '1',
        STT: 2010003,
        tenDichVu: 'Khám sản - phụ khoa',
        thoiGianCap: '07:20 - 07/10/2021',
        tinhTrang: 'Bỏ qua',
        nguonCap: 'Kiosk',
    },
];

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};

const TableBaoCao: React.FC = () => (
    <Table
        className="custom-table"
        columns={columns}
        dataSource={data}
        style={{ width: '1112px' }}
    />
);

export default TableBaoCao;
