 export class Sensor {
    public id!: string

    public description!: string
    public device!: number
    public situation!: string
    public gap!: string

    constructor(props: Omit<Sensor, 'id'>, id?: string){
        Object.assign(this, props)
    }
}


