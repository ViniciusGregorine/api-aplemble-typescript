import { Router } from 'express'
import { getReadByPlaceController } from '@/useCases/readingUseCase/GetReadByPlace'
import { listReadingController } from '@/useCases/readingUseCase/ListReading'
import { adaptRoute } from '../routeAdapter/adapterRoute'
import { insertReadingController } from '@/useCases/readingUseCase/insertReading'
import { listTypeReadingController } from '@/useCases/typeReadingUseCase/getTypeReading'

const readingRoutes = Router()

readingRoutes.get('/reading', adaptRoute(listReadingController))

readingRoutes.get('/reading:place_id', adaptRoute(getReadByPlaceController))

readingRoutes.get('/type-reading', adaptRoute(listTypeReadingController))

readingRoutes.post('/reading', adaptRoute(insertReadingController))



export default readingRoutes