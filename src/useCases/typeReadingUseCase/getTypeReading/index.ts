import { MysqlReadingRepository } from '@/infra/repositories/implementation/MysqlReadingRepository'
import { ListTypeReadingController } from './listTypeReadingController'
import { ListTypeReadingUseCase } from './listTypeReadingUseCase'

const mysqlReadingRepository = new MysqlReadingRepository()

const listTypeReadingUseCase = new ListTypeReadingUseCase(mysqlReadingRepository)

const listTypeReadingController = new ListTypeReadingController(listTypeReadingUseCase)

export  {listTypeReadingController, listTypeReadingUseCase}