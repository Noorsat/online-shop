import React from 'react'
import Banner from '../components/Banner'
import Form from '../components/Form'
import Slider from '../components/Slider'
import Top from '../components/Top'

const Home = () => {
  return (
    <div>
        <Banner title="Главная" text="Ваш магазин на связи 24/7" img="home" />
        <Slider title="Продукты" text="Подберите лучшие девайсы у нас" sliderData={["Телефоны", "Планшеты", "Холодильники", "Наушники"]}/>
        <Top title="Смартфоны" text="Топовые предложения" isButton={true}/>
        <Form />
    </div>
  )
}

export default Home