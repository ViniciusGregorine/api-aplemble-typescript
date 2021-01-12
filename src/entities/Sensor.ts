 export class Sensor {
    public id!: string

    public description!: string
    public device!: number
    public id_situation!: number
    public id_gap!: number

    constructor(props: Omit<Sensor, 'id'>, id?: string){
        Object.assign(this, props)
    }
}


