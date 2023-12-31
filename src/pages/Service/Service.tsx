import { Button, DatePicker, DatePickerProps, Dropdown, Layout, Menu, MenuProps } from 'antd';

import { CalendarOutlined, CaretDownOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchService from '../../component/Search/SearchService';
import TableDichVu from '../../component/Table/TableService';

type MenuItemType = {
    label: string;
    key: string;
};

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
};

const itemsHoatDong: MenuItemType[] = [
    {
        label: 'Tất cả',
        key: 'Tất cả',
    },
    {
        label: 'Hoạt động',
        key: 'Hoạt động',
    },
    {
        label: 'Ngưng hoạt động',
        key: 'Ngưng hoạt động',
    },
];
const { Content } = Layout;

function ContentService() {
    const [fromDate, setFromDate] = useState<any>(null);
    const [toDate, setToDate] = useState<any>(null);
    const [searchValue, setSearchValue] = useState<string>('');
    const [selectedTrangThaiHoatDong, setSelectedTrangThaiHoatDong] = useState<string | null>(null);

    const handleHoatDong: MenuProps['onClick'] = (e) => {
        setSelectedTrangThaiHoatDong(e.key);
    };
    const handleSearch = (value: string) => {
        setSearchValue(value);
    };

    const handleFromDateChange = (date: any) => {
        setFromDate(date);
    };

    const handleToDateChange = (date: any) => {
        setToDate(date);
    };

    const menuPropsHoatDong = {
        itemsHoatDong,
        onClick: handleHoatDong,
    };

    return (
        <Content style={{ margin: '0 0 0 24px', borderRadius: '12', font: 'Nunito' }}>
            <div style={{ display: 'flex' }}>
                <div style={{ marginRight: '24px' }}>
                    <div style={{ marginBottom: '5px' }}>
                        <span className="title-select-thietbi" style={{ font: 'Nunito' }}>
                            Trạng thái hoạt động
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
                                    <Menu onClick={handleHoatDong}>
                                        {menuPropsHoatDong.itemsHoatDong.map((item) => (
                                            <Menu.Item key={item.key}>{item.label}</Menu.Item>
                                        ))}
                                    </Menu>
                                }
                                trigger={['click']}
                                overlayStyle={{ width: '300px' }}
                            >
                                <Button
                                    style={{
                                        width: '300px',
                                        height: '44px',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                >
                                    <span style={{ marginLeft: '10px' }}>
                                        {selectedTrangThaiHoatDong
                                            ? itemsHoatDong.find((item) => item.key === selectedTrangThaiHoatDong)?.label
                                            : 'Tất cả'}
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

                <div style={{ display: 'inline-block', marginRight: '150px' }}>
                    <div style={{ marginBottom: '5px' }}>
                        <span className="title-baocao" style={{ font: 'Nunito' }}>
                            Chọn thời gian
                        </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginLeft: '25px' }}>
                        <DatePicker
                            value={fromDate}
                            onChange={handleFromDateChange}
                            suffixIcon={<CalendarOutlined />}
                            style={{ height: '44px', width: '150px' }}
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
                        <DatePicker style={{ height: '44px', width: '150px' }} value={toDate} onChange={handleToDateChange} />
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
                            <SearchService onSearch={handleSearch} />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <div id="table" style={{ display: 'inline-block', marginRight: '30px' }}>
                    <TableDichVu
                        fromDate={fromDate}
                        toDate={toDate}
                        selectedTrangThaiHoatDong={selectedTrangThaiHoatDong}
                        searchValue={searchValue}
                    />
                </div>
                <Link to="/themdichvu">
                    <div
                        id="button"
                        style={{
                            backgroundColor: '#FFF2E7',
                            height: '94px',
                            width: '80px',
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
                            <span style={{ color: 'white', fontSize: '35px', marginBottom: '7px' }}>+</span>
                        </div>

                        <span className="text-add-button" style={{ font: 'Nunito' }}>
                            Thêm <br />
                            dịch vụ
                        </span>
                    </div>
                </Link>
            </div>
        </Content>
    );
}

export default ContentService;
