import * as mysql2 from 'mysql2/promise.d'
import dbConfig from '../../config/dbConfig'

const pool = mysql2.createPool({
    host: dbConfig.HOST,
    user: dbConfig. USER,
    database: dbConfig.DB,
    waitForConnections: true,
    connectionLimit: 2,
    queueLimit: 0
  })
  

  //pooling connection
export async function execute() {
  const connection = await pool.getConnection()
  
  console.log('sucessfuly DB connection')

  connection.release()
}
 

