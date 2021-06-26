import { MysqlSensorRepository } from '@/infra/repositories/implementation/MysqlSensorRepository'
import { ListSensorUseCase } from '@/useCases/sensorUseCases/ListSensor/ListSensorUseCase'
import {ListSensorController} from '@/useCases/sensorUseCases/ListSensor/ListSensorController'

const mysqlSensorRepository = new MysqlSensorRepository()

const listSensorUseCase = new ListSensorUseCase(mysqlSensorRepository)

const listSensorController = new ListSensorController(listSensorUseCase)

export {listSensorController, listSensorUseCase}