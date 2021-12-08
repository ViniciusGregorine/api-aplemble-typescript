import { errorHandle, HttpRequest, HttpResponse, ok } from '@/utils/routeAdapter/HttpHandle'
import {ListSensorUseCase} from '@/useCases/sensorUseCases/ListSensor/ListSensorUseCase'

export class ListSensorController {
    constructor(
        private listSensorUseCase: ListSensorUseCase
    ){}

    async handle(req: HttpRequest): Promise<HttpResponse>{
        try {
            const response = await this.listSensorUseCase.list() 

            return ok(response)

        } catch (err: any) {
           return errorHandle(err)
        }
    }
}