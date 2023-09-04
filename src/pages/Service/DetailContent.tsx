import { Button, DatePicker, DatePickerProps, Dropdown, Input, Layout, Menu, MenuProps } from 'antd';

import { CalendarOutlined, CaretDownOutlined } from '@ant-design/icons';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { HiPencil } from 'react-icons/hi';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { Link, useParams } from 'react-router-dom';
import SearchSmallService from '../../component/Search/SmallSearchService';
import TableDetailService from '../../component/Table/DetailTableService';
import { Service } from '../../lib/Type/Service';
import { serviceCollection } from '../../lib/controller';

type MenuItemType = {
    label: string;
    key: string;
};

const itemsTrangThai: MenuItemType[] = [
    {
        label: 'Tất cả',
        key: 'Tất cả',
    },
    {
        label: 'Vắng',
        key: 'Vắng',
    },
    {
        label: 'Đã hoàn thành',
        key: 'Đã hoàn thành',
    },
    {
        label: 'Đang thực hiện',
        key: 'Đang thực hiện',
    },
];

const { Content } = Layout;

function DetailContentService() {
    const [fromDate, setFromDate] = useState<any>(null);
    const [toDate, setToDate] = useState<any>(null);
    const [searchValue, setSearchValue] = useState<string>('');
    const [selectedTrangThai, setSelectedTrangThai] = useState<string | null>(null);
    const { id } = useParams();
    const [dichVuDetail, setDichVuDetail] = useState<Service | null>(null);

    const handleSearch = (value: string) => {
        setSearchValue(value);
    };

    const handleTrangThai: MenuProps['onClick'] = (e) => {
        setSelectedTrangThai(e.key);
    };
    const handleFromDateChange = (date: any) => {
        setFromDate(date);
    };

    const handleToDateChange = (date: any) => {
        setToDate(date);
    };

    const menuPropsTrangThai = {
        itemsTrangThai,
        onClick: handleTrangThai,
    };

    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    };

    useEffect(() => {
        const fetchDichVuDetail = async () => {
            const docRef = doc(serviceCollection, id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const data = docSnap.data() as Service;
                setDichVuDetail(data);
            }
        };

        fetchDichVuDetail();
    }, [id]);

    if (!dichVuDetail) {
        return <div></div>;
    }
    return (
        <Content style={{ margin: '0 0 0 24px', borderRadius: '12', font: 'Nunito' }}>
            <div style={{ display: 'flex', marginTop: '24px' }}>
                <div
                    id="div1"
                    style={{
                        display: 'inline-block',
                        width: '370px',
                        height: '510px',
                        backgroundColor: '#fff',
                        borderRadius: '12px',
                    }}
                >
                    <div
                        style={{
                            padding: '0 24px 0 24px',
                        }}
                    >
                        <div style={{ display: 'inline-block', font: 'Nunito' }}>
                            <span className="text-add-content" style={{ display: 'block' }}>
                                Thông tin dịch vụ
                            </span>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                }}
                            >
                                <div style={{ flex: 1, display: 'inline', margin: '0 24px 30px 0' }}>
                                    <div style={{ marginBottom: '16px' }}>
                                        <span
                                            style={{
                                                font: 'Nunito',
                                            }}
                                            className="text-change-input"
                                        >
                                            Mã dịch vụ:
                                            <span className="text-detail" style={{ marginLeft: '27px', font: 'Nunito' }}>
                                                {dichVuDetail.MaDichVu}
                                            </span>
                                        </span>
                                    </div>

                                    <div style={{ marginBottom: '16px' }}>
                                        <span
                                            style={{
                                                font: 'Nunito',
                                            }}
                                            className="text-change-input"
                                        >
                                            Tên dịch vụ:{' '}
                                            <span className="text-detail" style={{ marginLeft: '22px' }}>
                                                {dichVuDetail.TenDichVu}
                                            </span>
                                        </span>
                                    </div>

                                    <div>
                                        <span
                                            style={{
                                                font: 'Nunito',
                                            }}
                                            className="text-change-input"
                                        >
                                            Mô tả:
                                            <span className="text-detail" style={{ marginLeft: '64px' }}>
                                                {dichVuDetail.MoTa}
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'inline-block', font: 'Nunito' }}>
                            <span className="text-detail-dichvu" style={{ display: 'block' }}>
                                Quy tắc cấp số
                            </span>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                }}
                            >
                                <div style={{ flex: 1, display: 'inline', margin: '0 24px 30px 0' }}>
                                    <span style={{ font: 'Nunito' }} className="text-checkbox-detail">
                                        Tăng tự động:
                                    </span>
                                    <div
                                        style={{
                                            width: '61px',
                                            height: '44px',
                                            display: 'inline-block',
                                            marginLeft: '10px',
                                        }}
                                    >
                                        <Input value={'0001'}></Input>
                                    </div>
                                    <span style={{ marginLeft: '10px' }}>Đến</span>
                                    <div
                                        style={{
                                            width: '61px',
                                            height: '44px',
                                            display: 'inline-block',
                                            marginLeft: '10px',
                                        }}
                                    >
                                        <Input value={'9999'}></Input>
                                    </div>

                                    <span style={{ font: 'Nunito' }} className="text-checkbox-detail">
                                        Prefix:
                                    </span>
                                    <div
                                        style={{
                                            width: '61px',
                                            height: '44px',
                                            display: 'inline-block',
                                            marginLeft: '65px',
                                        }}
                                    >
                                        <Input value={'0001'}></Input>
                                    </div>

                                    <div style={{ marginBottom: '16px' }}>
                                        <span
                                            style={{
                                                font: 'Nunito',
                                            }}
                                            className="text-change-input"
                                        >
                                            Reset mỗi ngày
                                        </span>
                                    </div>

                                    <div style={{ marginBottom: '16px' }}>
                                        <span
                                            style={{
                                                font: 'Nunito',
                                            }}
                                            className="text-change-input"
                                        >
                                            Ví dụ: 201-2001
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    id="div2"
                    style={{
                        display: 'inline-block',
                        height: '510px',
                        width: '718px',
                        backgroundColor: '#fff',
                        borderRadius: '12px',
                        marginLeft: '24px',
                    }}
                >
                    <div style={{ display: 'flex', margin: '24px 12px 0 22px' }}>
                        <div style={{ marginRight: '12px' }}>
                            <div style={{ marginBottom: '5px' }}>
                                <span className="title-select-thietbi" style={{ font: 'Nunito' }}>
                                    Trạng thái
                                </span>
                            </div>

                            <div>
                                <div
                                    style={{
                                        marginRight: '20px',
                                        display: 'inline',
                                    }}
                                >
                                    <Dropdown
                                        overlay={
                                            <Menu onClick={handleTrangThai}>
                                                {menuPropsTrangThai.itemsTrangThai.map((item) => (
                                                    <Menu.Item key={item.key}>{item.label}</Menu.Item>
                                                ))}
                                            </Menu>
                                        }
                                        trigger={['click']}
                                    >
                                        <Button
                                            style={{
                                                width: '160px',
                                                height: '44px',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <span style={{ marginLeft: '10px' }}>
                                                {selectedTrangThai ? itemsTrangThai.find((item) => item.key === selectedTrangThai)?.label : 'Tất cả'}
                                            </span>
                                            <CaretDownOutlined
                                                style={{
                                                    color: '#FF7506',
                                                    height: '12px',
                                                    width: '12px',
                                                    marginRight: '10px',
                                                }}
                                            />
                                        </Button>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'inline-block', marginRight: '12px' }}>
                            <div style={{ marginBottom: '5px' }}>
                                <span className="title-select-thietbi" style={{ font: 'Nunito' }}>
                                    Chọn thời gian
                                </span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <DatePicker
                                    suffixIcon={<CalendarOutlined />}
                                    style={{ height: '44px', width: '130px' }}
                                    value={fromDate}
                                    onChange={handleFromDateChange}
                                />
                                <span style={{ margin: '0 4px 0 4px' }}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="7"
                                        height="7"
                                        viewBox="0 0 10 10"
                                        fill="none"
                                        style={{ verticalAlign: 'middle' }}
                                    >
                                        <path d="M3 0L10 5L3 10V0Z" fill="currentColor" />
                                    </svg>
                                </span>
                                <DatePicker style={{ height: '44px', width: '130px' }} value={toDate} onChange={handleToDateChange} />
                            </div>
                        </div>

                        <div style={{ display: 'inline-block', marginRight: '100px' }}>
                            <div style={{ marginBottom: '5px' }}>
                                <span className="title-select-thietbi" style={{ font: 'Nunito' }}>
                                    Từ khóa
                                </span>
                            </div>

                            <div>
                                <div
                                    style={{
                                        marginRight: '20px',
                                        display: 'inline',
                                    }}
                                >
                                    <SearchSmallService onSearch={handleSearch} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ alignItems: 'flex-start' }}>
                        <div id="table" style={{ display: 'inline-block', margin: '0 30px 0 20px' }}>
                            <TableDetailService fromDate={fromDate} toDate={toDate} selectedTrangThai={selectedTrangThai} searchValue={searchValue} />
                        </div>
                    </div>
                </div>

                <div
                    id="div3"
                    style={{
                        marginLeft: '25px',
                        display: 'inline-block',
                        alignItems: 'flex-start',
                        width: '60px',
                    }}
                >
                    <Link to="/capnhatdichvu/:id">
                        <div
                            id="button"
                            style={{
                                backgroundColor: '#FFF2E7',
                                height: '94px',
                                width: '85px',
                                textAlign: 'center',
                                padding: '10px',
                                borderRadius: '8px 0px 1px 8px',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '28px',
                                    width: '28px',
                                    backgroundColor: '#FF9138',
                                    borderRadius: '7px',
                                    overflow: 'hidden',
                                    margin: '0 0 10px 15px',
                                }}
                            >
                                <HiPencil
                                    style={{
                                        color: 'white',
                                        height: '30px',
                                        width: '30px',
                                    }}
                                />
                            </div>

                            <span className="text-add-button" style={{ font: 'Nunito' }}>
                                Cập nhật <br />
                                danh sách
                            </span>
                        </div>
                    </Link>
                    <Link to="/dichvu">
                        <div
                            id="button"
                            style={{
                                backgroundColor: '#FFF2E7',
                                height: '94px',
                                width: '85px',
                                textAlign: 'center',
                                padding: '10px',
                                borderRadius: '8px 0px 0px 8px',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '28px',
                                    width: '28px',
                                    backgroundColor: '#FF9138',
                                    borderRadius: '7px',
                                    overflow: 'hidden',
                                    margin: '0 0 10px 15px',
                                }}
                            >
                                <RiArrowGoBackFill
                                    style={{
                                        color: 'white',
                                        height: '20px',
                                        width: '20px',
                                    }}
                                />
                            </div>

                            <span className="text-add-button" style={{ font: 'Nunito' }}>
                                Quay lại
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </Content>
    );
}

export default DetailContentService;
