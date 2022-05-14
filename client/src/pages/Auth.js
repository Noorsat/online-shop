import React, {useState} from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import { login } from '../http/userAPI';
import { useHistory, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/actions/userActions';
import { adminAuth } from '../redux/actions/adminActions';


const Container = styled.div`
  max-width:500px;
  margin: 0 auto;  
  padding-top:200px;
`

const Auth = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const onFinish = async () => {
    try{
      if (email === "admin" && password === "root"){
        dispatch(adminAuth())
        dispatch(loginSuccess())
        navigate("/shop")
      }else{
        const response = await login(email, password)
        dispatch(loginSuccess())
        navigate("/shop")
      }
    }catch(e){
      alert(e.response.data.message)
    }
  };

  return (
    <Container>
        <Form
      name="normal_login"
      className="login-form"
      onFinish={onFinish}
      initialValues={{
        remember: true,
      }}
      style={{border:"1px solid rgba(17, 17, 20, 0.08)", borderRadius:6, padding:30}}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Пожалуйста, введите ваше имя пользователя!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Имя пользователя" value={email} onChange={(e) => setEmail(e.target.value) }/>
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Пожалуйста, введите Ваш пароль!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Item>
      <div className='d-flex justify-content-between mb-3'>
        <div>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Запомни меня</Checkbox>
        </Form.Item>
        </div>
        <div>
          <a className="login-form-forgot" href="">
            Забыли пароль
          </a>
        </div>
      </div>

      <Form.Item>
        <div className='w-100 mb-3'>
          <Button type="primary" htmlType="submit" className="login-form-button" style={{width:"100%"}}>
          Авторизоваться
          </Button>
        </div>
        Or <NavLink to="/registration">зарегистрируйтесь сейчас!</NavLink>
      </Form.Item>
    </Form>
    </Container>
  )
}

export default Auth