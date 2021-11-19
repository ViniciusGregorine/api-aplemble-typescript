import { RowDataPacket } from "mysql"
import { pool } from "../implementation/poolConnection"

interface TableInfo {
    targetTable: string
    tableColumns: any
}

interface rowResponse extends RowDataPacket {
    id: number
}

export async function foreignKeyManager({targetTable, tableColumns}: TableInfo): Promise<number>{
    let query = ""

    try {
        switch(targetTable){
            default:
                query = `SELECT id FROM ${targetTable} WHERE ?`
                break
            case 'dimensions':
                query = `SELECT id FROM ${targetTable} WHERE length='${tableColumns.length}' AND width='${tableColumns.width}' AND height ='${tableColumns.height}'`
                break
        }

        const [rows] = await pool.query<rowResponse[]>(query, tableColumns)
        
        let responseId = rows[0]

        if(!responseId) {
            await pool.query(`INSERT INTO ${targetTable} SET ?`, tableColumns)
            return (async () => await foreignKeyManager({targetTable: targetTable, tableColumns: tableColumns}))()
        }

        return responseId.id 
    }catch(error: any){
        throw new Error(error)
    } 
}