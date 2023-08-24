import { SearchOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import React, { useState } from 'react';

const { Search } = Input;

const SearchThietBi: React.FC = () => {
    const [searchValue, setSearchValue] = useState<string>('');

    const handleSearch = (value: string) => {
        setSearchValue(value);
    };

    return (
        <Space direction="vertical">
            <Search
                placeholder="Nhập từ khóa"
                size="large"
                onSearch={handleSearch}
                style={{ width: 300 }}
                suffix={<SearchOutlined style={{ color: '#FF7506', fontSize: '20px' }} />}
                className="custom-search-input"
            />
        </Space>
    );
};

export default SearchThietBi;
