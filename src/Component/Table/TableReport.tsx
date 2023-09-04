import { Table } from 'antd';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import React, { useEffect, useState } from 'react';
import { BsFillCircleFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../lib/LevelN/LevelN';
import { CapSo } from '../../lib/Type/LevelN';
import { AppDispatch, RootState } from '../../lib/store';

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

const TableReport: React.FC<{ fromDate: any; toDate: any }> = ({ fromDate, toDate }) => {
    const columns: ColumnsType<CapSo> = [
        {
            title: 'Số thứ tự',
            dataIndex: 'STTBaoCao',
            key: 'STTBaoCao',
            sorter: (a, b) => -b,
        },
        {
            title: 'Tên dịch vụ',
            dataIndex: 'TenDichVu',
            key: 'TenDichVu',
            sorter: (a, b) => -b,
        },
        {
            title: 'Thời gian cấp',
            dataIndex: 'ThoiGianCap',
            key: 'ThoiGianCap',
            sorter: (a, b) => -b,
        },
        {
            title: 'Tình trạng',
            key: 'TrangThai',
            dataIndex: 'TrangThai',
            render: renderHoatDong,
            sorter: (a, b) => -b,
        },
        {
            title: 'Nguồn cấp',
            dataIndex: 'NguonCap',
            key: 'NguonCap',
            sorter: (a, b) => -b,
        },
    ];

    const [countBoQua, setCountBoQua] = useState<number>(0);
    const paginationConfig: TablePaginationConfig = {
        pageSize: 6,
        pageSizeOptions: ['6', '12', '18', '24'],
    };

    const dispatch: AppDispatch = useDispatch();
    const reports = useSelector((state: RootState) => state.CapSo.levelN);
    const [filteredData, setFilteredData] = useState<CapSo[]>(reports);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    useEffect(() => {
        setFilteredData(reports);

        const boQuaCount = filteredData.filter((report) => report.TrangThai === 'Bỏ qua').length;
        setCountBoQua(boQuaCount);
    }, [reports]);

    const convertToYYYYMMDD = (dateString: string) => {
        if (typeof dateString === 'string') {
            const parts = dateString.split(' ');
            if (parts.length === 2) {
                const dateParts = parts[1].split('/');
                if (dateParts.length === 3) {
                    const [day, month, year] = dateParts;
                    return `${year}/${month}/${day} ${parts[0]}`;
                }
            }
        }
        return '';
    };

    const filteredByDate = filteredData.filter((report) => {
        if (fromDate && toDate && report.ThoiGianCap) {
            const convertedDate = convertToYYYYMMDD(report.ThoiGianCap);
            if (convertedDate) {
                const fromDateStart = new Date(fromDate);
                const toDateEnd = new Date(toDate);

                const date = new Date(convertedDate);

                fromDateStart.setHours(0, 0, 0);
                toDateEnd.setHours(23, 59, 59);

                return date >= fromDateStart && date <= toDateEnd;
            }
        }

        return true;
    });

    return (
        <div className="table-wrapper">
            <Table className="custom-table" pagination={paginationConfig} columns={columns} dataSource={filteredByDate} style={{ width: '1112px' }} />
        </div>
    );
};

export default TableReport;
