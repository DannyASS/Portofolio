
import { UserOutlined } from '@ant-design/icons';
import { Form, Input, Select } from 'antd';
import '../style.scss'
import { redirect, useNavigate } from 'react-router-dom';
import { LangConfig, language } from '../../../language/langConfig';
import { useEffect, useState } from 'react';

const FormLogin = () => {
    const navigate = useNavigate()
    let ls = LangConfig().login
    const dataLs = language;
    const [selectValue, setSelectValue] = useState();
    const handleFinish = (event) => {
        localStorage.setItem('data', event.username);
        return navigate('/');
    }
    const handleSelect = (data) => {
        localStorage.setItem('locale', data);
        window.location.reload()
    }

    return(
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={handleFinish}
            >
            <Form.Item
                name="username"
                rules={[{ required: true, message: ls.error1 }]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder={ls.username} />
            </Form.Item>
            <Form.Item
                name="language"
                // rules={[{ message: ls.error2 }]}
            >
                <Select placeholder ={ls.language} onSelect={(item) => handleSelect(item)} defaultValue={localStorage.getItem('locale')?? 'id'}>
                    {dataLs.map((item) => {
                        return(
                            <Select.Option value={item.code}>{item.name}</Select.Option>     
                        )
                    })}
                </Select>
            </Form.Item>
            <Form.Item>
                <button type='submit'><span class="circle1"></span>
                    <span class="circle2"></span>
                    <span class="circle3"></span>
                    <span class="circle4"></span>
                    <span class="circle5"></span>
                    <span class="text">{ls.button1}</span>
                </button>
            </Form.Item>
        </Form>
    )
}

export default FormLogin