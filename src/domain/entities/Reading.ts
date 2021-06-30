export class Reading {
    public id!: number

    public date?: string
    public hour?: number
    public value_humidity?: number
    public value_temperature?: number
    public id_place!: number
    public id_sensor!: number  

    constructor(props: Omit<Reading, 'id'>, id?: string){
      Object.assign(this, props)
    }
}