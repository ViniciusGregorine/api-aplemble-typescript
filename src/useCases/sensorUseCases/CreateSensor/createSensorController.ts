import { CreateSensorUseCase } from '@/useCases/sensorUseCases/CreateSensor/CreateSensorUseCase'

import { Request, Response} from 'express'


export class CreateSensorController {
    constructor(
        private createSensorUseCase: CreateSensorUseCase
    ){}

    async handle(req: Request, res: Response): Promise<Response>{
        if (!req.body)  res.status(400).json({ message: "Content can not be empty!" })
        
        const { description, device, id_situation, id_gap } = req.body
        console.log(req.body)
  
        try {
            await this.createSensorUseCase.execute({
                 description, device, id_situation, id_gap
            })
            return res.status(201).send({massege: 'sucessifuly sensor created'})

        } catch (err) {
            return res.status(400).json({
                massege: err || 'unexpect error'
            })
        }
    }
}