import { errorHandle, HttpResponse, IController, ok } from '@/routes/routeAdapter/HttpHandle'
import { ListPlaceUseCase } from '@/useCases/placeUseCase/listPlaces/ListPlaceUseCase'

export class ListPlaceControler implements IController{
    constructor(
        private listPlaceUseCase: ListPlaceUseCase
    ){}

    async handle(): Promise<HttpResponse>{
        try {
            const response = await this.listPlaceUseCase.listAll()
            return ok(response)

        } catch(error: any) {
            return errorHandle(error)
       }
    }
}