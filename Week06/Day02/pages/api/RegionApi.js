import axios from 'axios'
import config from '../config/config'

const List = async()=>{
    try {
        const result = await axios.get(`${config.domain}/api/region/`)
        console.log(`${config.domain}/api/region/`,result);
        const data = result.data
        return data
    } catch (error) {
        return await error.message
    }
}

const Delete = async(id)=>{
    try {
        const result = await axios.delete(`${config.domain}/api/region/${id}`)
        return result
    } catch (error) {
        return await error.message
    }
}
const Create = async(payload)=>{
    try {
        const result = await axios.post(`${config.domain}/api/region/`,payload)
        return result
    } catch (error) {
        return await error.message
    }
}
const Update = async(data)=>{
    try {
        const result = await axios.put(`${config.domain}/api/region/${data.regionId}`,data)
        return result
    } catch (error) {
        return await error.message
    }
}
const UpdateFile = async(data)=>{
    const id = parseInt(data.get('regionId'))
    try {
        const result = await axios.put(`${config.domain}/api/region/${id}`,data)
        return result
    } catch (error) {
        return await error.message
    }
}
const FindOne = async(id)=>{
    try {
        const result = await axios.get(`${config.domain}/api/region/${id}`)
        return result.data 
    } catch (error) {
        return await error.message
    }
}
export default {List,Delete,Create,Update,FindOne,UpdateFile}