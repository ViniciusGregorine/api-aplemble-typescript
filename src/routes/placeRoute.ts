import { MysqlPlaceRepository } from '@/infra/repositories/implementation/MysqlPlaceRepository'
import { MysqlRecycleRepository } from '@/infra/repositories/implementation/MysqlRecycleRepository'
import { createPlaceController } from '@/useCases/placeUseCase/createPlace'
import { listPlaceController } from '@/useCases/placeUseCase/listPlaces'
import { Router, Request, Response } from 'express'
import { adaptRoute } from '../routeAdapter/adapterRoute'

const placeRoute = Router()


placeRoute.get('/place', adaptRoute(listPlaceController))


placeRoute.post('/place', adaptRoute(createPlaceController))

export default placeRoute