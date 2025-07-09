import { Injectable } from '@nestjs/common'
import { KnexAdapter } from './knex.adapter'
import { DatabaseOperations } from './db.interface'

@Injectable()
export class DatabaseService {
  public constructor(public readonly client: KnexAdapter) {}
}
