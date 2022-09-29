
import 'dotenv/config'

const config = {
    env : process.env.NODE_ENV || 'dev',
    port : process.env.PGPORT,
    db_name : process.env.PGDATABASE,
    db_username : process.env.PGUSER,
    db_password : process.env.PGPASSWORD
}
export default config