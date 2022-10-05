
import 'dotenv/config'

const config = {
    env : process.env.NODE_ENV || 'dev',
    db_port : process.env.PGPORT,
    db_name : process.env.PGDATABASE,
    db_username : process.env.PGUSER,
    db_password : process.env.PGPASSWORD,
    port: process.env.PORT
}
export default config

// const config = {
//     env : process.env.NODE_ENV || 'dev',
//     port : 3000,
//     db_name : 'Batch#18',
//     db_username : 'postgres',
//     db_password : 'admin',
// }
// export default config