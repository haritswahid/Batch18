import axios from "axios";
import config from "../config/config";

const list = async () => {
    try {
        const result = await axios.get(`${config.domain}/api/region/`)
        return result.data
    } catch (error) {
        return await error.message
    }
}
const create = async (payload) => {
    try {
        const result = await axios.post(`${config.domain}/api/region/`, payload)
        return result
    } catch (error) {
        return await error.message
    }
}
const update = async (payload) => {
    try {
        const result = await axios.put(`${config.domain}/api/region/${payload.regionId}`, payload)
        return result
    } catch (error) {
        return await error.message
    }
}
const remove = async (id) => {
    const result = await axios.delete(`${config.domain}/api/region/${id}`)
    return result
}

export { list, create, update, remove }
