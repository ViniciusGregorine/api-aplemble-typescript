import { ITypeReading } from "./IReading"

export class TypeReading {
    constructor(props: ITypeReading){
        Object.assign(this, props)
    }    

    id?: number

    description!: string
    min_value?: number
    max_value?: number 
    prefix!: string 
}