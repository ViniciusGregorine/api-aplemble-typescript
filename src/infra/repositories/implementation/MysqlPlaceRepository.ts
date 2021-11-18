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
  async save(place: IPlace): Promise<void>{
        try {
          let materials = await pool.query<any>(`SELECT materials.id FROM materials WHERE materials.description = '${place.material}'`)
          let material = materials[0][0]

          if(!material) {
            await pool.query<any>(`INSERT INTO materials (description) VALUES ("${place.material}")`)
            this.save(place)
          }

          const entite = {
            description: place.description,
            note: place.note,

            sensor_temp: place.sensor_temp || 0,
            sensor_humi: place.sensor_humi || 0,
            lim_temperature: place.lim_demperature,
            
            id_material: material.id,
            id_dimension: place.id_dimension,

            id_user: 1
          }

         await pool.query(`INSERT INTO places SET ?`, entite)
  
        } catch (error) {
            console.log(error)
            throw new Error 
        }
      }
  
}