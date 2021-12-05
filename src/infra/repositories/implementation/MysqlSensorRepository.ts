import { pool } from '@/infra/repositories/implementation/poolConnection'
import { ISensorsRepository } from '@/infra/repositories/contracts/ISensorsRepository'
import { Sensor } from '@/domain/entities/Sensor'
import { ISensor } from '@/domain/entities/ISensor'
import { ErrorREST } from '@/domain/errors/errorRest';
import { functionFindByDescription } from '../helpers/findByDescription';
import { foreignKeyManager } from '../helpers/foreignKeyManager';


export class MysqlSensorRepository implements ISensorsRepository{
    async save(sensor: Sensor): Promise<any> {
      try {
        const gapId = await foreignKeyManager({
          targetTable: 'gaps',
          tableColumns: {
            description: sensor.gap
          }
        })

        const situationId = await foreignKeyManager({
          targetTable: 'situations',
          tableColumns: {
            description: sensor.situation
          }
        })

        const entite = {
          description: sensor.description,
          device: sensor.device,
          id_gap: gapId,
          id_situation: situationId
        }
        await pool.query(`INSERT INTO sensors SET ?`, entite);
    
      } catch (error) {
          console.log(error)
          throw new Error 
      }
    }

    async findByDescription(description: string): Promise<any> {
      try {
        return await functionFindByDescription('sensors', description)
        
      } catch (error: any) {
        console.log(error)
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
            gaps.description AS gap 
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
