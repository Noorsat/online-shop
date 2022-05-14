 import React from 'react'
import { NavLink } from 'react-router-dom'
 import styled from 'styled-components'

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
`

const Container = styled.div`
  max-width:1320px;
  margin: 0 auto;  
  margin-top:160px;
`

const Link = styled.div`
    a{
        font-weight: 500;
        padding:16px 24px; 
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        letter-spacing: 0.02em;
        color: #111114;
        border: 1px solid #111114;
        border-radius: 6px;
    }
`

const Banner = styled.div`
    max-width:328px;
    height:504px;
    border-radius:6px;
    background:${props => `${props.image}`};
    background-size:cover;
    background-position:center;
    background-repeat: no-repeat;
`

const BannerContent = styled.div`
    padding:32px;
`

const BannerTitle = styled.div`
    font-weight: 500;
    font-size: 32px;
    letter-spacing: -0.02em;
    color: #111114;
    margin-bottom:24px;
`

const BannerPrice = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    border: 1px solid #111114;
    border-radius: 6px;
    padding:16px 24px;
`

const BannerPriceTitle = styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.02em;
    color: #111114;
`

const BannerTag = styled.span`
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #FFFFFF;
    background: #FC4258;
    border-radius: 3px;
    padding:4px 8px;
`
 
 const Top = ({title, text, isButton}) => {
   return (
    <Container >
        <div className='d-flex justify-content-between align-items-center mb-5'>
        <div>
            <Title>
                {title}
            </Title>
            <Text>
                {text}
            </Text>
        </div>
        {
            isButton &&  <Link>
            <NavLink to="/shop">Перейти в магазин</NavLink>
        </Link>
        }
        </div>
        <div className='pb-4 d-flex justify-content-between'>
            <Banner image="url(images/iphone.png)">
                <BannerContent>
                    <BannerTitle>
                        Apple iPhone 12
                    </BannerTitle>     
                    <NavLink to="/showcase">
                    <BannerPrice>
                        <BannerPriceTitle>
                            480,000 ₸
                        </BannerPriceTitle>
                        <div>
                            <img src="images/cart.svg" width={24}/>
                        </div>
                    </BannerPrice>
                    </NavLink>
                </BannerContent>
            </Banner>
            <Banner image="url(images/top-2.png)">
                <NavLink to="/showcase">
                <BannerContent>
                    <div className='mb-3'>
                        <NavLink to="/basket">
                            <img src="images/cart.svg" width={24}/>
                        </NavLink>
                    </div>
                    <BannerTitle style={{lineHeight:'36px'}}>
                        Телефоны, планшеты и др.
                    </BannerTitle> 
                </BannerContent>
                </NavLink>
            </Banner>
            <Banner image="#F1F1F1">
                <BannerContent>
                    <BannerTag className='mb-3'>
                        + Подарок
                    </BannerTag> 
                    <div className='mt-3'>
                        <img src="images/airpods.png" width={264}/>
                    </div>
                    <BannerTitle>
                        Airpods Pro
                    </BannerTitle> 
                    <NavLink to="/showcase">
                        <BannerPrice>
                            <BannerPriceTitle>
                                108000 ₸
                            </BannerPriceTitle>
                            <div>
                                <img src="images/cart.svg" width={24}/>
                            </div>
                        </BannerPrice>
                    </NavLink>    
                </BannerContent>
            </Banner> 
            <Banner image="url(images/iphone.png)">
                <BannerContent>
                    <BannerTitle>
                        Apple iPhone 12
                    </BannerTitle>    
                    <NavLink to="/showcase">
                    <BannerPrice>
                        <BannerPriceTitle>
                            480000 ₸
                        </BannerPriceTitle>
                        <div>
                            <img src="images/cart.svg" width={24}/>
                        </div>
                    </BannerPrice>
                    </NavLink> 
                </BannerContent>
            </Banner>
        </div>

    </Container>
   )
 }
 
 export default Top