import { Router } from 'express'
import { Request, Response } from 'express'
import { createSensorController } from './useCases/CreateSensor'


const routes = Router()


routes.get('/', (req: Request, res: Response) => {
    return res.status(201).send({massege: 'como vai amigo'})
})


routes.post('/sensor', (req, res) => {
    return createSensorController.handle(req, res);
  });

export default routes

