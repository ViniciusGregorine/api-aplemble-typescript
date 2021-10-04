import { MysqlSensorRepository } from "@/infra/repositories/implementation/MysqlSensorRepository";
import { DeleteSensorController } from "./deleteSensorController";
import { DeleteSensorUseCase } from "./deleteSensorUseCase";


const mysqlSensorRepository = new MysqlSensorRepository()

const deleteSensorUseCase = new DeleteSensorUseCase(mysqlSensorRepository)

export const deleteSensorController  = new DeleteSensorController(deleteSensorUseCase)