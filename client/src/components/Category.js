import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Title = styled.div`
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #111114;
`

const Category = ({data}) => {  
    console.log(data);
  return (
    <div className='d-flex justify-content-center flex-wrap gap-5' style={{marginTop:160, maxWidth:1320, margin:"160px auto"}}>
        {
            data && 
            data.map(item => (
                <NavLink to="/showcase">
                    <div style={{textAlign:"center"}} className="mb-3">
                        <img src={item.img} width={96} style={{borderRadius:"50% "}}/>
                    </div>
                    <Title>
                        {item.name}
                    </Title>
                </NavLink>
            ))
        }
    </div>
  )
}

export default Category