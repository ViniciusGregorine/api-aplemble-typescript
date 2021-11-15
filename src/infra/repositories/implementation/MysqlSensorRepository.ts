import { pool } from '@/infra/repositories/implementation/poolConnection'
import { ISensorsRepository } from '@/infra/repositories/contracts/ISensorsRepository'
import { Sensor } from '@/domain/entities/Sensor'
import { ISensor } from '@/domain/entities/ISensor'
import { ErrorREST } from '@/domain/errors/errorRest';


export class MysqlSensorRepository implements ISensorsRepository{
    async save(sensor: Sensor): Promise<any> {
      try {
        await pool.query(`INSERT INTO sensors SET ?`, sensor);
    
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
        throw new ErrorREST(error)
      }
    }
    
    async getAllSensor(): Promise<any>  {
  
      try {
        const [rows] =  await pool.query<ISensor[]>(
          `SELECT  
            sensors.id, 
            sensors.description, 
            sensors.installation_date, 
            sensors.device, 
            situations.description AS situation, 
            gaps.description AS second_gap 
        FROM sensors 
        INNER JOIN situations ON sensors.id_situation = situations.id 
        INNER JOIN gaps ON id_gap = gaps.id;`, []);        
      return rows 
  
      } catch (error) {
        console.log('faild to insert data: ', error)
      }
    }
  
    async deleteSensor(sensor: number | string): Promise<void> {
      try {
        await pool.query('DELETE FROM `sensors` WHERE `description` = ?', [sensor]);

      } catch (error: any) {
        console.log(error)
        throw new Error(error)
      }
    }
}
