import React from 'react'
import {useLocation} from 'react-router-dom'
import styled from 'styled-components'



const Title = styled.div`
    font-weight: 500;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -0.04em;
    color: #FFFFFF;
    padding-top:64px;
    padding-left:64px;
    margin-bottom:4px;
`

const Text = styled.div`
    font-size: 20px;
    line-height: 24px;
    color: #FFFFFF;
    padding-left:64px;

`

const Container = styled.div`
    max-width:1320px;
    margin: 0 auto;  
    height:500px;
    padding-top:30px;
`  

const Banner = ({title, text, img}) => {
  let link = useLocation().pathname;

  const Background = styled.div`
    background:url("${props => link === "/" ? "images/banner-home.png" : `images/banner-${props.image}.png`}");
    background-size:cover;
    background-position:center;
    background-repeat: no-repeat;
    background-size:100%;
    -moz-background-size: 100%; /* Firefox 3.6+ */
    -webkit-background-size: 100%; /* Safari 3.1+ и Chrome 4.0+ */
    -o-background-size: 100%;
    height:100%;
   `    
   
  return (
    <Container>
        <Background image={img}>
            <Title>
                {title}
            </Title>
            <Text>
                {text}
            </Text>
        </Background>
    </Container>
  )
}

export default Banner   