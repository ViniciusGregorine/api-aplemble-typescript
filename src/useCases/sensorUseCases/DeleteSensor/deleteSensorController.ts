import {ok, errorHandle, HttpRequest, HttpResponse } from '@/routeAdapter/HttpHandle'
import { DeleteSensorUseCase } from './deleteSensorUseCase'
import { IDeleteSensorDTO } from './IDeleteSensorDTO'


export class DeleteSensorController {
    constructor(
        private deleteSensroUseCase: DeleteSensorUseCase
    ){}

    async handle(req: HttpRequest): Promise<HttpResponse>{
        // if (!req.body) errorHandle({message: 'content cannot be ampty', status: 400})
        
        // const { description, device, id_situation, id_gap } = req.body
        // console.log(req.body)

        const useDescription: IDeleteSensorDTO = req.query.id
        try {
            await this.deleteSensroUseCase.execute(useDescription)
            return ok('deleted')
            
             } catch (error: any) {
            return errorHandle(error)
        }
    }
}