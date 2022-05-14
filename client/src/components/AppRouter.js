import React from 'react'
import {Routes, Route, Redirect} from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'
import { SHOP_ROUTE } from '../utils/consts';
import { useSelector } from 'react-redux'
import Auth from '../pages/Auth';

const AppRouter = () => {
  const isAuth = useSelector(state => state.user.isAuth);

  return (
    <Routes>
        {
          authRoutes.map(({path, Component}) => 
            <Route key={path} path={path} element={isAuth ? <Component/> : <Auth />} exact />
          )  
        }
        {
          publicRoutes.map(({path, Component}) => 
            <Route key={path} path={path} element={<Component />} exact />
          )  
        }
        <Route to={SHOP_ROUTE} />
    </Routes>
  )
}

export default AppRouter