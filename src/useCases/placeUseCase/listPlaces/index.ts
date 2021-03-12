import { MysqlPlaceRepository } from "@/repositories/implementation/MysqlPlaceRepository";
import  {ListPlaceControler} from '@/useCases/placeUseCase/listPlaces/listPlacesController' 
import { ListPlaceUseCase } from "./ListPlaceUseCase";

const mysqlPlaceRepository = new MysqlPlaceRepository()

const listPlacesUseCase = new ListPlaceUseCase(mysqlPlaceRepository)

const listPlaceController = new ListPlaceControler(listPlacesUseCase)

export {listPlaceController}