import { ErrorREST } from "@/domain/errors/errorRest";
import { pool } from "../implementation/poolConnection";

export async function functionFindByDescription(table: string, description: string){
    try {
        const [rows] =  await pool.query<any>(
          `SELECT description FROM ${table}`, []);   

        const row = rows.find((element: any) => element.description === description)
      
        return row
      } catch (error: any) {
        console.log('faild to insert data:', error)
        throw new ErrorREST(error)
      }
}