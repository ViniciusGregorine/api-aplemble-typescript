import { MysqlPlaceRepository } from "@/infra/repositories/implementation/MysqlPlaceRepository";
import { DeletePlaceController } from "./deletePlaceController";
import { DeletePlaceUseCase } from "./deletePlaceUseCase";

const mysqlPlaceRepo = new MysqlPlaceRepository()

const deletePlaceUseCase = new DeletePlaceUseCase(mysqlPlaceRepo)

export const deletePlaceController = new DeletePlaceController(deletePlaceUseCase) 