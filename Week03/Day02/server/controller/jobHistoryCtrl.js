import { sequelize } from "../models/init-models"

const findAll = async (req,res)=>{
    try {
        const job_history = await req.context.models.job_history.findAll()
        return res.send(job_history)
    } catch (error) {
        return res.status(404).send(error)
    }
}
// const findOne = async (req,res)=>{
//     try {
//         const job_history = await req.context.models.job_history.findOne({
//             where:{job_history_id : req.params.id}
//         })
//         return res.send(job_history)
//     } catch (error) {
//         return res.status(404).send(error)
//     }
// }

const create = async (req,res)=>{
    try {
        const job_history = await req.context.models.job_history.create({
            employee_id : req.body.employee_id,
            start_date : req.body.start_date,
            end_date : req.body.end_date,
            job_id : req.body.job_id,
            department_id : req.body.department_id,
        })
        return res.send(job_history)
    } catch (error) {
        return res.status(404).send(error)
    }
}

// const update = async (req,res)=>{
//     console.log();
//     try {
//         const job_history = await req.context.models.job_history.update({
//             job_history_name : req.body.job_history_name,
//             region_id : req.body.region_id
//         },{ returning : true , where:{job_history_id : req.params.id}})
//         return res.send(job_history)
//     } catch (error) {
//         return res.status(404).send(error)
//     }
// }

// const deleted = async (req,res)=>{
//     try {
//         const job_history = await req.context.models.job_history.destroy({
//             where:{job_history_id : req.params.id}
//         })
//         return res.send('delete '+job_history+' rows')
//     } catch (error) {
//         return res.status(404).send(error)
//     }
// }

// const querySQL = async(req,res)=>{
//     try {
//         await sequelize.query('SELECT * from job_history where job_history_id = :job_historyId',
//         {replacements : {job_historyId : req.params.id},type : sequelize.QueryTypes.SELECT})
//         .then(result =>{
//             return res.send(result)
//         })
//     } catch (error) {
//         return res.status(404).send(error)
//     }
// }

export default {
    findAll,
    // findOne,
    create,
    // update,
    // deleted,
    // querySQL
}