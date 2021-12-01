import {ok, errorHandle, HttpRequest, HttpResponse } from '@/routeAdapter/HttpHandle'
import { requiredParams } from '@/utils/requireParams'


export class DeleteTypeReadingController {
    constructor(
        private deleteSensroUseCase: any
    ){}

    async handle(req: HttpRequest): Promise<HttpResponse>{
        const error = requiredParams(['description'], req)
        if(error) return errorHandle(error.response)

        try {
            await this.deleteSensroUseCase.execute({description: req.body.description})
            return ok('deleted')
            
        } catch (error: any) {
            return errorHandle(error.response)
        }
    }
}