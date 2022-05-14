import { combineReducers } from "redux";
import { adminReducer } from "./adminReducer";
import { brandReducer } from "./brandRecucer";
import { deviceReducer } from "./deviceReducer";
import { typeReducer } from "./typeReducer";
import {userReducer} from './userReducer'

export const rootReducer = combineReducers({
    user: userReducer,
    brands: brandReducer,
    devices: deviceReducer,
    types: typeReducer,
    admin: adminReducer
})