import { Request, Response } from 'express'
import { ListReadingUseCase } from '@/useCases/readingUseCase/ListReading/ListreadingUseCase'
import { HttpResponse, IController, HttpRequest, ok, errorHandle } from '@/routeAdapter/controller'

export class ListReadingController implements IController{
    constructor (
        private listReadinguseCase: ListReadingUseCase
    ){}

    async handle(req: HttpRequest): Promise<HttpResponse>{
        try {
            const response = await this.listReadinguseCase.ListAll()
            return ok(response)
        } catch (err) {
            return errorHandle(err)
        }
    }

}