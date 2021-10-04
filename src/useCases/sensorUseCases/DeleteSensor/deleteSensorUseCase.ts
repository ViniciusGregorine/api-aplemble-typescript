import { errorHelper, ErrorREST } from '@/domain/errors/errorRest'
import { ISensorsRepository } from '@/infra/repositories/contracts/ISensorsRepository'
import { IDeleteSensorDTO } from './IDeleteSensorDTO'

export class DeleteSensorUseCase{
    constructor(
        private sensorsRepository: ISensorsRepository
    ){}

    async execute(data: IDeleteSensorDTO){
        const sensorAlreadyExist = await this.sensorsRepository.findByDescription(data.description)
    
        if(!sensorAlreadyExist)  throw new ErrorREST(errorHelper.notFound)

        await this.sensorsRepository.deleteSensor(data.description)
    }
}