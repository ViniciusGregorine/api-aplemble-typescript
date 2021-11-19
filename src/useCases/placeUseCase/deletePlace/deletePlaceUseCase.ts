import { errorHelper, ErrorREST } from '@/domain/errors/errorRest'
import { IPlaceRepository } from '@/infra/repositories/contracts/IPlaceRepository'

export class DeletePlaceUseCase{
    constructor(
        private placesRepository: IPlaceRepository
    ){}

    async execute(description: string){
        const placeAlreadyExist = await this.placesRepository.findByDescription(description)
        if(!placeAlreadyExist) throw new ErrorREST(errorHelper.customBadRequest('place description does not exists'))

        try {
            await this.placesRepository.delete(description)
        } catch (error: any) {
            throw new Error(error)
        }
    }
}