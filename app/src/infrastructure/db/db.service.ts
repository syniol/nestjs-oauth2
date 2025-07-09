import { Injectable } from '@nestjs/common'
import { KnexAdapter } from './knex.adapter'

@Injectable()
export class DatabaseService {
  public constructor(public readonly client: KnexAdapter) {}
}
