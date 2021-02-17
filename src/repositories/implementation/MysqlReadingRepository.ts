import {pool} from '@/repositories/implementation/poolConnection'
import { IReading } from '@/entities/IReading'
import { IReadingRepository } from '../IReadingRepository'



export class MysqlReadingRepository implements IReadingRepository{
  async getAllReading(): Promise<any>{
    try{
      const [rows] =  await pool.query<IReading[]>(
          "SELECT * FROM Readings", []);   
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