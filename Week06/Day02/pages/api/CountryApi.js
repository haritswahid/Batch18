import axios from "axios";
import config from "../config/config";

const list = async () => {
    try {
        // console.log('asdasdasd');
        const result = await axios.get(`${config.domain}/api/country/`)
        return result.data
    } catch (error) {
        return await error.message
    }
}
const create = async (payload) => {
    try {
        // for (var [key, value] of payload.entries()) { 
        //     console.log(key, value);
        //    }
        const result = await axios.post(`${config.domain}/api/country/`, payload)
        return result
    } catch (error) {
        return await error.message
    }
}
const get = async (payload) => {
    try {
        const result = await axios.get(`${config.domain}/api/country/${payload}`)
        return result.data
    } catch (error) {
        return await error.message
    }
}
const update = async (payload) => {
    const id = payload.countryId
    try {
        const result = await axios.put(`${config.domain}/api/country/${id}`, payload)
        return result
    } catch (error) {
        return await error.message
    }
}
const remove = async (id) => {
    try {
        const result = await axios.delete(`${config.domain}/api/country/${id}`)
        return result
    } catch (error) {
        return await error.message
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { list, create, get, update, remove }
