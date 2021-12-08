import { createPlaceController } from '@/useCases/placeUseCase/createPlace'
import { deletePlaceController } from '@/useCases/placeUseCase/deletePlace'
import { listPlaceController } from '@/useCases/placeUseCase/listPlaces'
import { adaptRoute } from '../../utils/routeAdapter/adapterRoute'

import { Router } from 'express'
import { authMiddleware } from '@/validation/authMiddleware'

const placeRoute = Router()


placeRoute.get('/place', adaptRoute(listPlaceController))

placeRoute.post('/place', authMiddleware, adaptRoute(createPlaceController))

placeRoute.delete('/place', authMiddleware,adaptRoute(deletePlaceController))

export default placeRoute