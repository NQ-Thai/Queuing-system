import { Table } from 'antd';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../lib/Diary/Diary';
import { Diary } from '../../lib/Type/Diary';
import { AppDispatch, RootState } from '../../lib/store';

const columns: ColumnsType<Diary> = [
    {
        title: 'Tên đăng nhập',
        dataIndex: 'TenDangNhap',
        key: 'TenDangNhap',
    },
    {
        title: 'Thời gian tác động',
        dataIndex: 'ThoiGian',
        key: 'ThoiGian',
    },
    {
        title: 'IP thực hiện',
        dataIndex: 'IPThucHien',
        key: 'IPThucHien',
    },
    {
        title: 'Thao tác thực hiện',
        dataIndex: 'ThaoTac',
        key: 'ThaoTac',
    },
];

const paginationConfig: TablePaginationConfig = {
    pageSize: 6,
    pageSizeOptions: ['6', '12', '18', '24'],
};

const TableDiary: React.FC<{ fromDate: any; toDate: any; searchValue: string }> = ({ searchValue, fromDate, toDate }) => {
    const dispatch: AppDispatch = useDispatch();
    const diarys = useSelector((state: RootState) => state.Diary.diarys);
    const [filteredData, setFilteredData] = useState<Diary[]>(diarys);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    useEffect(() => {
        setFilteredData(diarys);
    }, [diarys]);

    const convertToYYYYMMDD = (dateString: string) => {
        if (typeof dateString === 'string') {
            const parts = dateString.split(' '); // Tách ngày và thời gian
            if (parts.length === 2) {
                const dateParts = parts[0].split('/'); // Tách ngày, tháng, năm
                if (dateParts.length === 3) {
                    const [day, month, year] = dateParts;
                    return `${year}/${month}/${day} ${parts[1]}`;
                }
            }
        }
        // Xử lý trường hợp không thành công hoặc giá trị không phải là chuỗi
        return '';
    };

    const filteredByDate = filteredData.filter((diary) => {
        if (fromDate && toDate && diary.ThoiGian) {
            const convertedDate = convertToYYYYMMDD(diary.ThoiGian);
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

    const filteredDiarys = filteredByDate.filter((diary) => searchValue === '' || (diary.TenDangNhap && diary.TenDangNhap.includes(searchValue)));

    return <Table className="custom-table" pagination={paginationConfig} columns={columns} dataSource={filteredDiarys} style={{ width: '1112px' }} />;
};

export default TableDiary;
