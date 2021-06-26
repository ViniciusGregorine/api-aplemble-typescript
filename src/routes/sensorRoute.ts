import  {Router,} from 'express'
import { createSensorController } from '@/useCases/sensorUseCases/CreateSensor'
import { listSensorController } from '@/useCases/sensorUseCases/ListSensor'
import { adaptRoute } from '../routeAdapter/adapterRoute'
import { authMiddleware } from '@/validation/authMiddleware'

const sensorRoutes = Router()


sensorRoutes.post('/sensor', authMiddleware, adaptRoute(createSensorController))

sensorRoutes.get('/sensor', authMiddleware, adaptRoute(listSensorController))

export default sensorRoutes