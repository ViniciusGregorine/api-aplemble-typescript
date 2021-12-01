import {ok, errorHandle, HttpRequest, HttpResponse } from '@/routeAdapter/HttpHandle'
import { requiredParams } from '@/utils/requireParams'
import { CreateTypeReadingUseCase } from './createTypeReadingUseCase'


export class CreateTypeReadingController {
    constructor(
        private createTypeReadingUseCase: CreateTypeReadingUseCase
    ){}

    async handle(req: HttpRequest): Promise<HttpResponse>{
        if (!req.body) errorHandle({message: 'content cannot be ampty', status: 400})
        
        const error = requiredParams(['description', 'prefix'], req) 
        if(error) return errorHandle(error.response)

        const place = req.body
  
        try {
            await this.createTypeReadingUseCase.execute(place)
            return ok('sucessifuly Place created')

        } catch (error: any) {
            return errorHandle(error.response)
        }
    }
}