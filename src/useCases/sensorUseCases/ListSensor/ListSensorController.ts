import { errorHandle, HttpRequest, HttpResponse, ok } from '@/routeAdapter/HttpHandle'
import {ListSensorUseCase} from '@/useCases/sensorUseCases/ListSensor/ListSensorUseCase'
import { Request, Response} from 'express'

export class ListSensorController {
    constructor(
        private listSensorUseCase: ListSensorUseCase
    ){}

    async handle(req: HttpRequest): Promise<HttpResponse>{
        try {
            const response = await this.listSensorUseCase.list() 

            return ok(response)

        } catch (err) {
           return errorHandle(err)
        }
    }
}