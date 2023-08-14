import { CalendarOutlined } from '@ant-design/icons';
import { DatePicker, DatePickerProps, Layout } from 'antd';
import { Link } from 'react-router-dom';
import avata from '../../assets/images/avata.jpg';
import { iconBell } from '../../assets/svg/svg';

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
};

function BaoCao() {
    return (
        <Layout>
            <Layout>
                <div style={{ width: '1240px', height: '88px', marginBottom: '5px' }}>
                    <div style={{ font: 'Nunito', display: 'flex', alignItems: 'center' }}>
                        <span className="text-header-content">
                            <span className="text-first-head" style={{ font: 'Nunito' }}>
                                Báo cáo&nbsp;&nbsp;&gt;&nbsp;&nbsp;
                            </span>
                            Lập báo cáo
                        </span>
                        <div
                            className="icon-wrapper-baocao"
                            style={{ display: 'inline-block', verticalAlign: 'middle' }}
                        >
                            {iconBell}
                        </div>
                        <Link to="/profile" style={{ display: 'flex', alignItems: 'center' }}>
                            <div
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    marginRight: '7.5px',
                                }}
                            >
                                <img
                                    src={avata}
                                    alt=""
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>

                            <div style={{ display: 'inline-block', textAlign: 'left' }}>
                                <span
                                    className="text-hello"
                                    style={{ font: 'Nunito', display: 'block' }}
                                >
                                    Xin chào
                                </span>
                                <span
                                    className="text-name-right"
                                    style={{ font: 'Nunito', display: 'block' }}
                                >
                                    Da Trắng Tóc Xù
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div style={{ marginBottom: '4px' }}>
                    <span className="title2-baocao" style={{ font: 'Nunito' }}>
                        Chọn thời gian
                    </span>
                </div>
                <div style={{ marginLeft: '24px' }}>
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
                    <DatePicker style={{ height: '44px', width: '150px' }} onChange={onChange} />
                </div>
            </Layout>
        </Layout>
    );
}

export default BaoCao;
