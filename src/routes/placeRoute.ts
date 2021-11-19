import { createPlaceController } from '@/useCases/placeUseCase/createPlace'
import { deletePlaceController } from '@/useCases/placeUseCase/deletePlace'
import { listPlaceController } from '@/useCases/placeUseCase/listPlaces'
import { adaptRoute } from '../routeAdapter/adapterRoute'

import { Router } from 'express'

const placeRoute = Router()


placeRoute.get('/place', adaptRoute(listPlaceController))


placeRoute.post('/place', adaptRoute(createPlaceController))

placeRoute.delete('/place', adaptRoute(deletePlaceController))

export default placeRoute