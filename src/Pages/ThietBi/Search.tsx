import { SearchOutlined } from '@ant-design/icons';
import { debounce } from '@mui/material';
import { Input, Space } from 'antd';
import React from 'react';

const { Search } = Input;

const SearchThietBi: React.FC<{ onSearch: (value: string) => void }> = ({ onSearch }) => {
    const debouncedSearch = debounce(onSearch, 200);

    const handleSearch = (value: string) => {
        debouncedSearch(value.toLowerCase());
    };

    return (
        <Space direction="vertical">
            <Search
                placeholder="Nhập từ khóa"
                size="large"
                onSearch={handleSearch}
                onChange={(e) => handleSearch(e.target.value)}
                style={{ width: 300 }}
                suffix={<SearchOutlined style={{ color: '#FF7506', fontSize: '20px' }} />}
                className="custom-search-input"
            />
        </Space>
    );
};

export default SearchThietBi;
