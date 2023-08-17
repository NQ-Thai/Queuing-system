import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useEffect, useRef, useState } from 'react';

import { BsFillCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

interface DataType {
    key: string;
    STT: string;
    tenKhachHang: string;
    tenDichVu: string;
    thoiGianCap: string;
    HanSuDung: string;
    trangThai: string;
    nguonCap: string;
}

const renderTrangThai = (trangThai: string) => {
    if (trangThai === 'Đang chờ') {
        return (
            <span
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <BsFillCircleFill style={{ color: '#4277FF', marginRight: '5px' }} />
                {trangThai}
            </span>
        );
    } else if (trangThai === 'Đã sử dụng') {
        return (
            <span
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <BsFillCircleFill style={{ color: '#7E7D88', marginRight: '5px' }} />
                {trangThai}
            </span>
        );
    } else if (trangThai === 'Bỏ qua') {
        return (
            <span
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <BsFillCircleFill style={{ color: '#E73F3F', marginRight: '5px' }} />
                {trangThai}
            </span>
        );
    }
};

const TableCapSo: React.FC = () => {
    const [expandedRows, setExpandedRows] = useState<string[]>([]);

    const tableWrapperRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: { target: any }) => {
            const popoverWrapper = document.querySelector('.popover-wrapper');
            const target = event.target;

            if (popoverWrapper && !popoverWrapper.contains(target)) {
                setExpandedRows([]);
            }
        };

        if (tableWrapperRef.current) {
            tableWrapperRef.current.addEventListener('click', handleClickOutside);
        }

        return () => {
            if (tableWrapperRef.current) {
                tableWrapperRef.current.removeEventListener('click', handleClickOutside);
            }
        };
    }, []);

    const columns: ColumnsType<DataType> = [
        {
            title: 'STT',
            dataIndex: 'STT',
            key: 'STT',
        },
        {
            title: 'Tên khách hàng',
            dataIndex: 'tenKhachHang',
            key: 'tenKhachHang',
        },
        {
            title: 'Tên dịch vụ',
            dataIndex: 'tenDichVu',
            key: 'tenDichVu',
        },
        {
            title: 'Thời gian cấp',
            key: 'thoiGianCap',
            dataIndex: 'thoiGianCap',
        },
        {
            title: 'Hạn sử dụng',
            key: 'HanSuDung',
            dataIndex: 'HanSuDung',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'trangThai',
            key: 'trangThai',
            render: renderTrangThai,
        },

        {
            title: 'Nguồn cấp',
            dataIndex: 'nguonCap',
            key: 'nguonCap',
        },
        {
            title: ' ',
            key: 'updateAction',
            render: (_, record) => (
                <Space size="middle">
                    <Link to={'/chitietcapso'}>
                        <u>Chi tiết</u>
                    </Link>
                </Space>
            ),
        },
    ];

    const data: DataType[] = [
        {
            key: '1',
            STT: '2010001',
            tenKhachHang: 'Lê Huỳnh Ái Vân',
            tenDichVu: 'Khám tim mạch',
            thoiGianCap: '14:35 - 07/11/2021',
            HanSuDung: '14:35 - 12/11/2021',
            trangThai: 'Đang chờ',
            nguonCap: 'Kiosk',
        },
        {
            key: '2',
            STT: '2010002',
            tenKhachHang: 'Huỳnh Ái Vân',
            tenDichVu: 'Khám sản - Phụ Khoa',
            thoiGianCap: '14:35 - 07/11/2021',
            HanSuDung: '14:35 - 12/11/2021',
            trangThai: 'Đã sử dụng',
            nguonCap: 'Kiosk',
        },
        {
            key: '3',
            STT: '2010003',
            tenKhachHang: 'Lê Ái Vân',
            tenDichVu: 'Khám răng hàm mặt',
            thoiGianCap: '14:35 - 07/11/2021',
            HanSuDung: '14:35 - 12/11/2021',
            trangThai: 'Bỏ qua',
            nguonCap: 'Hệ thống',
        },
    ];

    return (
        <div className="table-wrapper" ref={tableWrapperRef}>
            <Table
                className="custom-table"
                columns={columns}
                dataSource={data}
                style={{ width: '1112px' }}
            />
        </div>
    );
};

export default TableCapSo;
