import  mysql2 from 'mysql2/promise'
import dbConfig from '../../config/dbConfig'
import { ISensorsRepository } from '../ISensorsRepository'
import { Sensor } from '@/entities/Sensor'
import { ISensor } from '@/entities/ISensor'
//import {createConnection, QueryError, RowDataPacket} from 'mysql2';

const pool = mysql2.createPool({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    database: dbConfig.DB,
    waitForConnections: true,
    connectionLimit: 1,
    queueLimit: 0
  })

  
  

export class MysqlSensorRepository implements ISensorsRepository{
    // async findByType(description:String): Promise<Sensor>{
    //   const sensor = this.sensors.find(sensor => sensor.description === description)

    //   return sensor;
    // }

    async save(sensor: Sensor): Promise<void> {
      try {
        pool.query(`INSERT INTO sensors SET ?`, sensor);
        console.log('data inserted: ', sensor)
        
      } catch (error) {
        console.log('faild to insert data: ', error)
      }
    }


    // o return any ta errado
    async getAllSensor(): Promise<any>  {
      console.log('sucessfuly DB connection')

      try {
        const [rows] =  await pool.query<ISensor[]>(
          "SELECT * FROM sensors", []);        
      return rows 
  
      } catch (error) {
        console.log('faild to insert data: ', error)
      }
    }
}
