import {pool} from '@/infra/repositories/implementation/poolConnection'
import { IReading, ITypeReading, ReadingEntity } from '@/domain/entities/IReading'
import { IReadingRepository } from '../contracts/IReadingRepository'
import { functionFindByDescription } from '../helpers/findByDescription';


export class MysqlReadingRepository implements IReadingRepository{
  async getAllReading(): Promise<any>{
    try{
      const [rows] =  await pool.query<IReading[]>(
          "SELECT * FROM `readings`", []);   
      return rows

    }catch (err){
      console.log('an unspect error' + err)
    }
  }

  async GetReadingByPlaceId(id: number): Promise<any>{
    try{
      const [rows] = await pool.query<any>(
        `SELECT readings.id, readings.value, readings.date, readings.hour,  type_readings.description as type_reading, type_readings.prefix, readings.id_sensor FROM readings INNER JOIN type_readings ON readings.id_type_reading = type_readings.id WHERE readings.id_place= ${id} ORDER BY type_readings.description ASC`
      )

      if(rows.length === 0) return [{massege: "no data"}]
      
      return rows

    }catch(err){
      console.error('opss ' + err)
      return err

    }
  }

  async save(reading: ReadingEntity): Promise<any> {
    try {
      await pool.query(`INSERT INTO readings SET ?`, reading);
  
    } catch (error: any) {
        console.log(error)
        throw new Error(error.sqlMessage) 
    }
  }
  async GetTypeReading(): Promise<ITypeReading[]>{
    try {
      const [rows] = await pool.query<ITypeReading[]>('SELECT * FROM type_readings;')

      return rows;
    } catch (err: any) {
      throw new Error(err.sqlMessage)
    }
  }

  async findTypeReadingByDescription(description: string): Promise<any> {
    try {
      return await functionFindByDescription('type_readings', description)
      
    } catch (error: any) {
      console.log(error)
      throw new Error(error.sqlMessage)
    }
  }
  async deleteTypeReading(typeReading: string): Promise<void> {
    try {
      await pool.query('DELETE FROM `type_readings` WHERE `description` = ?', [typeReading]);

    } catch (error: any) {
      console.log(error)
      throw new Error(error.sqlMessage)
    }
  }
  async saveTypeReading(typeReading: ITypeReading): Promise<any> {
    try {
      await pool.query(`INSERT INTO type_readings SET ?`, typeReading)

    } catch (error: any) {
        console.log(error)
        throw new Error(error.sqlMessage)   
    }
  }
}