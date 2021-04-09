import { RowDataPacket } from "mysql2";

export interface IInstitution extends RowDataPacket{
    id?: number

    name: string
    email: string
    password: string
    
    id_address: number
}