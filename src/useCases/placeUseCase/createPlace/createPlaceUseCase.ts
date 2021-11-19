import { Place } from '@/domain/entities/Place'
import { errorHelper, ErrorREST } from '@/domain/errors/errorRest'
import { IPlaceRepository } from '@/infra/repositories/contracts/IPlaceRepository'

export class CreatePlaceUseCase{
    constructor(
        private placeRepository: IPlaceRepository
    ){}

    async execute(data: Place){
        const placeAlreadyExist = await this.placeRepository.findByDescription(data.description)
        if(placeAlreadyExist)  throw new ErrorREST(errorHelper.duplicate('description'))

        const place = new Place(data)
        await this.placeRepository.save(place)
    }
}