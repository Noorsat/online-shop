import React, {useState} from 'react';
import { Nav, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createBrand, createDevice, createType, deleteType, deleteBrand, deleteDevice } from '../http/deviceAPI';
import { fetchBrandsLocal } from '../redux/actions/brandActions';

const Admin = () => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("device")

  const [device, setDevice] = useState(
    {
       name:"",
       price:0,
       img:"",
       brandId:0,
       typeId:0 
    }
  )

  const [type, setType] = useState({
    name:"",
    img:""
  })

  const [brand, setBrand] = useState({
    name:""
  })


  const types = useSelector(state => state.types.types)
  const brands = useSelector(state => state.brands.brands)
  const devices = useSelector(state => state.devices.devices)

  const deviceHandler = (e) => {
      e.preventDefault()
      const formData = new FormData()
      formData.append('name', device.name)
      formData.append('price', `${device.price}`)
      formData.append('img', device.img)
      formData.append("typeId",  device.typeId)
      formData.append("brandId", device.brandId)
      createDevice(formData)
  }

  const typeHandler = (e) => {
    e.preventDefault()
    const formData = new FormData() 
    formData.append("name", type.name) 
    formData.append("img", type.img)
    createType(formData)
  } 

  const brandHandler = (e) => {
    e.preventDefault()
    createBrand(brand)
  }

  const deleteDeviceHandler = (id) => {
    deleteDevice(id)
  } 

  const deleteTypeHandler = (id) => {
    deleteType(id)
  }

  const deleteBrandHandler = (id) => {
   deleteBrand(id)
  }

  console.log(device)
  return (
    <div style={{paddingTop:100, maxWidth:1350, margin:"0 auto"}} className="d-flex">
      <div className="me-5">
        <Nav className="flex-column" style={{border:"1px solid rgba(17, 17, 20, 0.08)", borderRadius:6, paddingRight:30, paddingBottom:100}}>
          <Nav.Link onClick={() => setSelected("device")}>????????????????</Nav.Link>
          <Nav.Link onClick={() => setSelected("type")}>????????</Nav.Link>
          <Nav.Link onClick={() => setSelected("brand")}>????????????</Nav.Link>
        </Nav>
      </div>
      <div>
      <div style={{border:"1px solid rgba(17, 17, 20, 0.08)", borderRadius:6, padding:30}} className="d-flex gap-3">
        {
           selected === "device" &&   <>
        <div style={{borderRight:"1px solid rgba(17, 17, 20, 0.08)", paddingRight:20, marginRight:20}}>
          <h5>???????????????? ????????????</h5>
          <Form onSubmit={(e) => deviceHandler(e)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>????????????????</Form.Label>
            <Form.Control type="text" placeholder="????????????????" value={device.name} onChange={(e) => setDevice({...device, name: e.target.value})} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>????????</Form.Label>
            <Form.Control type="text" placeholder="????????" onChange={(e) => setDevice({...device, price: Number(e.target.value)})}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>????????????????</Form.Label>
            <Form.Control type="text" placeholder="????????????????" value={device.img} onChange={(e) => setDevice({...device, img: e.target.value})} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>??????????</Form.Label>
            <Form.Select aria-label="Default select example" onChange={(e) => setDevice({...device, brandId: Number(e.target.value)})} value={device.brandId}>
              <option selected disabled hidden>??????????</option>
              {
                brands && brands.map(item => (
                  <option value={item.id}>{item.name}</option>
                ))          
              }
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>????????</Form.Label>
            <Form.Select aria-label="Default select example" onChange={(e) => setDevice({...device, typeId: Number(e.target.value)})}  value={device.typeId}>
              <option selected disabled hidden>????????</option>
              {
                types && types.map(item => (
                  <option value={item.id}>{item.name}</option>
                ))          
              }
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit">
            ??????????????
          </Button>
        </Form>
        </div>
        <div>
          <h5>?????????????? ????????????</h5>
          { devices && 
            devices.rows.map(item => {
              return (
                <div style={{border:"1px solid rgba(17, 17, 20, 0.08)", borderRadius:6, padding:10}} className="mb-5 d-flex align-items:center">
                  <div className='me-3'>
                    <p><b>????????????????:</b> {item.name }</p>
                    <p><b>????????:</b> {item.price }</p>
                    <p><b>??????????:</b> {item.brandId}</p>
                    <p><b>??????:</b> {item.typeId}</p>
                  </div>
                  <div className='mt-2'>
                    <Button variant="danger" onClick={() => deleteDeviceHandler(item.id)}>??????????????</Button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </>
        }
        {
          selected === "type" && 
          <>
          <div style={{borderRight:"1px solid rgba(17, 17, 20, 0.08)", paddingRight:20, marginRight:20}}>
            <h5>???????????????? ??????</h5>
            <Form onSubmit={(e) => typeHandler(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>????????????????</Form.Label>
              <Form.Control type="text" placeholder="????????????????" value={type.name} onChange={(e) => setType({...type, name: e.target.value})} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>????????????????</Form.Label>
              <Form.Control type="text" placeholder="????????????????" value={type.img} onChange={(e) => setType({...type, img: e.target.value})} />
            </Form.Group>
            <Button variant="primary" type="submit">
              ??????????????
            </Button>
          </Form>
          </div>
          <div>
            <h5>?????????????? ??????</h5>
            { types && 
              types.map(item => {
                return (
                  <div style={{border:"1px solid rgba(17, 17, 20, 0.08)", borderRadius:6, padding:10}} className="mb-5 d-flex align-items-center">
                    <div className='me-3'>
                      <p><b>????????????????:</b> {item.name }</p>
                    </div>
                    <div className=''>
                      <Button variant="danger" onClick={() => deleteTypeHandler(item.id)}>??????????????</Button>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </>
        }
        {
          selected === "brand" && 
          <>
          <div style={{borderRight:"1px solid rgba(17, 17, 20, 0.08)", paddingRight:20, marginRight:20}}>
            <h5>???????????????? ??????????</h5>
            <Form onSubmit={(e) => brandHandler(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>????????????????</Form.Label>
              <Form.Control type="text" placeholder="????????????????" value={brand.name} onChange={(e) => setBrand({...brand, name: e.target.value})} />
            </Form.Group>
            <Button variant="primary" type="submit">
              ??????????????
            </Button>
          </Form>
          </div>
          <div>
            <h5>?????????????? ??????</h5>
            { brands && 
              brands.map(item => {
                return (
                  <div style={{border:"1px solid rgba(17, 17, 20, 0.08)", borderRadius:6, padding:10}} className="mb-5 d-flex align-items-center">
                    <div className='me-3'>
                      <p><b>????????????????:</b> {item.name }</p>
                    </div>
                    <div className=''>
                      <Button variant="danger" onClick={() => deleteBrandHandler(item.id)}>??????????????</Button>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </>
        }
      </div>
    </div>
    </div>
  )
}

export default Admin;