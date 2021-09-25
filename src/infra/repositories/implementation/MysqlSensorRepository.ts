import { pool } from '@/infra/repositories/implementation/poolConnection'
import { ISensorsRepository } from '@/infra/repositories/contracts/ISensorsRepository'
import { Sensor } from '@/domain/entities/Sensor'
import { ISensor } from '@/domain/entities/ISensor'

//import {createConnection, QueryError, RowDataPacket} from 'mysql2';

export class MysqlSensorRepository implements ISensorsRepository{
    async save(sensor: Sensor): Promise<any> {
      try {
        await pool.query(`INSERT INTO sensors SET ?`, sensor);
        // console.log('data inserted: ', sensor)
        // console.log('alosw')
    
      } catch (error) {
          console.log(error)
          throw new Error 
      }
    }

    async findByDescription(description: string): Promise<any> {
     
      try {
        const [rows] =  await pool.query<ISensor[]>(
          "SELECT description FROM sensors", []);   

        const row = rows.find(Element => Element.description === description)
        
        return row
        
      } catch (error: any) {
        console.log('faild to insert data:', error)
        throw new error
      }
    }
    
    async getAllSensor(): Promise<any>  {
  
      try {
        const [rows] =  await pool.query<ISensor[]>(
          "SELECT * FROM sensors", []);        
      return rows 
  
      } catch (error) {
        console.log('faild to insert data: ', error)
      }
    }
}
