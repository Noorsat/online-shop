import React, {useRef} from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import Card from './Card';
import "slick-carousel/slick/slick.css"; 

const Container = styled.div`
    max-width:1320px;
    margin: 0 auto; 
    margin-top:160px;
    padding-bottom:50px;
`   

const Title = styled.div`
    font-size: 20px;
    line-height: 24px;
    color: rgba(17, 17, 20, 0.48);
    margin-bottom:4px;
` 

const Text = styled.div`
    font-weight: 500;
    font-size: 36px;
    line-height: 40px;
    letter-spacing: -0.02em;
    color: #111114;
`


const Carousel = ({shopData}) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        button:false,
        arrows:false,
        autoplay:true
      };

      const sliderRef = useRef();
  return (
    <Container>
        <div className='d-flex align-items-center justify-content-between' style={{marginBottom:48}}>
            <div>
                <Title>
                    Самые последние новинки в мире смартфонов
                </Title>
                <Text>
                    Телефоны и гаджеты
                </Text>
            </div>
            <div className='d-flex align-items-center'>
                <div className='me-1' onClick={() => sliderRef.current.slickPrev()}>  
                    <img src="images/arrow-left.png"  />
                </div>    
                <div onClick={() => sliderRef.current.slickNext()}>
                    <img src="images/arrow-right.png"/>
                </div>    
            </div>
        </div>
        <Slider {...settings} ref={sliderRef}   style={{border:"1px solid rgba(17, 17, 20, 0.08)", borderRadius:6 }}>
            {
                shopData &&
                shopData.map(product => (
                    <Card product={product}/>
                ))
            }
        </Slider>
    </Container>
  )
}

export default Carousel