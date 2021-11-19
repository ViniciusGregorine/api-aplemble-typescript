import {pool} from '@/infra/repositories/implementation/poolConnection'
import { IPlace } from '@/domain/entities/IPlace'
import {IPlaceRepository} from '@/infra/repositories/contracts/IPlaceRepository'
import { foreignKeyManager } from '../helpers/foreignKeyManager'
import { functionFindByDescription } from '../helpers/findByDescription';
import { Place } from '@/domain/entities/Place';

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


  async findByDescription(description: string): Promise<string>{
    return await functionFindByDescription('places', description)
  }

  async save(place: Place): Promise<void>{
        try {

          const materialId = await foreignKeyManager({
            targetTable: 'materials',
            tableColumns: {
             description: place.material
            }
          })

          const dimensionId = await foreignKeyManager({
            targetTable: 'dimensions',
            tableColumns: {
              height: place.height,
              length: place.length,
              width: place.width
            }
          })

          const entite = {
            description: place.description,
            note: place.note,

            sensor_temp: place.sensor_temp || 0,
            sensor_humi: place.sensor_humi || 0,
            lim_temperature: place.lim_temperature,

            id_material: materialId,
            id_dimension: dimensionId,
            id_user: 1
          }

         await pool.query(`INSERT INTO places SET ?`, entite)
  
        } catch (error: any) {
            console.log(error)
            throw new Error(error)
        }
      }
  
}