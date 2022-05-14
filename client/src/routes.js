import Showcase from './pages/Showcase'
import Admin from './pages/Admin'
import Auth from './pages/Auth'
import Basket from './pages/Basket'
import Contact from './pages/Contact'
import DevicePage from './pages/DevicePage'
import Home from './pages/Home'
import Shop from './pages/Shop'
import { ADMIN_ROUTE, BASKET_ROUTE, CONTACT_ROUTE, DEVICE_ROUTE, HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, SHOP_SHOWCASE_ROUTE } from './utils/consts'
import Registration from './pages/Registration'

export const authRoutes = [
    {
        path:ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
] 

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path:SHOP_ROUTE,
        Component:Shop
    },
    {
        path:LOGIN_ROUTE,
        Component:Auth
    },
    {
        path:CONTACT_ROUTE,
        Component: Contact
    },
    {
        path:REGISTRATION_ROUTE,
        Component:Registration
    },
    {
        path: SHOP_SHOWCASE_ROUTE,
        Component: Showcase
    },    
    {
        path:DEVICE_ROUTE + "/:id",
        Component:DevicePage    
    },
]