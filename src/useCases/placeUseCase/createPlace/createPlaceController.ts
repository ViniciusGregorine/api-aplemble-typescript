import {ok, errorHandle, HttpRequest, HttpResponse } from '@/routeAdapter/HttpHandle'
import { requiredParams } from '@/utils/requireParams'
import { CreatePlaceUseCase } from './createPlaceUseCase'


export class CreatePlaceController {
    constructor(
        private createPlaceUseCase: CreatePlaceUseCase
    ){}

    async handle(req: HttpRequest): Promise<HttpResponse>{
        if (!req.body) errorHandle({message: 'content cannot be ampty', status: 400})
        
        const error = requiredParams(['description', 'material', 'height','width'], req) 
        if(error) return errorHandle(error.response)

        const place = req.body
  
        try {
            await this.createPlaceUseCase.execute(place)
            return ok('sucessifuly Place created')

        } catch (error: any) {
            return errorHandle(error.response)
        }
    }
}