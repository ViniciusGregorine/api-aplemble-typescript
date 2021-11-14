import {pool} from '@/infra/repositories/implementation/poolConnection'
import { IPlace } from '@/domain/entities/IPlace'
import {IPlaceRepository} from '@/infra/repositories/contracts/IPlaceRepository'



export class MysqlPlaceRepository implements IPlaceRepository{
  async getAllPlace(): Promise<any>{
    try{
      const [rows] =  await pool.query<IPlace[]>(
        `SELECT places.id, 
          places.description, 
          places.note, 
          places.sensor_temp, 
          places.sensor_humi, 
          places.lim_temperature, 
          materials.description AS material, 
          dimensions.height, 
          dimensions.width, 
          dimensions.length  
          FROM places 
          INNER JOIN dimensions ON places.id_dimension = dimensions.id 
          INNER JOIN materials ON places.id_material = materials.id;`, []);   
      return rows

    }catch (err: any){
      throw new Error(err)
      
    }
  }
}