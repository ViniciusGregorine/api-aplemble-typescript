import {pool } from './poolConnection'
import { ISensorsRepository } from '../ISensorsRepository'
import { Sensor } from '@/entities/Sensor'
import { ISensor } from '@/entities/ISensor'
//import {createConnection, QueryError, RowDataPacket} from 'mysql2';


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
