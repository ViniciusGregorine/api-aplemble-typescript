import { MysqlSensorRepository } from '@/repositories/implementation/MysqlSensorRepository'
import { ListSensorUseCase } from '@/useCases/ListSensor/ListSensorUseCase'
import {ListSensorController} from '@/useCases/ListSensor/ListSensorController'

const mysqlSensorRepository = new MysqlSensorRepository()

const listSensorUseCase = new ListSensorUseCase(mysqlSensorRepository)

const listSensorController = new ListSensorController(listSensorUseCase)

export {listSensorController, listSensorUseCase}