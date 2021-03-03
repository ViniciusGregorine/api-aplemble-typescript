import { Sensor } from '@/entities/Sensor'
import { ISensorsRepository } from '@/repositories/contracts/ISensorsRepository'
import { ICreateSensorDTO } from '@/useCases/sensorUseCases/CreateSensor/ICreateSensorDTO'

export class CreateSensorUseCase{
    constructor(
        private sensorsRepository: ISensorsRepository
    ){}

    async execute(data: ICreateSensorDTO){
       const sensorAlreadyExist = await this.sensorsRepository.findByDescription(data.description)

        if(sensorAlreadyExist)  throw new Error

       const sensor = new Sensor(data)
        await this.sensorsRepository.save(sensor)
    }
}