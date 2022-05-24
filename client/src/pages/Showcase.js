import React, {useState} from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import { Pagination } from 'antd';
import { useSelector } from 'react-redux';

const Container = styled.div`
    max-width:1320px;
    margin: 0 auto; 
    padding-top:84px;
    padding-bottom:30px;
`   

const Type = styled.div`
    white-space: nowrap; 
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.02em;
    color: #111114;
    cursor:pointer;
    padding-bottom:20px;
    &.active{
        color: #652D86;
        border-bottom: 2px solid #652D86;
        padding-bottom:1px;
    }
`

const XRow = styled.div`
   overflow-x:auto;
   border-top: 1px solid rgba(17, 17, 20, 0.08);
   border-bottom: 1px solid rgba(17, 17, 20, 0.08);
   padding-top:20px;
`


  const Title = styled.div`
      font-weight: 500;
      font-size: 48px;
      line-height: 56px;
      letter-spacing: -0.04em;
      color: #111114;
      margin-top:48px;
      margin-bottom:64px;
  `

  const Filter = styled.div`
      width:266px;
      margin-left:24px;
      border-top: 1px solid rgba(17, 17, 20, 0.08);
  `

  const FilterTitle = styled.div`
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.02em;
      padding-top:20px;
      margin-bottom:16px;
  `

  const Checkbox = styled.div`
      input{
          -webkit-appearance: none;
          width:20px;
          height:20px;
          border: 1px solid rgba(17, 17, 20, 0.48);
          border-radius: 4px;
      }
  `

  const FilterText= styled.div`
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.02em;
      color: #111114;
  `


const Showcase = () => {
  const types = useSelector(state => state.types.types)
  const brands = useSelector(state => state.brands.brands)
  const devices = useSelector(state => state.devices.devices)

  const  [showcaseTitle, setShowcaseTitle] = useState(types && types[0]);
  const [selectedItems, setSelectedItems] = useState();

  const typeHandler = (title) => {
        setShowcaseTitle(title)
        setSelectedItems(devices.rows.filter(item => item.typeId === title.id))
  }

  console.log(devices)

  return (
    <Container>
        <XRow className='d-flex gap-3 align-items-center'>
            {
              types &&
                types.map(showcase => (
                    <Type className={showcase.selected && 'active'} onClick={() => typeHandler(showcase)}>
                        {showcase.name}
                    </Type>
                ))   
            }
        </XRow>
        <div>
                    <>
                    <Title>
                        {
                             showcaseTitle && showcaseTitle.name  
                        }    
                    </Title>
                    <div className='d-flex'>  
                        <div className='d-flex flex-wrap' style={{border: "1px solid rgba(17, 17, 20, 0.08)", borderRadius:6}}>
                          { devices && showcaseTitle ? 
                              devices.rows.map(item => (
                                item.typeId === showcaseTitle.id &&
                                  <div style={{borderBottom:"1px solid rgba(17, 17, 20, 0.08)"}}>
                                    <Card product={item} />
                                  </div>
                              ))  : ""
                          }
                            <Pagination defaultCurrent={1} total={50} style={{textAlign:"center", width:"100%"}} className="mt-5 pb-5"/>
                        </div>
                        <div> 
                           <Filter>
                                <FilterTitle>
                                    Brand
                                </FilterTitle>
                                  {
                                    brands && 
                                      brands.map(item => (
                                        <div className='d-flex mb-2'>
                                          <Checkbox className='me-3'>
                                              <input type="checkbox" />
                                          </Checkbox>
                                          <FilterText>
                                              {item.name}
                                          </FilterText>
                                        </div>
                                      ))
                                  } 
                            </Filter>
                        </div>
                    </div>
                    </>
        </div>
    </Container>
  )
}

export default Showcase