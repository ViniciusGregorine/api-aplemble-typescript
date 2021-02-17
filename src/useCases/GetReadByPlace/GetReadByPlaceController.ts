import { GetReadByPlaceUseCase } from '@/useCases/GetReadByPlace/GetReadByPlaceUseCase'
import { Request, Response } from 'express'

export class GetReadByPlaceController {
    constructor(
        private getReadByPlaceUseCase: GetReadByPlaceUseCase
    ){}

    async handle(req: Request, res: Response){
        try {
            const id = req.params.place_id
            const response = await this.getReadByPlaceUseCase.GetReadByPlceId(id)

            return res.status(200).send(response)

        } catch {
            throw new Error
       }
    }
}