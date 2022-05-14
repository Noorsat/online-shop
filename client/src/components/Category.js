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
  return (
    <div className='d-flex justify-content-center gap-5' style={{marginTop:160}}>
        {
            data && 
            data.map(item => (
                <NavLink to="/showcase">
                    <div style={{textAlign:"center"}} className="mb-3">
                        <img src={process.env.REACT_APP_API_URL + item.img}/>
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