import React from 'react'
import styled from 'styled-components';

const Price = styled.div`
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.02em;
    color: #111114;
    margin-bottom:4px;
`

const Title = styled.div`
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.02em;
    color: #111114;
`

const AddToBasket = styled.div`
    border: 1px solid #111114;
    border-radius: 4px;
    padding:8px 12px;
    position:absolute;
    bottom:10px;
    width:210px;
    
`

const BasketPrice = styled.div`
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #111114;
`

const Wrapper = styled.div`
    padding:24px;
    margin:0 auto;
    border-right:1px solid rgba(17, 17, 20, 0.08);
    width:257px;
    height:300px;
    position:relative;
`

const Card = ({product}) => {
  return (
    <Wrapper>
        <div className='mb-3 text-center'>
            <img src={product.img} style={{display:"inline", maxWidth:"200px", maxHeight:150}} />
        </div>
        <Price>
            {product.price} ₸
        </Price>
        <Title>
            {product.name}             
        </Title>
        <AddToBasket className='d-flex justify-content-between align-items-center'>
            <BasketPrice>
                {product.price} ₸
            </BasketPrice>
            <div>
                <img src="images/cart.svg" width={20}/>
            </div>
        </AddToBasket>
    </Wrapper>
  )
}

export default Card