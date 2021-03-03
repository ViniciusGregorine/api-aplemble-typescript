import { Request, Response } from 'express'
import { ListReadingUseCase } from '@/useCases/readingUseCase/ListReading/ListreadingUseCase'

export class ListReadingController{
    constructor (
        private listReadinguseCase: ListReadingUseCase
    ){}

    async handle(req: Request, res: Response){
        try {
            const response = await this.listReadinguseCase.ListAll()
            res.status(200).send(response)
        } catch (err) {
            return res.status(400).json({
                massege: err.massege || 'unexpect error from getting reading'
            })
        }
    }

}