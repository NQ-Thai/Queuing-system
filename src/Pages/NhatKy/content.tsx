import { DatePicker, DatePickerProps, Layout, MenuProps, message } from 'antd';

import { CalendarOutlined } from '@ant-design/icons';
import SearchNhatKy from './Search';
import TableNhatKy from './Table';

type MenuItemType = {
    label: string;
    key: string;
};

const itemsDichVu: MenuItemType[] = [
    {
        label: 'Tất cả',
        key: '1',
    },
    {
        label: 'Khám sản - Phụ khoa',
        key: '2',
    },
    {
        label: 'Khám răng hàm mặt',
        key: '3',
    },
    {
        label: 'Khám tai mũi họng',
        key: '4',
    },
    {
        label: 'Khám tim mạch',
        key: '5',
    },
    {
        label: 'Khám hô hấp',
        key: '6',
    },
    {
        label: 'Khám tổng quát',
        key: '7',
    },
];

const itemsTinhTrang: MenuItemType[] = [
    {
        label: 'Tất cả',
        key: '1',
    },
    {
        label: 'Đang chờ',
        key: '2',
    },
    {
        label: 'Đã sử dụng',
        key: '3',
    },
    {
        label: 'Bỏ qua',
        key: '4',
    },
];

const itemsNguonCap: MenuItemType[] = [
    {
        label: 'Tất cả',
        key: '1',
    },
    {
        label: 'Kiosk',
        key: '2',
    },
    {
        label: 'Hệ thống',
        key: '3',
    },
];

const handleMenuClick: MenuProps['onClick'] = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
};

const menuPropsHoatDong = {
    itemsDichVu,
    onClick: handleMenuClick,
};

const menuPropsKetNoi = {
    itemsTinhTrang,
    onClick: handleMenuClick,
};

const menuPropsNguonCap = {
    itemsNguonCap,
    onClick: handleMenuClick,
};

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
};

const { Content } = Layout;

function ContentBaoCao() {
    return (
        <Content style={{ margin: '0 0 0 24px', borderRadius: '12', font: 'Nunito' }}>
            <div style={{ display: 'flex', marginBottom: '16px' }}>
                <div style={{ display: 'inline-block', marginRight: '24px' }}>
                    <div style={{ marginBottom: '4px' }}>
                        <span className="title2-baocao" style={{ font: 'Nunito' }}>
                            Chọn thời gian
                        </span>
                    </div>
                    <div>
                        <DatePicker
                            suffixIcon={<CalendarOutlined />}
                            style={{ height: '44px', width: '150px' }}
                            onChange={onChange}
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
                        <DatePicker
                            style={{ height: '44px', width: '150px' }}
                            onChange={onChange}
                        />
                    </div>
                </div>
                <div style={{ display: 'inline-block', marginLeft: '532px' }}>
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
                            <SearchNhatKy />
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <div id="table" style={{ display: 'inline-block', marginRight: '30px' }}>
                    <TableNhatKy />
                </div>
            </div>
        </Content>
    );
}

export default ContentBaoCao;
