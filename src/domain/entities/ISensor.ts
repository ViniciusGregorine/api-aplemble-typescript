import { RowDataPacket } from "mysql2";

export interface ISensor extends RowDataPacket{
    id: number
    
    description: string
    device: number
    id_situation: number
    id_gap: number
}