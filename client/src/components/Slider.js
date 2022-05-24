import React from 'react'
import styled from 'styled-components'
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import { NavLink } from 'react-router-dom';

const Title = styled.div`
  color: rgba(17, 17, 20, 0.48);
  font-size: 20px;
  line-height: 24px;
  margin-bottom:4px;
`

const Text = styled.div`
  font-weight: 500;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: -0.02em;
  color: #111114;
  margin-bottom:48px;
`

const Container = styled.div`
  max-width:1320px;
  margin: 0 auto;  
  margin-top:160px;
`

const Button = styled.div`
padding:16px 0;
max-width:320px;
margin:0 auto;
border: 1px solid #FFFFFF;
border-radius: 6px; 
text-align:center;
a{
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #FFFFFF;
}
`

const ItemTitle = styled.div`
  font-weight: 500;
  font-size: 32px;
  line-height: 36px;
  letter-spacing: -0.02em;
  color: #FFFFFF;
  text-align:center;
  padding-top:30px;
  margin-bottom:130px;
`

const Slider = ({title, text, sliderData}) => {

  function onChange(a, b, c) {
    console.log(a, b, c);
  }
  
 

  return (
    <Container>
        <Title>
          {title}
        </Title>
        <Text>
          {text}
        </Text>
        <Carousel afterChange={onChange}>
            {
               sliderData.map((item,index) => (
                  <div>
                      <h3 style={{height:300, background:`url("images/slider-${index+1}.png")`}}>
                        <ItemTitle>
                            {item}
                        </ItemTitle>
                        <Button>
                          <NavLink to="/showcase">
                          Подробнее
                          </NavLink>
                        </Button>
                      </h3>
                  </div>
               )) 
            }
        </Carousel>
    </Container>
  )
}

export default Slider