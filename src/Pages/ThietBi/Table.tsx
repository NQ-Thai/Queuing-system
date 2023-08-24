import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useEffect, useRef, useState } from 'react';

import { BsFillCircleFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchData } from '../../lib/ThietBi/ThietBiReducer';

import { AppDispatch, RootState } from '../../lib/store';
import { setSelectedThietBiDetail, ThietBi } from '../../lib/ThietBi/ThietBiSlice';

const TableThietBi: React.FC<{ selectedTrangThaiKetNoi: string | null; selectedTrangThaiHoatDong: string | null; searchValue: string }> = ({
    selectedTrangThaiKetNoi,
    selectedTrangThaiHoatDong,
    searchValue,
}) => {
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

    const renderketNoi = (trangThaiKetNoi: string) => {
        if (trangThaiKetNoi === 'Kết nối') {
            return (
                <span
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <BsFillCircleFill style={{ color: '#34CD26', marginRight: '5px' }} />
                    {trangThaiKetNoi}
                </span>
            );
        } else if (trangThaiKetNoi === 'Mất kết nối') {
            return (
                <span
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <BsFillCircleFill style={{ color: '#EC3740', marginRight: '5px' }} />
                    {trangThaiKetNoi}
                </span>
            );
        }
    };

    const dispatch: AppDispatch = useDispatch();

    const thietbis = useSelector((state: RootState) => state.Thietbi.thietbi);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    const handleDetailClick = (record: ThietBi) => {
        dispatch(setSelectedThietBiDetail(record));
    };
    // Tạo hàm kiểm tra trạng thái kết nối
    const checkTrangThaiKetNoi = (trangThaiKetNoi: string, selectedTrangThaiKetNoi: string | null) => {
        return selectedTrangThaiKetNoi === null || selectedTrangThaiKetNoi === 'Tất cả' || trangThaiKetNoi === selectedTrangThaiKetNoi;
    };

    const checkTrangThaiHoatDong = (trangThaiHoatDong: string, selectedTrangThaiHoatDong: string | null) => {
        return selectedTrangThaiHoatDong === null || selectedTrangThaiHoatDong === 'Tất cả' || trangThaiHoatDong === selectedTrangThaiHoatDong;
    };

    const filteredThietBis = thietbis.filter(
        (thietbi) =>
            checkTrangThaiKetNoi(thietbi.TrangThaiKetNoi, selectedTrangThaiKetNoi) &&
            checkTrangThaiHoatDong(thietbi.TrangThaiHoatDong, selectedTrangThaiHoatDong) &&
            (searchValue === '' || thietbi.MaThietBi.includes(searchValue)),
    );

    const [expandedRows, setExpandedRows] = useState<string[]>([]);

    const toggleRowExpansion = (rowKey: string) => {
        if (expandedRows.includes(rowKey)) {
            setExpandedRows(expandedRows.filter((key) => key !== rowKey));
        } else {
            setExpandedRows([...expandedRows, rowKey]);
        }
    };

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

    const columns: ColumnsType<ThietBi> = [
        {
            title: 'Mã thiết bị',
            dataIndex: 'MaThietBi',
            key: 'MaThietBi',
        },
        {
            title: 'Tên thiết bị',
            dataIndex: 'TenThietBi',
            key: 'TenThietBi',
        },
        {
            title: 'Địa chỉ IP',
            dataIndex: 'DiaChiIP',
            key: 'DiaChiIP',
        },
        {
            title: 'Trạng thái hoạt động',
            key: 'TrangThaiHoatDong',
            dataIndex: 'TrangThaiHoatDong',
            render: renderHoatDong,
        },
        {
            title: 'Trạng thái Kết nối',
            key: 'TrangThaiKetNoi',
            dataIndex: 'TrangThaiKetNoi',
            render: renderketNoi,
        },
        {
            title: 'Dịch vụ sử dụng',
            dataIndex: 'DichVu',
            key: 'DichVu',
            width: '230px',
            render: (DichVu, record) => (
                <div className="service-column">
                    <div className="popover-wrapper">
                        {expandedRows.includes(record.key) && <div className="expanded-content show">{DichVu}</div>}
                        {!expandedRows.includes(record.key) && (
                            <div>
                                <div className="shortened-content">{DichVu.length > 23 ? `${DichVu.slice(0, 23)}...` : DichVu}</div>
                                {DichVu.length > 23 && (
                                    <a onClick={() => toggleRowExpansion(record.key)}>
                                        <u>Xem thêm</u>
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            ),
        },

        {
            title: ' ',
            key: 'detailAction',
            render: (_, record) => (
                <Space size="middle">
                    <Link to={`/chitietthietbi`}>
                        <u>Chi tiết</u>
                    </Link>
                </Space>
            ),
        },
        {
            title: ' ',
            key: 'updateAction',
            render: (_, record) => (
                <Space size="middle">
                    <Link to={'/capnhatthietbi'}>
                        <u>Cập nhật</u>
                    </Link>
                </Space>
            ),
        },
    ];

    return (
        <div className="table-wrapper" ref={tableWrapperRef}>
            <Table className="custom-table" columns={columns} dataSource={filteredThietBis} style={{ width: '1112px' }} />
        </div>
    );
};

export default TableThietBi;
