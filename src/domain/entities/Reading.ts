import { ReadingEntity } from "./IReading"


export class Reading implements ReadingEntity {
    public id!: number

    public value!: number | number[]
    public date?: string
    public hour?: string
    public id_place!: number
    public id_sensor!: number  
    public id_type_reading!: number
    public name?: string

    constructor(props: Omit<Reading, 'id'>, id?: string){
      Object.assign(this, props)
    }
}