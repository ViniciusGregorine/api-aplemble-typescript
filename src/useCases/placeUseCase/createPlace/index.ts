import { MysqlPlaceRepository } from "@/infra/repositories/implementation/MysqlPlaceRepository";
import { CreatePlaceController } from "./createPlaceController";
import { CreatePlaceUseCase } from "./createPlaceUseCase";

const mysqlPlaceRepo = new MysqlPlaceRepository()

const createPlaceUseCase = new CreatePlaceUseCase(mysqlPlaceRepo)

export const createPlaceController = new CreatePlaceController(createPlaceUseCase) 