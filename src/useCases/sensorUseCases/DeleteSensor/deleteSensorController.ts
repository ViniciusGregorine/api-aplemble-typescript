import {ok, errorHandle, HttpRequest, HttpResponse } from '@/routes/routeAdapter/HttpHandle'
import { requiredParams } from '@/utils/requireParams'
import { DeleteSensorUseCase } from './deleteSensorUseCase'
import { IDeleteSensorDTO } from './IDeleteSensorDTO'


export class DeleteSensorController {
    constructor(
        private deleteSensroUseCase: DeleteSensorUseCase
    ){}

    async handle(req: HttpRequest): Promise<HttpResponse>{

        const error = requiredParams(['description'], req)
        if(error) return errorHandle(error.response)

        const sensorToDelete: IDeleteSensorDTO = {
            id: req.query.id,
            description: req.query.description 
        }

        try {
            await this.deleteSensroUseCase.execute(sensorToDelete)
            return ok('deleted')
            
        } catch (error: any) {
            return errorHandle(error.response)
        }
    }
}