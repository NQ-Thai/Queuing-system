import { Space, Table } from 'antd';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import React, { useEffect, useState } from 'react';
import { BsFillCircleFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchData } from '../../lib/Service/Service';
import { Service } from '../../lib/Type/Service';
import { AppDispatch, RootState } from '../../lib/store';

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

const TableService: React.FC<{ fromDate: any; toDate: any; selectedTrangThaiHoatDong: string | null; searchValue: string }> = ({
    selectedTrangThaiHoatDong,
    searchValue,
    fromDate,
    toDate,
}) => {
    const columns: ColumnsType<Service> = [
        {
            title: 'Mã dịch vụ',
            dataIndex: 'MaDichVu',
            key: 'MaDichVu',
        },
        {
            title: 'Tên dịch vụ',
            dataIndex: 'TenDichVu',
            key: 'TenDichVu',
        },
        {
            title: 'Mô tả',
            dataIndex: 'MoTa',
            key: 'MoTa',
        },
        {
            title: 'Trạng thái hoạt động',
            key: 'TrangThaiHoatDong',
            dataIndex: 'TrangThaiHoatDong',
            render: renderHoatDong,
        },
        {
            title: ' ',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Link to={`/chitietdichvu/${record.id}`}>
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
                    <Link to={`/capnhatdichvu/${record.id}`}>
                        <u>Cập nhật</u>
                    </Link>
                </Space>
            ),
        },
    ];

    const paginationConfig: TablePaginationConfig = {
        pageSize: 6,
        pageSizeOptions: ['6', '12', '18', '24'],
    };

    const dispatch: AppDispatch = useDispatch();
    const services = useSelector((state: RootState) => state.Service.service);
    const [filteredData, setFilteredData] = useState<Service[]>(services);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    useEffect(() => {
        setFilteredData(services);
    }, [services]);

    const checkTrangThaiHoatDong = (trangThaiHoatDong: string | undefined, selectedTrangThaiHoatDong: string | null) => {
        return (
            trangThaiHoatDong === undefined ||
            selectedTrangThaiHoatDong === null ||
            selectedTrangThaiHoatDong === 'Tất cả' ||
            trangThaiHoatDong === selectedTrangThaiHoatDong
        );
    };

    const filteredServices = filteredData.filter((service) => {
        if (fromDate && toDate && service.Date) {
            const date = new Date(service.Date);

            const fromDateStart = new Date(fromDate);
            const toDateEnd = new Date(toDate);
            toDateEnd.setHours(23, 59, 59);

            return (
                date >= fromDateStart &&
                date <= toDateEnd &&
                checkTrangThaiHoatDong(service.TrangThaiHoatDong, selectedTrangThaiHoatDong) &&
                (searchValue === '' || (service.MaDichVu && service.MaDichVu.includes(searchValue)))
            );
        }

        return (
            checkTrangThaiHoatDong(service.TrangThaiHoatDong, selectedTrangThaiHoatDong) &&
            (searchValue === '' || (service.MaDichVu && service.MaDichVu.includes(searchValue)))
        );
    });

    return (
        <Table className="custom-table" pagination={paginationConfig} columns={columns} dataSource={filteredServices} style={{ width: '1112px' }} />
    );
};
export default TableService;
