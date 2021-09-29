import {ok, errorHandle, HttpRequest, HttpResponse } from '@/routeAdapter/HttpHandle'
import { CreateSensorUseCase } from '@/useCases/sensorUseCases/CreateSensor/CreateSensorUseCase'


export class CreateSensorController {
    constructor(
        private createSensorUseCase: CreateSensorUseCase
    ){}

    async handle(req: HttpRequest): Promise<HttpResponse>{
        if (!req.body) errorHandle({message: 'content cannot be ampty', status: 400})
        
        const { description, device, id_situation, id_gap } = req.body
  
        try {
            await this.createSensorUseCase.execute({
                 description, device, id_situation, id_gap
            })
            return ok('sucessifuly sensor created')

        } catch (error: any) {
            return errorHandle(error)
        }
    }
}