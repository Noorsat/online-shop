import React, { useEffect} from 'react'
import { useSelector } from 'react-redux'
import Advertising from '../components/Advertising'
import Banner from '../components/Banner'
import Carousel from '../components/Carousel'
import Category from '../components/Category'
import Top from '../components/Top'

const Shop = () => {
  const types = useSelector(state => state.types.types)
  const brands = useSelector(state => state.brands.brands)
  const devices = useSelector(state => state.devices.devices)


  const shopData = 
    [
      {
        img: "images/product-1.png",
        priceString: "430,990",
        price:430990,
        title:"iPhone 12 Pro",
      },
      {
        img: "images/product-1.png",
        priceString: "430,990",
        price:430990,
        title:"iPhone 12 Pro",
      },
      {
        img: "images/product-1.png",
        priceString: "430,990",
        price:430990,
        title:"iPhone 12 Pro",
      },
      {
        img: "images/product-1.png",
        priceString: "430,990",
        price:430990,
        title:"iPhone 12 Pro",
      },
      {
        img: "images/product-1.png",
        priceString: "430,990",
        price:430990,
        title:"iPhone 12 Pro",
      },
      {
        img: "images/product-1.png",
        priceString: "430,990",
        price:430990,
        title:"iPhone 12 Pro",
      },
      {
        img: "images/product-1.png",
        priceString: "430,990",
        price:430990,
        title:"iPhone 12 Pro",
      },
      {
        img: "images/product-1.png",
        priceString: "430,990",
        price:430990,
        title:"iPhone 12 Pro",
      }
    ]

  return (
    <div>
        <Banner title="Магазин" img="shop"/>
        <Category data={types} />
        <Top title="Скидки, акции и выгодные условия контракта"  text="Топ предложения" isButton={false}/>
        <Advertising />
        <Carousel shopData={devices && devices.rows}/>
    </div>
  )
}

export default Shop