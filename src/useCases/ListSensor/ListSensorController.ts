import {ListSensorUseCase} from '@/useCases/ListSensor/ListSensorUseCase'
import { Request, Response} from 'express'

export class ListSensorController {
    constructor(
        private listSensorUseCase: ListSensorUseCase
    ){}

    async handle(req: Request, res: Response): Promise<Response>{
        try {
            // const data = 

            return res.status(201).send(await this.listSensorUseCase.execute())

        } catch (err) {
            return res.status(400).json({
                massege: err.massege || 'unexpect error'
            })
        }
    }
}