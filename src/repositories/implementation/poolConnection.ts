import  mysql2 from 'mysql2/promise'
import dbConfig from '../../config/dbConfig'


export const  pool = mysql2.createPool({
            host: dbConfig.HOST,
            user: dbConfig.USER,
            database: dbConfig.DB,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
          })
          