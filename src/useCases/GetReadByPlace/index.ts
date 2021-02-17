import { MysqlReadingRepository } from '@/repositories/implementation/MysqlReadingRepository'
import { GetReadByPlaceController } from '@/useCases/GetReadByPlace/GetReadByPlaceController'
import { GetReadByPlaceUseCase } from '@/useCases/GetReadByPlace/GetReadByPlaceUseCase'


const mysqlReadingRepository = new MysqlReadingRepository()

const getReadByPlaceUseCase = new GetReadByPlaceUseCase(mysqlReadingRepository)

const getReadByPlaceController = new GetReadByPlaceController(getReadByPlaceUseCase)

export {getReadByPlaceUseCase, getReadByPlaceController}