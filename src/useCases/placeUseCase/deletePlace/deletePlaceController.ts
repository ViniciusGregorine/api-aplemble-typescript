import {ok, errorHandle, HttpRequest, HttpResponse } from '@/utils/routeAdapter/HttpHandle'
import { requiredParams } from '@/utils/requireParams'
import { DeletePlaceUseCase } from './deletePlaceUseCase'



export class DeletePlaceController {
    constructor(
        private deleteplaceUseCase: DeletePlaceUseCase
    ){}

    async handle(req: HttpRequest): Promise<HttpResponse>{

        const error = requiredParams(['description'], req)
        if(error) return errorHandle(error.response)

        const placeDescription = req.query.description

        try {
            await this.deleteplaceUseCase.execute(placeDescription)
            return ok('deleted')
            
        } catch (error: any) {
            return errorHandle(error.response)
        }
    }
}