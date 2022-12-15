import axios from "axios";
import config from "../config/config";

const list = async () => {
    const result = await axios.get(`${config.domain}/api/job-history/`)
    return result.data
}
const create = async (payload) => {
    console.log(payload)
    const result = await axios.post(`${config.domain}/api/job-history/`, payload)
    return result
}

// eslint-disable-next-line import/no-anonymous-default-export
export { list, create, }
