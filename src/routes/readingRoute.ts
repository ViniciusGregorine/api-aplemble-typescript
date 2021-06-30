import { Router } from 'express'
import { getReadByPlaceController } from '@/useCases/readingUseCase/GetReadByPlace'
import { listReadingController } from '@/useCases/readingUseCase/ListReading'
import { adaptRoute } from '../routeAdapter/adapterRoute'
import { insertReadingController } from '@/useCases/readingUseCase/insertReading'

const readingRoutes = Router()

readingRoutes.get('/reading', adaptRoute(listReadingController))

readingRoutes.get('/reading:place_id', adaptRoute(getReadByPlaceController))

readingRoutes.post('/reading', adaptRoute(insertReadingController))

export default readingRoutes