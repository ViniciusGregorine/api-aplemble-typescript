import { Router } from 'express'
import { createSensorController } from '@/useCases/sensorUseCases/CreateSensor'
import { getReadByPlaceController } from '@/useCases/readingUseCase/GetReadByPlace'
import { listReadingController } from '@/useCases/readingUseCase/ListReading'
import { listSensorController } from '@/useCases/sensorUseCases/ListSensor'
import { adaptRoute } from './routeAdapter/adapterRoute'


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


routes.get('/reading', adaptRoute(listReadingController))

routes.get('/reading:place_id', (req, res)=> {
  return getReadByPlaceController.handle(req, res);
})

export default routes
