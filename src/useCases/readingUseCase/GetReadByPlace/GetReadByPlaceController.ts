import { errorHandle, HttpRequest, HttpResponse, IController, ok } from '@/routeAdapter/HttpHandle'
import { GetReadByPlaceUseCase } from '@/useCases/readingUseCase/GetReadByPlace/GetReadByPlaceUseCase'
import { Request, Response } from 'express'

export class GetReadByPlaceController implements IController{
    constructor(
        private getReadByPlaceUseCase: GetReadByPlaceUseCase
    ){}

    async handle(req: HttpRequest): Promise<HttpResponse>{
        try {
            const id = req.params.place_id
            const response = await this.getReadByPlaceUseCase.GetReadByPlceId(id)

            return ok(response)

        } catch(error) {
            return errorHandle(error)
       }
    }
}