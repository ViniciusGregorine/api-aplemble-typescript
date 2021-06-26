import { CreateSensorUseCase } from '@/useCases/sensorUseCases/CreateSensor/CreateSensorUseCase'
import {MysqlSensorRepository} from '@/infra/repositories/implementation/MysqlSensorRepository'
import { CreateSensorController } from '@/useCases/sensorUseCases/CreateSensor/createSensorController'

const mysqlSensorRepository = new MysqlSensorRepository

const createSensorUseCase = new CreateSensorUseCase(mysqlSensorRepository)

const createSensorController = new CreateSensorController(createSensorUseCase)

export { createSensorController, createSensorUseCase }