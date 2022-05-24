import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  max-width:1320px;
  margin: 0 auto;  
  background:url('./images/advertising.png');
  background-size:cover;
  background-position:center;
  background-repeat:no-repeat;
  height:340px;
`

const Title = styled.div`
    font-weight: 500;
    font-size: 32px;
    line-height: 36px;
    letter-spacing: -0.02em;
    color: #111114;
    margin-bottom:24px;
`

const Text = styled.div`
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #111114;
    width:264px;
    margin-bottom:24px;
`

const Button = styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.02em;
    color: #111114;
    border: 1px solid #111114;
    border-radius: 6px;
    padding:16px 0;
    text-align:center;
    width:209px;
`

const Advertising = () => {
  return (
    <Container>
        <div style={{padding:64}}>
            <Title>
                Xiaomi+Тариф
            </Title>
            <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry 
            </Text>
            <NavLink to="/showcase">
                <Button>
                    См. все смартфоны
                </Button>
            </NavLink>
        </div>
    </Container>
  )
}

export default Advertising