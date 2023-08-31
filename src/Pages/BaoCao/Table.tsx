import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { DocumentData, QuerySnapshot, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { BsFillCircleFill } from 'react-icons/bs';
import { CapSo } from '../../lib/Type/CapSo';
import { capSoCollection } from '../../lib/controller';

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

const TableBaoCao: React.FC = () => {
    const columns: ColumnsType<CapSo> = [
        {
            title: 'Số thứ tự',
            dataIndex: 'STTBaoCao',
            key: 'STTBaoCao',
            sorter: (a, b) => a.STTS - b.STTS,
        },
        {
            title: 'Tên dịch vụ',
            dataIndex: 'TenDichVu',
            key: 'TenDichVu',
            sorter: (a, b) => a.STTS - b.STTS,
        },
        {
            title: 'Thời gian cấp',
            dataIndex: 'ThoiGianCap',
            key: 'ThoiGianCap',
            sorter: (a, b) => a.STTS - b.STTS,
        },
        {
            title: 'Tình trạng',
            key: 'TrangThai',
            dataIndex: 'TrangThai',
            render: renderHoatDong,
            sorter: (a, b) => a.STTS - b.STTS,
        },
        {
            title: 'Nguồn cấp',
            dataIndex: 'NguonCap',
            key: 'NguonCap',
            sorter: (a, b) => a.STTS - b.STTS,
        },
    ];

    const [baocao, setBaoCao] = useState<CapSo[]>([]);

    useEffect(() => {
        onSnapshot(capSoCollection, (snapshot: QuerySnapshot<DocumentData>) => {
            setBaoCao(
                snapshot.docs.map((doc, index) => {
                    const data = doc.data();
                    return {
                        id: doc.id,
                        STT: `${index + 1}`,
                        STTS: data.STTS ?? 0, // Thêm STTS vào đây và đảm bảo nó không bao giờ là undefined
                        ...data,
                    };
                }),
            );
        });
    }, []);

    return (
        <div className="table-wrapper">
            <Table className="custom-table" columns={columns} dataSource={baocao} style={{ width: '1112px' }} />
        </div>
    );
};

export default TableBaoCao;
