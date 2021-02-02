import { Router } from 'express'
import { createSensorController } from './useCases/CreateSensor'
import { listSensorController } from './useCases/ListSensor'


const routes = Router()


routes.get('/', (req, res) => {
    return res.status(201).send({massege: 'como vai amigo'})
})


routes.post('/sensor', (req, res) => {
    return createSensorController.handle(req, res);
  })

routes.get('/sensor', (req, res)=> {
  return listSensorController.handle(req, res);
})

export default routes

