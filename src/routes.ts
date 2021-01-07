import { Router } from 'express'
import { Request, Response } from 'express'

const routes = Router()


routes.get('/', (req: Request, res: Response) => {
    return res.status(201).send({massege: 'como vai amigo'})
})

export default routes

