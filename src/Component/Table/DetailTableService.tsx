import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useEffect, useState } from 'react';
import { BsFillCircleFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../lib/ServiceTT/ServiceTT';
import { ServiceTT } from '../../lib/Type/ServiceTT';
import { AppDispatch, RootState } from '../../lib/store';

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

const TableDetailService: React.FC<{ fromDate: any; toDate: any; selectedTrangThai: string | null; searchValue: string }> = ({
    selectedTrangThai,
    searchValue,
    fromDate,
    toDate,
}) => {
    const columns: ColumnsType<ServiceTT> = [
        {
            title: 'Số thứ tự',
            dataIndex: 'STT',
            key: 'STT',
        },
        {
            title: 'Trạng thái',
            key: 'TrangThai',
            dataIndex: 'TrangThai',
            render: renderHoatDong,
        },
    ];

    const dispatch: AppDispatch = useDispatch();
    const servicetts = useSelector((state: RootState) => state.ServiceTT.servicett);
    const [filteredData, setFilteredData] = useState<ServiceTT[]>(servicetts);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    useEffect(() => {
        setFilteredData(servicetts);
    }, [servicetts]);

    const checkTrangThaiHoatDong = (TrangThai: string | undefined, selectedTrangThai: string | null) => {
        return TrangThai === undefined || selectedTrangThai === null || selectedTrangThai === 'Tất cả' || TrangThai === selectedTrangThai;
    };

    const filteredDevices = filteredData.filter((servicett) => {
        if (fromDate && toDate && servicett.Date) {
            const date = new Date(servicett.Date);

            const fromDateStart = new Date(fromDate);
            const toDateEnd = new Date(toDate);
            toDateEnd.setHours(23, 59, 59);

            return (
                date >= fromDateStart &&
                date <= toDateEnd &&
                checkTrangThaiHoatDong(servicett.TrangThai, selectedTrangThai) &&
                (searchValue === '' || (servicett.STT && servicett.STT.includes(searchValue)))
            );
        }

        return (
            checkTrangThaiHoatDong(servicett.TrangThai, selectedTrangThai) &&
            (searchValue === '' || (servicett.STT && servicett.STT.includes(searchValue)))
        );
    });

    return <Table className="custom-table" columns={columns} dataSource={filteredDevices} style={{ width: '669px' }} />;
};

export default TableDetailService;
