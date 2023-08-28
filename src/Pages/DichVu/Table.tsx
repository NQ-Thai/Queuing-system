import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { DocumentData, QuerySnapshot, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { BsFillCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { DichVu } from '../../lib/Type/DichVu';
import { dichvuCollection } from '../../lib/controller';

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

const TableDichVu: React.FC<{ selectedTrangThaiHoatDong: string | null }> = ({ selectedTrangThaiHoatDong }) => {
    const columns: ColumnsType<DichVu> = [
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

    const [dichvu, setDichVu] = useState<DichVu[]>([]);
    const [filteredData, setFilteredData] = useState<DichVu[]>(dichvu);

    useEffect(() => {
        setFilteredData(dichvu);
    }, [dichvu]);

    const checkTrangThaiHoatDong = (trangThaiHoatDong: string | undefined, selectedTrangThaiHoatDong: string | null) => {
        return (
            trangThaiHoatDong === undefined ||
            selectedTrangThaiHoatDong === null ||
            selectedTrangThaiHoatDong === 'Tất cả' ||
            trangThaiHoatDong === selectedTrangThaiHoatDong
        );
    };

    const filteredThietBis = filteredData.filter((dichvu) => checkTrangThaiHoatDong(dichvu.TrangThaiHoatDong, selectedTrangThaiHoatDong));

    useEffect(
        () =>
            onSnapshot(dichvuCollection, (snapshot: QuerySnapshot<DocumentData>) => {
                setDichVu(
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

    return <Table className="custom-table" columns={columns} dataSource={filteredThietBis} style={{ width: '1112px' }} />;
};
export default TableDichVu;
