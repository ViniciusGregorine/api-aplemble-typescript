import { listPlaceController } from '@/useCases/placeUseCase/listPlaces'
import { Router } from 'express'
import { adaptRoute } from '../routeAdapter/adapterRoute'

const placeRoute = Router()


placeRoute.get('/place', adaptRoute(listPlaceController))

export default placeRoute