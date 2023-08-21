import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';

interface DataType {
    key: string;
    tenDangNhap: string;
    thoiGianTacDong: string;
    iPThucHien: string;
    thaoTacThucHien: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Tên đăng nhập',
        dataIndex: 'tenDangNhap',
        key: 'tenDangNhap',
    },
    {
        title: 'Thời gian tác động',
        dataIndex: 'thoiGianTacDong',
        key: 'thoiGianTacDong',
    },
    {
        title: 'IP thực hiện',
        dataIndex: 'iPThucHien',
        key: 'iPThucHien',
    },
    {
        title: 'Thao tác thực hiện',
        dataIndex: 'thaoTacThucHien',
        key: 'thaoTacThucHien',
    },
];

const data: DataType[] = [
    {
        key: '1',
        tenDangNhap: 'tuyetnguyen@12',
        thoiGianTacDong: '01/12/2021 15:12:17',
        iPThucHien: '192.168.3.1',
        thaoTacThucHien: 'Cập nhật thông tin dịch vụ DV_01',
    },
    {
        key: '2',
        tenDangNhap: 'tuyetnguyen@12',
        thoiGianTacDong: '01/12/2021 15:12:17',
        iPThucHien: '192.168.3.1',
        thaoTacThucHien: 'Cập nhật thông tin dịch vụ DV_01',
    },
    {
        key: '3',
        tenDangNhap: 'tuyetnguyen@12',
        thoiGianTacDong: '01/12/2021 15:12:17',
        iPThucHien: '192.168.3.1',
        thaoTacThucHien: 'Cập nhật thông tin dịch vụ DV_01',
    },
    {
        key: '4',
        tenDangNhap: 'tuyetnguyen@12',
        thoiGianTacDong: '01/12/2021 15:12:17',
        iPThucHien: '192.168.3.1',
        thaoTacThucHien: 'Cập nhật thông tin dịch vụ DV_01',
    },
];

const TableNhatKy: React.FC = () => (
    <Table
        className="custom-table"
        columns={columns}
        dataSource={data}
        style={{ width: '1112px' }}
    />
);

export default TableNhatKy;
