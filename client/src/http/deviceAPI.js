import { $authHost, $host } from "."
import { useDispatch } from 'react-redux';



export const createType =  async (type) => {
    const {data} = await $authHost.post("api/type", type)   
}

export const fetchTypes = async () => {
    const {data} = await $host.get("api/type")
    return data
}

export const createBrand =  async (brand) => {
    const {data} = await $authHost.post("api/brand", brand)   
}

export const fetchBrand = async () => {
    const {data} = await $host.get("api/brand")
    return data
}

export const createDevice =  async (device) => {
    const {data} = await $authHost.post("api/device", device)   
    console.log(data)
}

export const fetchDevices = async () => {
    const {data} = await $host.get("api/device/?limit=17")
    return data
}

export const fetchOneDevice = async (id) => {
    const {data} = await $host.get("/api/device/" + id)
    return data;
}
