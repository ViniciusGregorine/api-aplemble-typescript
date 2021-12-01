import { ITypeReading } from '@/domain/entities/IReading'
import { TypeReading } from '@/domain/entities/typeReading'
import { errorHelper, ErrorREST } from '@/domain/errors/errorRest'
import { IReadingRepository } from '@/infra/repositories/contracts/IReadingRepository'

export class CreateTypeReadingUseCase{
    constructor(
        private typeReadingRepository: IReadingRepository
    ){}

    async execute(data: ITypeReading){
        const placeAlreadyExist = await this.typeReadingRepository.findTypeReadingByDescription(data.description)
        if(placeAlreadyExist)  throw new ErrorREST(errorHelper.duplicate('description'))

        const typeReading = new TypeReading(data)
        await this.typeReadingRepository.saveTypeReading(typeReading)
    }
}