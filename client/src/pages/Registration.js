import React, {useState} from 'react'
import styled from 'styled-components';
import { useHistory, useNavigate } from "react-router-dom";

import {
    Form,
    Input,
    InputNumber,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
  } from 'antd';
import { registration } from '../http/userAPI';
  const { Option } = Select;
  const residences = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  const Container = styled.div`
    max-width:500px;
    margin:0 auto;
    padding-top:100px;
  `
  

const Registration = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const [email, setEmail] = useState("") 
    const [password, setPassword] = useState("")


  const onFinish = async (values) => {
    try{
      const response = await registration(email, password)
      navigate('/login')
    }catch(e){
      alert(e.response.data.message)
    }
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="7">+7</Option>
      </Select>
    </Form.Item>
  );
  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="USD">$</Option>
        <Option value="CNY">??</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  return (
    <Container>
            <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '7',
      }}
      scrollToFirstError
      style={{border:"1px solid rgba(17, 17, 20, 0.08)", borderRadius:6, padding:30}}
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: '???????????? ???????????????? E-mail!',
          },
          {
            required: true,
            message: '????????????????????, ?????????????? ???????? E-mail!',
          },
        ]}
      >
        <Input onChange={(e) => setEmail(e.target.value)} value={email}/>
      </Form.Item>

      <Form.Item
        name="password"
        label="????????????"
        rules={[
          {
            required: true,
            message: '????????????????????, ?????????????? ?????? ????????????!',
          },
        ]}
        hasFeedback
      >
        <Input.Password onChange={(e) => setPassword(e.target.value)} value={password}/>
      </Form.Item>

      <Form.Item
        name="confirm"
        label="?????????????????????? ????????????"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: '????????????????????, ?????????????????????? ???????? ????????????!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('?????? ?????????????????? ???????? ???????????? ???? ??????????????????!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="nickname"
        label="??????????????????"
        tooltip="?????? ???? ????????????, ?????????? ???????????? ???????????????? ???????"
        rules={[
          {
            required: true,
            message: '????????????????????, ?????????????? ?????? ??????????????!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="phone"
        label="???????????????????? ??????????"
        rules={[
          {
            required: true,
            message: '????????????????????, ?????????????? ???????? ?????????? ????????????????!',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item
        name="gender"
        label="??????"
        rules={[
          {
            required: true,
            message: '????????????????????, ???????????????? ??????!',
          },
        ]}
      >
        <Select placeholder="???????????? ???????? ??????">
          <Option value="male">??????????????</Option>
          <Option value="female">??????????????</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          ?? ???????????????? <a href=""> ????????????????????</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          ??????????????????????
        </Button>
      </Form.Item>
    </Form>
    </Container>
  )
}

export default Registration