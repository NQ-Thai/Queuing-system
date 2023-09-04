import { Space, Table } from 'antd';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import React, { useEffect, useState } from 'react';

import { BsFillCircleFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchData } from '../../lib/LevelN/LevelN';
import { CapSo } from '../../lib/Type/LevelN';
import { AppDispatch, RootState } from '../../lib/store';

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

const TableLevelN: React.FC<{
    fromDate: any;
    toDate: any;
    selectedNguonCap: string | null;
    selectedTinhTrang: string | null;
    selectedTrangThaiDichVu: string | null;
    searchValue: string;
}> = ({ selectedTinhTrang, selectedNguonCap, selectedTrangThaiDichVu, searchValue, fromDate, toDate }) => {
    const columns: ColumnsType<CapSo> = [
        {
            title: 'STT',
            dataIndex: 'key',
            key: 'STT',
            render: (text, record, index) => index + 1,
        },
        {
            title: 'Tên khách hàng',
            dataIndex: 'TenKhachHang',
            key: 'TenKhachHang',
        },
        {
            title: 'Tên dịch vụ',
            dataIndex: 'TenDichVu',
            key: 'TenDichVu',
        },
        {
            title: 'Thời gian cấp',
            key: 'ThoiGianCap',
            dataIndex: 'ThoiGianCap',
        },
        {
            title: 'Hạn sử dụng',
            key: 'HanSuDung',
            dataIndex: 'HanSuDung',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'TrangThai',
            key: 'TrangThai',
            render: renderTrangThai,
        },

        {
            title: 'Nguồn cấp',
            dataIndex: 'NguonCap',
            key: 'NguonCap',
        },
        {
            title: ' ',
            key: 'updateAction',
            render: (_, record) => (
                <Space size="middle">
                    <Link to={`/chitietcapso/${record.id}`}>
                        <u>Chi tiết</u>
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
    const levelN = useSelector((state: RootState) => state.CapSo.levelN);
    const [filteredData, setFilteredData] = useState<CapSo[]>(levelN);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    useEffect(() => {
        setFilteredData(levelN);
    }, [levelN]);
    const checkTrangThai = (TrangThai: string | undefined, selectedTinhTrang: string | null) => {
        return TrangThai === undefined || selectedTinhTrang === null || selectedTinhTrang === 'Tất cả' || TrangThai === selectedTinhTrang;
    };

    const checkTrangThaiDichVu = (trangThaiDichVu: string | undefined, selectedTrangThaiDichVu: string | null) => {
        return (
            trangThaiDichVu === undefined ||
            selectedTrangThaiDichVu === null ||
            selectedTrangThaiDichVu === 'Tất cả' ||
            trangThaiDichVu === selectedTrangThaiDichVu
        );
    };

    const checkNguonCap = (NguonCap: string | undefined, selectedNguonCap: string | null) => {
        return NguonCap === undefined || selectedNguonCap === null || selectedNguonCap === 'Tất cả' || NguonCap === selectedNguonCap;
    };

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

    const filteredByDate = filteredData.filter((levelN) => {
        if (fromDate && toDate && levelN.ThoiGianCap) {
            const convertedDate = convertToYYYYMMDD(levelN.ThoiGianCap);
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

    const filteredLevelNs = filteredByDate.filter(
        (capso) =>
            checkTrangThai(capso.TrangThai, selectedTinhTrang) &&
            checkTrangThaiDichVu(capso.TenDichVu, selectedTrangThaiDichVu) &&
            checkNguonCap(capso.NguonCap, selectedNguonCap) &&
            (searchValue === '' || (capso.TenDichVu && capso.TenDichVu.includes(searchValue))),
    );

    return (
        <div className="table-wrapper">
            <Table
                className="custom-table"
                pagination={paginationConfig}
                columns={columns}
                dataSource={filteredLevelNs}
                style={{ width: '1112px' }}
            />
        </div>
    );
};

export default TableLevelN;
