import { pool } from '@/infra/repositories/implementation/poolConnection'
import { IInstitutionRepository } from '@/infra/repositories/contracts/IInstitutionRepository'
import { IInstitution } from '@/domain/entities/IInstitution';
import { ErrorREST } from '@/domain/errors/errorRest';

export class MysqlInstitutionRepository implements IInstitutionRepository{
    async save(institution: IInstitution): Promise<any> {
      try {
        await pool.query(`INSERT INTO users SET ?`, institution);

      } catch (error) {
          console.log(error)
          throw new Error 

      }
    }

    async findByEmail(description: string): Promise<any> {
      try {

        const [rows] =  await pool.query<IInstitution[]>(
          "SELECT email FROM users", []);   

        const row = rows.find(Element => Element.email === description)
        console.log(row)
        return row
        
      } catch (error: any) {
        console.log('faild to find email:', error)
        throw new ErrorREST(error)

      }
    }
    
    async getAllInstitution(): Promise<any>  {
      try {

        const [rows] =  await pool.query<IInstitution[]>(
          "SELECT * FROM users", []);  
    
      return rows

      } catch (error: any) {
        console.log('faild to insert data: ', error)
        throw new ErrorREST(error)

      }
    }
}
