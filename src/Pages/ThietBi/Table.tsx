import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useEffect, useRef, useState } from 'react';

import { BsFillCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

interface DataType {
    key: string;
    thietBi: string;
    tenThietBi: string;
    diaChiIP: string;
    trangThaiHoatdong: string;
    trangThaiKetNoi: string;
    dichVuSuDung: string;
}

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

const TableThietBi: React.FC = () => {
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

    const columns: ColumnsType<DataType> = [
        {
            title: 'Mã thiết bị',
            dataIndex: 'thietBi',
            key: 'thietBi',
        },
        {
            title: 'Tên thiết bị',
            dataIndex: 'tenThietBi',
            key: 'tenThietBi',
        },
        {
            title: 'Địa chỉ IP',
            dataIndex: 'diaChiIP',
            key: 'diaChiIP',
        },
        {
            title: 'Trạng thái hoạt động',
            key: 'trangThaiHoatdong',
            dataIndex: 'trangThaiHoatdong',
            render: renderHoatDong,
        },
        {
            title: 'Trạng thái Kết nối',
            key: 'trangThaiKetNoi',
            dataIndex: 'trangThaiKetNoi',
            render: renderketNoi,
        },
        {
            title: 'Dịch vụ sử dụng',
            dataIndex: 'dichVuSuDung',
            key: 'dichVuSuDung',
            width: '230px',
            render: (dichVuSuDung, record) => (
                <div className="service-column">
                    <div className="popover-wrapper">
                        {expandedRows.includes(record.key) && (
                            <div className="expanded-content show">{dichVuSuDung}</div>
                        )}
                        {!expandedRows.includes(record.key) && (
                            <div>
                                <div className="shortened-content">
                                    {dichVuSuDung.length > 23
                                        ? `${dichVuSuDung.slice(0, 23)}...`
                                        : dichVuSuDung}
                                </div>
                                {dichVuSuDung.length > 23 && (
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
                    <Link to={'/chitietthietbi'}>
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

    const data: DataType[] = [
        {
            key: '1',
            thietBi: 'KIO_1',
            tenThietBi: 'Kiosk',
            diaChiIP: '192.168.1.10',
            trangThaiHoatdong: 'Hoạt động',
            trangThaiKetNoi: 'Kết nối',
            dichVuSuDung:
                'Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát',
        },
        {
            key: '2',
            thietBi: 'KIO_2',
            tenThietBi: 'Kiosk',
            diaChiIP: '192.168.1.10',
            trangThaiHoatdong: 'Ngưng hoạt động',
            trangThaiKetNoi: 'Kết nối',
            dichVuSuDung:
                'Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát',
        },
        {
            key: '3',
            thietBi: 'KIO_3',
            tenThietBi: 'Kiosk',
            diaChiIP: '192.168.1.10',
            trangThaiHoatdong: 'Hoạt động',
            trangThaiKetNoi: 'Mất kết nối',
            dichVuSuDung:
                'Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát',
        },
        {
            key: '4',
            thietBi: 'KIO_4',
            tenThietBi: 'Kiosk',
            diaChiIP: '192.168.1.10',
            trangThaiHoatdong: 'Hoạt động',
            trangThaiKetNoi: 'Kết nối',
            dichVuSuDung:
                'Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát',
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

export default TableThietBi;
