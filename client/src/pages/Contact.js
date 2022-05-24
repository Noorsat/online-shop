import React from 'react'
import Banner from '../components/Banner'
import styled from 'styled-components'

const Container = styled.div`
  max-width:1320px;
  margin: 0 auto;  
`

const Title = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: rgba(17, 17, 20, 0.48);
  margin-bottom:16px;
`

const Text = styled.div`
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.02em;
    color: #1D8DE1;
    border-bottom: 1px dashed #1D8DE1;
    margin-left:14px;
    margin-bottom:8px;
`

const Contact = () => {
  return (
    <Container>
        <Banner title="Контакты" img="contact" />
        <div className='d-flex mt-5'>
          <div className='me-5'>
            <Title>
              Телефон
            </Title>  
            <a className='d-flex'>
              <div>
                <img src="images/call.svg"/>
              </div>
              <Text>
                +7 777 777 77 77 
              </Text>
            </a>
          </div>
          <div className='me-5'>
            <Title>
              Электронная почта
            </Title>  
            <div>
              <a className='d-flex'>
                <div>
                  <img src="images/mail.svg"/>
                </div>
                <Text>
                  Написать нам
                </Text>
              </a>
              <a className='d-flex'>
                <div>
                  <img src="images/whatsapp.svg"/>
                </div>
                <Text>
                  WhatsApp
                </Text>
              </a>
              <a className='d-flex'>
                <div>
                  <img src="images/telegram.svg"/>
                </div>
                <Text>
                Telegram
                </Text>
              </a>
            </div>
          </div>
          <div>
            <Title>
              подпишитесь на нас
            </Title>  
            <div>
              <a className='d-flex'>
                <div>
                  <img src="images/instagram.svg"/>
                </div>
                <Text>
                  Instagram
                </Text>
              </a>
              <a className='d-flex'>
                <div>
                  <img src="images/facebook.svg"/>
                </div>
                <Text>
                  Facebook
                </Text>
              </a>
              <a className='d-flex'>
                <div>
                  <img src="images/youtube.svg"/>
                </div>
                <Text>
                  Youtube
                </Text>
              </a>
              <a className='d-flex'>
                <div>
                  <img src="images/twitter.svg"/>
                </div>
                <Text>
                  Twitter
                </Text>
              </a>
              <a className='d-flex'>
                <div>
                  <img src="images/linkedin.svg"/>
                </div>
                <Text>
                  LinkedIn
                </Text>
              </a>
            </div>
          </div>
        </div>
        <div className='mt-5 pb-4' >
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.7764523464098!2d76.9097448!3d43.2351464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3883692f027581ad%3A0x2426740f56437e63!2z0JzQtdC20LTRg9C90LDRgNC-0LTQvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDQuNC90YTQvtGA0LzQsNGG0LjQvtC90L3Ri9GFINGC0LXRhdC90L7Qu9C-0LPQuNC5!5e0!3m2!1sru!2skz!4v1652623919850!5m2!1sru!2skz" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </Container>
  )
}

export default Contact