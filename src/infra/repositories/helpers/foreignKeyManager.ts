import { pool } from "../implementation/poolConnection"

interface TableInfo {
    targetTable: string
    tableColumns: any
}


export async function foreignKeyManager({targetTable, tableColumns}: TableInfo): Promise<number>{
    try {
        let query = ""

        switch(targetTable){
            default:
                query = `SELECT id FROM ${targetTable} WHERE ?`
                break
            case 'dimensions':
                query = `SELECT id FROM ${targetTable} WHERE ${tableColumns.length} AND ${tableColumns.width} AND ${tableColumns.height}`
                break
        }

        const [rows] = await pool.query<any>(query, tableColumns)
        let ResponseId = rows[0]

        if(!ResponseId) {
          await pool.query<any>(`INSERT INTO ${targetTable} SET ?`, tableColumns)

          foreignKeyManager({targetTable: targetTable, tableColumns: tableColumns})
        } 
        
        return ResponseId.id
    }catch(error: any){
        throw new Error(error)
    }
}