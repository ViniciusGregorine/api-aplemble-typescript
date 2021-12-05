import { Router } from 'express'

import { getReadByPlaceController } from '@/useCases/readingUseCase/GetReadByPlace'
import { listReadingController } from '@/useCases/readingUseCase/ListReading'
import { adaptRoute } from './routeAdapter/adapterRoute'
import { insertReadingController } from '@/useCases/readingUseCase/insertReading'
import { listTypeReadingController } from '@/useCases/typeReadingUseCase/getTypeReading'
import { typeReadingController } from '@/useCases/typeReadingUseCase/DeleteTypeReading'
import { createTypeReadingController } from '@/useCases/typeReadingUseCase/createTypeReading'
import { authMiddleware } from '@/validation/authMiddleware'

const readingRoutes = Router()

readingRoutes.get('/reading', adaptRoute(listReadingController))

readingRoutes.get('/readingByPlaceId:place_id', adaptRoute(getReadByPlaceController))


readingRoutes.post('/reading', authMiddleware,adaptRoute(insertReadingController))

readingRoutes.get('/type-reading', adaptRoute(listTypeReadingController))

readingRoutes.delete('/type-reading', authMiddleware,adaptRoute(typeReadingController))

readingRoutes.post('/type-reading', authMiddleware,adaptRoute(createTypeReadingController))

export default readingRoutes