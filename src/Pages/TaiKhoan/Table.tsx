import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';

import { BsFillCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

interface DataType {
    key: string;
    tenDangNhap: string;
    hoTen: string;
    SDT: string;
    email: string;
    vaiTro: string;
    trangThaiHoatDong: string;
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

const TableTaiKhoan: React.FC = () => {
    const columns: ColumnsType<DataType> = [
        {
            title: 'Tên đăng nhập',
            dataIndex: 'tenDangNhap',
            key: 'tenDangNhap',
        },
        {
            title: 'Họ tên',
            dataIndex: 'hoTen',
            key: 'hoTen',
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'SDT',
            key: 'SDT',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Vai trò',
            dataIndex: 'vaiTro',
            key: 'vaiTro',
        },
        {
            title: 'Trạng thái hoạt động',
            key: 'trangThaiHoatDong',
            dataIndex: 'trangThaiHoatDong',
            render: renderHoatDong,
        },
        {
            title: ' ',
            key: 'updateAction',
            render: (_, record) => (
                <Space size="middle">
                    <Link to={'/quanlytaikhoan/capnhat'}>
                        <u>Cập nhật</u>
                    </Link>
                </Space>
            ),
        },
    ];

    const data: DataType[] = [
        {
            key: '1',
            tenDangNhap: 'tuyetnguyen@12',
            hoTen: 'Nguyen Văn A',
            SDT: '0919256712',
            email: 'tuyetnguyen123@gmail.com',
            vaiTro: 'Kế toán',
            trangThaiHoatDong: 'Ngưng hoạt động',
        },
        {
            key: '2',
            tenDangNhap: 'tuyetnguyen@12',
            hoTen: 'Nguyen Văn B',
            SDT: '0919256712',
            email: 'tuyetnguyen123@gmail.com',
            vaiTro: 'Kế toán',
            trangThaiHoatDong: 'Ngưng hoạt động',
        },
        {
            key: '3',
            tenDangNhap: 'tuyetnguyen@12',
            hoTen: 'Nguyen Văn C',
            SDT: '0919256712',
            email: 'tuyetnguyen123@gmail.com',
            vaiTro: 'Kế toán',
            trangThaiHoatDong: 'Hoạt động',
        },
        {
            key: '4',
            tenDangNhap: 'tuyetnguyen@12',
            hoTen: 'Nguyen Văn D',
            SDT: '0919256712',
            email: 'tuyetnguyen123@gmail.com',
            vaiTro: 'Kế toán',
            trangThaiHoatDong: 'Hoạt động',
        },
    ];

    return (
        <div className="table-wrapper">
            <Table
                className="custom-table"
                columns={columns}
                dataSource={data}
                style={{ width: '1112px' }}
            />
        </div>
    );
};

export default TableTaiKhoan;
