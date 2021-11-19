import { Sensor } from '@/domain/entities/Sensor'
import { errorHelper, ErrorREST } from '@/domain/errors/errorRest'
import { ISensorsRepository } from '@/infra/repositories/contracts/ISensorsRepository'


export class CreateSensorUseCase{
    constructor(
        private sensorsRepository: ISensorsRepository
    ){}

    async execute(data: Sensor){
        const sensorAlreadyExist = await this.sensorsRepository.findByDescription(data.description)

        if(sensorAlreadyExist)  throw new ErrorREST(errorHelper.duplicate('description'))

        const sensor = new Sensor(data)
        await this.sensorsRepository.save(sensor)
    }
}