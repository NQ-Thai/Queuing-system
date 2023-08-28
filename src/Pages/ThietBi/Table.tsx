import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useEffect, useRef, useState } from 'react';

import { BsFillCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import { DocumentData, QuerySnapshot, onSnapshot } from 'firebase/firestore';
import { ThietBi } from '../../lib/Type/ThietBi';
import { thietbiCollection } from '../../lib/controller';

interface ThietBi1 {
    key?: string;
    id?: string;
    TenDangNhap?: string;
    MatKhau?: string;
    MaThietBi?: string;
    TenThietBi?: string;
    LoaiThietBi?: string;
    DiaChiIP?: string;
    TrangThaiHoatDong?: string;
    TrangThaiKetNoi?: string;
    DichVu?: string;
    isExpanded?: boolean;
}

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

    const [thietbis, setThietbi] = useState<ThietBi[]>([]);

    useEffect(
        () =>
            onSnapshot(thietbiCollection, (snapshot: QuerySnapshot<DocumentData>) => {
                setThietbi(
                    snapshot.docs.map((doc, index) => {
                        const data = doc.data();
                        return {
                            id: doc.id,
                            STT: `${index + 1}`,
                            ...data,
                        };
                    }),
                );
            }),
        [],
    );

    const [filteredData, setFilteredData] = useState<ThietBi[]>(thietbis);

    useEffect(() => {
        setFilteredData(thietbis);
    }, [thietbis]);

    const checkTrangThaiKetNoi = (trangThaiKetNoi: string | undefined, selectedTrangThaiKetNoi: string | null) => {
        return (
            trangThaiKetNoi === undefined ||
            selectedTrangThaiKetNoi === null ||
            selectedTrangThaiKetNoi === 'Tất cả' ||
            trangThaiKetNoi === selectedTrangThaiKetNoi
        );
    };

    const checkTrangThaiHoatDong = (trangThaiHoatDong: string | undefined, selectedTrangThaiHoatDong: string | null) => {
        return (
            trangThaiHoatDong === undefined ||
            selectedTrangThaiHoatDong === null ||
            selectedTrangThaiHoatDong === 'Tất cả' ||
            trangThaiHoatDong === selectedTrangThaiHoatDong
        );
    };

    const filteredThietBis = filteredData.filter(
        (thietbi) =>
            checkTrangThaiKetNoi(thietbi.TrangThaiKetNoi, selectedTrangThaiKetNoi) &&
            checkTrangThaiHoatDong(thietbi.TrangThaiHoatDong, selectedTrangThaiHoatDong) &&
            (searchValue === '' || (thietbi.MaThietBi && thietbi.MaThietBi.includes(searchValue))),
    );

    const [expandedRows, setExpandedRows] = useState<string[]>([]);

    const toggleRowExpansion = (rowId: string | undefined) => {
        if (rowId) {
            if (expandedRows.includes(rowId)) {
                setExpandedRows(expandedRows.filter((id) => id !== rowId));
            } else {
                setExpandedRows([...expandedRows, rowId]);
            }
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
                        {record.id !== undefined && expandedRows.includes(record.id) ? (
                            <div className="expanded-content show">{DichVu}</div>
                        ) : (
                            <div>
                                <div className="shortened-content">{DichVu && DichVu.length > 23 ? `${DichVu.slice(0, 23)}...` : DichVu}</div>
                                {DichVu && DichVu.length > 23 && (
                                    <a onClick={() => toggleRowExpansion(record.id)}>
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
                    <Link to={`/chitietthietbi/${record.id}`}>
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
                    <Link to={`/capnhatthietbi/${record.id}`}>
                        <u>Cập nhật</u>
                    </Link>
                </Space>
            ),
        },
    ];

    useEffect(() => {
        console.log(
            'DichVu:',
            filteredThietBis.map((tb) => tb.DichVu),
        );
        console.log(
            'Keys:',
            filteredThietBis.map((tb) => tb.key),
        );
    }, [filteredThietBis]);

    return (
        <div className="table-wrapper" ref={tableWrapperRef}>
            <Table className="custom-table" columns={columns} dataSource={filteredThietBis} style={{ width: '1112px' }} />
        </div>
    );
};
export default TableThietBi;
