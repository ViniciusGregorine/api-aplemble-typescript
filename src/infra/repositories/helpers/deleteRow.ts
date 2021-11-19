import { pool } from "../implementation/poolConnection"

export async function deleteFunction (table: string, description: string){
    try {
        await pool.query(`DELETE FROM ${table} WHERE description=${description}`) 
    } catch (error: any) {
        console.log(error)
        throw new Error(error) 
    }
}