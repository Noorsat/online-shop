import React, {useState} from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { leaveAccount } from '../redux/actions/userActions'
import { Modal } from 'antd'
import { leaveAdmin } from '../redux/actions/adminActions'

const Container = styled.div`
    max-width:1320px;
    margin: 0 auto;  
`

const Logo = styled.div`
    a{
        font-size:20px;
        color:#652D86;
        font-weight:700;
        text-decoration:none;
    }
`

const LoginText = styled.div`
    a{
        font-weight: 500;
        font-size: 14px;
        letter-spacing: 0.02em;
        color: #111114;
        margin-top:3px;
        text-decoration:none;
    }
` 

const Nav = styled.nav`
    li{
        color:#111114;
        letter-spacing: 0.02em;
        font-size:14px;
        font-weight:500;
        line-height: 20px;
    }
    a{
        text-decoration:none;
    }
`

const ModalStyled = styled(Modal)`
max-width:100%!important;
.ant-modal-header{
    display:none;
  }
  .ant-modal-footer{
    display: none;
  }
  .ant-modal-close-x{
    display: none!important;
  }
  .ant-modal{
    max-width:100%!important;
    width:100%!important;
  }
  .ant-modal-body{
    max-width:1320px!important;
    margin:0 auto!important;
    padding:0!important;
  }
`


const NavBar = () => {
    const isLogin = useSelector(state => state.user.isAuth);
    const isAdminLogin = useSelector(state => state.admin.isLogin)

    const dispatch = useDispatch()

    const loginHandler = () => {
        if (isLogin){
            localStorage.removeItem("token")
            dispatch(leaveAccount())
            dispatch(leaveAdmin())
        }
    }

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };

    const Wrapper = styled.div`
    position:fixed;
    background:#fff;
    width:100%;
    max-width:100%!important;
    z-index:${ isModalVisible ? "10000000": "100" };
    padding:16px 0;
   
` 
  return (
      <Wrapper>
           <ModalStyled title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} style={{top:80}} footer={[]} width="100%">
                <div style={{maxWidth:1320, paddingTop:20, paddingBottom:20}} className="d-flex align-items-center justify-content-between">
                    <div className='d-flex'>
                        <div className='me-3'>
                            <img src="images/search.svg" />
                        </div>
                        <div>   
                            <input placeholder="Искать..." style={{border:"none", outline:"none", marginTop:1, width:500}} value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                        </div>
                    </div>
                    <div>
                        <img src="images/subtract.svg" onClick={() => setSearchValue("") }/>
                    </div>
                </div>
            </ModalStyled>
    <Container className='d-flex justify-content-between align-items-center'>
        <Logo>
            <NavLink to="/">Valde</NavLink>
        </Logo>
        <Nav className='d-flex align-items-center mt-3'>
            <ul className='d-flex align-items-center' style={{listStyle:"none"}}>
                <NavLink to="/shop"><li className='me-3'>Магазин</li></NavLink>
                <NavLink to="/contact"><li>Контакты</li></NavLink>
                {isAdminLogin && <NavLink to="/admin" className="ms-3"><li>Админ панель</li></NavLink>}
            </ul>
        </Nav>
        <div className='d-flex align-items-center'>
            <div className='me-4' onClick={showModal}>
                <img src="images/search.svg" />
            </div>
            <div className='me-4'>
                <NavLink to="/basket"><img src="images/cart.svg" /></NavLink>
            </div>            
            <div className='d-flex align-items-center'>
                <div className='me-2'>
                    <NavLink to="/login"><img src="images/login.svg" /></NavLink>
                </div>
                <LoginText>
                    <NavLink to="/login" onClick={loginHandler}>{isLogin ? "Выйти" :  "Войти"}</NavLink>
                </LoginText>
            </div>
        </div>
    </Container>
    </Wrapper>
  )
}

export default NavBar;