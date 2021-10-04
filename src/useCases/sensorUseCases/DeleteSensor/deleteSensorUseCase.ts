import { ISensorsRepository } from '@/infra/repositories/contracts/ISensorsRepository'
import { IDeleteSensorDTO } from './IDeleteSensorDTO'

export class DeleteSensorUseCase{
    constructor(
        private sensorsRepository: ISensorsRepository
    ){}

    async execute(data: IDeleteSensorDTO){
        // const sensorAlreadyExist = await this.sensorsRepository.findByDescription(data.description)
    
        // if(!sensorAlreadyExist)  throw new Error

        await this.sensorsRepository.deleteSensor(data.description)
    }
}