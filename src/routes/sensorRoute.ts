import { Router } from 'express'
import { createSensorController } from '@/useCases/sensorUseCases/CreateSensor'
import { listSensorController } from '@/useCases/sensorUseCases/ListSensor'
import { adaptRoute } from '../routeAdapter/adapterRoute'

const sensorRoutes = Router()

sensorRoutes.post('/sensor', adaptRoute(createSensorController))

sensorRoutes.get('/sensor', adaptRoute(listSensorController))

export default sensorRoutes