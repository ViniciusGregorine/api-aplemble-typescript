import {pool} from '@/infra/repositories/implementation/poolConnection'
import { IReading } from '@/domain/entities/IReading'
import { IReadingRepository } from '../contracts/IReadingRepository'



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

  async GetReadingByPlaceId(id: string): Promise<any>{
    try{
      const [rows] = await pool.query<IReading[]>(
        `SELECT * FROM readings WHERE id_place='${id}'`, []
      )

      if(rows.length === 0) return [{massege: "no data"}]
      
      return rows

    }catch(err){
      console.error('opss ' + err)
      return err

    }
  }
}