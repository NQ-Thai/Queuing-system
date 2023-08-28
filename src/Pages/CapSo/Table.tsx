import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useEffect, useRef, useState } from 'react';

import { DocumentData, QuerySnapshot, onSnapshot } from 'firebase/firestore';
import { BsFillCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { CapSo } from '../../lib/Type/CapSo';
import { capSoCollection } from '../../lib/controller';

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

const TableCapSo: React.FC<{ selectedTrangThaiDichVu: string | null }> = ({ selectedTrangThaiDichVu }) => {
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

    const columns: ColumnsType<CapSo> = [
        {
            title: 'STT',
            dataIndex: 'STT',
            key: 'STT',
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
    const [capso, setCapSo] = useState<CapSo[]>([]);
    const [filteredData, setFilteredData] = useState<CapSo[]>(capso);

    useEffect(() => {
        setFilteredData(capso);
    }, [capso]);

    const checkTrangThaidichVu = (trangThaiDichVu: string | undefined, checkTrangThaidichVu: string | null) => {
        return (
            trangThaiDichVu === undefined ||
            checkTrangThaidichVu === null ||
            checkTrangThaidichVu === 'Tất cả' ||
            trangThaiDichVu === checkTrangThaidichVu
        );
    };

    const filteredCapSos = filteredData.filter((capso) => checkTrangThaidichVu(capso.TenDichVu, selectedTrangThaiDichVu));

    useEffect(
        () =>
            onSnapshot(capSoCollection, (snapshot: QuerySnapshot<DocumentData>) => {
                setCapSo(
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

    return (
        <div className="table-wrapper" ref={tableWrapperRef}>
            <Table className="custom-table" columns={columns} dataSource={filteredCapSos} style={{ width: '1112px' }} />
        </div>
    );
};

export default TableCapSo;
