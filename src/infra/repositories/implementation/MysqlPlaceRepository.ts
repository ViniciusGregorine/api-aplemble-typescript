import {pool} from '@/repositories/implementation/poolConnection'
import { IPlace } from '@/entities/IPlace'
import {IPlaceRepository} from '@/repositories/contracts/IPlaceRepository'



export class MysqlPlaceRepository implements IPlaceRepository{
  async getAllPlace(): Promise<any>{
    try{
      const [rows] =  await pool.query<IPlace[]>(
          "SELECT * FROM `places`", []);   
      return rows

    }catch (err){
      throw new Error(err)
    }
  }
}