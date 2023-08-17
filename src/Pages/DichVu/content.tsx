import {
    Button,
    DatePicker,
    DatePickerProps,
    Dropdown,
    Layout,
    Menu,
    MenuProps,
    message,
} from 'antd';

import { CalendarOutlined, CaretDownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import SearchThietBi from '../ThietBi/Search';
import TableDichVu from './Table';

type MenuItemType = {
    label: string;
    key: string;
};

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
};

const itemsDichVu: MenuItemType[] = [
    {
        label: 'Tất cả',
        key: '1',
    },
    {
        label: 'Hoạt động',
        key: '2',
    },
    {
        label: 'Ngưng hoạt động',
        key: '3',
    },
];

const handleMenuClick: MenuProps['onClick'] = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
};

const menuPropsDichVu = {
    itemsDichVu,
    onClick: handleMenuClick,
};

const { Content } = Layout;

function ContentDichVu() {
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
                                    <Menu onClick={handleMenuClick}>
                                        {menuPropsDichVu.itemsDichVu.map((item) => (
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
                                    <span style={{ marginLeft: '10px' }}>Tất cả</span>
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

                <div style={{ display: 'inline-block', marginRight: '148px' }}>
                    <div style={{ marginBottom: '5px' }}>
                        <span className="title2-baocao" style={{ font: 'Nunito' }}>
                            Chọn thời gian
                        </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginLeft: '25px' }}>
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
                            <SearchThietBi />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <div id="table" style={{ display: 'inline-block', marginRight: '30px' }}>
                    <TableDichVu />
                </div>
                <Link to="/themthietbi">
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
                            <span style={{ color: 'white', fontSize: '35px', marginBottom: '7px' }}>
                                +
                            </span>
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

export default ContentDichVu;
