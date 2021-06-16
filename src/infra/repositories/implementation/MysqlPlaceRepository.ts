import {pool} from '@/infra/repositories/implementation/poolConnection'
import { IPlace } from '@/domain/entities/IPlace'
import {IPlaceRepository} from '@/infra/repositories/contracts/IPlaceRepository'



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