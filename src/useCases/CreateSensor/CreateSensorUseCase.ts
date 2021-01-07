import { Sensor } from "../../entities/Sensor";
import { ISensorsRepository } from "../../repositories/ISensorsRepository";
import { ICreateSensorDTO } from "./createSensorDTO";

export class CreateSensorUseCase{
    constructor(
        private sensorsRepository: ISensorsRepository
    ){}

    async execute(data: ICreateSensorDTO){
        const sensorAlreadyExist = await this.sensorsRepository.findByType(data.descption)

        if(sensorAlreadyExist) throw new Error('sensor already exists.')

        const sensor = new Sensor(data)

        await this.sensorsRepository.save(sensor)
    }
}