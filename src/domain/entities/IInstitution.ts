import { RowDataPacket } from "mysql2";

export interface IInstitution extends RowDataPacket{
    id?: number

    email: string
    password: string
}