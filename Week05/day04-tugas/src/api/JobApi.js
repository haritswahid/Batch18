import axios from "axios";
import config from "../config/config";

const list = async () => {
    const result = await axios.get(`${config.domain}/api/job/`)
    return result.data
}
const create = async (payload) => {
    console.log(payload)
    const result = await axios.post(`${config.domain}/api/job/`, payload)
    return result
}
const get = async (payload) => {
    const result = await axios.get(`${config.domain}/api/job/${payload}`)
    return result
}
const update = async (payload) => {
    const result = await axios.put(`${config.domain}/api/job/${payload.jobId}`, payload)
    return result
}
const remove = async (id) => {
    const result = await axios.delete(`${config.domain}/api/job/${id}`)
    return result
}

// eslint-disable-next-line import/no-anonymous-default-export
export { list, create, get, update, remove }
