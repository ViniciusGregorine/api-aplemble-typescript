import { MysqlReadingRepository } from '@/repositories/implementation/MysqlReadingRepository'
import { ListReadingController } from '@/useCases/ListReading/ListReadingController'
import { ListReadingUseCase } from '@/useCases/ListReading/ListreadingUseCase'

const mysqlReadingRepository = new MysqlReadingRepository()

const listReadingUseCase = new ListReadingUseCase(mysqlReadingRepository)

const listReadingController = new ListReadingController(listReadingUseCase)

export  {listReadingController, listReadingUseCase}