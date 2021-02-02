import { MysqlSensorRepository } from '../../repositories/implementation/MysqlSensorRepository';
import { ListSensorUseCase } from "./ListSensorUseCase";
import {ListSensorController} from "./ListSensorController"

const mysqlSensorRepository = new MysqlSensorRepository()

const listSensorUseCase = new ListSensorUseCase(mysqlSensorRepository)

const listSensorController = new ListSensorController(listSensorUseCase)

export {listSensorController, listSensorUseCase}