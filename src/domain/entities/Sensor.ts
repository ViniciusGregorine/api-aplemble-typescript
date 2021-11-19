 export class Sensor {
    public id?: string

    public description!: string
    public device!: number
    public id_situation!: number
    public id_gap!: number

    constructor(props: Sensor){
        Object.assign(this, props)
    }
}


