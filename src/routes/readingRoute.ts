import { Router } from 'express'
import { getReadByPlaceController } from '@/useCases/readingUseCase/GetReadByPlace'
import { listReadingController } from '@/useCases/readingUseCase/ListReading'
import { adaptRoute } from '../routeAdapter/adapterRoute'

const readingRoutes = Router()

readingRoutes.get('/reading', adaptRoute(listReadingController))

readingRoutes.get('/reading:place_id', adaptRoute(getReadByPlaceController))

export default readingRoutes