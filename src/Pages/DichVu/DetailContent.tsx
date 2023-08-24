import {
    Button,
    DatePicker,
    DatePickerProps,
    Dropdown,
    Input,
    Layout,
    Menu,
    MenuProps,
    message,
} from 'antd';

import { CalendarOutlined, CaretDownOutlined } from '@ant-design/icons';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { HiPencil } from 'react-icons/hi';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import TableDetailDichVu from './DetailTable';
import SearchDichVu from './Search';

type MenuItemType = {
    label: string;
    key: string;
};

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
};

const onChangeCheckBox = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
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

function DetailContentDichVu() {
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
                                <div
                                    style={{ flex: 1, display: 'inline', margin: '0 24px 30px 0' }}
                                >
                                    <div style={{ marginBottom: '16px' }}>
                                        <span
                                            style={{
                                                font: 'Nunito',
                                            }}
                                            className="text-change-input"
                                        >
                                            Mã dịch vụ:
                                            <span
                                                className="text-detail"
                                                style={{ marginLeft: '27px', font: 'Nunito' }}
                                            >
                                                201
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
                                            <span
                                                className="text-detail"
                                                style={{ marginLeft: '22px' }}
                                            >
                                                Khám tim mạch
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
                                            <span
                                                className="text-detail"
                                                style={{ marginLeft: '64px' }}
                                            >
                                                Chuyên các bệnh lý về tim
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
                                <div
                                    style={{ flex: 1, display: 'inline', margin: '0 24px 30px 0' }}
                                >
                                    <span
                                        style={{ font: 'Nunito' }}
                                        className="text-checkbox-detail"
                                    >
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

                                    <span
                                        style={{ font: 'Nunito' }}
                                        className="text-checkbox-detail"
                                    >
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
                                            <Menu onClick={handleMenuClick}>
                                                {menuPropsDichVu.itemsDichVu.map((item) => (
                                                    <Menu.Item key={item.key}>
                                                        {item.label}
                                                    </Menu.Item>
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
                                    style={{ height: '44px', width: '130px' }}
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
                                    <SearchDichVu />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ alignItems: 'flex-start' }}>
                        <div
                            id="table"
                            style={{ display: 'inline-block', margin: '0 30px 0 20px' }}
                        >
                            <TableDetailDichVu />
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
                    <Link to="/capnhatdichvu">
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

export default DetailContentDichVu;
