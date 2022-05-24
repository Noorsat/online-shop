import { $authHost, $host } from "."

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
}

export const fetchDevices = async () => {
    const {data} = await $host.get("api/device/?limit=100")
    return data
}

export const fetchOneDevice = async (id) => {
    const {data} = await $host.get("/api/device/" + id)
    return data;
}

export const deleteType = async (id) => {
    const {data} = await $host.delete("api/type/?id=" + id)
}

export const deleteBrand = async (id) => {
    const {data} = await $host.delete("api/brand/?id=" + id)
}

export const deleteDevice = async (id) => {
    const {data} = await $host.delete("api/device/?id=" + id)
}
