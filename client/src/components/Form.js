import React, {useState} from 'react'
import styled from 'styled-components'
import { Input} from 'antd';
import { NavLink } from 'react-router-dom';
import { Modal } from 'antd';

const Container = styled.div`
  max-width:1320px;
  margin: 0 auto;  
  margin-top:160px;
`
const Button = styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    width:100%;
    padding:16px 0;
    background: #652D86;
    text-align:center;
    border-radius: 6px;
    cursor:pointer; 
`

const Title = styled.div`
    font-weight: 500;
    font-size: 32px;
    line-height: 36px;
    letter-spacing: -0.02em;
    color: #111114;
    margin-bottom:8px;
`

const Text = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.02em;
    color: #111114;
    margin-bottom:48px; 
`  


const Form = () => {
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");

    function success() {
        Modal.success({
          content: 'Ваша заявка принята. Ожидайте звонок',
        });
    }

    function error() {
    Modal.error({
        title: 'Заполните email и номер',
    });
    }
  return (
    <Container className='pb-3'>
        <div style={{maxWidth:856, margin:'0 auto', border:"1px solid rgba(17, 17, 20, 0.08)", borderRadius:6}} className="d-flex">
            <div>
                <img src="images/form.png"/>
            </div>
            <div style={{padding:64}}> 
                <div className='mb-5'> 
                    <img src="images/user.png" />
                </div>    
                <Title>
                    Никаких очередей. Станьте клиентом онлайн. 
                </Title>
                <Text>
                    Весь процесс займет не более 10 минут
                </Text>
                <Input placeholder='Ваш номер телефона' className='mb-2' size="large" value={number} onChange={(e) => setNumber(e.target.value)}/>
                <Input placeholder='Ваш email' className='mb-4' size="large" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <Button  onClick={email.length > 0 && number.length ? success :  error}>
                    Отправить заявку
                </Button>
            </div>
        </div>
    </Container>
  )
}

export default Form