import { DatePicker, DatePickerProps, Layout } from 'antd';

import { CalendarOutlined } from '@ant-design/icons';
import { useState } from 'react';
import SearchNhatKy from '../../component/Search/SearchDiary';
import TableNhatKy from '../../component/Table/TableDiary';

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
};

const { Content } = Layout;

function ContentDiary() {
    const [fromDate, setFromDate] = useState<any>(null);
    const [toDate, setToDate] = useState<any>(null);
    const [searchValue, setSearchValue] = useState<string>('');

    const handleSearch = (value: string) => {
        setSearchValue(value);
    };

    const handleFromDateChange = (date: any) => {
        setFromDate(date);
    };

    const handleToDateChange = (date: any) => {
        setToDate(date);
    };
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
                        <DatePicker style={{ height: '44px', width: '150px' }} value={toDate} onChange={handleToDateChange} />
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
                            <SearchNhatKy onSearch={handleSearch} />
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <div id="table" style={{ display: 'inline-block', marginRight: '30px' }}>
                    <TableNhatKy fromDate={fromDate} toDate={toDate} searchValue={searchValue} />
                </div>
            </div>
        </Content>
    );
}

export default ContentDiary;
