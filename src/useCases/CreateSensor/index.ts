import { CreateSensorUseCase } from './CreateSensorUseCase'
import {MysqlSensorRepository} from '../../repositories/implementation/MysqlSensorRepository'
import { CreateSensorController } from './CreateSensorController'

const mysqlSensorRepository = new MysqlSensorRepository

const createSensorUseCase = new CreateSensorUseCase(mysqlSensorRepository)

const createSensorController = new CreateSensorController(createSensorUseCase)

export {createSensorController, createSensorUseCase}