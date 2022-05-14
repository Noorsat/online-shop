import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  max-width:1320px;
  margin: 0 auto;  
  padding-top:120px;
`
const Title = styled.div`
  font-weight: 500;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -0.04em;
  color: #111114;
  margin-bottom:48px;
`

const Products = styled.div`
  border: 1px solid rgba(17, 17, 20, 0.08);
  border-radius: 6px;
  width:680px;
  margin-right:24px;
`

const ProductItem = styled.div`
    padding:24px;
    position:relative;
    border-bottom: 1px solid rgba(17, 17, 20, 0.08);
    &:last-child{
      border-bottom:none;
    }
  `

const ProductTitle = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #111114;
  margin-bottom:16px;
`

const ProductDelete = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.02em;
  color: #1D8DE1;
  border-bottom: 1px solid #1D8DE1;
`

const ProductPrice = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #111114;
  position:absolute;
  right:24px;

`

const ProductCounter = styled.div`
position:absolute;
right:24px;
top:58px;
`

const CounterMinus = styled.div`
  margin-right:8px;
`

const Counter = styled.div`
  font-weight: 500;
  font-size: 32px;
  line-height: 36px;
  letter-spacing: -0.02em;
  color: #111114;
  border: 1px solid rgba(17, 17, 20, 0.06);
  border-radius: 6px;
  padding:14px 20px;
  margin-right:8px;
`

const CounterPlus = styled.div`
`

const Overall = styled.div`
  border: 1px solid rgba(17, 17, 20, 0.08);
  border-radius: 8px;
  height:min-content;
`

const OverallTitle = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: right;
  letter-spacing: 0.02em;
  color: #111114;
`

const OverallPrice = styled.div`
  font-weight: 500;
  font-size: 32px;
  line-height: 36px;
  text-align: right;
  letter-spacing: -0.02em;
  color: #111114;
  margin-bottom:24px;
`

const OverallButton = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  background: #652D86;
  border: 1px solid #111114;
  border-radius: 6px;
  width:264px;
  padding:16px 0;  
`

const EmptyTitle = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #111114;
  text-align: center;
  margin-top:28px;
  margin-bottom:8px;
`

const EmptyText = styled.div`
font-weight: 400;
font-size: 14px;
line-height: 20px;
text-align: center;
color: rgba(17, 17, 20, 0.64);
`

const Basket = () => {
  const products = [
  
  ]
  
  return (
    <Container>
      <Title>
        Корзина
      </Title>
      <div className='d-flex'>
        {
          products.length > 0 ? 
            <>
                 <Products>
          {
            products.map(product => {
              return (
                <ProductItem className="d-flex">
                <div style={{marginRight:24}}>
                  <img src={product.img} width={96}/>
                </div>
                <div>
                  <ProductTitle>
                    {product.title}
                  </ProductTitle>
                  <ProductDelete>
                    Удалить
                  </ProductDelete>
                </div>
                <div>
                  <ProductPrice>
                    {product.price} ₸ 
                  </ProductPrice>
                  <ProductCounter className='d-flex align-items-center'>
                    <CounterMinus>
                      <img src="images/minus.png"/>
                    </CounterMinus>
                    <Counter>
                      {product.counter}
                    </Counter>
                    <CounterPlus>
                      <img src="images/plus.png"/>
                    </CounterPlus>
                  </ProductCounter>
                </div>
              </ProductItem>
              )
            })
          }
        </Products>
        <Overall>
          <div style={{padding:32}}>
            <OverallTitle>
              Итого к оплате:
            </OverallTitle>
            <OverallPrice>
              816 000 ₸
            </OverallPrice>
            <OverallButton>
              Оформить заказ
            </OverallButton>
          </div>
        </Overall>
            </>  :
            <>
              <div className='text-center w-100 mt-5'>
                  <div >
                    <img src="images/cart.svg" width={48}/>
                  </div>
                  <EmptyTitle>
                    Вы пока ничего не добавили в корзину
                  </EmptyTitle>
                  <EmptyText>
                    В нашем магазине есть множество товаров, которые вам могут заинтересовать!
                  </EmptyText>
              </div>
            </>

        }
       
      </div>
    </Container>
  )
}

export default Basket