import  mysql2 from 'mysql2/promise'
import dbConfig from '../../config/dbConfig'
import { IReading } from "@/entities/IReading";
import { IReadingRepository } from "../IReadingRepository";

const pool = mysql2.createPool({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    database: dbConfig.DB,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  })
  

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