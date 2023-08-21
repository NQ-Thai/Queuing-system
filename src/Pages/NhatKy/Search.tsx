import { SearchOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import React from 'react';

const { Search } = Input;

const onSearch = (value: string) => console.log(value);

const SearchNhatKy: React.FC = () => (
    <Space direction="vertical">
        <Search
            placeholder="Nhập từ khóa"
            size="large"
            onSearch={onSearch}
            style={{ width: 240 }}
            suffix={<SearchOutlined style={{ color: '#FF7506', fontSize: '20px' }} />}
            className="custom-search-input"
        />
    </Space>
);

export default SearchNhatKy;
