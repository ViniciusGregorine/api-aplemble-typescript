import { errorHelper, ErrorREST } from '@/domain/errors/errorRest'
import { IReadingRepository } from '@/infra/repositories/contracts/IReadingRepository'

export class DeleteTypeReadingUseCase{
    constructor(
        private typeReadingRepository: IReadingRepository 
    ){}

    async execute(data: {description: string}){
        const typeReadingAlreadyExist = await this.typeReadingRepository.findTypeReadingByDescription(data.description)
        if(!typeReadingAlreadyExist)  throw new ErrorREST(errorHelper.notFound)
        
        await this.typeReadingRepository.deleteTypeReading(data.description)
    }
}