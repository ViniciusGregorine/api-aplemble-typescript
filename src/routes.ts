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


routes.post('/sensor', adaptRoute(createSensorController))

routes.get('/sensor', adaptRoute(listSensorController))


routes.get('/reading', adaptRoute(listReadingController))

routes.get('/reading:place_id', adaptRoute(getReadByPlaceController))

export default routes
